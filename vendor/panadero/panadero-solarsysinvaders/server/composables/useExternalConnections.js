// vendor/panadero/panadero-solarsysinvaders/server/composables/useExternalConnections.js

import fetch from 'node-fetch';

export function useExternalConnections() {
    // Configuration
    const MASTER_SERVER_URL = process.env.MASTER_SERVER_URL;
    const GAME_SERVER_ID = process.env.GAME_SERVER_ID;
    const MASTER_HEARTBEAT_INTERVAL = 30000; // 30 seconds
    const MASTER_HEARTBEAT_TIMEOUT = 90; // 90 seconds

    // Connection status tracking
    const connectionStatus = {
        masterServer: {
            connected: false,
            lastHeartbeat: null,
            lastError: null,
            consecutiveFailures: 0,
            totalHeartbeats: 0,
            successfulHeartbeats: 0
        },
        database: {
            connected: false,
            lastCheck: null,
            lastError: null
        },
        gameClients: {
            totalConnections: 0,
            activeConnections: 0,
            lastConnection: null
        }
    };

    // Heartbeat tracking
    let heartbeatInterval = null;
    let initialHeartbeatTimeout = null;
    let connectionTestInterval = null;

    // Test all external connections
    const testAllConnections = async () => {
        console.log('\n=== TESTING ALL EXTERNAL CONNECTIONS ===');
        
        const results = {
            masterServer: await testMasterServerConnection(),
            database: await testDatabaseConnection(),
            timestamp: new Date().toISOString()
        };

        console.log('Connection Test Results:', JSON.stringify(results, null, 2));
        return results;
    };

    // Test Master Server connection
    const testMasterServerConnection = async () => {
        try {
            console.log('Testing Master Server connection...');
            
            const response = await fetch(`${MASTER_SERVER_URL}/master/health`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                timeout: 5000
            });

            if (response.ok) {
                const data = await response.json();
                connectionStatus.masterServer.connected = true;
                connectionStatus.masterServer.lastHeartbeat = new Date().toISOString();
                connectionStatus.masterServer.consecutiveFailures = 0;
                
                console.log('✅ Master Server: CONNECTED');
                console.log('   Response:', data);
                return { status: 'connected', data };
            } else {
                connectionStatus.masterServer.connected = false;
                connectionStatus.masterServer.lastError = `HTTP ${response.status}`;
                connectionStatus.masterServer.consecutiveFailures++;
                
                console.log('❌ Master Server: FAILED');
                console.log('   Status:', response.status);
                return { status: 'failed', error: `HTTP ${response.status}` };
            }
        } catch (error) {
            connectionStatus.masterServer.connected = false;
            connectionStatus.masterServer.lastError = error.message;
            connectionStatus.masterServer.consecutiveFailures++;
            
            console.log('❌ Master Server: ERROR');
            console.log('   Error:', error.message);
            return { status: 'error', error: error.message };
        }
    };

    // Test Database connection
    const testDatabaseConnection = async () => {
        try {
            console.log('Testing Database connection...');
            
            // Test Laravel database connection via API
            const response = await fetch(`${MASTER_SERVER_URL}/api/health/database`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                timeout: 5000
            });

            if (response.ok) {
                const data = await response.json();
                connectionStatus.database.connected = true;
                connectionStatus.database.lastCheck = new Date().toISOString();
                
                console.log('✅ Database: CONNECTED');
                console.log('   Response:', data);
                return { status: 'connected', data };
            } else {
                connectionStatus.database.connected = false;
                connectionStatus.database.lastError = `HTTP ${response.status}`;
                
                console.log('❌ Database: FAILED');
                console.log('   Status:', response.status);
                return { status: 'failed', error: `HTTP ${response.status}` };
            }
        } catch (error) {
            connectionStatus.database.connected = false;
            connectionStatus.database.lastError = error.message;
            
            console.log('❌ Database: ERROR');
            console.log('   Error:', error.message);
            return { status: 'error', error: error.message };
        }
    };

    // Register player with Master Server
    const registerPlayerWithMaster = async (socketId, playerName) => {
        try {
            console.log(`Registering player ${playerName} with Master Server...`);
            
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
                }),
                timeout: 5000
            });
            
            if (response.ok) {
                console.log(`✅ Player ${playerName} registered with Master Server`);
                return { success: true, data: await response.json() };
            } else {
                console.log(`❌ Failed to register player ${playerName}: HTTP ${response.status}`);
                return { success: false, error: `HTTP ${response.status}` };
            }
        } catch (error) {
            console.error(`❌ Failed to register player ${playerName}:`, error.message);
            return { success: false, error: error.message };
        }
    };

    // Get shared player state from Master Server
    const getSharedPlayerState = async (playerName) => {
        try {
            const response = await fetch(`${MASTER_SERVER_URL}/master/players/state/${playerName}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                timeout: 5000
            });
            
            if (response.ok) {
                return await response.json();
            } else {
                console.error(`Failed to get shared player state for ${playerName}: HTTP ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`Failed to get shared player state for ${playerName}:`, error.message);
            return null;
        }
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
                body: JSON.stringify(state),
                timeout: 5000
            });
            
            const success = response.ok;
            if (!success) {
                console.error(`Failed to update shared player state for ${playerName}: HTTP ${response.status}`);
            }
            return success;
        } catch (error) {
            console.error(`Failed to update shared player state for ${playerName}:`, error.message);
            return false;
        }
    };

    // Send heartbeat to Master Server
    const sendHeartbeat = async (playerCount) => {
        try {
            const heartbeatData = {
                server_id: GAME_SERVER_ID,
                current_players: playerCount,
                status: 'online',
                timestamp: new Date().toISOString()
            };

            console.log('Sending heartbeat:', heartbeatData);

            const response = await fetch(`${MASTER_SERVER_URL}/master/worlds/heartbeat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify(heartbeatData),
                timeout: 5000
            });
            
            connectionStatus.masterServer.totalHeartbeats++;
            
            if (response.ok) {
                const result = await response.json();
                connectionStatus.masterServer.connected = true;
                connectionStatus.masterServer.lastHeartbeat = new Date().toISOString();
                connectionStatus.masterServer.consecutiveFailures = 0;
                connectionStatus.masterServer.successfulHeartbeats++;
                
                console.log('✅ Heartbeat sent successfully:', result);
                return { success: true, data: result };
            } else {
                connectionStatus.masterServer.connected = false;
                connectionStatus.masterServer.consecutiveFailures++;
                connectionStatus.masterServer.lastError = `HTTP ${response.status}`;
                
                console.error('❌ Heartbeat failed with status:', response.status);
                const errorText = await response.text();
                console.error('Error details:', errorText);
                return { success: false, error: `HTTP ${response.status}`, details: errorText };
            }
        } catch (error) {
            connectionStatus.masterServer.connected = false;
            connectionStatus.masterServer.consecutiveFailures++;
            connectionStatus.masterServer.lastError = error.message;
            
            console.error('❌ Heartbeat failed:', error.message);
            if (error.code === 'ECONNREFUSED') {
                console.error('Could not connect to master server - is it running?');
            }
            return { success: false, error: error.message };
        }
    };

    // Unregister server from Master Server
    const unregisterServer = async () => {
        try {
            console.log('Unregistering server from Master Server...');
            
            const response = await fetch(`${MASTER_SERVER_URL}/master/worlds/unregister`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify({ server_id: GAME_SERVER_ID }),
                timeout: 5000
            });
            
            if (response.ok) {
                console.log('✅ Server unregistered from Master Server');
                return { success: true };
            } else {
                console.error('❌ Failed to unregister server:', response.status);
                return { success: false, error: `HTTP ${response.status}` };
            }
        } catch (error) {
            console.error('❌ Failed to unregister server:', error.message);
            return { success: false, error: error.message };
        }
    };

    // Get connection status
    const getConnectionStatus = () => {
        return {
            ...connectionStatus,
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            environment: {
                MASTER_SERVER_URL,
                GAME_SERVER_ID,
                NODE_ENV: process.env.NODE_ENV
            }
        };
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

        // Test connections every 5 minutes
        connectionTestInterval = setInterval(() => {
            testAllConnections();
        }, 5 * 60 * 1000);
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
        if (connectionTestInterval) {
            clearInterval(connectionTestInterval);
            connectionTestInterval = null;
        }
    };

    // Setup process cleanup
    const setupCleanup = () => {
        process.on('SIGTERM', async () => {
            console.log('Received SIGTERM, cleaning up...');
            await unregisterServer();
            stopHeartbeat();
            process.exit(0);
        });

        process.on('SIGINT', async () => {
            console.log('Received SIGINT, cleaning up...');
            await unregisterServer();
            stopHeartbeat();
            process.exit(0);
        });
    };

    // Update game client connection count
    const updateGameClientCount = (total, active) => {
        connectionStatus.gameClients.totalConnections = total;
        connectionStatus.gameClients.activeConnections = active;
        connectionStatus.gameClients.lastConnection = new Date().toISOString();
    };

    return {
        // Connection testing
        testAllConnections,
        testMasterServerConnection,
        testDatabaseConnection,
        
        // Master Server operations
        registerPlayerWithMaster,
        getSharedPlayerState,
        updateSharedPlayerState,
        sendHeartbeat,
        unregisterServer,
        
        // Status and monitoring
        getConnectionStatus,
        updateGameClientCount,
        
        // Lifecycle management
        startHeartbeat,
        stopHeartbeat,
        setupCleanup
    };
}