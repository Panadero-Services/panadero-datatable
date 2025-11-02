// socket-server.js
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables first

import { Server } from 'socket.io';
import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import { 
    areShipsColliding, 
    handleShipCollisionBounce,
    handleSafeZoneBounce,
    checkCollectibleCollision,
    checkPathCollision,
    isInRange,
    checkAllShipCollisions,
    checkAllCollectibleCollisions
} from '../shared/collision.js';
import { CHAT_TYPES, formatMessage, createSystemMessage } from '../shared/chat.js';
import { MOVEMENT_CONFIG, SHIP_CONFIGS } from '../shared/movementConfig.js';
import { getShipMovementConfig } from '../shared/movementConfig.js';
import { GAME_CONFIG } from '../shared/gameConfig.js';
import { 
    COLLECTIBLE_TYPES, 
    getRandomCollectibleType, 
    getRandomCollectiblePosition,
    FIELD_CONFIG,
    isValidFieldPosition,
    createOrUpdateField,
    spawnCollectibleInField,
    scheduleNextSpawn,
    checkStreak,
    calculatePoints,
    collectItem
} from '../shared/collectibles.js';
import { calculateBorderForce } from '../shared/movementConfig.js';
import { parseHelpCommand } from '../shared/helpSystem.js';

// Import all composables
import { usePlayerManagement } from './composables/usePlayerManagement.js';
import { useBulletManagement } from './composables/useBulletManagement.js';
import { useGameStateManagement } from './composables/useGameStateManagement.js';
import { useMasterServerCommunication } from './composables/useMasterServerCommunication.js';
import { useCollisionDetection } from './composables/useCollisionDetection.js';
import { useScoreManagement } from './composables/useScoreManagement.js';
import { useExternalConnections } from './composables/useExternalConnections.js';

// Environment variables
const MASTER_SERVER_URL = process.env.MASTER_SERVER_URL;
const GAME_SERVER_ID = process.env.GAME_SERVER_ID;
const PORT = process.env.GAME_SERVER_PORT;

// Debug environment variables
console.log('Environment variables loaded:');
console.log('MASTER_SERVER_URL:', MASTER_SERVER_URL);
console.log('GAME_SERVER_ID:', GAME_SERVER_ID);
console.log('GAME_SERVER_PORT:', PORT);

const app = express();

// Game constants
const TICK_RATE = 60;  // Physics updates per second
const HOME_Y_RANGE = { MIN: 5, MAX: 50 };
const HOME_X_RANGE = { MIN: 0, MAX: 1000 };
const HOME_BOX_SIZE = 600; // Much larger box size
const VISIBILITY_RANGE = 1000; // Keep this the same or adjust as needed
const COLLECTIBLE_SPAWN_TIME = {
    MIN: 500,
    MAX: 600
};

// Generate a new home position when needed
const generateNewHomePosition = (existingPositions) => {
    const y = Math.floor(Math.random() * (HOME_Y_RANGE.MAX - HOME_Y_RANGE.MIN)) + HOME_Y_RANGE.MIN;
    let x;
    
    do {
        x = Math.floor(Math.random() * (HOME_X_RANGE.MAX - HOME_X_RANGE.MIN)) + HOME_X_RANGE.MIN;
    } while (existingPositions.some(pos => Math.abs(pos.x - x) < 100)); // Ensure some minimum spacing

    return { x, y };
};

// Initialize all composables
const playerManagement = usePlayerManagement();
const bulletManagement = useBulletManagement();
const gameStateManagement = useGameStateManagement();
const masterServerCommunication = useMasterServerCommunication();
const collisionDetection = useCollisionDetection();
const scoreManagement = useScoreManagement();
const externalConnections = useExternalConnections();

// Game state using composables
const gameState = {
    players: playerManagement.players,
    homePositions: playerManagement.homePositions,
    bullets: bulletManagement.bullets,
    collectibles: gameStateManagement.gameState.collectibles,
    lastUpdate: Date.now()
};

