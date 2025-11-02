<template>
    <div class="settings-panel" v-if="showPanel">
        <div class="header">
            <h3>🎮 System Settings</h3>
            <button @click="togglePanel" class="close-btn">×</button>
        </div>
        
        <div class="settings">
            <!-- Performance Settings -->
            <div class="section">
                <h4>⚡ Performance</h4>
                
                <div class="setting">
                    <label>Smoothing Factor ({{ settings.lerpFactor }})</label>
                    <input type="range" 
                           v-model="settings.lerpFactor" 
                           min="0.05" 
                           max="0.8" 
                           step="0.05"
                           @input="updateSettings">
                    <span class="value">{{ settings.lerpFactor }}</span>
                </div>

                <div class="setting">
                    <label>Server Update Rate ({{ settings.serverUpdateRate }}ms)</label>
                    <input type="range" 
                           v-model="settings.serverUpdateRate" 
                           min="16" 
                           max="200" 
                           step="1"
                           @input="updateSettings">
                    <span class="value">{{ settings.serverUpdateRate }}ms</span>
                </div>

                <div class="setting">
                    <label>Frame Rate Limit</label>
                    <select v-model="settings.frameRateLimit" @change="updateSettings">
                        <option value="30">30 FPS</option>
                        <option value="60">60 FPS</option>
                        <option value="120">120 FPS</option>
                        <option value="0">Unlimited</option>
                    </select>
                </div>
            </div>

            <!-- Network Settings -->
            <div class="section">
                <h4>🌐 Network</h4>
                
                <div class="setting">
                    <label>Transport Mode</label>
                    <select v-model="settings.transport" @change="updateSettings">
                        <option value="websocket">WebSocket Only</option>
                        <option value="polling">Polling Only</option>
                        <option value="both">WebSocket + Polling</option>
                    </select>
                </div>

                <div class="setting">
                    <label>Reconnection Attempts</label>
                    <input type="range" 
                           v-model="settings.reconnectionAttempts" 
                           min="1" 
                           max="10" 
                           step="1"
                           @input="updateSettings">
                    <span class="value">{{ settings.reconnectionAttempts }}</span>
                </div>

                <div class="setting">
                    <label>Reconnection Delay ({{ settings.reconnectionDelay }}ms)</label>
                    <input type="range" 
                           v-model="settings.reconnectionDelay" 
                           min="500" 
                           max="5000" 
                           step="100"
                           @input="updateSettings">
                    <span class="value">{{ settings.reconnectionDelay }}ms</span>
                </div>
            </div>

            <!-- Game Settings -->
            <div class="section">
                <h4>🎯 Game</h4>
                
                <div class="setting">
                    <label>Visibility Range ({{ settings.visibilityRange }})</label>
                    <input type="range" 
                           v-model="settings.visibilityRange" 
                           min="1000" 
                           max="5000" 
                           step="100"
                           @input="updateSettings">
                    <span class="value">{{ settings.visibilityRange }}</span>
                </div>

                <div class="setting">
                    <label>Border Force Strength ({{ settings.borderForceStrength }})</label>
                    <input type="range" 
                           v-model="settings.borderForceStrength" 
                           min="0.1" 
                           max="2.0" 
                           step="0.1"
                           @input="updateSettings">
                    <span class="value">{{ settings.borderForceStrength }}</span>
                </div>

                <div class="setting">
                    <label>Border Force Radius ({{ settings.borderForceRadius }})</label>
                    <input type="range" 
                           v-model="settings.borderForceRadius" 
                           min="2000" 
                           max="10000" 
                           step="500"
                           @input="updateSettings">
                    <span class="value">{{ settings.borderForceRadius }}</span>
                </div>
            </div>

            <!-- Debug Settings -->
            <div class="section">
                <h4>🐛 Debug</h4>
                
                <div class="setting">
                    <label>Debug Mode</label>
                    <input type="checkbox" v-model="settings.debug" @change="updateSettings">
                </div>

                <div class="setting">
                    <label>Performance Logging</label>
                    <input type="checkbox" v-model="settings.performanceLogging" @change="updateSettings">
                </div>

                <div class="setting">
                    <label>Network Logging</label>
                    <input type="checkbox" v-model="settings.networkLogging" @change="updateSettings">
                </div>
            </div>

            <!-- Presets -->
            <div class="section">
                <h4>💾 Presets</h4>
                <div class="preset-buttons">
                    <button @click="applyPreset('aws')" class="preset-btn aws">AWS Optimized</button>
                    <button @click="applyPreset('local')" class="preset-btn local">Local Dev</button>
                    <button @click="applyPreset('performance')" class="preset-btn performance">High Performance</button>
                    <button @click="applyPreset('smooth')" class="preset-btn smooth">Smooth Movement</button>
                </div>
            </div>
        </div>

        <!-- Real-time Metrics -->
        <div class="metrics" v-if="settings.debug">
            <h4>📊 Live Metrics</h4>
            <div class="metric-grid">
                <div class="metric">
                    <span class="label">FPS:</span>
                    <span class="value" :class="getFpsClass(metrics.fps)">{{ metrics.fps }}</span>
                </div>
                
                <!-- Enhanced Latency Display -->
                <div class="metric-full">
                    <div class="metric-header">
                        <span class="label">Latency:</span>
                        <div class="metric-values">
                            <span class="value" :class="getLatencyClass(metrics.latency)">
                                {{ formatLatency(metrics.latency) }}ms
                            </span>
                            <span class="value avg" :title="'Weighted average of last ' + HISTORY_SIZE + ' samples'">
                                (avg: {{ formatLatency(weightedAvg) }}ms)
                            </span>
                            <span class="value extremes">
                                min: {{ formatLatency(latencyStats.min) }} | max: {{ formatLatency(latencyStats.max) }}
                            </span>
                        </div>
                    </div>
                    
                    <div class="latency-graph">
                        <!-- Min/Max range bar -->
                        <div class="range-bar"
                            :style="{
                                bottom: `${Math.min(100, (latencyStats.min / 200) * 100)}%`,
                                height: `${Math.min(100, ((latencyStats.max - latencyStats.min) / 200) * 100)}%`
                            }"
                            :title="`Range: ${formatLatency(latencyStats.min)}-${formatLatency(latencyStats.max)}ms`"
                        ></div>

                        <div class="graph-container">
                            <div 
                                v-for="(value, index) in latencyHistory" 
                                :key="index"
                                class="graph-bar-group"
                            >
                                <!-- Average bar -->
                                <div 
                                    class="graph-bar avg-bar"
                                    :style="{
                                        height: `${Math.min(100, (weightedAvg / 200) * 100)}%`,
                                        backgroundColor: getLatencyColor(weightedAvg, true)
                                    }"
                                    :title="`Avg: ${formatLatency(weightedAvg)}ms`"
                                ></div>
                                <!-- Current value bar -->
                                <div 
                                    class="graph-bar value-bar"
                                    :style="{
                                        height: `${Math.min(100, (value / 200) * 100)}%`,
                                        backgroundColor: getLatencyColor(value)
                                    }"
                                    :title="`Current: ${formatLatency(value)}ms\nAvg: ${formatLatency(weightedAvg)}ms`"
                                ></div>
                            </div>
                        </div>
                        <div class="graph-baseline"></div>
                    </div>
                </div>
                <div class="metric">
                    <span class="label">Updates/sec:</span>
                    <span class="value">{{ metrics.updatesPerSecond }}</span>
                </div>
                <div class="metric">
                    <span class="label">Memory:</span>
                    <span class="value">{{ metrics.memory }}MB</span>
                </div>
            </div>
        </div>

        <!-- Quick Actions -->
        <div class="quick-actions">
            <button @click="resetToDefaults" class="action-btn reset">Reset</button>
            <button @click="exportSettings" class="action-btn export">Export</button>
            <button @click="importSettings" class="action-btn import">Import</button>
        </div>
    </div>

    <!-- Toggle Button (always visible) -->
    <button @click="togglePanel" class="toggle-btn" :class="{ active: showPanel }">
        ⚙️
    </button>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['settingsChanged']);

