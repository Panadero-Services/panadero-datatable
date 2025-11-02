<script setup>
import { ref, computed, onMounted } from 'vue';
import { useMasterGameServerStore } from 'panadero-solarsysinvaders';

const props = defineProps({
  showDropdown: {
    type: Boolean,
    default: false
  }
});

const masterGameServerStore = useMasterGameServerStore();
const isDropdownOpen = ref(props.showDropdown);

// Helper functions
const formatUptime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
};

const formatResources = (resources) => {
    if (!resources || Object.keys(resources).length === 0) {
        return 'None';
    }
    return Object.entries(resources)
        .map(([type, amount]) => `${type}: ${amount}`)
        .join(', ');
};

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

// Computed properties
const serverInfo = computed(() => [
  {
    label: 'Status',
    value: () => masterGameServerStore.gameState.server.status,
    valueClass: () => `status-badge ${masterGameServerStore.gameState.server.status}`
  },
  {
    label: 'Uptime',
    value: () => formatUptime(masterGameServerStore.gameState.server.uptime)
  },
  {
    label: 'Players',
    value: () => masterGameServerStore.gameState.server.active_players
  },
  {
    label: 'Games',
    value: () => masterGameServerStore.gameState.server.total_games_played
  }
]);

const playerStats = computed(() => [
  {
    label: 'Rank',
    value: () => `#${masterGameServerStore.gameState.player?.rank || 'N/A'}`
  },
  {
    label: 'Score',
    value: () => masterGameServerStore.gameState.player?.high_score || 0
  },
  {
    label: 'World',
    value: () => masterGameServerStore.gameState.player?.current_world || 'None'
  },
  {
    label: 'Resources',
    value: () => formatResources(masterGameServerStore.gameState.player?.resources)
  }
]);

onMounted(async () => {
    await masterGameServerStore.initialize();
});
</script>

<template>
    <div class="server-selector">
        <!-- Current Server Display -->
        <div class="current-server" @click="toggleDropdown">
            <div class="server-info">
                <span class="server-name">Master Server</span>
                <span class="server-url">{{ masterGameServerStore.gameState.server.status }}</span>
            </div>
            <div class="server-status">
                <span class="status-dot" :class="masterGameServerStore.gameState.server.status"></span>
                <span class="status-text">{{ masterGameServerStore.gameState.server.status }}</span>
            </div>
            <svg class="w-4 h-4 transform transition-transform" :class="{ 'rotate-180': isDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>

        <!-- Server Stats Dropdown -->
        <div v-if="isDropdownOpen" class="server-dropdown">
            <div class="dropdown-header">
                <span class="text-sm font-medium">Master Server Status</span>
            </div>
            
            <!-- Server Info -->
            <div class="server-options">
                <div v-for="(item, index) in serverInfo" 
                     :key="`server-${index}`"
                     class="server-option">
                    <div class="server-details">
                        <span class="server-name">{{ item.label }}</span>
                        <span :class="[item.valueClass ? item.valueClass() : 'server-value']">
                            {{ item.value() }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Player Stats -->
            <div v-if="masterGameServerStore.gameState.player" class="custom-server-section">
                <div class="section-header">
                    <span class="text-xs font-medium">Player Stats</span>
                </div>
                <div class="server-options">
                    <div v-for="(item, index) in playerStats" 
                         :key="`player-${index}`"
                         class="server-option">
                        <div class="server-details">
                            <span class="server-name">{{ item.label }}</span>
                            <span class="server-value">{{ item.value() }}</span>
                        </div>
                    </div>
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
    min-width: 350px;
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
    border-radius: 50%;
}

.status-dot.online {
    background: #10b981;
}

.status-dot.offline {
    background: #ef4444;
}

.status-dot.maintenance {
    background: #f59e0b;
}

.status-text {
    font-size: 10px;
    white-space: nowrap;
}

.status-text.online {
    color: #10b981;
}

.status-text.offline {
    color: #ef4444;
}

.status-text.maintenance {
    color: #f59e0b;
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
    max-width: 200px;
    max-height: 250px;
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

.server-details {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.server-value {
    font-size: 11px;
    color: #10b981;
    margin-top: 2px;
}

.status-badge {
    font-size: 11px;
    padding: 2px 6px;
    border-radius: 4px;
}

.status-badge.online {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
}

.status-badge.offline {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
}

.status-badge.maintenance {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
}

.custom-server-section {
    padding: 6px;
    border-top: 1px solid #333;
}

.section-header {
    margin-bottom: 8px;
    color: #fff;
}
</style> 