// Main game loop
function gameLoop() {
    const currentTime = Date.now();
    const deltaTime = currentTime - gameState.lastUpdate;
    gameState.lastUpdate = currentTime;

    // Update all players using the composable
    for (const [id, player] of gameState.players) {
        if (player && player.ship) {
            player.ship.update(deltaTime, (playerId, ship) => {
                return collisionDetection.updateShipPosition(playerId, ship, gameState.homePositions, gameState.players);
            });
        }
    }

    // Update bullets using the composable
    bulletManagement.updateBullets(gameState.players, (x, y) => {
        return collisionDetection.isInSafeZone(x, y, null, gameState.homePositions);
    });

    // Check ship-to-ship collisions with bouncing using composable
    collisionDetection.checkShipCollisions(gameState.players, (playerId, collisionData) => {
        io.to(playerId).emit('collision', collisionData);
    });

    // Check collectible collisions using composable
    collisionDetection.checkCollectibleCollisions(gameState.players, gameState.collectibles, (playerId, result, collectible) => {
        const player = gameState.players.get(playerId);
        const playerName = player?.name || `Player_${playerId.substring(0, 8)}`;
        
        console.log(`Player ${playerName} collected ${collectible.type}:`, result);
        
        if (player) {
            const currentResources = player.resources || { gold: 0, water: 0, kryptonite: 0 };
            const currentScore = player.score || 0;
            
            currentResources[collectible.type] = (currentResources[collectible.type] || 0) + 1;
            const newScore = currentScore + result.total;
            
            player.resources = currentResources;
            player.score = newScore;
            
            externalConnections.updateSharedPlayerState(playerName, {
                name: playerName,
                resources: currentResources,
                score: newScore
            }).then(success => {
                if (success) {
                    console.log(`Updated SSOT for ${playerName}:`, { resources: currentResources, score: newScore });
                } else {
                    console.error(`Failed to update SSOT for ${playerName}`);
                }
            });
        }
        
        io.to(playerId).emit('collectible_collected', result);
    }, collectItem);

    // Send game state to players
    for (const [playerId, player] of gameState.players) {
        if (!player || !player.ship) continue;
        
        const playerShip = player.ship;
        
        // Use composable to get visible homes
        const visibleHomes = collisionDetection.getVisibleObjects(playerShip.x, playerShip.y, gameState.homePositions);
        for (const [homeId, home] of Object.entries(visibleHomes)) {
            visibleHomes[homeId] = {
                ...home,
                color: gameState.players.get(homeId)?.ship?.color
            };
        }

        // Use the composable to get visible collectibles
        const visibleCollectibles = gameStateManagement.getVisibleCollectibles(playerShip.x, playerShip.y);

        // Use the composable to get visible black holes
        const visibleBlackHoles = gameStateManagement.getVisibleBlackHoles(playerShip.x, playerShip.y);

        const playerGameState = {
            players: Object.fromEntries(
                Array.from(gameState.players.entries())
                    .filter(([_, p]) => p && p.ship)
                    .map(([id, p]) => [id, p.ship.getState()])
            ),
            homePositions: visibleHomes,
            collectibles: visibleCollectibles,
            bullets: Array.from(bulletManagement.getBullets().values())
                .filter(bullet => collisionDetection.getVisibleObjects(playerShip.x, playerShip.y, new Map([[bullet.id, bullet]]))[bullet.id]),
            blackHoles: visibleBlackHoles,
            status: 'running'
        };
        
        // Add this debug log (but only log once every 5 seconds to avoid spam)
        if (Date.now() % 5000 < 16) {
            console.log('Sending game state with black holes:', 
                JSON.stringify(playerGameState.blackHoles));
        }
        io.to(playerId).emit('game_state', playerGameState);
    }
}

// Start game loop
setInterval(gameLoop, 1000 / TICK_RATE);

// Schedule next collectible spawn
gameStateManagement.scheduleNextCollectibleSpawn((newCollectible) => {
    // Optional: Add server-specific logic here
});

// Initialize the game state management
gameStateManagement.initialize();

const ALLOWED_CORS_ORIGINS = [
            "https://self-api.com" ,
            "https://self-api.com:3001", 
            "https://self-api.com/game1",  // Add this new line
            "http://localhost:3000", 
            "http://localhost:8000", 
            "http://localhost:5173", 
            "http://127.0.0.1:8000", 
            "http://84.80.133.32:3000",
            "http://84.80.133.32:3001",
            "http://84.80.133.32:8000",
            "http://192.168.2.20:8000"
        ];