const showPanel = ref(false);
const settings = ref({
    // Performance
    lerpFactor: 0.2,
    serverUpdateRate: 50,
    frameRateLimit: 60,
    
    // Network
    transport: 'both',
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    
    // Game
    visibilityRange: 2000,
    borderForceStrength: 0.5,
    borderForceRadius: 5000,
    
    // Debug
    debug: false,
    performanceLogging: false,
    networkLogging: false
});

const metrics = ref({
    fps: 0,
    latency: 0,
    updatesPerSecond: 0,
    memory: 0
});

// Change the history size to 25
const HISTORY_SIZE = 25; // Increased from 10 to 25 samples
const latencyHistory = ref([]);
const weightedAvg = ref(0);

// Add min/max tracking
const latencyStats = ref({
    min: Infinity,
    max: 0
});

// Weighted average calculation function
const calculateWeightedAvg = (samples) => {
    if (samples.length === 0) return 0;
    
    // Weights: most recent samples have higher weight
    // e.g., for 10 samples: [1,2,3,4,5,6,7,8,9,10] weights
    const total = samples.reduce((acc, val, idx) => {
        const weight = idx + 1;
        return acc + (val * weight);
    }, 0);
    
    const weightSum = (samples.length * (samples.length + 1)) / 2;
    return Number((total / weightSum).toFixed(3));
};

