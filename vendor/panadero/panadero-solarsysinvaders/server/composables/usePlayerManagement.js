// vendor/panadero/panadero-solarsysinvaders/server/composables/usePlayerManagement.js real

// Import required dependencies
import { getShipMovementConfig } from '../../shared/movementConfig.js';
import { calculateBorderForce } from '../../shared/movementConfig.js';

// Constants
const SHIP_RADIUS = 10;
const SHIP_PATTERNS = {
    FIGHTER: 'fighter',
    UFO: 'ufo'
};
const SHIP_COLORS = [
    '#00FFFF', // Cyan
    '#FF69B4', // Pink
    '#FFFF00'  // Yellow
];

// ServerShip class (moved from main file)
class ServerShip {
    constructor(x, y, playerId, self = 'nope', persistentPlayerData, lastScoreReset, shouldResetScores) {
        this.id = playerId;
        this.callSign = self !== 'nope' ? self : playerId.slice(0, 4).toUpperCase();
        
        // Check for existing data
        const savedData = persistentPlayerData.get(this.callSign);
        
        // Check if we need to reset scores
        if (shouldResetScores(lastScoreReset)) {
            console.log('Performing daily score reset at UTC midnight');
            for (const [callSign, data] of persistentPlayerData.entries()) {
                data.score = 0;
                data.streak = [];
            }
            lastScoreReset = new Date().toISOString();
        }

        if (savedData) {
            this.score = savedData.score || 0;
            this.collections = savedData.collections || {
                gold: 0,
                water: 0,
                kryptonite: 0
            };
            this.streak = savedData.streak || [];
        } else {
            this.score = 0;
            this.collections = {
                gold: 0,
                water: 0,
                kryptonite: 0
            };
            this.streak = [];
        }

        // Always reset these properties on new connection
        this.health = 100;
        this.maxHealth = 100;
        this.homeX = x;
        this.homeY = y;
        this.x = x;
        this.y = y;
        this.angle = -Math.PI / 2;
        this.velocity = { x: 0, y: 0 };
        this.acceleration = { x: 0, y: 0 };
        this.rotatingLeft = false;
        this.rotatingRight = false;
        this.engineOn = false;
        this.pattern = Math.random() < 0.5 ? SHIP_PATTERNS.FIGHTER : SHIP_PATTERNS.UFO;
        this.radius = SHIP_RADIUS;
        this.isColliding = false;
        this.lastCollisionTime = 0;
        this.collisionCooldown = 500;
        this.lastStreakTime = 0;
    }

    update(deltaTime, updateShipPosition) {
        const dt = Math.min(deltaTime, 32) / 16;
        const config = getShipMovementConfig(this.pattern);

        // Rotation
        if (this.rotatingLeft) this.angle -= config.ROTATION_SPEED * dt;
        if (this.rotatingRight) this.angle += config.ROTATION_SPEED * dt;

        // Thrust
        if (this.engineOn) {
            const thrustAngle = this.angle - Math.PI / 2;
            this.velocity.x += Math.cos(thrustAngle) * config.THRUST_POWER * dt;
            this.velocity.y += Math.sin(thrustAngle) * config.THRUST_POWER * dt;
        }

        // Apply border anti-gravity force
        const borderForce = calculateBorderForce(this.x, this.y);
        this.velocity.x += borderForce.x * dt;
        this.velocity.y += borderForce.y * dt;

        // Apply friction
        this.velocity.x *= Math.pow(config.FRICTION, dt);
        this.velocity.y *= Math.pow(config.FRICTION, dt);

        // Enforce speed limit
        const speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
        if (speed > config.MAX_SPEED) {
            const scale = config.MAX_SPEED / speed;
            this.velocity.x *= scale;
            this.velocity.y *= scale;
        }

        updateShipPosition(this.id, this);
    }

