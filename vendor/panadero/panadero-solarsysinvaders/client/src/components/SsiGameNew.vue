<script setup>

import { ref, onMounted, onUnmounted, computed } from 'vue';

import { ShipRenderer } from '../core/ShipRenderer';  // Updated import
import { CanvasManager } from '../core/Canvas';
import { useMultiplayer } from '../composables/useMultiplayer';
import { useGameUtils } from '../composables/useGameUtils'; // Add this import
import { useGameDrawing } from '../composables/useGameDrawing'; // Add this import
import { useGameInput } from '../composables/useGameInput'; // Add this import
import { useGameState } from '../composables/useGameState'; // Add this import
import { useGameComputed } from '../composables/useGameComputed'; // Add this import
import { useGameSocket } from '../composables/useGameSocket'; // Add this import
import GameMiniMap from './GameMiniMap.vue'; // Add this import
import GameInfoPanel from './GameInfoPanel.vue';
// Import soundManager only in parent
import { soundManager } from '../core/SoundManager';
import ResourcePanel from './ResourcePanel.vue';
import Chat from './ui/Chat.vue';
import { GAME_CONFIG } from '../../../shared/gameConfig.js';
import HelpOverlay from './ui/HelpOverlay.vue';
import { useGameCommands } from '../composables/useGameCommands';
import { useGameLoop } from '../composables/useGameLoop';
import SystemSettingsPanel from './SystemSettingsPanel.vue';
import TouchControls from './TouchControls.vue';


const VERSION = "1.02";

// Create sound wrapper functions
const playSound = (soundName) => {
    soundManager.play(soundName);
};

const stopEngine = () => {
    soundManager.stopEngine();
};

const initSound = async () => {
    await soundManager.init();
};

// Get utility functions
const { 
    isValidFieldPosition, 
    createOrUpdateField, 
    spawnCollectible, 
    worldToScreen, 
    isInSafeZone 
} = useGameUtils();

// Get drawing functions
const {
    clearCanvas,
    drawStarfield,
    drawShip,
    drawHome,
    drawStar,
    drawDroplet,
    drawCrystal,
    drawCollectible,
    drawSafeZone,
    drawResourceField,
    drawBullet,
    updateAndRenderParticles,
    drawBlackHole
} = useGameDrawing();

// Get state management functions
const {
    parseHelpContent,
    fetchSSOTData,
    handleCollectible,
    createScorePopup
} = useGameState();

// Get computed functions
const {
    createInfoItems,
    createFilteredContent,
    createGameServerInfo,
    parseHelpCommand
} = useGameComputed();

// Get socket functions
const {
    setupSocketEventHandlers,
    setupWindowEventHandlers,
    cleanupEventHandlers
} = useGameSocket();


setInterval(() => {
    resourceFields.value.forEach((field, id) => {
    });
}, 5 * 60 * 1000);  // Log every 5 minutes



const props = defineProps({
    multiplayer: {
        type: Boolean,
        default: true
    },
    serverUrl: {
        type: String,
        default: import.meta.env.VITE_GAME_SERVER_URL || import.meta.env.VITE_GAME_SERVER_URL_NETWORK
    },
    self: {  // Add this prop
        type: String,
        default: 'nope'
    }
});

// At the top with other refs
const canvas = ref(null);
const canvasManager = ref(null);
const isRunning = ref(false);
const ship = ref(null);
const resourceFields = ref(new Map());  // Add this BEFORE it's used

// Add camera state
const camera = ref({
    x: 0,
    y: 0,
    scale: 1
});

// Initialize multiplayer
const { gameState, isConnected, connect, sendInput, socket } = useMultiplayer({
    serverUrl: props.serverUrl,
    self: props.self  // Add this
});

// Define emits
const emit = defineEmits(['bullet-created', 'settingsChanged']);

// Initialize refs at the top of the script
const shipInfo = ref(null);  // Changed from an object to null initially
const score = ref(0);

// Add this ref for safe zone status
const inSafeZone = ref(false);

