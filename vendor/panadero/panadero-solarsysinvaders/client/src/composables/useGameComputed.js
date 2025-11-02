export function useGameComputed() {
    
    // Add computed property for info items
    const createInfoItems = (shipInfo, inSafeZone, padString, formatNumber) => [
        {
            label: 'CallSign',
            value: () => padString(shipInfo.value.callSign, 6)
        },
        {
            label: 'Health',
            value: () => `${formatNumber(shipInfo.value.health, 3)}/${formatNumber(shipInfo.value.maxHealth, 3)}`
        },
        {
            label: 'Position',
            value: () => `${formatNumber(shipInfo.value.position.x, 6)}, ${formatNumber(shipInfo.value.position.y, 6)}`
        },
        {
            label: 'Angle',
            value: () => `${formatNumber(shipInfo.value.angle, 6)}°`
        },
        {
            label: 'Velocity',
            value: () => `${formatNumber(shipInfo.value.velocity.x, 6)}, ${formatNumber(shipInfo.value.velocity.y, 6)}`
        },
        {
            label: 'Home',
            value: () => `${formatNumber(shipInfo.value.home.x, 6)}, ${formatNumber(shipInfo.value.home.y, 6)}`
        },
        {
            label: 'Score',
            value: () => formatNumber(shipInfo.value.score, 6)
        },
        {
            label: 'Pattern',
            value: () => padString(shipInfo.value.pattern, 6)
        },
        {
            label: 'Team',
            value: () => padString(shipInfo.value.color, 6),
            valueStyle: () => ({ 
                backgroundColor: shipInfo.value.color,
                width: '10px',
                height: '10px',
                display: 'inline-block',
                marginLeft: '4px',
                borderRadius: '2px'
            })
        },
        {
            label: 'Safe Zone',
            value: () => inSafeZone.value ? 'Yes' : 'No',
            valueClass: 'text-green-600'
        }
    ];

    // Add computed for filtered content
    const createFilteredContent = (helpContent, selectedHelpSection) => {
        const sections = parseHelpContent(helpContent.value);
        return sections[selectedHelpSection.value]?.join('\n') || '';
    };

    // Add this computed property to get game server information
    const createGameServerInfo = (socket, props, gameState) => {
        if (!socket.value) {
            return {
                url: props.serverUrl || 'Not configured',
                status: 'Disconnected',
                socketId: null,
                playerCount: 0,
                transport: 'None',
                reconnection: false
            };
        }

        return {
            url: props.serverUrl || socket.value.io.uri,
            status: socket.value.connected ? 'Connected' : 'Disconnected',
            socketId: socket.value.id,
            playerCount: Object.keys(gameState.value?.players || {}).length,
            transport: socket.value.io.engine.transport.name,
            reconnection: socket.value.io.opts.reconnection
        };
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

    // Add the missing parseHelpCommand function
    const parseHelpCommand = (content, gameServerInfo) => {
        if (!content || !content.startsWith('/help')) return null;
        
        const parts = content.split(' ');
        const category = parts[1] || 'general';
        
        // Create formatted help content based on category
        const helpContent = {
            general: `Game Server Information:
URL: ${gameServerInfo.url}
Status: ${gameServerInfo.status}
Players: ${gameServerInfo.playerCount}
Transport: ${gameServerInfo.transport}`,
            
            controls: `Controls:
Arrow Keys - Move ship
Space - Shoot
H - Warp to home
T - Test sounds`,
            
            commands: `Chat Commands:
/help [category] - Show help for category
/status - Show server status`
        };
        
        return {
            category,
            formatted: helpContent[category] || helpContent.general
        };
    };

    return {
        createInfoItems,
        createFilteredContent,
        createGameServerInfo,
        parseHelpContent,
        parseHelpCommand
    };
} 