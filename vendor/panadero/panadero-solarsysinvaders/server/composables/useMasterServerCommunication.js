// vendor/panadero/panadero-solarsysinvaders/server/composables/useMasterServerCommunication.js

// Import required dependencies
import fetch from 'node-fetch';

export function useMasterServerCommunication() {
    // Configuration
    const MASTER_SERVER_URL = process.env.MASTER_SERVER_URL;
    const GAME_SERVER_ID = process.env.GAME_SERVER_ID;
    const MASTER_HEARTBEAT_INTERVAL = 30000; // 30 seconds
    const MASTER_HEARTBEAT_TIMEOUT = 90; // 90 seconds

    // Heartbeat tracking
    let heartbeatInterval = null;
    let initialHeartbeatTimeout = null;

    // Register player with Master Server
    const registerPlayerWithMaster = async (socketId, playerName) => {
        try {
            const response = await fetch(`${MASTER_SERVER_URL}/master/players/state/${playerName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify({
                    name: playerName,
                    create_only: true
                })
            });
            
            if (response.ok) {
                console.log(`Player ${playerName} registered with Master Server`);
                return true;
            }
        } catch (error) {
            console.error('Failed to register player with Master Server:', error);
        }
        return false;
    };

    // Get shared player state from Master Server
    const getSharedPlayerState = async (playerName) => {
        try {
            const response = await fetch(`${MASTER_SERVER_URL}/master/players/state/${playerName}`);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.error('Failed to get shared player state:', error);
        }
        return null;
    };

    // Update shared player state on Master Server
    const updateSharedPlayerState = async (playerName, state) => {
        try {
            const response = await fetch(`${MASTER_SERVER_URL}/master/players/state/${playerName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify(state)
            });
            return response.ok;
        } catch (error) {
            console.error('Failed to update shared player state:', error);
            return false;
        }
    };

    // Send heartbeat to Master Server
    const sendHeartbeat = async (playerCount) => {
        try {
            const heartbeatData = {
                server_id: GAME_SERVER_ID,
                current_players: playerCount,
                status: 'online'
            };

            console.log('Sending heartbeat:', heartbeatData);

            const response = await fetch(`${MASTER_SERVER_URL}/master/worlds/heartbeat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify(heartbeatData)
            });
            
            if (response.ok) {
                const result = await response.json();
                console.log('Heartbeat sent successfully:', result);
                return true;
            } else {
                console.error('Heartbeat failed with status:', response.status);
                const errorText = await response.text();
                console.error('Error details:', errorText);
                return false;
            }
        } catch (error) {
            console.error('Heartbeat failed:', error.message);
            if (error.code === 'ECONNREFUSED') {
                console.error('Could not connect to master server - is it running?');
            }
            return false;
        }
    };

    // Unregister server from Master Server
    const unregisterServer = async () => {
        try {
            await fetch(`${MASTER_SERVER_URL}/master/worlds/unregister`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify({ server_id: GAME_SERVER_ID })
            });
            console.log('Server unregistered from Master Server');
        } catch (error) {
            console.error('Failed to unregister:', error);
        }
    };

    // Start heartbeat system
    const startHeartbeat = (getPlayerCount) => {
        // Send initial heartbeat after a short delay
        initialHeartbeatTimeout = setTimeout(() => {
            sendHeartbeat(getPlayerCount());
        }, 5000);

        // Send heartbeat every 30 seconds
        heartbeatInterval = setInterval(() => {
            sendHeartbeat(getPlayerCount());
        }, MASTER_HEARTBEAT_INTERVAL);
    };

    // Stop heartbeat system
    const stopHeartbeat = () => {
        if (heartbeatInterval) {
            clearInterval(heartbeatInterval);
            heartbeatInterval = null;
        }
        if (initialHeartbeatTimeout) {
            clearTimeout(initialHeartbeatTimeout);
            initialHeartbeatTimeout = null;
        }
    };

    // Setup process cleanup
    const setupCleanup = () => {
        process.on('SIGTERM', async () => {
            await unregisterServer();
            process.exit(0);
        });

        process.on('SIGINT', async () => {
            await unregisterServer();
            process.exit(0);
        });
    };

    return {
        registerPlayerWithMaster,
        getSharedPlayerState,
        updateSharedPlayerState,
        sendHeartbeat,
        unregisterServer,
        startHeartbeat,
        stopHeartbeat,
        setupCleanup
    };
}