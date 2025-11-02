import { ref, computed } from 'vue';

export function useGameState() {
    // Log when state is created
    console.debug('Creating initial game state');
    
    const gameState = ref({
        status: 'init',
        players: {},
        homePositions: {},
        resourceFields: {},
        collectibles: {},
        bullets: [],
        blackHoles: new Map([
            ['bh1', {
                id: 'bh1',
                x: -500,
                y: -500
            }]
        ])
    });

    // Log after state is created
    console.debug('Initial game state created:', {
        hasBlackHoles: !!gameState.value.blackHoles,
        blackHoles: gameState.value.blackHoles
    });

    // Computed properties for easier access
    const players = computed(() => gameState.value.players || {});
    const homePositions = computed(() => gameState.value.homePositions || {});
    const resourceFields = computed(() => gameState.value.resourceFields || {});
    const collectibles = computed(() => gameState.value.collectibles || {});
    const bullets = computed(() => gameState.value.bullets || []);
    const status = computed(() => gameState.value.status);

    // Player-specific computed properties
    const currentPlayer = computed(() => {
        // This will be set by the multiplayer composable
        return null;
    });

    const otherPlayers = computed(() => {
        const players = gameState.value.players || {};
        return Object.entries(players).filter(([id, player]) => {
            // Filter out current player (will be set by multiplayer)
            return true; // For now, return all players
        });
    });

    // Game state update methods
    const updateGameState = (newState) => {
        gameState.value = { ...gameState.value, ...newState };
    };

    const updatePlayer = (playerId, playerData) => {
        gameState.value.players = {
            ...gameState.value.players,
            [playerId]: playerData
        };
    };

    const removePlayer = (playerId) => {
        const { [playerId]: removed, ...remainingPlayers } = gameState.value.players;
        gameState.value.players = remainingPlayers;
    };

    const updateCollectibles = (newCollectibles) => {
        gameState.value.collectibles = newCollectibles;
    };

    const updateBullets = (newBullets) => {
        gameState.value.bullets = newBullets;
    };

    const updateHomePositions = (newHomePositions) => {
        gameState.value.homePositions = newHomePositions;
    };

    const updateResourceFields = (newResourceFields) => {
        gameState.value.resourceFields = newResourceFields;
    };

    // Game state validation
    const isValidGameState = computed(() => {
        return gameState.value && 
               typeof gameState.value === 'object' && 
               gameState.value.status !== undefined;
    });

    // Debug helpers
    const logGameState = () => {
        console.log('=== GAME STATE DEBUG ===');
        console.log('Status:', gameState.value.status);
        console.log('Players:', Object.keys(gameState.value.players).length);
        console.log('Collectibles:', Object.keys(gameState.value.collectibles || {}).length);
        console.log('Bullets:', gameState.value.bullets?.length || 0);
        console.log('Home Positions:', Object.keys(gameState.value.homePositions || {}).length);
    };

    // Add this function to parse sections
    const parseHelpContent = (content) => {
        if (!content) return '';
        
        const sections = {
            world: [],
            ships: [],
            collectibles: [],
            controls: [],
            commands: []
        };
        
        let currentSection = '';
        const lines = content.split('\n');
        
        for (const line of lines) {
            if (line.includes('World Information')) {
                currentSection = 'world';
            } else if (line.includes('Ship Types & Movement')) {
                currentSection = 'ships';
            } else if (line.includes('Collectibles & Scoring')) {
                currentSection = 'collectibles';
            } else if (line.includes('Controls') && !line.includes('Chat Commands')) {
                currentSection = 'controls';
            } else if (line.includes('Chat Commands')) {
                currentSection = 'commands';
            }
            
            if (currentSection && sections[currentSection]) {
                sections[currentSection].push(line);
            }
        }
        
        return sections;
    };

    // Add this function before the onMounted section
    const fetchSSOTData = async (playerName, shipInfo) => {
        try {
            // Get the current hostname and port dynamically
            const protocol = window.location.protocol;
            const hostname = window.location.hostname;
            const port = window.location.port;
            const baseUrl = `${protocol}//${hostname}${port ? ':' + port : ''}`;
            
            const response = await fetch(`${baseUrl}/master/players/state/${playerName}`);
            const data = await response.json();
            
            // Change page title to show data was received
            document.title = `SSOT: ${data.resources?.gold || 0}g ${data.resources?.water || 0}w ${data.resources?.kryptonite || 0}k`;
            
            if (data.resources) {
                // Wait a bit for shipInfo to be initialized, then update
                setTimeout(() => {
                    if (shipInfo.value) {
                        shipInfo.value.collections = data.resources;
                        shipInfo.value.score = data.score;
                        // Change title to show update was applied
                        document.title = `UPDATED: ${data.resources.gold}g ${data.resources.water}w ${data.resources.kryptonite}k`;
                    } else {
                        // Retry after another delay
                        setTimeout(() => {
                            if (shipInfo.value) {
                                shipInfo.value.collections = data.resources;
                                shipInfo.value.score = data.score;
                                document.title = `RETRY: ${data.resources.gold}g ${data.resources.water}w ${data.resources.kryptonite}k`;
                            }
                        }, 2000);
                    }
                }, 1000);
            }
        } catch (error) {
            document.title = 'SSOT ERROR';
        }
    };

    // Define the handler at component scope
    const handleCollectible = (event, score) => {
        // This function will now receive playSound as an argument
        // The actual soundManager.play('collect') call will be handled by the parent
        score.value += event.detail.points;
        console.log('Score updated:', score.value);
    };

    // Create score popup function
    const createScorePopup = (x, y, amount, scorePopups) => {
        const popup = {
            x: x,
            y: y,
            amount: amount,
            opacity: 1,
            id: Date.now()
        };
        scorePopups.push(popup);
        
        // Fix: Correct the popup removal logic
        setTimeout(() => {
            const index = scorePopups.findIndex(p => p.id === popup.id);  // Fix: was !== instead of ===
            if (index > -1) {
                scorePopups.splice(index, 1);
            }
        }, 1000);
    };

    return {
        // State
        gameState,
        
        // Computed properties
        players,
        homePositions,
        resourceFields,
        collectibles,
        bullets,
        status,
        currentPlayer,
        otherPlayers,
        isValidGameState,
        
        // Methods
        updateGameState,
        updatePlayer,
        removePlayer,
        updateCollectibles,
        updateBullets,
        updateHomePositions,
        updateResourceFields,
        logGameState,
        parseHelpContent,
        fetchSSOTData,
        handleCollectible,
        createScorePopup
    };
} 