<script setup>
import { ref, computed } from 'vue';
import { GAME_CONFIG } from '../../../../shared/gameConfig.js';

const props = defineProps({
    show: Boolean,
    content: String
});

const emit = defineEmits(['close']);

const selectedHelpSection = ref('world');

const helpSections = {
    about: '🎯 About SolarSys',
    quickstart: '🚀 Quick Start',
    world: '🌌 World Information',
    ships: '🛸 Ships & Weapons',
    resources: '💎 Resource Fields',
    tactics: '⚔️ Tactics & Strategy',
    controls: '🎮 Controls',
    commands: '💬 Chat Commands',
    master: '🏗️ Master Game Server',
    architecture: '🏗️ System Architecture',
    features: '✨ Master Server Features',
    technology: '🔧 Technology Stack',
    roadmap: '🗺️ Roadmap'
};

function parseHelpContent(content) {
    if (!content) return '';
    
    const sections = {
        about: [
            '🎯 About SolarSys',
            '───────────────',
            'SolarSys is a multiplayer space game where players pilot ships in a vast universe.',
            'It is an open-world strategy 2D space game that combines NFT exploration, economic simulation, and team combat gameplay.', 
            'Players can explore the solar system to collect NFTs and resources while engaging in tactical space battles.',
            'Compete or cooperate with other players to gather resources and control territory.',
            '',
            'Key Features:',
            '• Team-based gameplay with different colored ships',
            '• Multi-layer canvas rendering system',
            '• MetaMask wallet integration',
            '• NFT Crypto earnings',
            '• Safe zones for protection and regrouping',
            '• Resource management system (RTS-game)',
            '• Real-time militplayer combat and resource competition',
            '• Team chat and coordination',
            '• Scalable innovative multiserver (any1 can run a server!)'
        ],

        quickstart: [
            '🚀 Quick Start Guide',
            '───────────────',
            'Getting Started:',
            '1. Choose your starting position',
            '2. Learn basic controls (Arrow keys + Space)',
            '3. Find your team (same colored ships)',
            '4. Locate nearest resource field',
            '',
            'First Steps:',
            '• Stay near your safe zone initially',
            '• Practice movement and shooting',
            '• Collect easy resources',
            '• Team up with nearby allies'
        ],

        master: [
            '🏗️ Master Game Server',
            '───────────────',
            'Overview:',
            'The Master Game Server is a centralized game state management system that handles all persistent data, scores, and statistics.',
            '',
            'Purpose:',
            '• Manages persistent game state, scores, and leaderboards',
            '• Separate from real-time game servers',
            '• Database persistence for scores and statistics',
            '• Real-time updates broadcasting to all players',
            '',
            'Features:',
            '• Daily, weekly, monthly, and all-time leaderboards',
            '• Individual player statistics and rankings',
            '• Server-wide game statistics',
            '• Health monitoring and performance metrics',
            '• Integration with multiple game servers',
            '',
            'How It Works:',
            '• Game servers handle real-time multiplayer gameplay',
            '• Master server manages persistent game state',
            '• Automatic score submission when games end',
            '• Real-time leaderboard updates',
            '• Global statistics across all servers'
        ],

        architecture: [
            '🏗️ System Architecture',
            '───────────────',
            'Game Servers:',
            '• Handle real-time multiplayer gameplay',
            '• Manage ship movement, collisions, and combat',
            '• Process player inputs and game state',
            '',
            'Master Server:',
            '• Manages persistent game state and statistics',
            '• Database storage for scores and player data',
            '• Leaderboard calculations and caching',
            '',
            'Data Flow:',
            '• Game Server → Master Server → Database',
            '• Automatic score submission when games end',
            '• Real-time broadcasting to all players',
            '• Global statistics across all servers',
            '',
            'Performance:',
            '• 5-minute leaderboard cache for performance',
            '• Continuous server monitoring',
            '• Supports multiple game servers',
            '• Single source of truth for all game state'
        ],

        features: [
            '✨ Master Server Features',
            '───────────────',
            'Backend (Laravel):',
            '• MasterGameServerController for centralized management',
            '• Score tracking with database persistence',
            '• Cached rankings with timeframe filters',
            '• Health monitoring and performance tracking',
            '',
            'Frontend (Vue.js):',
            '• useMasterGameServerStore for state management',
            '• MasterGameServerPanel with collapsible interface',
            '• 30-second periodic state updates',
            '• Automatic initialization on game load',
            '',
            'Real-time Features:',
            '• Score updates via events',
            '• Leaderboard broadcasting',
            '• Player statistics updates',
            '• Server health monitoring',
            '',
            'Integration:',
            '• Works with multiple game servers',
            '• Automatic score submission',
            '• Global player tracking',
            '• Cross-server statistics'
        ],

        technology: [
            '🔧 Technology Stack',
            '───────────────',
            'Framework:',
            'SolarSys uses the innovative indigo3 framework with its enhanced gameserver technologies, providing a robust foundation for:',
            '',
            '🤖 AI & Machine Learning:',
            '───────────────',
            'Advanced Game Intelligence:',
            '• Predictive Analytics',
            '  - Resource field optimization',
            '  - Player behavior analysis',
            '  - Dynamic difficulty adjustment',
            '',
            '• Intelligent Forecasting',
            '  - Resource spawn predictions',
            '  - Player activity patterns',
            '  - Server load management',
            '',
            '• Smart Detection Systems',
            '  - Anomaly detection',
            '  - Anti-cheat measures',
            '  - Performance optimization',
            '',
            '• AI Support Systems',
            '  - In-game AI assistants',
            '  - Strategy recommendations',
            '  - Team composition analysis',
            '',
            '⛓️ Web3 & Blockchain:',
            '───────────────',
            '• Smart Contracts',
            '  - Automated rewards distribution',
            '  - Tournament prize pools',
            '  - Resource trading system',
            '',
            '• Blockchain Features',
            '  - On-chain game events',
            '  - Transparent leaderboards',
            '  - Asset ownership verification',
            '',
            '• Decentralized Systems',
            '  - Player identity management',
            '  - Cross-game asset portability',
            '  - DAO governance integration',
            '',
            '🤖 Cloud-Native Bots:',
            '───────────────',
            '• Architecture',
            '  - Microservices design',
            '  - Real-time data processing',
            '  - Scalable bot infrastructure',
            '',
            '• Components:',
            '  - API-Providers: Data input handling',
            '  - Processors: Strategy execution',
            '  - Executors: Action implementation',
            '',
            '• Features:',
            '  - Real-time synchronization',
            '  - Offline-first capabilities',
            '  - Continuous improvement system',
            '',
            'Integration Benefits:',
            '───────────────',
            '• Enhanced Gameplay',
            '  - Smart matchmaking',
            '  - Dynamic world events',
            '  - Adaptive difficulty',
            '',
            '• Player Experience',
            '  - Personalized assistance',
            '  - Fair play enforcement',
            '  - Seamless interactions',
            '',
            '• Economic System',
            '  - Transparent transactions',
            '  - Automated rewards',
            '  - Market stabilization',
            '',
            'Future Development:',
            '• AI model improvements',
            '• New blockchain features',
            '• Enhanced bot capabilities',
            '• Cross-platform integration'
        ],

        world: [
            '🌌 World Information',
            '────────────────────',
            'The game world uses a centered coordinate system with border anti-gravity to create natural boundaries and prevent ships from getting lost.',
            '',
            'Default Dimensions:',
            `• Size: <span style="color: chartreuse">${GAME_CONFIG.WORLD_WIDTH.toLocaleString()}</span> × <span style="color: chartreuse">${GAME_CONFIG.WORLD_HEIGHT.toLocaleString()}</span> units`,
            `• X Range: <span style="color: chartreuse">${GAME_CONFIG.WORLD_MIN_X.toLocaleString()}</span> to <span style="color: chartreuse">${GAME_CONFIG.WORLD_MAX_X.toLocaleString()}</span>`,
            `• Y Range: <span style="color: chartreuse">${GAME_CONFIG.WORLD_MIN_Y.toLocaleString()}</span> to <span style="color: chartreuse">${GAME_CONFIG.WORLD_MAX_Y.toLocaleString()}</span>`,
            '',
            'Border Anti-Gravity:',
            `• Force Radius: <span style="color: chartreuse">${GAME_CONFIG.BORDER_FORCE_RADIUS.toLocaleString()}</span> units`,
            `• Force Strength: <span style="color: chartreuse">${GAME_CONFIG.BORDER_FORCE_STRENGTH}</span>`,
            `• Max Force: <span style="color: chartreuse">${GAME_CONFIG.BORDER_FORCE_MAX}</span>`,
            '',
            'How It Works:',
            '────────────',
            '• Core Zone: Ships move freely in the main play area without any border effects',
            '',
            '• Border Zone: Within 5000 units of any border, anti-gravity force activates and increases as ships approach the edge',
            '',
            'Benefits:',
            '────────',
            '• Creates smooth, natural boundaries without hard walls or collisions',
            '',
            '• Automatically guides lost ships back to the playable area',
            '',
            '• Provides gradual force application for better control and gameplay feel',
            '',
            'Strategic Tips:',
            '────────────',
            '• Use border force for quick turns',
            '• Plan escape routes near edges',
            '• Consider borders for combat tactics',
            '',

        ],

        ships: [],  // Will be filled from server content
        resources: [
            '💎 Resource Fields',
            '───────────────',
            'Field Types:',
            '• Gold (3 points) - Highest value',
            '• Water (1 point) - Common resource',
            '• Kryptonite (1 point) - Common resource',
            '',
            'Field Mechanics:',
            '• Fields have outer and inner zones',
            '• Inner zones have denser resources',
            '• Resources respawn over time',
            '• Fields relocate periodically',
            '',
            'Scoring:',
            '• Streak bonus: 10 points for 5 same type',
            '• Team bonus for coordinated collection',
            '• Points contribute to team total'
        ],

        tactics: [
            '⚔️ Tactics & Strategy',
            '───────────────',
            'Combat Tactics:',
            '• Use momentum for better maneuverability',
            '• Shoot while strafing to avoid return fire',
            '• Use safe zones as tactical retreat points',
            '• Coordinate attacks with team members',
            '',
            'Resource Control:',
            '• Secure and defend resource-rich areas',
            '• Create collection routes between fields',
            '• Maintain streak bonuses for max points',
            '• Deny enemy access to resource fields',
            '',
            'Team Play:',
            '• Use team chat for coordination',
            '• Protect teammates while collecting',
            '• Set up crossfire situations',
            '• Share resource field information'
        ],

        controls: [],  // Will be filled from server content
        commands: [],   // Will be filled from server content
        roadmap: [
            '🗺️ Development Roadmap 2025-2027',
            '───────────────',
            'Q3 2025:',  
            '• Infrastructure Expansion',
            '  - Multi-server architecture',
            '  - Cross-server communication',
            '  - Recruiting: DevOps Engineer',
            '  - Recruiting: Backend Developer',
            '',
            'Q4 2025:',
            '• 3D Engine Integration',
            '  - Ship model conversion to 3D',
            '  - Enhanced particle effects',
            '  - Recruiting: 3D Artists (2)',
            '',
            'Q1 2026:',  // Rest stays the same
            '• NFT & Token Integration',
            '  - Sonar Token smart contracts',
            '  - NFT marketplace launch',
            '  - Recruiting: Blockchain Developer',
            '  - Recruiting: UI/UX Designer',
            '',
            'Q2 2026:',  // Was Q4 2025
            '• Team System Overhaul',
            '  - Clan management',
            '  - Resource sharing',
            '  - Territory control',
            '  - Recruiting: Game Designer',
            '',
            'Q3-Q4 2026:',  // Was Q1-Q2 2026
            '• Economy Launch',
            '  - Play-to-earn mechanics',
            '  - Resource marketplace',
            '  - Cross-game assets',
            '  - Recruiting: Economy Designer',
            '',
            'Q1-Q2 2027:',  // Was Q3-Q4 2026
            '• Social Platform Integration',
            '  - Telegram Mini-Game Launch',
            '    * Simplified ship controls',
            '    * Resource collection mini-game',
            '    * Team coordination via Telegram',
            '  - Discord Bot Integration',
            '    * Server status updates',
            '    * Team coordination',
            '    * Resource alerts',
            '  - X/Twitter Integration',
            '    * Live battle updates',
            '    * Achievement sharing',
            '    * Tournament announcements',
            '  - Recruiting: Social Media Developer',
            '  - Recruiting: Community Manager',
            '',
            'Development Team Structure:',
            '───────────────',
            'Core Team (Q3-Q4 2025):',  // Was Q1-Q2 2025
            '• Lead Game Developer',
            '• 2x 3D Artists',
            '• DevOps Engineer',
            '• Backend Developer',
            '',
            'Expansion Team (Q1-Q2 2026):',  // Was Q3-Q4 2025
            '• Blockchain Developer',
            '• UI/UX Designer',
            '• Game Designer',
            '',
            'Support Team (2027):',  // Was 2026
            '• Community Manager',
            '• Economy Designer',
            '• QA Team Lead',
            '',
            'Infrastructure:',
            '• Multi-region server deployment',
            '• Load balancing system',
            '• Automated scaling',
            '• Monitoring and analytics',
            '',
            'Join the Team:',
            'We\'re looking for passionate developers',
            'and designers. Contact us:',
            '• Telegram: Sonar Group',
            '  t.me/SonarGroup',
            '• Discord: discord.gg/sonar',
            '• GitHub: github.com/sonar-game',
            '',
            'Follow Development:',
            '• Telegram Announcements: t.me/SonarAnnounce',
            '• X/Twitter: @SonarGame',
            '• Medium: blog.sonargame.com'
        ]
    };
    
    // Parse the server content
    let currentSection = '';
    const lines = content.split('\n');
    
    for (const line of lines) {
        if (line.includes('World Information')) {
            currentSection = 'world';
        } else if (line.includes('Ship Types & Movement')) {
            currentSection = 'ships';
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
}

const filteredContent = computed(() => {
    const sections = parseHelpContent(props.content);
    let content = sections[selectedHelpSection.value]?.join('\n') || '';

    // Highlight numeric values in World Information section
    if (selectedHelpSection.value === 'world') {
        content = content.replace(/(\d{1,3}(,\d{3})*(\.\d+)?)/g, '<span style="color: chartreuse">$1</span>');
    }

    return content;
});
</script>

<template>
    <div v-if="show" class="help-overlay">
        <div class="help-content">
            <div class="help-header">
                <h2>Sonar Game Help</h2>
                <button @click="$emit('close')" class="close-button">×</button>
            </div>
            <div class="help-columns">
                <div class="help-column index-column">
                    <div class="index-content">
                        <div 
                            v-for="(title, section) in helpSections" 
                            :key="section"
                            :class="['index-item', { active: selectedHelpSection === section }]"
                            @click="selectedHelpSection = section"
                        >
                            {{ title }}
                        </div>
                    </div>
                </div>
                <div class="help-column content-column">
                    <pre v-html="filteredContent"></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.help-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 10px;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.help-content {
    background: rgba(0, 20, 40, 0.95);
    border: 1px solid #30a0ff;
    border-radius: 8px;
    padding: 20px;
    width: 800px;
    height: 500px;
    overflow: hidden;
}

.help-columns {
    display: flex;
    gap: 20px;
    height: calc(100% - 40px);
}

.index-column {
    flex: 0 0 180px;
    border-right: 1px solid rgba(48, 160, 255, 0.3);
    padding-right: 15px;
    overflow-y: auto;
}

.content-column {
    flex: 1;
    overflow-y: auto;
}

.index-item {
    padding: 6px 10px;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s;
    margin-bottom: 4px;
    font-size: 12px;
    font-family: Arial, sans-serif;
}

.index-item:hover {
    background: rgba(48, 160, 255, 0.2);
}

.index-item.active {
    background: rgba(48, 160, 255, 0.3);
    border-left: 3px solid #30a0ff;
}

.help-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #30a0ff;
}

.help-header h2 {
    color: #30a0ff;
    font-size: 16px;
    margin: 0;
}

.close-button {
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    padding: 0 8px;
}

.content-column pre {
    color: white;
    font-size: 12px;
    line-height: 1.5;
    margin: 0;
    white-space: pre-wrap;
}
</style>