// Add at the top with other refs
const prevPositions = ref(new Map());

const initCanvas = () => {
    // console.debug('🎮 Initializing canvas');
    if (!canvas.value) return false;
    
    // Set both the canvas element AND its drawing context size
    canvas.value.style.width = `${GAME_CONFIG.CANVAS_WIDTH}px`;
    canvas.value.style.height = `${GAME_CONFIG.CANVAS_HEIGHT}px`;
    canvas.value.width = GAME_CONFIG.CANVAS_WIDTH;  // Important: this sets the drawing context size
    canvas.value.height = GAME_CONFIG.CANVAS_HEIGHT;
    
    canvasManager.value = new CanvasManager(canvas.value, GAME_CONFIG.CANVAS_WIDTH, GAME_CONFIG.CANVAS_HEIGHT);
    ship.value = new ShipRenderer(GAME_CONFIG.CANVAS_WIDTH / 2, GAME_CONFIG.CANVAS_HEIGHT / 2, GAME_CONFIG.CANVAS_WIDTH, GAME_CONFIG.CANVAS_HEIGHT);
    
    // Set up emit function for ship
    ship.value.emitEvent = (eventName) => {
        if (eventName === 'shoot') {
            playSound('shoot');
        }
    };
    
    return true;
};

// Command router - easily extensible for new commands
const handleCommand = (messageData) => {
  const command = messageData.command;
  const args = messageData.content.split(' ').slice(1);
  
  // console.debug(`🎮 Executing command: ${command} with args:`, args);
  
  switch (command) {
    case '/help':
      const helpResult = parseHelpCommand(messageData.content, gameServerInfo.value);
      if (helpResult) {
        // console.debug(`Help command received: ${helpResult.category}`);
        helpContent.value = helpResult.formatted;
        showHelpOverlay.value = true;
      }
      break;
      
    case '/status':
      const status = {
        url: gameServerInfo.value.url,
        status: gameServerInfo.value.status,
        players: gameServerInfo.value.playerCount
      };
      // console.debug('Server status:', status);
      // Could emit status to chat or show in UI
      break;
      
    case '/ping':
      if (socket.value) {
        socket.value.emit('ping');
        // console.debug('Ping sent to server');
      }
      break;
      
    default:
      // console.debug(`Unknown command: ${command}`);
      // Could show help for unknown commands
      break;
  }
};

// Create computed for gameServerInfo
const gameServerInfo = computed(() => createGameServerInfo(socket, props, gameState));

// Move ref declarations BEFORE composable usage
const showHelpOverlay = ref(false);
const helpContent = ref('');
const selectedHelpSection = ref('world');  // Default section
const helpSections = {
    world: '🌌 World Information',
    ships: '🚀 Ship Types & Movement',
    collectibles: '💎 Collectibles & Scoring',
    controls: '🎮 Controls',
    commands: ' Chat Commands'
};

// System settings state
const systemSettings = ref({
    lerpFactor: 0.2,
    serverUpdateRate: 50,
    frameRateLimit: 60,
    transport: 'both',
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    visibilityRange: 2000,
    borderForceStrength: 0.5,
    borderForceRadius: 5000,
    debug: false,
    performanceLogging: false,
    networkLogging: false
});

// Settings change handler
const handleSettingsChanged = (newSettings) => {
    console.log('🎮 Settings changed:', newSettings);
    
    // Update local settings
    Object.assign(systemSettings.value, newSettings);
    
    // Apply frame rate limit
    if (newSettings.frameRateLimit > 0) {
        document.body.style.setProperty('--frame-rate-limit', `${1000 / newSettings.frameRateLimit}ms`);
    }
    
    // Emit settings to parent or other components
    emit('settingsChanged', newSettings);
    
    // Apply settings to game configuration
    if (GAME_CONFIG) {
        GAME_CONFIG.LERP_FACTOR = newSettings.lerpFactor;
        GAME_CONFIG.VISIBILITY_RANGE = newSettings.visibilityRange;
        GAME_CONFIG.BORDER_FORCE_STRENGTH = newSettings.borderForceStrength;
        GAME_CONFIG.BORDER_FORCE_RADIUS = newSettings.borderForceRadius;
    }
    
    // Update multiplayer settings if socket exists
    if (socket.value) {
        // These would need to be implemented in the multiplayer composable
        // socket.value.transport = newSettings.transport;
        // socket.value.reconnectionAttempts = newSettings.reconnectionAttempts;
        // socket.value.reconnectionDelay = newSettings.reconnectionDelay;
    }
};

