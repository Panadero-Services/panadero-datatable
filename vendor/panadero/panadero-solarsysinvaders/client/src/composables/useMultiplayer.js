import { ref, onUnmounted } from 'vue';
import { io } from 'socket.io-client';

const MULTIPLAYER_VERSION = '1.0.2';
const DEBUG = process.env.NODE_ENV !== 'production';

// Add URL parsing function
const parseServerUrl = (url) => {
    try {
        const parsed = new URL(url);
        let finalUrl;
        
        if (parsed.hostname === 'self-api.com') {
            finalUrl = `${parsed.protocol}//${parsed.hostname}`;
            console.debug('AWS server detected - removing port:', finalUrl);
        } else {
            finalUrl = `${parsed.protocol}//${parsed.hostname}${parsed.port ? ':' + parsed.port : ''}`;
            console.debug('External server detected - keeping port:', finalUrl);
        }
        
        return finalUrl;
    } catch (e) {
        console.debug('Invalid server URL:', url);
        return url;
    }
};

export function useMultiplayer(config = {}) {
    // Log version on initialization
    console.debug(`=== MULTIPLAYER: Initializing version ${MULTIPLAYER_VERSION} ===`);

    const gameState = ref({
        status: 'init',
        players: {},
        myShip: null,
        blackHoles: new Map()  // Add this
    });
    
    const resources = ref({
        gold: 0,
        water: 0,
        kryptonite: 0
    });

    const isConnected = ref(false);
    const socket = ref(null);
    const lastUpdateTime = ref(Date.now());
    const serverUpdateRate = ref(50);

    // Smoothing configuration
    const SMOOTHING_ENABLED = true;
    const SMOOTHING_FACTOR = 0.2;
    const SMOOTH_CURRENT_PLAYER = false;

    // Subfunction: Setup socket connection
    const setupSocketConnection = () => {
        try {
            console.debug('=== MULTIPLAYER: Creating socket ===');
            console.debug(`Version: ${MULTIPLAYER_VERSION}`);
            
            // Parse URL to remove port
            const serverUrl = parseServerUrl(config.serverUrl);
            console.debug('Using server URL:', serverUrl);
            
            socket.value = io(serverUrl, {
                transports: ['websocket', 'polling'],
                reconnection: true,
                reconnectionAttempts: 5,
                reconnectionDelay: 1000,
                query: { 
                    self: config.self,
                    version: MULTIPLAYER_VERSION  // Include version in connection
                }
            });
            console.debug('=== MULTIPLAYER: Socket created ===');
        } catch (err) {
            console.debug('=== MULTIPLAYER: Socket creation failed ===', err);
            throw err;
        }
    };

    // Subfunction: Setup connection events
    const setupConnectionEvents = () => {
        socket.value.on('connect', () => {
            console.debug('=== MULTIPLAYER: Connected! ===');
            console.debug('Socket ID:', socket.value.id);
            isConnected.value = true;
            gameState.value.status = 'connected';
        });

        socket.value.on('disconnect', (reason) => {
            console.debug('=== MULTIPLAYER: Disconnected ===');
            console.debug('Reason:', reason);
            isConnected.value = false;
            gameState.value.status = 'disconnected';
        });

        socket.value.on('error', (error) => {
            console.error('=== MULTIPLAYER: Socket error ===', error);
        });
    };

    // Subfunction: Setup resource events
    const setupResourceEvents = () => {
        socket.value.on('update-player-resources', (data) => {
            console.debug('=== CLIENT RECEIVED SSOT DATA ===');
            console.debug('Data:', data);
            
            if (data.resources) {
                resources.value = data.resources;
            }
        });

        socket.value.on('collectible_collected', (data) => {
            if (data.resources) {
                resources.value = data.resources;
            }
        });
    };

    // Subfunction: Setup game state events
    const setupGameStateEvents = () => {
        socket.value.on('game_state', (state) => {
            const now = Date.now();
            
            if (lastUpdateTime.value) {
                const updateInterval = now - lastUpdateTime.value;
                serverUpdateRate.value = updateInterval;
            }
            lastUpdateTime.value = now;
            
            // Apply smoothing if enabled
            if (SMOOTHING_ENABLED && gameState.value.players) {
                const smoothedPlayers = {};
                
                for (const [id, newPlayer] of Object.entries(state.players)) {
                    const oldPlayer = gameState.value.players[id];
                    const shouldSmooth = SMOOTH_CURRENT_PLAYER || id !== socket.value?.id;
                    
                    if (oldPlayer && shouldSmooth) {
                        smoothedPlayers[id] = {
                            ...newPlayer,
                            x: oldPlayer.x + (newPlayer.x - oldPlayer.x) * SMOOTHING_FACTOR,
                            y: oldPlayer.y + (newPlayer.y - oldPlayer.y) * SMOOTHING_FACTOR,
                            angle: oldPlayer.angle + (newPlayer.angle - oldPlayer.angle) * SMOOTHING_FACTOR
                        };
                    } else {
                        smoothedPlayers[id] = newPlayer;
                    }
                }
                
                const blackHoles = state.blackHoles ? new Map(Object.entries(state.blackHoles)) : new Map();
                
                gameState.value = { 
                    ...state, 
                    players: smoothedPlayers,
                    blackHoles
                };
            } else {
                const blackHoles = state.blackHoles ? new Map(Object.entries(state.blackHoles)) : new Map();
                
                gameState.value = {
                    ...state,
                    blackHoles
                };
            }
            
            // Update resources
            const myShip = state.players[socket.value.id];
            if (myShip?.resources) {
                resources.value = myShip.resources;
            }
        });
    };

    // Main connect function
    const connect = () => {
        try {
            console.debug('=== MULTIPLAYER: Starting connection process ===');
            console.debug('Server URL:', config.serverUrl);
            console.debug('Self:', config.self);
            
            setupSocketConnection();
            
            // Add error event listener
            socket.value.on('connect_error', (error) => {
                console.debug('=== MULTIPLAYER: Connection Error ===', error.message);
            });

            setupConnectionEvents();
            setupResourceEvents();
            setupGameStateEvents();
            
            console.debug('=== MULTIPLAYER: Setup complete ===');
        } catch (err) {
            console.debug('=== MULTIPLAYER: Setup failed ===', err);
        }
    };

    const disconnect = () => {
        if (socket.value) {
            console.debug('=== MULTIPLAYER: Manual disconnect ===');
            socket.value.disconnect();
            socket.value = null;
        }
    };

    const sendShipState = (shipState) => {
        if (socket.value && isConnected.value) {
            socket.value.emit('ship_state', shipState);
        }
    };

    const sendInput = (inputType, value) => {
        if (socket.value && isConnected.value) {
            socket.value.emit('player_input', {
                type: inputType,
                value: value,
                timestamp: Date.now()
            });
        }
    };

    onUnmounted(() => {
        disconnect();
    });

    return {
        gameState,
        isConnected,
        connect,
        disconnect,
        sendShipState,
        sendInput,
        socket,
        resources,
        lastUpdateTime,
        serverUpdateRate
    };
} 