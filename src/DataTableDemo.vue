<!--
  DataTable Demo Component
  @version 1.0.15
  @date 01-Nov-2025
  @description Dynamic demo component for DataTable features with API configuration
-->
<script setup>
import { ref, computed, onMounted, inject } from 'vue';
import DataTable from './components/DataTable.vue';
import GenericForm from './components/GenericForm.vue';
import axios from 'axios';

const props = defineProps({
  // Remove DESIGN_SYSTEM and scalingStyles props - they're now injected
  datatableStore: { type: Object, default: null }
});

const emit = defineEmits(['tab-change']);

// INJECT scalingStyles and designSystem from parent (provided by DataTableWrapper)
const scalingStyles = inject('scalingStyles');
const designSystem = inject('designSystem');

// Demo configurations for different scenarios
const demoConfigs = ref([
  {
    id: 'products',
    name: 'Products Table',
    description: 'ERP Products with full CRUD operations',
    endpoint: '/api/erp_products',
    tableName: 'erp_products',
    configEndpoint: '/api/erp_products/config',
    icon: 'fas fa-box',
    color: 'text-blue-500'
  },
  {
    id: 'storages',
    name: 'Storages Table',
    description: 'Storage locations and inventory management',
    endpoint: '/api/erp_storages',
    tableName: 'erp_storages',
    configEndpoint: '/api/erp_storages/config',
    icon: 'fas fa-warehouse',
    color: 'text-green-500'
  },
  {
    id: 'customers',
    name: 'Customers Table',
    description: 'Customer data with contact information',
    endpoint: '/api/erp_customers',
    tableName: 'erp_customers',
    configEndpoint: '/api/erp_customers/config',
    icon: 'fas fa-users',
    color: 'text-purple-500'
  },
  {
    id: 'futures',
    name: 'Futures Table',
    description: 'Future planning and project management',
    endpoint: '/api/futures',
    tableName: 'futures',
    configEndpoint: '/api/futures/config',
    icon: 'fas fa-cube',
    color: 'text-orange-500'
  },
  {
    id: 'features',
    name: 'Features Table',
    description: 'Feature items specifically designed for indigo3',
    endpoint: '/api/features',
    tableName: 'features',
    configEndpoint: '/api/features/config',
    icon: 'fas fa-cube',
    color: 'text-red-500'
  }
]);

const activeDemo = ref('futures');
const enhancedConfig = ref(null);
const loading = ref(true);
const error = ref(null);
const tableKey = ref(0);

const currentConfig = computed(() => {
  return demoConfigs.value.find(config => config.id === activeDemo.value) || demoConfigs.value[0];
});

// Fetch configuration from API
const fetchConfig = async (configEndpoint) => {
  console.debug('DataTableDemo: Fetching configuration from', configEndpoint);
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      console.debug('DataTableDemo: Request timed out after 10 seconds');
      controller.abort();
    }, 10000);
    
    const response = await axios.get(configEndpoint, {
      signal: controller.signal,
      timeout: 10000
    });
    
    clearTimeout(timeoutId);
    console.debug('DataTableDemo: Configuration response received:', response.data);
    
    const modelConfig = response.data;
    
    // Override formComponent with actual component
    enhancedConfig.value = {
      ...modelConfig,
      formComponent: GenericForm,
      // Ensure formConfig is at the top level for getFormProps to find it
      formConfig: modelConfig.formConfig || modelConfig.form
    };
    console.debug('DataTableDemo: Configuration set successfully');
  } catch (err) {
    console.error('DataTableDemo: Failed to load configuration:', err);
    if (err.name === 'AbortError') {
      error.value = 'Configuration request timed out. Please try again.';
    } else {
      error.value = `Failed to load configuration: ${err.message}`;
    }
  } finally {
    loading.value = false;
  }
};

// Watch for demo changes
const switchDemo = async (demoId) => {
  // Reset all state when switching demos
  activeDemo.value = demoId;
  enhancedConfig.value = null;
  loading.value = true;
  error.value = null;
  tableKey.value++; // Force component re-render
  
  // Clear any existing data from the store
  if (props.datatableStore) {
    props.datatableStore.data = [];
    props.datatableStore.loading = false;
    props.datatableStore.error = null;
    props.datatableStore.dropdownData = {};
  }
  
  await fetchConfig(currentConfig.value.configEndpoint);
};

// Initialize on mount
onMounted(async () => {
  await fetchConfig(currentConfig.value.configEndpoint);
});
</script>

<template>
  <div class="space-y-6">
    <!-- Demo Header -->
    <div :class="designSystem.card || 'bg-white dark:bg-gray-800'" class="rounded-lg shadow-sm p-6">
      <div class="flex items-start justify-between">
        <div>
          <h2 :style="scalingStyles.titleFontSize" class="text-2xl font-bold text-gray-900 dark:text-white">
            <div :class="designSystem.text.info || 'text-blue-600 dark:text-blue-400'"> DataTable Demo </div>
          </h2>
          <p :style="scalingStyles.textFontSize" class="text-gray-600 dark:text-gray-400 mt-1">
            Interactive demonstrations of DataTable capabilities with different data sources
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            v-for="config in demoConfigs"
            :key="config.id"
            @click="switchDemo(config.id)"
            :class="[
              'p-4 rounded-lg border-2 transition-all duration-200 text-left',
              activeDemo === config.id
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            ]"
          >
            <div class="flex items-center mb-2">
              <i :class="[config.icon, config.color, 'text-xl mr-3']"></i>
              <h4 :style="scalingStyles.textFontSize" class="font-semibold text-gray-900 dark:text-white">
                {{ config.name }}
              </h4>
            </div>
            <p :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-400">
              {{ config.description }}
            </p>
          </button>
        </div>
      </div>
    </div>

    <!-- Active Demo Table -->
    <div class="">
      <!-- Dynamic DataTable with API Configuration -->
      <DataTable 
        v-if="enhancedConfig && !error"
        :key="`datatable-${activeDemo}-${tableKey}`"
        :config="enhancedConfig"
        :api-endpoint="currentConfig.endpoint"
        :table-name="currentConfig.tableName"
        :dark-mode-classes="designSystem"
        :scaling-styles="scalingStyles"
        :show-k-p-i-s="true"
        :show-filters="true"
      />
      
      <!-- Loading State -->
      <div v-else-if="loading" class="flex items-center justify-center h-64">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p class="text-gray-600 dark:text-gray-400">Loading {{ currentConfig.name }} configuration...</p>
        </div>
      </div>
      
      <!-- Error State -->
      <div v-else-if="error" class="flex items-center justify-center h-64">
        <div class="text-center">
          <div class="text-red-500 text-6xl mb-4">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Configuration Error</h3>
          <p class="text-gray-600 dark:text-gray-400 text-red-600 dark:text-red-400 mb-4">{{ error }}</p>
          <button 
            @click="switchDemo(activeDemo)"
            :style="scalingStyles.buttonPadding"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-colors"
          >
            <i class="fas fa-refresh mr-2"></i>
            Retry
          </button>
        </div>
      </div>
    </div>
  </div>
</template>