// Update the metrics collection to track min/max
const updateLatencyMetrics = (newLatency) => {
    // Round to whole number
    const roundedLatency = Math.round(newLatency);
    
    // Add new sample to history
    latencyHistory.value.push(roundedLatency);
    
    // Keep only last HISTORY_SIZE samples
    if (latencyHistory.value.length > HISTORY_SIZE) {
        latencyHistory.value.shift();
    }
    
    // Update min/max
    latencyStats.value.min = Math.min(latencyStats.value.min, roundedLatency);
    latencyStats.value.max = Math.max(latencyStats.value.max, roundedLatency);
    
    // Calculate weighted average (still keep internal precision)
    weightedAvg.value = calculateWeightedAvg(latencyHistory.value);
};

// Update display formatting
const formatLatency = (value) => Math.round(value);

let metricsInterval = null;

const togglePanel = () => {
    showPanel.value = !showPanel.value;
    if (showPanel.value) {
        startMetricsCollection();
    } else {
        stopMetricsCollection();
    }
};

const updateSettings = () => {
    emit('settingsChanged', { ...settings.value });
    
    // Save to localStorage
    localStorage.setItem('gameSettings', JSON.stringify(settings.value));
    
    // Apply frame rate limit
    if (settings.value.frameRateLimit > 0) {
        document.body.style.setProperty('--frame-rate-limit', `${1000 / settings.value.frameRateLimit}ms`);
    }
};

// Update the metrics collection interval
const startMetricsCollection = () => {
    if (metricsInterval) return;
    
    metricsInterval = setInterval(() => {
        // FPS calculation
        const now = performance.now();
        if (!metrics.value.lastFrameTime) {
            metrics.value.lastFrameTime = now;
            metrics.value.frameCount = 0;
        }
        
        metrics.value.frameCount++;
        if (now - metrics.value.lastFrameTime >= 1000) {
            metrics.value.fps = Math.round(metrics.value.frameCount * 1000 / (now - metrics.value.lastFrameTime));
            metrics.value.frameCount = 0;
            metrics.value.lastFrameTime = now;
        }
        
        // Memory usage
        if (performance.memory) {
            metrics.value.memory = Math.round(performance.memory.usedJSHeapSize / 1024 / 1024);
        }
        
        // Simulate latency (replace with real data)
        const newLatency = Math.random() * 100 + 20;
        metrics.value.latency = Number(newLatency.toFixed(3));
        updateLatencyMetrics(metrics.value.latency);
        
        metrics.value.updatesPerSecond = Math.round(Math.random() * 30 + 10);
    }, 100);
};

