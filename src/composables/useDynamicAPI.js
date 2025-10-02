// v1.0.0 - Dynamic API composable for panadero-datatable
import { ref, computed } from 'vue'
import axios from 'axios'

export function useDynamicAPI(tableName) {
  console.debug('useDynamicAPI called with tableName:', tableName)
  const apiBase = '/api' // Use API routes
  const loading = ref(false)
  const error = ref(null)

  // Generic endpoint configuration - no hardcoded mappings
  const endpoints = computed(() => {
    // Use tableName directly - let the backend handle routing
    const endpoint = `${apiBase}/${tableName}`
    console.log('Generated endpoint for', tableName, ':', endpoint)
    return {
      list: endpoint,
      show: (id) => `${endpoint}/${id}`,
      store: endpoint,
      update: (id) => `${endpoint}/${id}`,
      updateField: (id) => `${endpoint}/${id}/field`,
      destroy: (id) => `${endpoint}/${id}`
    }
  })

  // Generic API methods
  const api = {
    // GET /api/{table}
    async list(params = {}) {
      console.debug('api.list() called with params:', params)
      console.debug('Making request to:', endpoints.value.list)
      loading.value = true
      error.value = null
      try {
        const response = await axios.get(endpoints.value.list, { params })
        console.debug('API response received:', response)
        console.debug('Response data:', response.data)
        return response.data
      } catch (err) {
        console.error('API call failed:', err)
        error.value = err.response?.data?.message || err.message
        throw err
      } finally {
        loading.value = false
      }
    },

    // GET /api/{table}/{id}
    async show(id) {
      loading.value = true
      error.value = null
      try {
        const response = await axios.get(endpoints.value.show(id))
        return response.data
      } catch (err) {
        error.value = err.response?.data?.message || err.message
        throw err
      } finally {
        loading.value = false
      }
    },

    // POST /api/{table}
    async store(data) {
      loading.value = true
      error.value = null
      try {
        const response = await axios.post(endpoints.value.store, data)
        return response.data
      } catch (err) {
        error.value = err.response?.data?.message || err.message
        throw err
      } finally {
        loading.value = false
      }
    },

    // PUT /api/{table}/{id}
    async update(id, data) {
      loading.value = true
      error.value = null
      try {
        const response = await axios.put(endpoints.value.update(id), data)
        return response.data
      } catch (err) {
        error.value = err.response?.data?.message || err.message
        throw err
      } finally {
        loading.value = false
      }
    },

    // PATCH /api/{table}/{id}/field
    async updateField(id, field, value) {
      loading.value = true
      error.value = null
      try {
        const response = await axios.patch(endpoints.value.updateField(id), {
          field,
          value
        })
        return response.data
      } catch (err) {
        error.value = err.response?.data?.message || err.message
        throw err
      } finally {
        loading.value = false
      }
    },

    // DELETE /api/{table}/{id}
    async destroy(id) {
      loading.value = true
      error.value = null
      try {
        const response = await axios.delete(endpoints.value.destroy(id))
        return response.data
      } catch (err) {
        error.value = err.response?.data?.message || err.message
        throw err
      } finally {
        loading.value = false
      }
    }
  }

  return {
    endpoints,
    loading,
    error,
    api
  }
}
