import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

const useMasterGameServerStore = defineStore('masterGameServer', () => {
    // State
    const gameState = ref({
        server: {
            status: 'offline',
            uptime: 0,
            active_players: 0,
            total_games_played: 0,
            current_round: 1
        },
        worlds: [],
        player: null,
        leaderboard: [],
        global_stats: {
            total_players: 0,
            total_games: 0,
            average_score: 0,
            highest_score: 0,
            most_active_player: null
        }
    });

    const isLoading = ref(false);
    const error = ref(null);
    const lastUpdate = ref(null);

    // Computed
    const isOnline = computed(() => gameState.value.server.status === 'online');
    const playerRank = computed(() => gameState.value.player?.rank || null);
    const playerHighScore = computed(() => gameState.value.player?.high_score || 0);
    const topPlayers = computed(() => gameState.value.leaderboard.slice(0, 5));
    const availableWorlds = computed(() => gameState.value.worlds.filter(w => w.is_online && w.available_capacity > 0));
    const currentWorld = computed(() => gameState.value.player?.current_world);
    const playerResources = computed(() => gameState.value.player?.resources || {});

    // Actions
    const fetchGameState = async (playerName = null) => {
        try {
            isLoading.value = true;
            error.value = null;
            
            const params = playerName ? { player_name: playerName } : {};
            const response = await axios.get('/master/game-state', {
                params,
                headers: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            gameState.value = response.data;
            lastUpdate.value = new Date();
            
            console.log('Master Game Server state updated:', gameState.value);
            console.debug('Fetched worlds:', gameState.value.worlds);
        } catch (err) {
            error.value = err.response?.data?.message || 'Failed to fetch game state';
            console.error('Error fetching game state:', err);
        } finally {
            isLoading.value = false;
        }
    };

    const joinWorld = async (worldId, playerName, sessionId, playerState = {}) => {
        try {
            const response = await axios.post('/master/player/join-world', {
                world_id: worldId,
                player_name: playerName,
                session_id: sessionId,
                player_state: playerState
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            // Refresh game state after joining
            await fetchGameState(playerName);
            
            console.log('Joined world successfully:', response.data);
            return response.data;
        } catch (err) {
            error.value = err.response?.data?.message || 'Failed to join world';
            console.error('Error joining world:', err);
            throw err;
        }
    };

    const leaveWorld = async (sessionId) => {
        try {
            const response = await axios.post('/master/player/leave-world', {
                session_id: sessionId
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            // Refresh game state after leaving
            await fetchGameState();
            
            console.log('Left world successfully:', response.data);
            return response.data;
        } catch (err) {
            error.value = err.response?.data?.message || 'Failed to leave world';
            console.error('Error leaving world:', err);
            throw err;
        }
    };

    const transferToWorld = async (playerName, targetWorldId, transferType = 'warp', resourcesToTransfer = {}, playerState = {}) => {
        try {
            const response = await axios.post('/master/player/transfer', {
                player_name: playerName,
                target_world_id: targetWorldId,
                transfer_type: transferType,
                resources_to_transfer: resourcesToTransfer,
                player_state: playerState
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            // Refresh game state after transfer
            await fetchGameState(playerName);
            
            console.log('World transfer completed:', response.data);
            return response.data;
        } catch (err) {
            error.value = err.response?.data?.message || 'Failed to transfer to world';
            console.error('Error transferring to world:', err);
            throw err;
        }
    };

    const updatePlayerResources = async (playerName, resources, operation = 'add') => {
        try {
            const response = await axios.post('/master/player/resources', {
                player_name: playerName,
                resources: resources,
                operation: operation
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            // Refresh game state after resource update
            await fetchGameState(playerName);
            
            console.log('Player resources updated:', response.data);
            return response.data;
        } catch (err) {
            error.value = err.response?.data?.message || 'Failed to update resources';
            console.error('Error updating resources:', err);
            throw err;
        }
    };

    const getPlayerResources = async (playerName) => {
        try {
            const response = await axios.get('/master/player/resources', {
                params: { player_name: playerName },
                headers: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            return response.data;
        } catch (err) {
            error.value = err.response?.data?.message || 'Failed to get player resources';
            console.error('Error getting player resources:', err);
            throw err;
        }
    };

    const updateScore = async (scoreData) => {
        try {
            isLoading.value = true;
            error.value = null;
            
            const response = await axios.post('/master/update-score', scoreData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            // Refresh game state after score update
            await fetchGameState(scoreData.player_name);
            
            console.log('Score updated successfully:', response.data);
            return response.data;
        } catch (err) {
            error.value = err.response?.data?.message || 'Failed to update score';
            console.error('Error updating score:', err);
            throw err;
        } finally {
            isLoading.value = false;
        }
    };

    const fetchLeaderboard = async (limit = 10, timeframe = 'all') => {
        try {
            const response = await axios.get('/master/leaderboard', {
                params: { limit, timeframe },
                headers: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            gameState.value.leaderboard = response.data;
            return response.data;
        } catch (err) {
            error.value = err.response?.data?.message || 'Failed to fetch leaderboard';
            console.error('Error fetching leaderboard:', err);
            throw err;
        }
    };

    const fetchPlayerStats = async (playerName) => {
        try {
            const response = await axios.get('/master/player-stats', {
                params: { player_name: playerName },
                headers: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            gameState.value.player = response.data;
            return response.data;
        } catch (err) {
            error.value = err.response?.data?.message || 'Failed to fetch player stats';
            console.error('Error fetching player stats:', err);
            throw err;
        }
    };

    const checkServerHealth = async () => {
        try {
            const response = await axios.get('/master/health', {
                headers: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            return response.data;
        } catch (err) {
            console.error('Error checking server health:', err);
            return { status: 'unhealthy', error: err.message };
        }
    };

    const submitGameResult = async (gameData) => {
        const scoreData = {
            player_name: gameData.player_name,
            score: gameData.score || 0,
            stage: gameData.stage || 0,
            bonus: gameData.bonus || 0,
            game_data: {
                ship_pattern: gameData.ship_pattern,
                collections: gameData.collections,
                streak: gameData.streak,
                server_id: gameData.server_id,
                game_duration: gameData.game_duration,
                final_position: gameData.final_position
            },
            nft_earned: gameData.nft_earned || 'none'
        };

        return await updateScore(scoreData);
    };

    // Initialize store
    const initialize = async (playerName = null) => {
        console.log('Initializing Master Game Server store...');
        await fetchGameState(playerName);
        
        // Set up periodic refresh
        setInterval(async () => {
            if (isOnline.value) {
                await fetchGameState(playerName);
            }
        }, 30000); // Refresh every 30 seconds
    };

    return {
        // State
        gameState,
        isLoading,
        error,
        lastUpdate,
        
        // Computed
        isOnline,
        playerRank,
        playerHighScore,
        topPlayers,
        availableWorlds,
        currentWorld,
        playerResources,
        
        // Actions
        fetchGameState,
        joinWorld,
        leaveWorld,
        transferToWorld,
        updatePlayerResources,
        getPlayerResources,
        updateScore,
        fetchLeaderboard,
        fetchPlayerStats,
        checkServerHealth,
        submitGameResult,
        initialize
    };
});

export { useMasterGameServerStore }; 