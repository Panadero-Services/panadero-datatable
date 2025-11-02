// vendor/panadero/panadero-solarsysinvaders/shared/collectibles.js

import { GAME_CONFIG } from './gameConfig.js';

/**
 * Collectible spawn timing configuration
 */
export const COLLECTIBLE_SPAWN_TIME = {
    MIN: 500,   // 5.0 seconds
    MAX: 600    // 6.0 seconds
};

/**
 * List of collectible types and their properties.
 */
export const COLLECTIBLE_TYPES = [
    { 
        type: 'gold',
        color: '#FFD700',
        points: 100, 
        radius: 15,
        shape: 'star'  // ★ shape
    },
    { 
        type: 'water', 
        color: '#00FFFF',
        points: 200,
        radius: 15,
        shape: 'droplet'  // 💧 shape
    },
    { 
        type: 'kryptonite',
        color: '#FF00FF',
        points: 300,
        radius: 15,
        shape: 'crystal'  // ♦ shape
    }
];

/**
 * Pick a random collectible type.
 */
export function getRandomCollectibleType() {
    const idx = Math.floor(Math.random() * COLLECTIBLE_TYPES.length);
    return COLLECTIBLE_TYPES[idx];
}

/**
 * Generate a random collectible position within given bounds.
 */
export function getRandomCollectiblePosition(minX, maxX, minY, maxY) {
    return {
        x: Math.floor(Math.random() * (maxX - minX)) + minX,
        y: Math.floor(Math.random() * (maxY - minY)) + minY
    };
}

/**
 * Field configuration
 */
export const FIELD_CONFIG = {
    COUNT: 3,
    RADIUS: 1000,
    MAX_PER_FIELD: 20,
    MIN_FIELD_DISTANCE: 4000  // Move this here from WORLD_CONFIG
};

/**
 * Check if a field position is valid (not too close to existing fields).
 */
export function isValidFieldPosition(x, y, existingFields) {
    for (const field of existingFields.values()) {
        const dx = x - field.x;
        const dy = y - field.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < FIELD_CONFIG.MIN_FIELD_DISTANCE) {  // Updated reference
            return false;
        }
    }
    return true;
}

/**
 * Create or update a resource field.
 */
export function createOrUpdateField(fieldId, resourceFields) {
    let x, y;
    if (fieldId === 0) { // Fixed position for testing
        x = 2000;
        y = 2000;
    } else { // Keep other fields random within new bounds
        do {
            x = Math.random() * GAME_CONFIG.WORLD_WIDTH - GAME_CONFIG.WORLD_WIDTH/2;
            y = Math.random() * GAME_CONFIG.WORLD_HEIGHT - GAME_CONFIG.WORLD_HEIGHT/2;
        } while (!isValidFieldPosition(x, y, resourceFields));
    }

    // Cap coordinates at 35000
    x = Math.max(-35000, Math.min(35000, x));
    y = Math.max(-35000, Math.min(35000, y));

    const field = {
        id: fieldId,
        x: x,
        y: y,
        radius: FIELD_CONFIG.RADIUS,
        lastUpdate: Date.now()
    };

    resourceFields.set(fieldId, field);
    
    // Log field coordinates
    console.debug(`🗺️ Field ${fieldId} created at coordinates: x=${Math.round(x)}, y=${Math.round(y)}`);
    
    return field;
}

/**
 * Spawn a collectible in a field.
 */
export function spawnCollectibleInField(field, gameStateCollectibles, maxPerField = FIELD_CONFIG.MAX_PER_FIELD) {
    // Count existing collectibles in this field
    const fieldCollectibles = Array.from(gameStateCollectibles.values())
        .filter(c => {
            const dx = c.x - field.x;
            const dy = c.y - field.y;
            return Math.sqrt(dx * dx + dy * dy) <= field.radius;
        });

    // Apply field-specific multipliers
    let adjustedMaxPerField = maxPerField;
    if (field.id === 1) { // Field 1 (0-indexed, so field.id === 1)
        adjustedMaxPerField = maxPerField * 3;
    } else if (field.id === 2) { // Field 2 (0-indexed, so field.id === 2)
        adjustedMaxPerField = maxPerField * 5;
    }

    // Only spawn if under adjusted max
    if (fieldCollectibles.length < adjustedMaxPerField) {
        // Random angle
        const angle = Math.random() * Math.PI * 2;
        
        // Use squared random for distance to favor center
        const centerBias = Math.pow(Math.random(), 3);
        const distance = centerBias * field.radius;
        
        // Pick random collectible type
        const type = getRandomCollectibleType();
        
        const collectible = {
            id: 'collectible_' + Date.now(),
            x: field.x + Math.cos(angle) * distance,
            y: field.y + Math.sin(angle) * distance,
            ...type,
            createdAt: Date.now()
        };

        return collectible;
    }
    
    return null; // No spawn needed
}