const stopMetricsCollection = () => {
    if (metricsInterval) {
        clearInterval(metricsInterval);
        metricsInterval = null;
    }
};

const getFpsClass = (fps) => {
    if (fps >= 55) return 'good';
    if (fps >= 30) return 'warning';
    return 'bad';
};

const getLatencyClass = (latency) => {
    if (latency < 50) return 'good';
    if (latency < 100) return 'warning';
    return 'bad';
};

const applyPreset = (presetName) => {
    const presets = {
        aws: {
            lerpFactor: 0.15,
            serverUpdateRate: 100,
            transport: 'websocket',
            reconnectionAttempts: 3,
            reconnectionDelay: 2000,
            visibilityRange: 1500,
            borderForceStrength: 0.3,
            borderForceRadius: 3000
        },
        local: {
            lerpFactor: 0.3,
            serverUpdateRate: 16,
            transport: 'both',
            reconnectionAttempts: 10,
            reconnectionDelay: 500,
            visibilityRange: 3000,
            borderForceStrength: 0.8,
            borderForceRadius: 8000
        },
        performance: {
            lerpFactor: 0.1,
            serverUpdateRate: 200,
            transport: 'websocket',
            frameRateLimit: 30,
            visibilityRange: 1000,
            borderForceStrength: 0.2,
            borderForceRadius: 2000
        },
        smooth: {
            lerpFactor: 0.4,
            serverUpdateRate: 16,
            transport: 'both',
            frameRateLimit: 60,
            visibilityRange: 4000,
            borderForceStrength: 0.6,
            borderForceRadius: 6000
        }
    };
    
    if (presets[presetName]) {
        Object.assign(settings.value, presets[presetName]);
        updateSettings();
    }
};

const resetToDefaults = () => {
    settings.value = {
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
    };
    updateSettings();
};

const exportSettings = () => {
    const dataStr = JSON.stringify(settings.value, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'game-settings.json';
    link.click();
    URL.revokeObjectURL(url);
};

const importSettings = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const imported = JSON.parse(e.target.result);
                    Object.assign(settings.value, imported);
                    updateSettings();
                } catch (err) {
                    console.error('Failed to import settings:', err);
                }
            };
            reader.readAsText(file);
        }
    };
    input.click();
};

// Load saved settings on mount
onMounted(() => {
    const saved = localStorage.getItem('gameSettings');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            Object.assign(settings.value, parsed);
        } catch (err) {
            console.error('Failed to load saved settings:', err);
        }
    }
});

onUnmounted(() => {
    stopMetricsCollection();
});

// Add color utility function
const getLatencyColor = (latency, isAvg = false) => {
    if (isAvg) {
        return 'rgba(78, 205, 196, 0.3)';  // Consistent color for average
    }
    if (latency < 50) return 'rgba(78, 205, 196, 0.8)';  // Good
    if (latency < 100) return 'rgba(255, 107, 53, 0.8)';  // Warning
    return 'rgba(255, 71, 87, 0.8)';  // Bad
};
</script>

<style scoped>
.settings-panel {
    position: fixed;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.95);
    border: 1px solid #363b3f;
    border-radius: 8px;
    padding: 10px;
    color: white;
    z-index: 1000;
    min-width: 320px;
    max-width: 400px;
    max-height: 90vh;
    overflow-y: auto;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #30a0ff;
}

