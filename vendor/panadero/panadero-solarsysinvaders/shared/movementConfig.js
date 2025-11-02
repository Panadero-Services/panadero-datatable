// vendor/panadero/panadero-solarsysinvaders/shared/movementConfig.js

import { GAME_CONFIG } from './gameConfig.js';

export const MOVEMENT_CONFIG = {
    MAX_SPEED: 10,
    ROTATION_SPEED: 0.1,
    FRICTION: 0.999,
    HEALTH: 100,
    SHOOT_DELAY: 200,
    THRUST_POWER: 0.1
};

export const SHIP_CONFIGS = {
    fighter: {
        MAX_SPEED: 10,
        ROTATION_SPEED: 0.1,
        FRICTION: 0.99,
        HEALTH: 50,
        SHOOT_DELAY: 100,
        THRUST_POWER: 0.2
    },
    ufo: {
        MAX_SPEED: 2,
        ROTATION_SPEED: 0.05,
        FRICTION: 0.9995,
        HEALTH: 120,
        SHOOT_DELAY: 300,
        THRUST_POWER: 0.1
    }
    // ... more types
};

// Cache for performance - avoid recalculating same configs
const configCache = new Map();

// Move avg function outside to avoid recreation
const avg = (a, b) => b === undefined ? a : (a + b) / 2;

// Cache base config to avoid repeated lookups
const getBaseConfig = () => ({
    ROTATION_SPEED: MOVEMENT_CONFIG.ROTATION_SPEED,
    THRUST_POWER: MOVEMENT_CONFIG.THRUST_POWER,
    FRICTION: MOVEMENT_CONFIG.FRICTION,
    MAX_SPEED: MOVEMENT_CONFIG.MAX_SPEED,
    SHOOT_DELAY: MOVEMENT_CONFIG.SHOOT_DELAY,
    HEALTH: MOVEMENT_CONFIG.HEALTH
});

/**
 * Returns the averaged config for a given ship type.
 * @param {string} type
 * @returns {object}
 */
export function getShipMovementConfig(type) {
    // Check cache first
    if (configCache.has(type)) {
        return configCache.get(type);
    }
    
    const shipConfig = SHIP_CONFIGS[type] || {};
    const baseConfig = getBaseConfig();
    
    const result = {
        ROTATION_SPEED: avg(baseConfig.ROTATION_SPEED, shipConfig.ROTATION_SPEED),
        THRUST_POWER:   avg(baseConfig.THRUST_POWER,   shipConfig.THRUST_POWER),
        FRICTION:       avg(baseConfig.FRICTION,       shipConfig.FRICTION),
        MAX_SPEED:      avg(baseConfig.MAX_SPEED,      shipConfig.MAX_SPEED),
        SHOOT_DELAY:    avg(baseConfig.SHOOT_DELAY,    shipConfig.SHOOT_DELAY),
        HEALTH:         avg(baseConfig.HEALTH,         shipConfig.HEALTH)
    };
    
    // Cache the result
    configCache.set(type, result);
    return result;
}

/**
 * Calculate border anti-gravity force to push ships toward center
 * @param {number} x - Ship X position
 * @param {number} y - Ship Y position
 * @returns {Object} - Force vector { x, y }
 */
export function calculateBorderForce(x, y) {
    const force = { x: 0, y: 0 };
    
    // Calculate distance from center
    const centerX = 0;
    const centerY = 0;
    const dx = x - centerX;
    const dy = y - centerY;
    
    // Check X-axis borders
    if (x < GAME_CONFIG.WORLD_MIN_X + GAME_CONFIG.BORDER_FORCE_RADIUS) {
        // Near left border - push right
        const distance = GAME_CONFIG.WORLD_MIN_X + GAME_CONFIG.BORDER_FORCE_RADIUS - x;
        const strength = Math.min(
            GAME_CONFIG.BORDER_FORCE_STRENGTH * (distance / GAME_CONFIG.BORDER_FORCE_RADIUS),
            GAME_CONFIG.BORDER_FORCE_MAX
        );
        force.x = strength;
    } else if (x > GAME_CONFIG.WORLD_MAX_X - GAME_CONFIG.BORDER_FORCE_RADIUS) {
        // Near right border - push left
        const distance = x - (GAME_CONFIG.WORLD_MAX_X - GAME_CONFIG.BORDER_FORCE_RADIUS);
        const strength = Math.min(
            GAME_CONFIG.BORDER_FORCE_STRENGTH * (distance / GAME_CONFIG.BORDER_FORCE_RADIUS),
            GAME_CONFIG.BORDER_FORCE_MAX
        );
        force.x = -strength;
    }
    
    // Check Y-axis borders
    if (y < GAME_CONFIG.WORLD_MIN_Y + GAME_CONFIG.BORDER_FORCE_RADIUS) {
        // Near top border - push down
        const distance = GAME_CONFIG.WORLD_MIN_Y + GAME_CONFIG.BORDER_FORCE_RADIUS - y;
        const strength = Math.min(
            GAME_CONFIG.BORDER_FORCE_STRENGTH * (distance / GAME_CONFIG.BORDER_FORCE_RADIUS),
            GAME_CONFIG.BORDER_FORCE_MAX
        );
        force.y = strength;
    } else if (y > GAME_CONFIG.WORLD_MAX_Y - GAME_CONFIG.BORDER_FORCE_RADIUS) {
        // Near bottom border - push up
        const distance = y - (GAME_CONFIG.WORLD_MAX_Y - GAME_CONFIG.BORDER_FORCE_RADIUS);
        const strength = Math.min(
            GAME_CONFIG.BORDER_FORCE_STRENGTH * (distance / GAME_CONFIG.BORDER_FORCE_RADIUS),
            GAME_CONFIG.BORDER_FORCE_MAX
        );
        force.y = -strength;
    }
    
    return force;
}