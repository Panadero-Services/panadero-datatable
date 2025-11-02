<!--
  DataTable Wrapper Component
  packages/panadero-datatable/src/DataTableWrapper.vue
  @version 1.0.15
  @date 01-Nov-2025
  @description Wrapper component for DataTable management
-->
<script setup>
import { ref, computed, provide, onMounted } from 'vue'
import { useScaling, useDesignSystem } from 'panadero-shared-styling';  
import Layout from './components/sections/DataTableLayout.vue';
import InfoBoard from './components/InfoBoard.vue'
import DataTableDashboard from './DataTableDashboard.vue'
import DataTableDemo from './DataTableDemo.vue'
import FeaturesTable from './pages/FeaturesTable.vue';
///import FuturesTable from './pages/DataTableFutures.vue';

// Import the Framework Settings Panel from shared location
import { FrameworkSettingsPanel } from 'panadero-shared-components';

import { useDataTableStore } from './composables/dataTableStore';
const datatableStore = useDataTableStore();

// Props for settings from parent (matching InventoryWrapper pattern)
const props = defineProps({
  settings: {
    type: Object,
    default: () => ({
      dark: false,
      fontSize: 14,
      compactLayout: false,
      autoSave: true
    })
  },
  feature: { type: Object, default: null },
  dataTableConfig: { type: Object, default: null }
});

// Get stores
const { scalingStyles } = useScaling();
const { designSystem } = useDesignSystem();

// Provide to all child components - this IS the SSOT (matching InventoryWrapper)
provide('settingsStore', props.settings);
provide('scalingStyles', scalingStyles);
provide('designSystem', designSystem);

// Tabs: add Dashboard as default
const tabs = [
  { id: 'infoboard', label: 'Features DataTable', icon: 'fas fa-info-circle', color: 'text-blue-500', component: InfoBoard },
 // { id: 'features', label: 'Features', icon: 'fas fa-cube', color: 'text-green-600', component: FeaturesTable },
 // { id: 'futures', label: 'Futures', icon: 'fas fa-cube', color: 'text-green-600', component: FeaturesTable },
  { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-table', color: 'text-orange-500', component: DataTableDashboard },
  { id: 'demo', label: 'Demo', icon: 'fas fa-chart-line', color: 'text-purple-500', component: DataTableDemo },
];

const activeTab = ref('dashboard');

const activeComponent = computed(() => {
  const tab = tabs.find(t => t.id === activeTab.value);
  return tab ? tab.component : InfoBoard;
});

function handleTabSwitch(event) {
  const { tabId } = event.detail;
  if (tabs.find(t => t.id === tabId)) {
    activeTab.value = tabId;
  }
}

onMounted(() => {
  console.debug('DataTable Package: Wrapper.vue mounted')
  console.debug('Store object:', datatableStore)
  
  // Initialize the store
  datatableStore.initializeStore();
})
</script>

<template>
  <Layout :active-tab="activeTab" :tabs="tabs" @tab-change="activeTab = $event">
    <component 
      :is="activeComponent" 
      :active-tab="activeTab"
      @tab-change="activeTab = $event" 
    />
  </Layout>

  <!-- Framework Settings Panel (no circular reference) -->
  <FrameworkSettingsPanel :settings="settings" />
</template>

<style scoped>
/* Wrapper component styles - scoped to avoid conflicts */
</style>