.header h3 {
    margin: 0;
    font-size: 12px;
    color: #30a0ff;
    font-weight: 600;
}

.close-btn {
    background: none;
    border: none;
    color: #30a0ff;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.2s;
}

.close-btn:hover {
    background: rgba(48, 160, 255, 0.2);
}

.section {
    margin-bottom: 20px;
}

.section h4 {
    margin: 0 0 10px 0;
    font-size: 12px;
    color: #30a0ff;
    font-weight: 500;
    border-bottom: 1px solid rgba(48, 160, 255, 0.3);
    padding-bottom: 5px;
}

.setting {
    margin: 12px 0;
    display: flex;
    flex-direction: column;
}

.setting label {
    font-size: 10px;
    margin-bottom: 6px;
    color: #ccc;
    font-weight: 500;
}

.setting input[type="range"] {
    width: 100%;
    height: 6px;
    background: #333;
    border-radius: 3px;
    outline: none;
    -webkit-appearance: none;
}

.setting input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background: #30a0ff;
    border-radius: 50%;
    cursor: pointer;
}

.setting input[type="range"]::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: #30a0ff;
    border-radius: 50%;
    cursor: pointer;
    border: none;
}

.setting select {
    background: #111;
    color: white;
    border: 1px solid #30a0ff;
    padding: 6px 8px;
    border-radius: 4px;
    font-size: 10px;
    outline: none;
}

.setting input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: #30a0ff;
}

.value {
    font-size: 9px;
    color: #30a0ff;
    margin-top: 4px;
    font-weight: 600;
}

.preset-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.preset-btn {
    padding: 6px 10px;
    border: 1px solid #30a0ff;
    background: rgba(48, 160, 255, 0.1);
    color: #30a0ff;
    border-radius: 4px;
    font-size: 10px;
    cursor: pointer;
    transition: all 0.2s;
}

.preset-btn:hover {
    background: rgba(48, 160, 255, 0.2);
}

