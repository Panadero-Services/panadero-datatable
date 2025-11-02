/**
 * Basic chat functionality for the game
 */

// Chat message types
export const CHAT_TYPES = {
    GLOBAL: 'global',
    TEAM: 'team',
    SYSTEM: 'system'
};

/**
 * Format a chat message
 * @param {string} content - Message content
 * @param {string} sender - Sender's callsign
 * @param {string} color - Sender's team color
 * @returns {Object} Formatted message
 */
export function formatMessage(content, sender, color) {
    return {
        content,
        sender,
        color,
        type: CHAT_TYPES.GLOBAL,
        timestamp: Date.now()
    };
}

/**
 * Create a system message
 * @param {string} content - System message content
 * @returns {Object} System message
 */
export function createSystemMessage(content) {
    return {
        content,
        type: CHAT_TYPES.SYSTEM,
        timestamp: Date.now()
    };
}

