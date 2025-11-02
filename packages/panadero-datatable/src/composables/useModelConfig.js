// v1.0.0 - Model configuration composable for panadero-datatable
import { ref, computed } from 'vue'
import axios from 'axios'

export function useModelConfig(tableName) {
  const config = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchConfig = async () => {
    try {
      loading.value = true
      error.value = null
      
      const response = await axios.get(`/api/model-config/${tableName}`)
      config.value = response.data
      
      return response.data
    } catch (err) {
      error.value = err.response?.data?.message || err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  const dataTableConfig = computed(() => {
    return config.value?.dataTableConfig || null
  })

  const relationships = computed(() => {
    return config.value?.relationships || {}
  })

  const formFields = computed(() => {
    return config.value?.formFields || []
  })

  const searchableColumns = computed(() => {
    return config.value?.searchableColumns || []
  })

  return {
    config,
    dataTableConfig,
    relationships,
    formFields,
    searchableColumns,
    loading,
    error,
    fetchConfig
  }
}