/**
 * Calculate points for collecting a collectible, including streak bonus.
 * @param {string} type - The collectible type.
 * @param {Array} streakArr - The player's current streak array.
 * @returns {number} - Total points for this collection.
 */
export function calculatePoints(type, streakArr) {
    // Check if we're in a streak for this type (last 4)
    const hasStreak = streakArr.length >= 4 && 
                      streakArr.slice(-4).every(item => item === type);

    // Base points
    let points = type === 'gold' ? 3 : 1;
    
    // If in a streak, add bonus to the base value
    if (hasStreak) {
        points += 10;  // Now water will be worth 11, gold 13, kryptonite 11
    }

    return points;
}

/**
 * Collect a collectible and update streak, collections, and score.
 * @param {Object} player - The player object (must have streak, collections, score).
 * @param {Object} collectible - The collectible object (must have type).
 * @returns {Object} - Updated player state and collection result.
 */
export function collectItem(player, collectible) {
    const lastCollected = player.streak[player.streak.length - 1];
    const isSameType = collectible.type === lastCollected;

    // First add new collection
    if (!isSameType) {
        player.streak = [];
    }
    player.streak.push(collectible.type);

    // NOW check for streak AFTER adding 5th element
    const hasStreak = player.streak.length === 5 && 
                      player.streak.every(item => item === collectible.type);

    // Calculate points including bonus if streak
    const basePoints = collectible.type === 'gold' ? 3 : 1;
    const bonus = hasStreak ? 10 : 0;
    const total = basePoints + bonus;

    // Clear streak after bonus awarded
    if (hasStreak) {
        // Add bonus to the collectible count
        player.collections[collectible.type] += 10;  // Add bonus to collection
        player.streak = [];  // Clear streak
    }

    // Update collections and score
    player.collections[collectible.type]++;
    player.score += total;

    return {
        score: player.score,
        collections: player.collections,
        streak: [...player.streak],
        hasStreak,
        bonus,
        total
    };
}

export function checkStreak(streakArr, type) {
    // MUST have exactly 5 in a row of same type
    const hasStreak = streakArr.length === 5 && 
                      streakArr.every(item => item === type);

    // Points calculation MUST match streak status
    const basePoints = type === 'gold' ? 3 : 1;
    const bonus = hasStreak ? 10 : 0;

    return {
        hasStreak,
        bonus,
        total: basePoints + bonus
    };
}

/**
 * Schedule the next collectible spawn with random timing.
 * @param {Object} gameState - The game state object (must have collectibles).
 * @param {Map} resourceFields - The resource fields map.
 * @param {Function} onCollectibleSpawned - Callback when a collectible is spawned.
 */
export function scheduleNextSpawn(gameState, resourceFields, onCollectibleSpawned = null) {
    const delay = Math.random() * (COLLECTIBLE_SPAWN_TIME.MAX - COLLECTIBLE_SPAWN_TIME.MIN) 
                 + COLLECTIBLE_SPAWN_TIME.MIN;
    
    setTimeout(() => {
        const fieldId = Math.floor(Math.random() * FIELD_CONFIG.COUNT);
        const field = resourceFields.get(fieldId);
        
        const newCollectible = spawnCollectibleInField(field, gameState.collectibles);
        if (newCollectible) {
            gameState.collectibles.set(newCollectible.id, newCollectible);
            
            // Optional callback for server-specific logic (e.g., emit to clients)
            if (onCollectibleSpawned) {
                onCollectibleSpawned(newCollectible);
            }
        }
        
        // Recursively schedule the next spawn
        scheduleNextSpawn(gameState, resourceFields, onCollectibleSpawned);
    }, delay);
}

/**
 * Check all collectible collisions for all players.
 * @param {Map} players - Game state players map.
 * @param {Map} collectibles - Game state collectibles map.
 * @param {Function} onCollectibleCollision - Callback when a collectible is collected.
 */
export function checkAllCollectibleCollisions(players, collectibles, onCollectibleCollision) {
    for (const [playerId, player] of players) {
        if (!player || !player.ship) continue;
        
        for (const [collectibleId, collectible] of collectibles) {
            if (checkCollectibleCollision(player.ship, collectible)) {
                const ship = player.ship;
                const result = collectItem(ship, collectible);
                
                // Remove collectible
                collectibles.delete(collectibleId);
                
                // Call callback with result
                onCollectibleCollision(playerId, result, collectible);
            }
        }
    }
}
