// v1.0.0 - Data table composable for panadero-datatable
import { ref, computed, watch, onMounted } from 'vue'
import { useDynamicAPI } from './useDynamicAPI.js'

export function useDataTable(config, externalData = null) {
  const {
    table: tableName,
    title = 'Data Table',
    columns = [],
    searchable = true,
    sortable = true,
    selectable = true,
    pagination = true,
    itemsPerPage = 10,
    refreshInterval = null
  } = config

  // Use external data if provided, otherwise use dynamic API
  const data = ref(externalData || [])
  const loading = ref(false)
  const error = ref(null)
  
  // Only use dynamic API if no external data is provided
  let api = null
  if (!externalData) {
    const apiResult = useDynamicAPI(tableName)
    api = apiResult.api
  }
  
  // Data loading function
  const loadData = async () => {
    // If external data is provided, don't load from API
    if (externalData) {
      return
    }
    
    try {
      loading.value = true
      const response = await api.list()
      data.value = Array.isArray(response) ? response : []
    } catch (err) {
      error.value = err.response?.data?.message || err.message
    } finally {
      loading.value = false
    }
  }

  // Data state
  const selectedItems = ref([])
  const searchQuery = ref('')
  const sortField = ref('id')
  const sortDirection = ref('asc')
  const currentPage = ref(1)

  // Computed properties
  const allData = computed(() => data.value)

  const filteredData = computed(() => {
    let filtered = [...data.value]

    // Search filtering
    if (searchQuery.value && searchable) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(item => {
        return columns.some(column => {
          if (column.searchable === false) return false
          const value = getNestedValue(item, column.key)
          return value && value.toString().toLowerCase().includes(query)
        })
      })
    }

    // Sorting
    if (sortable && sortField.value) {
      filtered.sort((a, b) => {
        const aVal = getNestedValue(a, sortField.value)
        const bVal = getNestedValue(b, sortField.value)
        
        if (aVal === bVal) return 0
        
        const comparison = aVal < bVal ? -1 : 1
        return sortDirection.value === 'asc' ? comparison : -comparison
      })
    }

    return filtered
  })

  const paginatedData = computed(() => {
    if (!pagination) {
      return filteredData.value
    }

    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredData.value.slice(start, end)
  })

  const totalPages = computed(() => {
    if (!pagination) return 1
    return Math.ceil(filteredData.value.length / itemsPerPage)
  })

  const allSelected = computed(() => {
    if (!selectable || !paginatedData.value.length) return false
    return selectedItems.value.length === paginatedData.value.length
  })

  // Methods
  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((current, key) => current?.[key], obj)
  }

  const refresh = () => {
    loadData()
  }

  const handleSort = (field) => {
    if (!sortable) return
    
    if (sortField.value === field) {
      sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
    } else {
      sortField.value = field
      sortDirection.value = 'asc'
    }
  }

  const handleSelectAll = () => {
    if (!selectable) return
    
    if (allSelected.value) {
      selectedItems.value = []
    } else {
      selectedItems.value = paginatedData.value.map(item => item.id)
    }
  }

  const handleSelectItem = (itemId) => {
    if (!selectable) return
    
    const index = selectedItems.value.indexOf(itemId)
    if (index > -1) {
      selectedItems.value.splice(index, 1)
    } else {
      selectedItems.value.push(itemId)
    }
  }

  const handleSearch = (query) => {
    searchQuery.value = query
    currentPage.value = 1 // Reset to first page when searching
  }

  const handlePageChange = (page) => {
    currentPage.value = page
  }

  const handleCreate = async (itemData) => {
    try {
      const newItem = await api.store(itemData)
      data.value.unshift(newItem)
      return newItem
    } catch (err) {
      throw err
    }
  }

  const handleUpdate = async (id, itemData) => {
    try {
      const updatedItem = await api.update(id, itemData)
      const index = data.value.findIndex(item => item.id === id)
      if (index > -1) {
        data.value[index] = updatedItem
      }
      return updatedItem
    } catch (err) {
      throw err
    }
  }

  const handleDelete = async (id) => {
    try {
      // Only call API if not using external data
      if (api) {
        await api.destroy(id)
      }
      // Remove from local data
      data.value = data.value.filter(item => item.id !== id)
      selectedItems.value = selectedItems.value.filter(itemId => itemId !== id)
    } catch (err) {
      throw err
    }
  }

  const handleBulkDelete = async () => {
    try {
      // Only call API if not using external data
      if (api) {
        await Promise.all(selectedItems.value.map(id => api.destroy(id)))
      }
      // Remove from local data
      data.value = data.value.filter(item => !selectedItems.value.includes(item.id))
      selectedItems.value = []
    } catch (err) {
      throw err
    }
  }

  // Auto-refresh setup
  let refreshTimer = null
  if (refreshInterval && refreshInterval > 0) {
    refreshTimer = setInterval(refresh, refreshInterval)
  }

  // Watch for external data changes
  if (externalData) {
    watch(() => externalData, (newData) => {
      data.value = Array.isArray(newData) ? newData : []
    }, { immediate: true, deep: true })
  }

  // Lifecycle
  onMounted(() => {
    // Only load data if no external data is provided
    if (!externalData) {
      loadData()
    }
  })

  // Cleanup
  const cleanup = () => {
    if (refreshTimer) {
      clearInterval(refreshTimer)
    }
  }

  return {
    // Data
    data: paginatedData,
    allData,
    selectedItems,
    searchQuery,
    sortField,
    sortDirection,
    currentPage,
    totalPages,
    allSelected,
    loading,
    error,

    // Methods
    loadData,
    refresh,
    handleSort,
    handleSelectAll,
    handleSelectItem,
    handleSearch,
    handlePageChange,
    handleCreate,
    handleUpdate,
    handleDelete,
    handleBulkDelete,
    cleanup,

    // Computed
    filteredData,
    paginatedData
  }
}
