// vendor/panadero/panadero-solarsysinvaders/server/composables/useGameStateManagement.js

// Import required dependencies
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
} from '../../shared/collectibles.js';
import { isInRange } from '../../shared/collision.js';

// Constants
const VISIBILITY_RANGE = 1000;
const BLACK_HOLE_CONFIG = {
    COUNT: 1,
    POSITIONS: [
        { x: -1000, y: -1000 }
    ]
};

export function useGameStateManagement() {
    // Game state
    const gameState = {
        collectibles: new Map(),
        lastUpdate: Date.now()
    };

    // Resource fields storage
    const resourceFields = new Map();

    // Black holes storage
    const blackHoles = new Map();

    // Initialize resource fields
    const initializeResourceFields = () => {
        console.log('\n=== Initializing Resource Fields ===');
        for (let i = 0; i < FIELD_CONFIG.COUNT; i++) {
            createOrUpdateField(i, resourceFields);
        }
    };

    // Initialize black holes
    const initializeBlackHoles = () => {
        console.log('\n=== Initializing Black Holes ===');
        for (let i = 0; i < BLACK_HOLE_CONFIG.COUNT; i++) {
            blackHoles.set(`bh${i}`, {
                id: `bh${i}`,
                x: BLACK_HOLE_CONFIG.POSITIONS[i].x,
                y: BLACK_HOLE_CONFIG.POSITIONS[i].y
            });
        }
        console.log('Black holes initialized:', Object.fromEntries(blackHoles));
    };

    // Schedule next collectible spawn
    const scheduleNextCollectibleSpawn = (callback) => {
        scheduleNextSpawn(gameState, resourceFields, callback);
    };

    // Get visible collectibles for a player
    const getVisibleCollectibles = (playerX, playerY) => {
        const visibleCollectibles = {};
        for (const [collectibleId, collectible] of gameState.collectibles) {
            if (isInRange(playerX, playerY, collectible.x, collectible.y, VISIBILITY_RANGE)) {
                visibleCollectibles[collectibleId] = collectible;
            }
        }
        return visibleCollectibles;
    };

    // Get visible black holes for a player
    const getVisibleBlackHoles = (playerX, playerY) => {
        const visibleBlackHoles = {};
        for (const [blackHoleId, blackHole] of blackHoles) {
            if (isInRange(playerX, playerY, blackHole.x, blackHole.y, VISIBILITY_RANGE)) {
                visibleBlackHoles[blackHoleId] = blackHole;
            }
        }
        return visibleBlackHoles;
    };

    // Get all black holes (for debugging)
    const getAllBlackHoles = () => {
        return Object.fromEntries(blackHoles);
    };

    // Get all collectibles (for debugging)
    const getAllCollectibles = () => {
        return Object.fromEntries(gameState.collectibles);
    };

    // Get resource fields (for debugging)
    const getResourceFields = () => {
        return resourceFields;
    };

    // Update game state timestamp
    const updateTimestamp = () => {
        gameState.lastUpdate = Date.now();
    };

    // Get game state timestamp
    const getLastUpdate = () => {
        return gameState.lastUpdate;
    };

    // Initialize everything
    const initialize = () => {
        initializeResourceFields();
        initializeBlackHoles();
    };

    return {
        gameState,
        resourceFields,
        blackHoles,
        initialize,
        scheduleNextCollectibleSpawn,
        getVisibleCollectibles,
        getVisibleBlackHoles,
        getAllBlackHoles,
        getAllCollectibles,
        getResourceFields,
        updateTimestamp,
        getLastUpdate
    };
}