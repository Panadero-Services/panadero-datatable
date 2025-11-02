import { GAME_CONFIG } from '../../../shared/gameConfig.js';

// Field management utilities
export function useGameUtils() {
    
    // Check if position is valid for new field
    const isValidFieldPosition = (x, y, existingFields) => {
        for (const field of existingFields.values()) {
            const dx = x - field.x;
            const dy = y - field.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < GAME_CONFIG.FIELD.MIN_DISTANCE) {
                return false;
            }
        }
        return true;
    };

    // Create field at valid position
    const createOrUpdateField = (fieldId, resourceFields) => {
        let x, y;
        do {
            x = GAME_CONFIG.WORLD_MIN_X + Math.random() * GAME_CONFIG.WORLD_WIDTH;
            y = GAME_CONFIG.WORLD_MIN_Y + Math.random() * GAME_CONFIG.WORLD_HEIGHT;
        } while (!isValidFieldPosition(x, y, resourceFields));

        resourceFields.set(fieldId, {
            id: fieldId,
            x: x,
            y: y,
            radius: GAME_CONFIG.FIELD.RADIUS,
            innerRadius: GAME_CONFIG.FIELD.INNER_RADIUS,
            lastUpdate: Date.now()
        });

        // Log field position
        console.log(`Resource Field ${fieldId} positioned at:`, {
            x: Math.round(x),
            y: Math.round(y),
            timestamp: new Date().toISOString()
        });
    };

    // Spawn collectibles within field
    const spawnCollectible = (field, gameState, COLLECTIBLE_TYPES) => {
        // Count existing collectibles
        const fieldCollectibles = Array.from(gameState?.collectibles?.values() || [])
            .filter(c => {
                const dx = c.x - field.x;
                const dy = c.y - field.y;
                return Math.sqrt(dx * dx + dy * dy) <= field.radius;
            });

        const innerCollectibles = fieldCollectibles.filter(c => {
            const dx = c.x - field.x;
            const dy = c.y - field.y;
            return Math.sqrt(dx * dx + dy * dy) <= field.innerRadius;
        });

        // Only spawn if field isn't full
        if (fieldCollectibles.length < GAME_CONFIG.FIELD.MAX_COLLECTIBLES.TOTAL) {
            // Decide spawn radius (inner or outer)
            const useInnerRadius = innerCollectibles.length < GAME_CONFIG.FIELD.MAX_COLLECTIBLES.INNER;
            const spawnRadius = useInnerRadius ? field.innerRadius : field.radius;
            
            // Random angle and adjusted distance (more likely closer to center)
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.pow(Math.random(), 1.5) * spawnRadius;  // Power makes center more likely
            
            // Random collectible type
            const type = COLLECTIBLE_TYPES[Math.floor(Math.random() * COLLECTIBLE_TYPES.length)];
            
            const collectible = {
                id: 'collectible_' + Date.now(),
                x: field.x + Math.cos(angle) * distance,
                y: field.y + Math.sin(angle) * distance,
                ...type,
                createdAt: Date.now()
            };

            gameState?.collectibles?.set(collectible.id, collectible);
        }
    };

    // World to screen coordinate conversion
    const worldToScreen = (worldX, worldY, camera) => {
        const screenX = (worldX - camera.x) * camera.scale + GAME_CONFIG.CANVAS_WIDTH / 2;
        const screenY = (worldY - camera.y) * camera.scale + GAME_CONFIG.CANVAS_HEIGHT / 2;
        return { x: screenX, y: screenY };
    };

    // Check if position is in safe zone
    const isInSafeZone = (x, y, gameState) => {
        if (!gameState?.homePositions) return false;
        
        for (const [homeId, homePos] of Object.entries(gameState.homePositions)) {
            const dx = Math.abs(x - homePos.x);
            const dy = Math.abs(y - homePos.y);
            // Check if position is within safe zone (300 units)
            if (dx <= 150 && dy <= 150) { // 300/2 = 150 units from center
                return true;
            }
        }
        return false;
    };

    return {
        isValidFieldPosition,
        createOrUpdateField,
        spawnCollectible,
        worldToScreen,
        isInSafeZone
    };
} 