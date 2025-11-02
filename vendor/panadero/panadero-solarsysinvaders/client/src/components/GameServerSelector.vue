<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import axios from 'axios';

const props = defineProps({
    currentServer: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['server-changed']);

// Server list from database
const availableServers = ref([]);
const isLoading = ref(true);
const error = ref(null);

// Load servers from master server
const loadServers = async () => {
    try {
        console.debug('Loading servers...');
        const response = await axios.get('/master/worlds');
        console.debug('Received servers:', response.data);
        availableServers.value = response.data.map(world => ({
            name: world.name,
            url: world.server_url,
            description: world.description,
            status: world.status,
            is_online: world.is_online,
            current_players: world.current_players,
            max_players: world.max_players
        }));
        // Add custom server option
        availableServers.value.push({
            name: 'Custom Server',
            url: '',
            description: 'Enter custom server URL',
            isCustom: true
        });
    } catch (err) {
        console.debug('Error loading servers:', err);
        error.value = 'Failed to load server list';
        console.error(err);
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    loadServers();
});

const selectedServer = ref(props.currentServer);
const customServerUrl = ref('');
const showSelector = ref(false);

// Computed property for the current server display
const currentServerInfo = computed(() => {
    return availableServers.value.find(server => server.url === selectedServer.value) || 
           { name: 'Custom', url: selectedServer.value, description: 'Custom server' };
});

const selectServer = (server) => {
    if (server.isCustom) {
        // Handle custom server input
        if (customServerUrl.value.trim()) {
            selectedServer.value = customServerUrl.value.trim();
            emit('server-changed', selectedServer.value);
            showSelector.value = false;
        }
    } else {
        selectedServer.value = server.url;
        emit('server-changed', selectedServer.value);
        showSelector.value = false;
    }
};

const toggleSelector = () => {
    showSelector.value = !showSelector.value;
    if (showSelector.value) {
        customServerUrl.value = '';
    }
};
</script>

<template>
    <div class="server-selector">
        <!-- Current Server Display -->
        <div class="current-server" @click="toggleSelector">
            <div class="server-info">
                <span class="server-name">{{ currentServerInfo.name }}</span>
                <span class="server-url">{{ currentServerInfo.url }}</span>
            </div>
            <div class="server-status">
                <span 
                    class="status-dot" 
                    :class="{
                        'online': currentServerInfo.status === 'online',
                        'offline': currentServerInfo.status === 'offline',
                        'unreachable': currentServerInfo.status === 'unreachable',
                        'maintenance': currentServerInfo.status === 'maintenance'
                    }"
                ></span>
                <span 
                    class="status-text"
                    :class="{
                        'online': currentServerInfo.status === 'online',
                        'offline': currentServerInfo.status === 'offline',
                        'unreachable': currentServerInfo.status === 'unreachable',
                        'maintenance': currentServerInfo.status === 'maintenance'
                    }"
                >
                    {{ currentServerInfo.status || 'Unknown' }}
                </span>
            </div>
            <svg class="w-4 h-4 transform transition-transform" :class="{ 'rotate-180': showSelector }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>

        <!-- Server Selection Dropdown -->
        <div v-if="showSelector" class="server-dropdown">
            <div class="dropdown-header">
                <span class="text-sm font-medium">Select Game Server</span>
            </div>
            
            <!-- Loading State -->
            <div v-if="isLoading" class="loading-state">
                Loading servers...
            </div>

            <!-- Error State -->
            <div v-else-if="error" class="error-state">
                {{ error }}
            </div>

            <!-- Server List -->
            <div v-else class="server-options">
                <div 
                    v-for="server in availableServers.filter(s => !s.isCustom)" 
                    :key="server.url"
                    class="server-option"
                    :class="{ 
                        'selected': selectedServer === server.url,
                        'offline': server.status === 'offline' || server.status === 'unreachable'
                    }"
                    @click="selectServer(server)"
                >
                    <div class="server-details">
                        <div class="server-header">
                            <span class="server-name">{{ server.name }}</span>
                            <span 
                                class="server-status-badge"
                                :class="server.status"
                            >
                                {{ server.status }}
                            </span>
                        </div>
                        <span class="server-description">{{ server.description }}</span>
                        <div class="server-info-row">
                            <span class="server-url">{{ server.url }}</span>
                            <span class="player-count" v-if="server.status === 'online'">
                                Players: {{ server.current_players }}/{{ server.max_players }}
                            </span>
                        </div>
                    </div>
                    <div v-if="selectedServer === server.url" class="check-icon">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Custom Server Input -->
            <div class="custom-server-section">
                <div class="section-header">
                    <span class="text-xs font-medium">Custom Server</span>
                </div>
                <div class="custom-input-group">
                    <input 
                        v-model="customServerUrl"
                        type="text"
                        placeholder="Enter server URL (e.g., http://192.168.1.100:3000)"
                        class="custom-server-input"
                        @keyup.enter="selectServer({ isCustom: true })"
                    />
                    <button 
                        @click="selectServer({ isCustom: true })"
                        class="connect-btn"
                        :disabled="!customServerUrl.trim()"
                    >
                        Connect
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.server-selector {
    position: relative;
    z-index: 1000;
}

