// vendor/panadero/panadero-solarsysinvaders/server/composables/useScoreManagement.js

export function useScoreManagement() {
    // Constants
    const DATA_RETENTION_TIME = 24 * 60 * 60 * 1000;  // 24 hours in milliseconds
    const SCORE_RESET_INTERVAL = 60 * 1000;  // Check score reset every minute

    // Persistent data storage
    const persistentPlayerData = new Map();
    let lastScoreReset = new Date().toISOString();

    // Check if scores should be reset
    const shouldResetScores = (lastScoreReset) => {
        if (!lastScoreReset) return true;
        
        const now = new Date();
        const lastReset = new Date(lastScoreReset);
        
        return now.getUTCDate() !== lastReset.getUTCDate() ||
               now.getUTCMonth() !== lastReset.getUTCMonth() ||
               now.getUTCFullYear() !== lastReset.getUTCFullYear();
    };

    // Get next reset time
    const getNextResetTime = () => {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
        tomorrow.setUTCHours(0, 0, 0, 0);
        return tomorrow;
    };

    // Check and reset scores
    const checkAndResetScores = (players, io) => {
        if (shouldResetScores(lastScoreReset)) {
            console.log('Daily score reset at UTC midnight');
            
            for (const [_, player] of players) {
                if (player && player.ship) {
                    player.ship.score = 0;
                    player.ship.streak = [];
                }
            }
            
            for (const [callSign, data] of persistentPlayerData.entries()) {
                data.score = 0;
                data.streak = [];
            }
            
            lastScoreReset = new Date().toISOString();
            
            io.emit('system_message', 'Daily score reset - All scores have been reset to 0');
            
            for (const [playerId, player] of players) {
                if (player && player.ship) {
                    io.to(playerId).emit('game_state', {
                        players: Object.fromEntries(
                            Array.from(players.entries())
                                .filter(([_, p]) => p && p.ship)
                                .map(([id, p]) => [id, p.ship.getState()])
                        ),
                        status: 'running'
                    });
                }
            }
        }
    };

    // Save player data
    const savePlayerData = (callSign, data) => {
        persistentPlayerData.set(callSign, {
            ...data,
            lastSeen: Date.now()
        });
        console.log(`Saved data for player ${callSign}:`, data);
    };

    // Get player data
    const getPlayerData = (callSign) => {
        return persistentPlayerData.get(callSign);
    };

    // Clean up old data
    const cleanupOldData = () => {
        try {
            const now = Date.now();
            for (const [callSign, data] of persistentPlayerData.entries()) {
                if (!data.lastSeen || now - data.lastSeen > DATA_RETENTION_TIME) {
                    persistentPlayerData.delete(callSign);
                    console.log(`Cleaned up old data for player ${callSign}`);
                }
            }
        } catch (error) {
            console.error('Error in data cleanup:', error);
        }
    };

    // Get score reset info
    const getScoreResetInfo = () => {
        return {
            nextReset: getNextResetTime().toISOString(),
            lastReset: lastScoreReset
        };
    };

    // Initialize score management
    const initialize = (io) => {
        // Check every minute
        setInterval(() => {
            checkAndResetScores(persistentPlayerData, io);
        }, SCORE_RESET_INTERVAL);

        // Clean up old data periodically
        setInterval(cleanupOldData, DATA_RETENTION_TIME);

        // Also check on server start
        checkAndResetScores(persistentPlayerData, io);
    };

    return {
        persistentPlayerData,
        lastScoreReset,
        shouldResetScores,
        getNextResetTime,
        checkAndResetScores,
        savePlayerData,
        getPlayerData,
        cleanupOldData,
        getScoreResetInfo,
        initialize
    };
}