const scorePopups = ref([]);

// Initialize commands composable (now after refs are declared)
const { executeCommand } = useGameCommands(
  gameState, 
  socket, 
  gameServerInfo, 
  parseHelpCommand, 
  helpContent, 
  showHelpOverlay
);

// Simple message handler that uses the composable
const handleMessage = (messageData) => {
  // console.debug(' Processing message:', messageData);
  
  // Handle help responses from server
  if (messageData.type === 'help_response') {
    helpContent.value = messageData.content;
    showHelpOverlay.value = true;
        return;
    }

  // Handle commands using the composable
  if (messageData.isCommand) {
    const commandName = messageData.command;
    const args = messageData.content.split(' ').slice(1);
    
    const result = executeCommand(commandName, args);
    
    if (result.error) {
      // console.debug(`Command error: ${result.error}`);
    } else {
      // console.debug(`Command result: ${result.type}`);
    }
    return;
  }
  
  // Regular chat message
  if (socket.value) {
    // console.debug('🎮 Sending chat message to server:', messageData.content);
    socket.value.emit('chat_message', {
      content: messageData.content,
      isGlobal: messageData.isGlobal
    });
  }
};

// Add these refs at the top
const handleKeyDownRef = ref(null);
const handleKeyUpRef = ref(null);

// Add initial state setup in onMounted
onMounted(() => {
    console.debug('v',VERSION, ' 🎮 Component Mount at:', new Date().toISOString());
    if (initCanvas()) {
        // console.debug('🎮 Canvas initialized');
        isRunning.value = true;

        // Fetch SSOT data directly from Master Server
        if (props.self && props.self !== 'nope') {
            fetchSSOTData(props.self, shipInfo);
        }

        initSound(); // Use the single initSound function

        // In SsiGameNew.vue, where other composables are initialized
        const { 
            isRunning: gameLoopRunning,  // renamed to avoid conflicts
            startGameLoop, 
            stopGameLoop 
        } = useGameLoop({
            // Pass all required dependencies
            clearCanvas,
            camera,
            ship,
            gameState,
            canvasManager,
            drawStarfield,
            drawHome,
            drawSafeZone,
            drawResourceField,
            drawCollectible,
            drawBlackHole,
            drawBullet,
            drawShip,
            updateAndRenderParticles,
            prevPositions,
            GAME_CONFIG,
            worldToScreen,
            shipInfo,
            score,
            socket,
            isInSafeZone
        });

        startGameLoop();  // Use new game loop

        if (props.multiplayer) {
            console.debug('🎮 Connecting multiplayer at:', new Date().toISOString());
            connect();
        }

        // Get input functions AFTER socket is available
        const { handleKeyDown, handleKeyUp, handleTestSounds } = useGameInput(
            sendInput, 
            playSound, 
            stopEngine, 
            gameState,
            socket
        );
        
        // Store the functions in refs for cleanup
        handleKeyDownRef.value = handleKeyDown;
        handleKeyUpRef.value = handleKeyUp;
        
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        // Setup socket event handlers - PASS playSound parameter
        setupSocketEventHandlers(socket, {
            shipInfo,
            gameState,
            createScorePopup,
            scorePopups
        }, playSound); // Add this parameter

        // Setup window event handlers - PASS playSound parameter
        setupWindowEventHandlers({
            soundManager: { // Pass the single soundManager object
                init: initSound, // Use the single initSound function
                play: playSound, // Use the single playSound function
                stopEngine: stopEngine, // Use the single stopEngine function
            },
            handleCollectible,
            score
        }, playSound); // Add this parameter

    }
});