// CORS configuration
app.use(cors({
    origin: ALLOWED_CORS_ORIGINS,
  //  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    methods: ["GET", "POST"],
    credentials: true
}));

const httpServer = createServer(app);

// Socket.IO configuration
const io = new Server(httpServer, {
    cors: {
        origin: ALLOWED_CORS_ORIGINS,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
        credentials: true,
        transports: ['websocket', 'polling']
    },
    pingTimeout: 60000,
    pingInterval: 25000
});

// Debug middleware
io.use((socket, next) => {
    console.log('Connection attempt from:', socket.handshake.headers.origin);
    console.log('Transport:', socket.conn.transport.name);
    next();
});

// Enhanced player count function
const getActivePlayerCount = () => {
    const count = playerManagement.getPlayerCount();
    console.log(`Active players: ${count}`);
    return count;
};

// Socket connection handler
io.on('connection', (socket) => {
    console.log('Player connected:', socket.id);

    const self = socket.handshake.query.self || 'nope';
    const playerName = self !== 'nope' ? self : `Player_${socket.id.substring(0, 8)}`;
    
    console.log(`Player identified as: ${playerName} (self: ${self})`);
    
    // Use external connections composable for master server communication
    externalConnections.registerPlayerWithMaster(socket.id, playerName);

    // Use the composable to add player
    const player = playerManagement.addPlayer(
        socket.id, 
        playerName, 
        self, 
        scoreManagement.persistentPlayerData, 
        scoreManagement.lastScoreReset, 
        scoreManagement.shouldResetScores
    );

    // Load from Master Server (SSOT) using external connections
    externalConnections.getSharedPlayerState(playerName).then(sharedState => {
        if (sharedState && sharedState.resources) {
            player.resources = sharedState.resources;
            player.score = sharedState.score;
            
            socket.emit('update-player-resources', {
                resources: sharedState.resources,
                score: sharedState.score
            });

            console.log('=== SERVER EMITTING SSOT DATA (IMMEDIATE) ===');
            console.log('Emitting to socket:', socket.id);
            console.log('Data:', sharedState);
            
            console.log(`Loaded SSOT data for ${playerName}:`, sharedState);
        }
    });

    socket.emit('update-player-resources', {
        resources: { gold: 0, water: 0, kryptonite: 0 },
        score: 0
    });

    console.log('=== SERVER EMITTING SSOT DATA (IMMEDIATE) ===');
    console.log('Emitting to socket:', socket.id);

    console.log('Player color assigned:', player.ship.color);

    socket.emit('game_state', {
        id: socket.id,
        status: 'connected',
        players: Object.fromEntries(
            Array.from(gameState.players.entries()).map(([id, p]) => [
                id,
                p.ship.getState()
            ])
        )
    });

    // Player input handler
    socket.on('player_input', (input) => {
        const player = gameState.players.get(socket.id);
        if (!player || !player.ship) {
            console.log('No player or ship found for socket:', socket.id);
            return;
        }
        
        switch(input.type) {
            case 'rotate_left':
                player.ship.rotatingLeft = input.value;
                break;
            case 'rotate_right':
                player.ship.rotatingRight = input.value;
                break;
            case 'thrust':
                player.ship.engineOn = input.value;
                break;
            case 'shoot':
                if (input.value === true) {
                    if (collisionDetection.isInSafeZone(player.ship.x, player.ship.y, socket.id, gameState.homePositions)) {
                        socket.emit('shoot_blocked', { reason: 'in_safe_zone' });
                        return;
                    }
                    
                    const now = Date.now();
                    const cooldown = player.ship.pattern === 'ufo' ? 500 : 250;
                    
                    if (player.lastShot && now - player.lastShot < cooldown) {
                        return;
                    }
                    
                    player.lastShot = now;
                    bulletManagement.createBullet(socket.id, player.ship);
                }
                break;
            case 'rocket':
                if (player.ship) {
                    console.debug('🚀 Creating rocket bullet for player:', socket.id);
                    bulletManagement.createBullet(socket.id, player.ship, 'rocket');
                }
                break;
            case 'warp_home':
                player.ship.warpHome();
                break;
        }
    });

    // Player disconnect handler
    socket.on('disconnect', async () => {
        const player = gameState.players.get(socket.id);
        if (player) {
            try {
                await externalConnections.updateSharedPlayerState(player.name, {
                    resources: player.resources,
                    score: player.score,
                    name: player.name
                });
            } catch (error) {
                console.error('Failed to save shared state:', error);
            }
        }
        
        playerManagement.removePlayer(socket.id);
        
        console.log('Player disconnected:', socket.id);
        console.log('Current team counts:', playerManagement.getTeamCounts());
    });

    // Chat message handler
    socket.on('chat_message', (data) => {
        console.log(`Chat received: `);
        console.log(data);
    
        const player = gameState.players.get(socket.id);
        if (!player || !player.ship) return;

        const message = {
            content: data.isGlobal ? data.content.slice(1) : data.content,
            sender: player.ship.callSign,
            color: player.ship.color,
            type: data.isGlobal ? 'global' : 'team',
            timestamp: Date.now()
        };

        if (data.isGlobal) {
            io.emit('chat_broadcast', message);
        } else {
            for (const [playerId, p] of gameState.players) {
                if (p.ship.color === player.ship.color) {
                    io.to(playerId).emit('chat_broadcast', message);
                }
            }
        }

        const helpResult = parseHelpCommand(message.content);
        if (helpResult) {
            console.log(`Help command received: ${helpResult.category}`);
            socket.emit('help', {
                category: helpResult.category,
                content: helpResult.formatted
            });
            return;
        }
    });

    // Announce player join
    if (player && player.ship) {
        for (const [playerId, otherPlayer] of gameState.players) {
            if (otherPlayer.ship.color === player.ship.color) {
                io.to(playerId).emit('system_message', 
                    `${player.ship.callSign} joined your team`
                );
            }
        }
    }

    socket.emit('score_reset_info', scoreManagement.getScoreResetInfo());
});