.current-server {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid #444;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    min-width: 400px;
}

.current-server:hover {
    background: rgba(0, 0, 0, 0.9);
    border-color: #555;
}

.server-info {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 12px;
}

.server-name {
    font-weight: 500;
    color: #fff;
    font-size: 11px;
    white-space: nowrap;
}

.server-url {
    font-size: 10px;
    color: #888;
    white-space: nowrap;
}

.server-status {
    display: flex;
    align-items: center;
    margin-right: 8px;
    gap: 4px;
}

.status-dot {
    width: 6px;
    height: 6px;
    background: #10b981;
    border-radius: 50%;
}

.status-text {
    font-size: 10px;
    color: #10b981;
    white-space: nowrap;
}

.server-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    border: 1px solid #444;
    border-radius: 6px;
    margin-top: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    max-height: 400px;
    overflow-y: auto;
    padding: 4px;
}

.dropdown-header {
    padding: 4px;
    border-bottom: 1px solid #333;
    color: #fff;
}

.server-options {
    padding: 4px 0;
}

.server-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    cursor: pointer;
    transition: background 0.2s;
    border-bottom: 1px solid #222;
}

.server-option:hover {
    background: rgba(255, 255, 255, 0.05);
}

.server-option.selected {
    background: rgba(59, 130, 246, 0.2);
    border-left: 3px solid #3b82f6;
}

.server-details {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.server-description {
    font-size: 11px;
    color: #888;
    margin-top: 2px;
}

.check-icon {
    color: #3b82f6;
}

.custom-server-section {
    padding: 6px;
    border-top: 1px solid #333;
}

.section-header {
    margin-bottom: 8px;
    color: #fff;
}

.custom-input-group {
    display: flex;
    gap: 8px;
}

.custom-server-input {
    flex: 1;
    padding: 4px 12px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #444;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
}

.custom-server-input::placeholder {
    color: #666;
}

.custom-server-input:focus {
    outline: none;
    border-color: #3b82f6;
    background: rgba(255, 255, 255, 0.15);
}

.connect-btn {
    padding: 4px 12px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 10px;
    cursor: pointer;
    transition: background 0.2s;
}

.connect-btn:hover:not(:disabled) {
    background: #2563eb;
}

.connect-btn:disabled {
    background: #666;
    cursor: not-allowed;
}

.status-dot.online { background: #10b981; }
.status-dot.offline { background: #ef4444; }
.status-dot.unreachable { background: #f59e0b; }
.status-dot.maintenance { background: #6366f1; }

.status-text.online { color: #10b981; }
.status-text.offline { color: #ef4444; }
.status-text.unreachable { color: #f59e0b; }
.status-text.maintenance { color: #6366f1; }

.server-status-badge {
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 4px;
    text-transform: uppercase;
}

.server-status-badge.online {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
}

.server-status-badge.offline {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
}

.server-status-badge.unreachable {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
}

.server-status-badge.maintenance {
    background: rgba(99, 102, 241, 0.2);
    color: #6366f1;
}

.server-header {
    display: flex;
    align-items: center;
    gap: 8px;
}

.server-info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
}

.player-count {
    font-size: 10px;
    color: #888;
}

.loading-state, .error-state {
    padding: 12px;
    text-align: center;
    color: #888;
}

.error-state {
    color: #ef4444;
}

.server-option.offline {
    opacity: 0.7;
}
</style>