    takeDamage(fromBullet = false) {
        const now = Date.now();
        if (fromBullet || (now - this.lastCollisionTime >= this.collisionCooldown)) {
            this.health = Math.max(0, this.health - 1);
            if (!fromBullet) {
                this.lastCollisionTime = now;
            }
        }
    }

    heal() {
        this.health = this.maxHealth;
    }

    getState() {
        return {
            position: { x: this.x, y: this.y },
            home: { x: this.homeX, y: this.homeY },
            angle: this.angle,
            velocity: this.velocity,
            score: this.score,
            controls: {
                rotatingLeft: this.rotatingLeft,
                rotatingRight: this.rotatingRight,
                engineOn: this.engineOn
            },
            color: this.color,
            pattern: this.pattern,
            isColliding: this.isColliding,
            callSign: this.callSign,
            health: this.health,
            maxHealth: this.maxHealth,
            collections: this.collections,
            streak: this.streak
        };
    }

    warpHome() {
        this.x = this.homeX;
        this.y = this.homeY;
        this.velocity = { x: 0, y: 0 };
        this.angle = -Math.PI / 2;
    }

    canTakeCollisionDamage() {
        return (Date.now() - this.lastCollisionTime) >= this.collisionCooldown;
    }

    saveData(persistentPlayerData) {
        persistentPlayerData.set(this.callSign, {
            score: this.score,
            collections: this.collections,
            streak: this.streak,
            lastSeen: Date.now()
        });
    }
}

export function usePlayerManagement() {
    const players = new Map();
    const homePositions = new Map();
    const teamCounts = {
        '#00FFFF': 0,  // Cyan
        '#FF69B4': 0,  // Pink
        '#FFFF00': 0   // Yellow
    };

    const assignBalancedTeam = () => {
        console.log('Assigning team. Current counts:', teamCounts);
        const minCount = Math.min(...Object.values(teamCounts));
        const teamsWithMinCount = Object.entries(teamCounts)
            .filter(([_, count]) => count === minCount)
            .map(([color, _]) => color);
        
        const selectedColor = teamsWithMinCount[Math.floor(Math.random() * teamsWithMinCount.length)];
        console.log('Selected color:', selectedColor);
        return selectedColor;
    };

    const createHomePosition = (id) => {
        const y = 100;
        const existingXPositions = Array.from(homePositions.values()).map(pos => pos.x);
        let x = 1000;
        
        while (existingXPositions.some(existingX => Math.abs(existingX - x) < 1000)) {
            x += 1000;
        }
        
        return { x, y };
    };

    const addPlayer = (socketId, playerName, self = 'nope', persistentPlayerData, lastScoreReset, shouldResetScores) => {
        const homePosition = createHomePosition(socketId);
        homePositions.set(socketId, homePosition);
        
        const player = {
            ship: new ServerShip(
                homePosition.x, 
                homePosition.y, 
                socketId, 
                self,
                persistentPlayerData,
                lastScoreReset,
                shouldResetScores
            ),
            name: playerName,
            resources: { gold: 0, water: 0, kryptonite: 0 },
            score: 0
        };
        
        // Assign team color
        player.ship.color = assignBalancedTeam();
        teamCounts[player.ship.color]++;
        
        players.set(socketId, player);
        return player;
    };

    const removePlayer = (socketId) => {
        const player = players.get(socketId);
        if (player && player.ship) {
            teamCounts[player.ship.color]--;
        }
        players.delete(socketId);
        homePositions.delete(socketId);
    };

    const getPlayer = (socketId) => {
        return players.get(socketId);
    };

    const getAllPlayers = () => {
        return players;
    };

    const getPlayerCount = () => {
        return players.size;
    };

    const getHomePositions = () => {
        return homePositions;
    };

    const getTeamCounts = () => {
        return teamCounts;
    };

    return {
        players,
        homePositions,
        teamCounts,
        ServerShip,
        assignBalancedTeam,
        createHomePosition,
        addPlayer,
        removePlayer,
        getPlayer,
        getAllPlayers,
        getPlayerCount,
        getHomePositions,
        getTeamCounts
    };
}