// Start the server
httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`Socket.IO server running on port ${PORT} on all interfaces`);
    console.log('Server accessible at: http://localhost:3000');
    console.log('Allowed origins:', ALLOWED_CORS_ORIGINS);
});

// Setup external connections
externalConnections.setupCleanup();
externalConnections.startHeartbeat(getActivePlayerCount);

// Initialize score management
scoreManagement.initialize(io);

// Debug endpoints for testing external connections
app.get('/debug/connections', (req, res) => {
    res.json(externalConnections.getConnectionStatus());
});

app.get('/debug/test-connections', async (req, res) => {
    const results = await externalConnections.testAllConnections();
    res.json(results);
});

app.get('/debug/game-state', (req, res) => {
    res.json({
        players: playerManagement.getPlayerCount(),
        bullets: bulletManagement.getBullets().size,
        collectibles: gameState.collectibles.size,
        blackHoles: gameStateManagement.getAllBlackHoles(),
        timestamp: new Date().toISOString()
    });
});

app.get('/debug/composables', (req, res) => {
    res.json({
        playerManagement: {
            playerCount: playerManagement.getPlayerCount(),
            teamCounts: playerManagement.getTeamCounts()
        },
        bulletManagement: {
            bulletCount: bulletManagement.getBullets().size,
            playerUpgrades: externalConnections.getConnectionStatus().masterServer
        },
        gameStateManagement: {
            collectibleCount: gameState.collectibles.size,
            blackHoleCount: Object.keys(gameStateManagement.getAllBlackHoles()).length
        },
        scoreManagement: {
            persistentDataSize: scoreManagement.persistentPlayerData.size,
            lastScoreReset: scoreManagement.lastScoreReset
        },
        externalConnections: externalConnections.getConnectionStatus(),
        timestamp: new Date().toISOString()
    });
});

// Game state helper function
function getGameState(playerId) {
    const player = gameState.players.get(playerId);
    if (!player || !player.ship) return null;

    return {
        players: Object.fromEntries(
            Array.from(gameState.players.entries())
                .filter(([_, p]) => p && p.ship)
                .map(([id, p]) => [id, p.ship.getState()])
        ),
        nextScoreReset: scoreManagement.getNextResetTime().toISOString(),
        status: 'running'
    };
}