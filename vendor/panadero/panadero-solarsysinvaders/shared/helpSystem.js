// vendor/panadero/panadero-solarsysinvaders/shared/helpSystem.js

import { GAME_CONFIG } from './gameConfig.js';
import { MOVEMENT_CONFIG, SHIP_CONFIGS } from './movementConfig.js';
import { COLLECTIBLE_TYPES, FIELD_CONFIG } from './collectibles.js';

/**
 * Get comprehensive help information for the game
 * @param {string} category - Optional category filter
 * @param {Object} gameServerInfo - Game server information
 * @returns {Object} - Formatted help information
 */
export function getGameHelp(category = 'all', gameServerInfo = {}) {
    const helpData = {
        world: {
            title: "🌌 World Information",
            content: {
                "World Size": `${GAME_CONFIG.WORLD_WIDTH.toLocaleString()} × ${GAME_CONFIG.WORLD_HEIGHT.toLocaleString()} units`,
                "Coordinate Range": `X: ${GAME_CONFIG.WORLD_MIN_X.toLocaleString()} to ${GAME_CONFIG.WORLD_MAX_X.toLocaleString()}`,
                "Coordinate Range": `Y: ${GAME_CONFIG.WORLD_MIN_Y.toLocaleString()} to ${GAME_CONFIG.WORLD_MAX_Y.toLocaleString()}`,
                "Border Force Radius": `${GAME_CONFIG.BORDER_FORCE_RADIUS.toLocaleString()} units`,
                "Border Force Strength": `${GAME_CONFIG.BORDER_FORCE_STRENGTH}`,
                "Max Border Force": `${GAME_CONFIG.BORDER_FORCE_MAX}`
            }
        },
        
        ships: {
            title: "🚀 Ship Types & Movement",
            content: {
                "Available Ships": Object.keys(SHIP_CONFIGS).join(", "),
                "Default Rotation Speed": `${MOVEMENT_CONFIG.ROTATION_SPEED}`,
                "Default Thrust Power": `${MOVEMENT_CONFIG.THRUST_POWER}`,
                "Default Friction": `${MOVEMENT_CONFIG.FRICTION}`,
                "Default Max Speed": `${MOVEMENT_CONFIG.MAX_SPEED}`,
                "Default Health": `${MOVEMENT_CONFIG.HEALTH}`,
                "Default Shoot Delay": `${MOVEMENT_CONFIG.SHOOT_DELAY}ms`
            }
        },
        
        collectibles: {
            title: "💎 Collectibles & Scoring",
            content: {
                "Available Types": COLLECTIBLE_TYPES.map(c => c.type).join(", "),
                "Field Count": `${FIELD_CONFIG.COUNT}`,
                "Max Per Field": `${FIELD_CONFIG.MAX_PER_FIELD}`,
                "Field Radius": `${FIELD_CONFIG.RADIUS} units`,
                "Streak Bonus": "10 points for 5 of same type",
                "Gold Base Points": "3 points",
                "Water Base Points": "1 point", 
                "Kryptonite Base Points": "1 point"
            }
        },
        
        controls: {
            title: "🎮 Controls",
            content: {
                "Rotate Left": "A or Left Arrow",
                "Rotate Right": "D or Right Arrow", 
                "Thrust": "W or Up Arrow",
                "Shoot": "Spacebar",
                "Chat": "Enter",
                "Help": "/help [category]"
            }
        },
        
        commands: {
            title: "💬 Chat Commands",
            content: {
                "/help": "Show this help menu",
                "/help world": "World and border information",
                "/help ships": "Ship types and movement",
                "/help collectibles": "Collectibles and scoring",
                "/help controls": "Game controls",
                "/help commands": "Available chat commands",
                "/help master": "Master Game Server information",
                "/help architecture": "System architecture details",
                "/help features": "Master Server features breakdown"
            }
        },

        master: {
            title: "🏗️ Master Game Server",
            content: {
                "Overview": "Centralized game state management system",
                "Purpose": "Manages persistent game state, scores, and leaderboards",
                "Architecture": "Separate from real-time game servers",
                "Data Storage": "Database persistence for scores and statistics",
                "Real-time Updates": "Broadcasts score updates to all players",
                "Leaderboards": "Daily, weekly, monthly, and all-time rankings",
                "Player Stats": "Individual player statistics and rankings",
                "Global Stats": "Server-wide game statistics",
                "Health Monitoring": "Server status and performance metrics",
                "Integration": "Works with multiple game servers simultaneously",
                "Player Management": "Separate Player model from User framework",
                "Resource System": "Cross-world resource persistence",
                "World Transfers": "Seamless warping between game servers"
            }
        },

        architecture: {
            title: "🏗️ System Architecture",
            content: {
                "Game Servers": "Handle real-time multiplayer gameplay",
                "Master Server": "Manages persistent game state and statistics",
                "Data Flow": "Game Server → Master Server → Database",
                "Score Submission": "Automatic when games end",
                "Leaderboard Updates": "Real-time broadcasting to all players",
                "Player Tracking": "Global statistics across all servers",
                "Caching": "5-minute leaderboard cache for performance",
                "Health Checks": "Continuous server monitoring",
                "Scalability": "Supports multiple game servers",
                "Single Source of Truth": "Master Server for all game state",
                "Player Model": "Separate from Laravel User framework",
                "Resource Persistence": "Resources carry over between worlds",
                "Session Management": "Track player location across worlds"
            }
        },

        features: {
            title: "✨ Master Server Features",
            content: {
                "Backend (Laravel)": "MasterGameServerController for centralized management",
                "Score Tracking": "Database persistence with validation",
                "Leaderboards": "Cached rankings with timeframe filters",
                "Player Statistics": "Individual stats and global rankings",
                "Global Statistics": "Server-wide game metrics",
                "Health Monitoring": "Uptime, memory, and connection tracking",
                "Real-time Broadcasting": "Score updates via events",
                "Frontend (Vue.js)": "useMasterGameServerStore for state management",
                "UI Component": "MasterGameServerPanel with collapsible interface",
                "Auto-refresh": "30-second periodic state updates",
                "World Management": "Register and monitor game servers",
                "Player Sessions": "Track who is playing where",
                "Resource System": "Manage player resources across worlds",
                "World Transfers": "Handle cross-world warping",
                "Event System": "Create and manage world events"
            }
        }
    };

    // Add game server info to the world section
    if (gameServerInfo.url) {
        helpData.world.content["Active Game Server"] = gameServerInfo.url;
        helpData.world.content["Connection Status"] = gameServerInfo.status || "Connected";
        helpData.world.content["Socket ID"] = gameServerInfo.socketId || "N/A";
    }

    // Return specific category or all
    if (category !== 'all' && helpData[category]) {
        return {
            [category]: helpData[category]
        };
    }
    
    return helpData;
}

/**
 * Format help data for display
 * @param {Object} helpData - Help information
 * @returns {string} - Formatted text for display
 */
export function formatHelpText(helpData) {
    let formatted = "";
    
    Object.values(helpData).forEach(section => {
        formatted += `\n${section.title}\n`;
        formatted += "─".repeat(section.title.length) + "\n";
        
        Object.entries(section.content).forEach(([key, value]) => {
            formatted += `${key}: ${value}\n`;
        });
        formatted += "\n";
    });
    
    return formatted.trim();
}

/**
 * Check if a message is a help command
 * @param {string} message - Chat message
 * @param {Object} gameServerInfo - Game server information
 * @returns {Object|null} - Help data if it's a help command
 */
export function parseHelpCommand(message, gameServerInfo = {}) {
    const helpMatch = message.match(/^\/help(?:\s+(\w+))?$/i);
    if (!helpMatch) return null;
    
    const category = helpMatch[1] || 'all';
    const helpData = getGameHelp(category, gameServerInfo);
    
    return {
        type: 'help',
        category: category,
        data: helpData,
        formatted: formatHelpText(helpData)
    };
}