onUnmounted(() => {
    console.debug('🎮 Component Unmount at:', new Date().toISOString());
    isRunning.value = false;
    
    // REMOVE THE EVENT LISTENERS!
    if (handleKeyDownRef.value) {
        window.removeEventListener('keydown', handleKeyDownRef.value);
    }
    if (handleKeyUpRef.value) {
        window.removeEventListener('keyup', handleKeyUpRef.value);
    }
    
    cleanupEventHandlers({
        soundManager: {
            init: initSound,
            play: playSound,
            stopEngine: stopEngine,
        },
        handleCollectible,
        score
    }, playSound);

});

// Create computed properties using the composable functions
const infoItems = computed(() => createInfoItems(shipInfo, inSafeZone, padString, formatNumber));

const filteredContent = computed(() => createFilteredContent(helpContent, selectedHelpSection));

// Add these utility functions at the top (after imports)
const padString = (str, length) => {
    if (!str) return ' '.repeat(length);
    return String(str).padEnd(length, ' ');
};

const formatNumber = (num, length) => {
    if (num === null || num === undefined) return ' '.repeat(length);
    return String(num).padStart(length, ' ');
};
</script>

<template>
    <div class="game-container bg-black" 
         :style="{
             width: `${GAME_CONFIG.CANVAS_WIDTH}px`,
             height: `${GAME_CONFIG.CANVAS_HEIGHT}px`
         }">
        <canvas ref="canvas" class="game-canvas"></canvas>
        
        <!-- Info Panel -->
        <GameInfoPanel 
            v-if="shipInfo"
            :ship-info="shipInfo"
            :score="score"
            :in-safe-zone="inSafeZone"
        />

        <!-- Minimap Component -->
        <GameMiniMap 
            :game-state="gameState"
            :player-id="socket?.id"
            :size="150"
            :world-width="GAME_CONFIG.WORLD_WIDTH"
            :world-height="GAME_CONFIG.WORLD_HEIGHT"
        />

        <!-- Add Resource Panel -->
        <ResourcePanel 
            :collections="shipInfo?.collections"
            :streak="shipInfo?.streak"
        />

        <!-- Chat Component -->
        <Chat 
            v-if="socket && shipInfo"
            :socket="socket"
            :playerInfo="{
                callSign: shipInfo.callSign,
                color: shipInfo.color
            }"
            @message="handleMessage"
        />

        <!-- Help Overlay -->
        <HelpOverlay 
            :show="showHelpOverlay"
            :content="helpContent"
            @close="showHelpOverlay = false"
        />

        <!-- System Settings Panel -->
        <SystemSettingsPanel 
            @settings-changed="handleSettingsChanged"
        />
        <TouchControls 
            :onInput="sendInput"
            :playSound="playSound"
            :stopEngine="stopEngine"
        />
    </div>
</template>

<style scoped>
.game-container {
    position: relative;
}

.game-canvas {
    position: absolute;
    top: 0;
    left: 0;
}

.help-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
    width: 800px;  /* Fixed width */
    height: 500px; /* Fixed height */
    overflow: hidden; /* Prevent jumping */
}

.help-columns {
    display: flex;
    gap: 20px;
    height: calc(100% - 40px); /* Account for header */
}

.index-column {
    flex: 0 0 180px; /* Fixed width for index */
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
    font-family: Arial, sans-serif;  /* Clean, readable font */
}

.index-item:hover {
    background: rgba(48, 160, 255, 0.2);
}

.index-item.active {
    background: rgba(48, 160, 255, 0.3);
    border-left: 3px solid #30a0ff;
}

.content-column pre {
    color: white;
    font-size: 12px;
    line-height: 1.4;

    margin: 0;
    white-space: pre-wrap;
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
    font-size: 16px;
    color: #30a0ff;
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
</style> 