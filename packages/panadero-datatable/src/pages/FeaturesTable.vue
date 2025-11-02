<!--
  Storages Enhanced Page
  @version 1.0.0
  @date 29-Sep-2025
  @description Enhanced storages page using generic DataTableComplete
-->
<script setup>
import { ref, onMounted } from 'vue'
import { DataTable } from 'panadero-datatable'
import GenericForm from '../components/GenericForm.vue'
import { useCommonSnippets } from '../composables/useCommonSnippets.js'
import axios from 'axios'

// Get common functionality for dark mode and scaling
const { darkModeClasses } = useCommonSnippets()


// Props
const props = defineProps({
  scalingStyles: { type: Object, required: true },
  DESIGN_SYSTEM: { type: Object, required: true }
})



const enhancedConfig = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  console.debug('FeaturesTable: Component mounted, starting data fetch')
  try {
    // Test simple API call first
    console.debug('FeaturesTable: Testing simple API call...')
    try {
      const testResponse = await axios.get('/api/erp_sites', { timeout: 5000 })
      console.debug('FeaturesTable: Simple API call successful:', testResponse.data.length)
    } catch (err) {
      console.error('FeaturesTable: Simple API call failed:', err)
    }
    
    console.debug('FeaturesTable: Fetching configuration from /api/erp_storages/config')
    
    const response = await axios.get('/api/erp_storages/config', {
      timeout: 10000, // 10 second timeout
      headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    
    console.debug('FeaturesTable: Configuration response received:', response.data)
    
    // Process immediately without Promise wrapper
    enhancedConfig.value = {
      ...response.data,
      formComponent: GenericForm
    }
    console.debug('FeaturesTable: Configuration set successfully')
    loading.value = false
    
  } catch (err) {
    console.error('FeaturesTable: Failed to load configuration:', err)
    error.value = `Failed to load configuration: ${err.message}`
    loading.value = false
  }
})
</script>

<template>

  <!-- FeaturesTable 
    FeaturesTable.vue
  -->

  <div class="storages-enhanced" :class="DESIGN_SYSTEM.container">
    <DataTable 
      v-if="enhancedConfig && !error"
      :config="enhancedConfig"
      :api-endpoint="'/api/features'"
      :table-name="'features'"
      :dark-mode-classes="darkModeClasses"
      :scaling-styles="scalingStyles"
      :show-k-p-i-s="true"
      :show-filters="true"
    />
    <div v-else-if="loading" class="flex items-center justify-center h-64">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p :class="darkModeClasses.textSecondary">Loading configuration...</p>
      </div>
    </div>
    <div v-else-if="error" class="flex items-center justify-center h-64">
      <div class="text-center">
        <div class="text-red-500 text-6xl mb-4">
          <i class="fas fa-exclamation-triangle"></i>
        </div>
        <h3 :class="darkModeClasses.text" class="text-xl font-semibold mb-2">Configuration Error</h3>
        <p :class="[darkModeClasses.textSecondary, 'text-red-600 dark:text-red-400']" class="mb-4">{{ error }}</p>
        <button 
          @click="location.reload()" 
          :style="scalingStyles.button"
          :class="[darkModeClasses.button, 'px-4 py-2 rounded-lg hover:opacity-90 transition-colors']"
        >
          <i class="fas fa-refresh mr-2"></i>
          Retry
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.storages-enhanced {
  @apply p-6;
}
</style>