.preset-btn.aws { border-color: #ff6b35; color: #ff6b35; }
.preset-btn.aws:hover { background: rgba(255, 107, 53, 0.2); }

.preset-btn.local { border-color: #4ecdc4; color: #4ecdc4; }
.preset-btn.local:hover { background: rgba(78, 205, 196, 0.2); }

.preset-btn.performance { border-color: #45b7d1; color: #45b7d1; }
.preset-btn.performance:hover { background: rgba(69, 183, 209, 0.2); }

.preset-btn.smooth { border-color: #96ceb4; color: #96ceb4; }
.preset-btn.smooth:hover { background: rgba(150, 206, 180, 0.2); }

.metrics {
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid #30a0ff;
}

.metric-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.metric {
    display: flex;
    justify-content: space-between;
    font-size: 9px;
}

.metric .label {
    color: #ccc;
}

.metric .value {
    font-weight: 600;
}

.metric .value.good { color: #4ecdc4; }
.metric .value.warning { color: #ff6b35; }
.metric .value.bad { color: #ff4757; }

/* Latency Graph Styles */
.metric-full {
    grid-column: 1 / -1;
    margin-top: 8px;
    padding: 8px;  /* Increased padding slightly */
    background: rgba(48, 160, 255, 0.05);
    border-radius: 4px;
    border: 1px solid rgba(48, 160, 255, 0.1);  /* Added subtle border */
}

.metric-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
}

.metric-values {
    display: flex;
    gap: 6px;
    align-items: center;
}

.value.avg {
    font-size: 9px;  /* Slightly larger */
    opacity: 0.85;   /* More visible */
    color: #4ecdc4;  /* Distinct color */
}

.value.extremes {
    font-size: 8px;
    opacity: 0.7;
    color: #666;
    margin-left: 8px;
}

.latency-graph {
    position: relative;
    height: 40px;  /* Increased from 30px to 40px */
    margin-top: 4px;
    margin-bottom: 2px;  /* Added small margin at bottom */
    background: rgba(0, 0, 0, 0.2);  /* Darker background to show range better */
}

/* Make bars more visible against range background */
.graph-bar.avg-bar {
    background: rgba(78, 205, 196, 0.3) !important;
    border-left: 1px solid rgba(78, 205, 196, 0.4);
    border-right: 1px solid rgba(78, 205, 196, 0.4);
}

.graph-bar.value-bar {
    width: 60%;  /* Slightly thinner */
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
}

/* Add grid lines */
.latency-graph::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(to bottom, 
            rgba(255, 255, 255, 0.05) 1px, 
            transparent 1px
        );
    background-size: 100% 25%;  /* 4 grid lines */
    pointer-events: none;
}

.graph-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    align-items: flex-end;
    gap: 1px;  /* Keep 1px gap between bars */
}

.graph-bar-group {
    flex: 1;
    position: relative;
    min-width: 2px;
    height: 100%;
    display: flex;
    justify-content: center;
}

.graph-bar {
    position: absolute;
    bottom: 0;
    width: 100%;
    transition: height 0.2s ease-out;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
}

.avg-bar {
    width: 100%;
    background: rgba(78, 205, 196, 0.2) !important;  /* Consistent color for average */
    z-index: 1;
}

.value-bar {
    width: 70%;  /* Slightly thinner than avg bar */
    z-index: 2;
}

/* Hover effect shows both values clearly */
.graph-bar-group:hover .graph-bar {
    transform: scaleY(1.05);
}

/* Graph baseline */
.graph-baseline {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(48, 160, 255, 0.2);
}

/* Add color utility function */
.graph-bar[style*="height: 100%"] {
    background: #ff4757 !important;
}

.range-bar {
    position: absolute;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.05);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    pointer-events: none;
    z-index: 0;
}

.quick-actions {
    margin-top: 15px;
    display: flex;
    gap: 8px;
}

.action-btn {
    flex: 1;
    padding: 6px 8px;
    border: 1px solid #30a0ff;
    background: rgba(48, 160, 255, 0.1);
    color: #30a0ff;
    border-radius: 4px;
    font-size: 10px;
    cursor: pointer;
    transition: all 0.2s;
}

.action-btn:hover {
    background: rgba(48, 160, 255, 0.2);
}

.action-btn.reset { border-color: #ff6b35; color: #ff6b35; }
.action-btn.reset:hover { background: rgba(255, 107, 53, 0.2); }

.action-btn.export { border-color: #4ecdc4; color: #4ecdc4; }
.action-btn.export:hover { background: rgba(78, 205, 196, 0.2); }

.action-btn.import { border-color: #96ceb4; color: #96ceb4; }
.action-btn.import:hover { background: rgba(150, 206, 180, 0.2); }

.toggle-btn {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid #30a0ff;
    border-radius: 50%;
    color: #30a0ff;
    font-size: 16px;
    cursor: pointer;
    z-index: 999;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
}

.toggle-btn:hover {
    background: rgba(48, 160, 255, 0.2);
    transform: scale(1.1);
}

.toggle-btn.active {
    background: rgba(48, 160, 255, 0.3);
    transform: rotate(90deg);
}

/* Scrollbar styling */
.settings-panel::-webkit-scrollbar {
    width: 6px;
}

.settings-panel::-webkit-scrollbar-track {
    background: rgba(48, 160, 255, 0.1);
    border-radius: 3px;
}

.settings-panel::-webkit-scrollbar-thumb {
    background: #30a0ff;
    border-radius: 3px;
}

.settings-panel::-webkit-scrollbar-thumb:hover {
    background: #60b0ff;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .settings-panel {
        right: 5px;
        left: 5px;
        min-width: auto;
        max-width: none;
    }
    
    .preset-buttons {
        grid-template-columns: 1fr;
    }
    
    .metric-grid {
        grid-template-columns: 1fr;
    }
}
</style> 