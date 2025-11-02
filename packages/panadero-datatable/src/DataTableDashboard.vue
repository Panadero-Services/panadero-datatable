<!--
  DataTable Dashboard Page
  @version 1.0.15
  @date 01-Nov-2025
  @description Enhanced DataTable dashboard using generic DataTableComplete
-->
<script setup>
import { ref, onMounted } from 'vue'
import { DataTable } from 'panadero-datatable'
import GenericForm from './components/GenericForm.vue'
import { useCommonSnippets } from './composables/useCommonSnippets.js'
import axios from 'axios'

// Remove DESIGN_SYSTEM prop - it's now injected via useCommonSnippets

// Get common functionality for dark mode and scaling (injects designSystem)
const { designSystem, scalingStyles } = useCommonSnippets()

const enhancedConfig = ref(null)
const loading = ref(true)
const error = ref(null)

// Fetch configuration from API
onMounted(async () => {
  console.debug('DataTableDashboard: Component mounted, starting data fetch')
  try {
    console.debug('DataTableDashboard: Fetching configuration from /api/futures/config')
    
    // Add timeout to prevent hanging
    const controller = new AbortController()
    const timeoutId = setTimeout(() => {
      console.debug('DataTableDashboard: Request timed out after 10 seconds')
      controller.abort()
    }, 10000) // 10 second timeout
    
    console.debug('DataTableDashboard: Making axios request...')
    const response = await axios.get('/api/futures/config', {
      signal: controller.signal,
      timeout: 10000
    })
    
    console.debug('DataTableDashboard: Request completed, clearing timeout')
    clearTimeout(timeoutId)
    console.debug('DataTableDashboard: Configuration response received:', response.data)
    
    const modelConfig = response.data
    
    // Override formComponent with actual component
    enhancedConfig.value = {
      ...modelConfig,
      formComponent: GenericForm
    }
    console.debug('DataTableDashboard: Configuration set successfully')
    console.debug('DataTableDashboard: enhancedConfig.value:', enhancedConfig.value)
  } catch (err) {
    console.error('DataTableDashboard: Failed to load configuration:', err)
    if (err.name === 'AbortError') {
      error.value = 'Configuration request timed out. Please try again.'
    } else {
      error.value = `Failed to load configuration: ${err.message}`
    }
  } finally {
    loading.value = false
    console.debug('DataTableDashboard: Loading completed')
  }
})
</script>

<template>
  <div class="datatable-dashboard" :class="designSystem.container || ''">
    <DataTable 
      v-if="enhancedConfig && !error"
      :config="enhancedConfig"
      :api-endpoint="'/api/futures'"
      :table-name="'futures'"
      :dark-mode-classes="designSystem"
      :scaling-styles="scalingStyles"
      :show-k-p-i-s="true"
      :show-filters="true"
    />
    <div v-else-if="loading" class="flex items-center justify-center h-64">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p :class="designSystem.text.secondary || 'text-gray-600 dark:text-gray-400'">Loading configuration...</p>
      </div>
    </div>
    <div v-else-if="error" class="flex items-center justify-center h-64">
      <div class="text-center">
        <div class="text-red-500 text-6xl mb-4">
          <i class="fas fa-exclamation-triangle"></i>
        </div>
        <h3 :class="designSystem.text.primary || 'text-gray-900 dark:text-gray-100'" class="text-xl font-semibold mb-2">Configuration Error</h3>
        <p :class="[designSystem.text.secondary || 'text-gray-600 dark:text-gray-400', 'text-red-600 dark:text-red-400']" class="mb-4">{{ error }}</p>
        <button 
          @click="location.reload()" 
          :style="[scalingStyles.textFontSize, scalingStyles.buttonPadding]"
          :class="[designSystem.button.primary || 'bg-blue-600 text-white', 'px-4 py-2 rounded-lg hover:opacity-90 transition-colors']"
        >
          <i class="fas fa-refresh mr-2"></i>
          Retry
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.datatable-dashboard {
  @apply p-6;
}
</style>