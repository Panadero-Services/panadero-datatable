// useDataTable - Main Data Table Logic (Refactored)
// @version 1.0.0
// @date 29-Sep-2025
// @description Orchestrates all data table operations using smaller composables
import { computed, onMounted } from 'vue'
import { useCascadingFilters } from 'panadero-filters'
import { useDataTableState } from './useDataTableState.js'
import { useDataTableCRUD } from './useDataTableCRUD.js'
import { useDataTableAnalytics } from './useDataTableAnalytics.js'
import { useDataTablePagination } from './useDataTablePagination.js'
import { useDataTableData } from './useDataTableData.js'
import { useDataTableExport } from './useDataTableExport.js'

export function useDataTable(props, config) {
  // Get state from state composable
  const state = useDataTableState()

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
      getIcon: (item) => {
        // Product-specific icons based on the original implementation
        if (filter.key === 'product_type') {
          const icons = {
            'Raw Material': 'fas fa-seedling',
            'Finished Product': 'fas fa-box',
            'Semi-Finished': 'fas fa-cogs',
            'Component': 'fas fa-puzzle-piece',
            'Service': 'fas fa-tools',
            'Other': 'fas fa-cube'
          }
          const value = getNestedValue(item, fieldPath)
          return icons[value] || 'fas fa-cube'
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
  } = useCascadingFilters(state.data, filterConfigs, dependencies)

  // Apply search filtering on top of the base filtered data
  const filteredData = computed(() => {
    let filtered = baseFilteredData.value
    
    // Apply search filtering if search query exists
    if (state.searchQuery.value && state.searchQuery.value.trim()) {
      const query = state.searchQuery.value.toLowerCase().trim()
      filtered = filtered.filter(item => {
        // Use searchable fields from config
        const searchFields = config.searchFields || ['name', 'identifier', 'title', 'description', 'comment']
        const searchText = searchFields.map(field => {
          const value = getNestedValue(item, field)
          return value ? value.toString().toLowerCase() : ''
        }).join(' ')
        
        return searchText.includes(query)
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

  // Get data operations
  const { fetchData, fetchDropdownData } = useDataTableData(props, config, state)

  // Get CRUD operations
  const { createItem, updateItem, deleteItem, bulkDeleteItems } = useDataTableCRUD(props, config, state, fetchData)

  // Get analytics
  const { kpis, productTypeDistribution, brandDistribution } = useDataTableAnalytics(config, filteredData)

  // Get pagination
  const pagination = useDataTablePagination(filteredData, {
    currentPage: 1,
    itemsPerPage: 20
  })

  // Get export functionality
  const { exportData } = useDataTableExport(props, config, state, getNestedValue)

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
    
    // Always include formConfig if it exists
    if (config.formConfig) {
      formProps.formConfig = config.formConfig
    }
    
    // Include dropdownData for GenericForm
    formProps.dropdownData = state.dropdownData.value
    
    if (config.formProps) {
      // Use form props mapping from config
      Object.entries(config.formProps).forEach(([propName, dataKey]) => {
        formProps[propName] = state.dropdownData.value[dataKey] || []
      })
    } else {
      // Default mapping for ProductForm
      formProps.productTypes = state.dropdownData.value.productTypes || []
      formProps.productGroups = state.dropdownData.value.productGroups || []
      formProps.brands = state.dropdownData.value.brands || []
      formProps.units = state.dropdownData.value.units || []
    }
    
    return formProps
  }

  // Helper function to get display name for items
  const getItemDisplayName = (item) => {
    return item.name || item.title || item.identifier || `Item #${item.id}`
  }

  // Initialize data on mount
  onMounted(async () => {
    console.debug('DataTable: onMounted started')
    await fetchData()
    await fetchDropdownData()
    console.debug('DataTable: onMounted completed')
  })

  return {
    // State
    ...state,

    // Filtered data
    filteredData,
    filterStates,
    allFilterItems,
    stats,

    // Pagination
    ...pagination,

    // Analytics
    kpis,
    productTypeDistribution,
    brandDistribution,

    // CRUD operations
    createItem,
    updateItem,
    deleteItem,
    bulkDeleteItems,

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
    fetchDropdownData,

    // Filter operations
    selectFilter,
    clearAllFilters
  }
}