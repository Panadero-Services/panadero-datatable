// packages/panadero-datatable/src/composables/useDataTableConfigFetch.js

import { ref, onMounted } from 'vue'
import axios from 'axios'

/**
 * Composable for fetching DataTable configuration from API
 * Handles AbortController, timeout, error handling, and loading states
 * 
 * @param {string} configEndpoint - API endpoint for configuration
 * @param {Object} formComponent - Form component to use for CRUD operations
 * @param {number} timeout - Request timeout in ms (default: 10000)
 * @returns {Object} - { enhancedConfig, loading, error, refetch }
 */
export function useDataTableConfigFetch(configEndpoint, formComponent, timeout = 10000) {
  const enhancedConfig = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const fetchConfig = async () => {
    console.debug(`[useDataTableConfigFetch] Fetching config from: ${configEndpoint}`)
    
    try {
      // Create AbortController for timeout
      const controller = new AbortController()
      const timeoutId = setTimeout(() => {
        console.debug(`[useDataTableConfigFetch] Request timed out after ${timeout/1000} seconds`)
        controller.abort()
      }, timeout)
      
      // Make the request
      const response = await axios.get(configEndpoint, {
        signal: controller.signal,
        timeout: timeout,
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      
      // Clear timeout
      clearTimeout(timeoutId)
      console.debug('[useDataTableConfigFetch] Configuration received:', response.data)
      
      // Set enhanced config
      enhancedConfig.value = {
        ...response.data,
        formComponent: formComponent
      }
      
    } catch (err) {
      console.error('[useDataTableConfigFetch] Failed to load configuration:', err)
      
      if (err.name === 'AbortError') {
        error.value = 'Configuration request timed out. Please try again.'
      } else {
        error.value = `Failed to load configuration: ${err.message}`
      }
    } finally {
      loading.value = false
      console.debug('[useDataTableConfigFetch] Loading completed')
    }
  }

  onMounted(() => {
    fetchConfig()
  })

  return {
    enhancedConfig,
    loading,
    error,
    refetch: fetchConfig  // Allow manual refetch if needed
  }
}