// useDataTableComplete - Comprehensive Data Table Logic
// @version 1.0.0
// @date 29-Sep-2025
// @description Handles all data table operations: CRUD, filters, analytics, export
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { useCascadingFilters } from 'panadero-filters'
import { useStyling } from 'panadero-shared-styling'

export function useDataTableComplete(props, config) {
  // Get styling utilities
  const { getKpiColorClass, getKpiIconColor, getKpiBgColor } = useStyling()
  
  // State
  const data = ref([])
  const loading = ref(false)
  const error = ref(null)
  const dropdownData = ref({})
  const searchQuery = ref('')
  const collapsed = ref(true)

  // Filter configuration setup
  const filterConfigs = config.filters ? config.filters.map(filter => {
    // Build the correct field path for nested relationships
    let fieldPath = filter.field || filter.key
    if (filter.relationship && filter.field) {
      // Convert relationship name to snake_case and combine with field
      const relationshipKey = filter.relationship.replace(/([A-Z])/g, '_$1').toLowerCase()
      fieldPath = `${relationshipKey}.${filter.field}`
    }
    
    return {
      key: filter.key,
      field: fieldPath,
      label: filter.label,
      pluralLabel: filter.label + 's',
      searchable: true,
      getValue: (item) => {
        // Handle nested relationship fields like 'product_type.name'
        if (fieldPath.includes('.')) {
          const value = getNestedValue(item, fieldPath)
          // If the value is an object, extract the name field
          if (value && typeof value === 'object' && value.name) {
            return value.name
          }
          return value
        }
        // Handle direct fields
        const value = item[filter.key]
        // If the value is an object, extract the name field
        if (value && typeof value === 'object' && value.name) {
          return value.name
        }
        return value
      },
      getIcon: (value) => {
        // Product-specific icons based on the original implementation
        if (filter.key === 'product_type') {
          const icons = {
            'normal': 'fas fa-box',
            'bulk': 'fas fa-weight-hanging',
            'liquid': 'fas fa-tint',
            'service': 'fas fa-cogs'
          }
          return icons[value] || 'fas fa-cube'
        } else if (filter.key === 'brand') {
          return 'fas fa-tag'
        } else if (filter.key === 'product_group') {
          return 'fas fa-cube'
        }
        return 'fas fa-cube'
      }
    }
  }) : []

  // Define filter dependencies - GENERIC from config
  const dependencies = config.filterDependencies || []

  // Use cascading filters
  const {
    filterStates,
    searchQuery: baseSearchQuery,
    allFilterItems,
    filteredData: baseFilteredData,
    stats,
    selectFilter,
    clearAllFilters
  } = useCascadingFilters(data, filterConfigs, dependencies)

  // Apply search filtering on top of the base filtered data
  const filteredData = computed(() => {
    let filtered = baseFilteredData.value

    // Apply search filtering if search query exists
    if (searchQuery.value && searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase().trim()
      filtered = filtered.filter(item => {
        // Use searchable fields from config
        const searchFields = config.searchFields || ['name', 'identifier', 'title', 'description', 'comment']
        const searchText = searchFields.map(field => {
          if (field.includes('.')) {
            return getNestedValue(item, field)
          }
          return item[field]
        }).filter(Boolean).join(' ')
        return searchText.toLowerCase().includes(query)
      })
    }

    return filtered
  })

  // Helper function to get nested object values
  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : null
    }, obj)
  }

  // Data operations
  const fetchData = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await axios.get(props.apiEndpoint)
      data.value = Array.isArray(response.data) ? response.data : (response.data.data || [])
      
      // If no data from API, use sample data from config if provided
      if (data.value.length === 0 && config.sampleData) {
        data.value = config.sampleData
      }
    } catch (err) {
      error.value = err.message
      console.error('Error fetching data:', err)
      
      // Use sample data from config if API fails
      if (config.sampleData) {
        data.value = config.sampleData
      }
    } finally {
      loading.value = false
    }
  }

  // Fetch dropdown data for forms - GENERIC based on config
  const fetchDropdownData = async () => {
    if (!config.dropdowns || !Array.isArray(config.dropdowns)) {
      return
    }
    
    try {
      // Fetch all dropdown data in parallel based on configuration
      const dropdownPromises = config.dropdowns.map(dropdown => 
        axios.get(dropdown.endpoint).then(response => ({
          key: dropdown.key,
          data: response.data || []
        }))
      )
      
      const results = await Promise.all(dropdownPromises)
      
      // Convert results to object
      dropdownData.value = results.reduce((acc, result) => {
        acc[result.key] = result.data
        return acc
      }, {})
    } catch (err) {
      console.error('Error fetching dropdown data:', err)
      // Set empty object as fallback
      dropdownData.value = {}
    }
  }

  // CRUD operations
  const createItem = async (itemData) => {
    try {
      const response = await axios.post(props.apiEndpoint, itemData, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Accept': 'application/json',
          ...config.apiHeaders
        }
      })
      await fetchData()
      return { 
        success: true, 
        message: 'Item created successfully',
        data: response.data.data || response.data
      }
    } catch (err) {
      console.error('Error creating item:', err)
      return { 
        success: false, 
        message: err.response?.data?.message || 'Failed to create item',
        errors: err.response?.data?.errors
      }
    }
  }

  const updateItem = async (id, itemData) => {
    try {
      const response = await axios.put(`${props.apiEndpoint}/${id}`, itemData, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Accept': 'application/json',
          ...config.apiHeaders
        }
      })
      await fetchData()
      return { 
        success: true, 
        message: 'Item updated successfully',
        data: response.data.data || response.data
      }
    } catch (err) {
      console.error('Error updating item:', err)
      return { 
        success: false, 
        message: err.response?.data?.message || 'Failed to update item',
        errors: err.response?.data?.errors
      }
    }
  }

  const deleteItem = async (id) => {
    try {
      await axios.delete(`${props.apiEndpoint}/${id}`, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Accept': 'application/json',
          ...config.apiHeaders
        }
      })
      await fetchData()
      return { success: true, message: 'Item deleted successfully' }
    } catch (err) {
      console.error('Error deleting item:', err)
      return { success: false, message: 'Failed to delete item' }
    }
  }

  const bulkDeleteItems = async (ids) => {
    try {
      await Promise.all(ids.map(id => axios.delete(`${props.apiEndpoint}/${id}`, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Accept': 'application/json',
          ...config.apiHeaders
        }
      })))
      await fetchData()
      return { success: true, message: `${ids.length} items deleted successfully` }
    } catch (err) {
      console.error('Error bulk deleting items:', err)
      return { success: false, message: 'Failed to delete items' }
    }
  }

  // KPI calculations
  const calculateKpiValue = (kpi) => {
    // Generic KPI calculation based on configuration
    if (typeof kpi.calculate === 'function') {
      return kpi.calculate(filteredData.value)
    }
    
    // Default calculations based on key
    switch (kpi.key) {
      case 'total':
        return filteredData.value.length
      case 'active':
        return filteredData.value.filter(item => item.is_active === true).length
      case 'inactive':
        return filteredData.value.filter(item => item.is_active === false).length
      case 'locked':
        return filteredData.value.filter(item => item.is_locked === true).length
      case 'unlocked':
        return filteredData.value.filter(item => item.is_locked === false).length
      default:
        // Try to calculate based on field name
        if (kpi.field) {
          return filteredData.value.filter(item => item[kpi.field] === kpi.value).length
        }
        return 0
    }
  }

  const kpis = computed(() => {
    if (!config.kpis || !Array.isArray(config.kpis)) return []
    
    const processedKpis = config.kpis.map(kpi => {
      const processedKpi = {
        ...kpi,
        value: calculateKpiValue(kpi),
        // Add color information if not already provided
        colorClass: kpi.colorClass || kpi.color || getKpiColorClass(kpi.key),
        iconColor: kpi.iconColor || getKpiIconColor(kpi.key),
        bgColor: kpi.bgColor || getKpiBgColor(kpi.key)
      }
      
      return processedKpi
    })
    
    return processedKpis
  })

  // Distribution calculations for charts
  const productTypeDistribution = computed(() => {
    if (config.title !== 'Products') return []
    
    const typeCounts = {}
    filteredData.value.forEach(item => {
      const type = item.product_type?.name || 'No Type'
      typeCounts[type] = (typeCounts[type] || 0) + 1
    })
    
    const colors = [
      '#FF0000', // Pure Red
      '#00FF00', // Pure Green  
      '#0000FF', // Pure Blue
      '#FFFF00', // Pure Yellow
      '#FF00FF', // Pure Magenta
      '#00FFFF', // Pure Cyan
      '#FF8000', // Orange
      '#8000FF', // Purple
      '#FF0080', // Pink
      '#80FF00', // Lime
      '#0080FF', // Light Blue
      '#FF8080', // Light Red
      '#80FF80', // Light Green
      '#8080FF', // Light Blue
      '#FFFF80', // Light Yellow
      '#FF80FF', // Light Magenta
      '#80FFFF', // Light Cyan
      '#FF4000', // Red-Orange
      '#FF0040', // Red-Pink
      '#4000FF', // Blue-Purple
      '#00FF80', // Green-Cyan
      '#FF8040', // Orange-Red
      '#8040FF', // Purple-Blue
      '#40FF80', // Cyan-Green
      '#FF4080', // Pink-Red
      '#4080FF', // Blue-Cyan
      '#80FF40', // Lime-Green
      '#FF8080', // Light Red-Pink
      '#80FF80', // Light Green-Lime
      '#8080FF', // Light Blue-Cyan
      '#FFFF80', // Light Yellow-Lime
      '#FF80FF'  // Light Magenta-Pink
    ]
    
    return Object.entries(typeCounts).map(([name, count], index) => ({
      name,
      count,
      percentage: Math.round((count / filteredData.value.length) * 100),
      color: colors[index % colors.length]
    }))
  })

  // Generic distribution calculation for any relationship field
  const getDistribution = (relationshipField, fallbackName = 'Unknown') => {
    // Remove the distributionField check - just calculate for any relationship
    const counts = {}
    const itemData = {}
    filteredData.value.forEach(item => {
      const relationship = getNestedValue(item, relationshipField)
      const name = relationship?.name || fallbackName
      counts[name] = (counts[name] || 0) + 1
      if (relationship) {
        itemData[name] = relationship
      }
    })
    
    const fallbackColors = [
      '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
      '#FFA500', '#800080', '#008000', '#FFC0CB', '#A52A2A', '#808080',
      '#000000', '#FFFFFF', '#FFD700', '#C0C0C0', '#8B4513', '#2F4F4F',
      '#FF6347', '#32CD32', '#1E90FF', '#FF1493', '#00CED1', '#FF8C00',
      '#8A2BE2', '#DC143C', '#00FA9A', '#4169E1', '#FF69B4', '#20B2AA',
      '#87CEEB', '#F0E68C'
    ]
    
    return Object.entries(counts).map(([name, count], index) => {
      const item = itemData[name]
      const itemColor = item?.json?.color || fallbackColors[index % fallbackColors.length]
      
      return {
        name,
        count,
        percentage: Math.round((count / filteredData.value.length) * 100),
        color: itemColor
      }
    })
  }

  const brandDistribution = computed(() => getDistribution('brand', 'No Brand'))

  // Export functionality
  const convertToCSV = (data) => {
    if (!data.length) return ''
    
    const headers = Object.keys(data[0])
    const csvRows = [headers.join(',')]
    
    for (const row of data) {
      const values = headers.map(header => {
        const value = row[header] || ''
        return `"${value.toString().replace(/"/g, '""')}"`
      })
      csvRows.push(values.join(','))
    }
    
    return csvRows.join('\n')
  }

  const downloadCSV = (csvContent, filename) => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', filename)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const exportData = () => {
    try {
      // Use export fields from config
      const exportFields = config.exportFields || [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'created_at', label: 'Created At' }
      ]
      
      const dataToExport = data.value.map(item => {
        const exportItem = {}
        exportFields.forEach(field => {
          if (field.key.includes('.')) {
            exportItem[field.label] = getNestedValue(item, field.key) || ''
          } else if (field.transform && typeof field.transform === 'function') {
            exportItem[field.label] = field.transform(item[field.key], item)
          } else {
            exportItem[field.label] = item[field.key] || ''
          }
        })
        return exportItem
      })

      const csvContent = convertToCSV(dataToExport)
      downloadCSV(csvContent, `${props.tableName}_export_${new Date().toISOString().split('T')[0]}.csv`)
      return { success: true, message: 'Data exported successfully' }
    } catch (error) {
      console.error('Export error:', error)
      return { success: false, message: 'Export failed' }
    }
  }

  // Refresh functionality
  const handleRefresh = async () => {
    const beforeCount = filteredData.value.length
    await fetchData()
    const afterCount = filteredData.value.length
    const newRecords = afterCount - beforeCount
    
    return {
      newRecords,
      message: newRecords > 0 ? `Found ${newRecords} new record(s)` : 'Data refreshed successfully'
    }
  }

  // Helper function to get form props dynamically
  const getFormProps = () => {
    const formProps = {}
    
    // Dynamic form props mapping based on config
    if (config.formProps) {
      // Use form props mapping from config
      Object.entries(config.formProps).forEach(([propName, dataKey]) => {
        formProps[propName] = dropdownData.value[dataKey] || []
      })
    } else {
      // Generic mapping: use all available dropdown data
      Object.keys(dropdownData.value).forEach(key => {
        formProps[key] = dropdownData.value[key] || []
      })
    }
    
    return formProps
  }

  // Helper function to get display name for items
  const getItemDisplayName = (item) => {
    return item.name || item.title || item.identifier || `Item #${item.id}`
  }

  // Initialize data on mount
  onMounted(async () => {
    try {
      await Promise.all([fetchData(), fetchDropdownData()])
    } catch (error) {
      console.error('useDataTableComplete onMounted - error:', error)
    }
  })

  return {
    // State
    data,
    loading,
    error,
    dropdownData,
    searchQuery,
    collapsed,
    
    // Filtered data
    filteredData,
    filterStates,
    allFilterItems,
    selectFilter,
    clearAllFilters,
    
    // CRUD operations
    createItem,
    updateItem,
    deleteItem,
    bulkDeleteItems,
    
    // Analytics
    kpis,
    productTypeDistribution,
    brandDistribution,
    
    // Export
    exportData,
    
    // Refresh
    handleRefresh,
    
    // Helpers
    getFormProps,
    getItemDisplayName,
    getNestedValue,
    
    // Data fetching
    fetchData,
    fetchDropdownData
  }
}