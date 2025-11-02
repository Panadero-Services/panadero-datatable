// useDataTableCRUD - CRUD Operations for Data Table
// @version 1.0.0
// @date 29-Sep-2025
// @description Handles Create, Read, Update, Delete operations for data table
import axios from 'axios'

export function useDataTableCRUD(props, config, state, fetchData) {
  // Helper function to get custom headers based on API endpoint
  const getCustomHeader = (apiEndpoint) => {
    // Check if config has custom header mapping
    if (config.customHeaders && typeof config.customHeaders === 'function') {
      return config.customHeaders(apiEndpoint)
    }
    
    // Check if config has header patterns
    if (config.headerPatterns && Array.isArray(config.headerPatterns)) {
      for (const pattern of config.headerPatterns) {
        if (apiEndpoint.includes(pattern.endpoint)) {
          return pattern.headers || {}
        }
      }
    }
    
    // Fallback: try to extract endpoint name and create generic header
    const endpointName = apiEndpoint.split('/').pop() || 'unknown'
    const headerName = `X-From-${endpointName.charAt(0).toUpperCase() + endpointName.slice(1)}-Page`
    return { [headerName]: 'true' }
  }

  // CRUD operations
  const createItem = async (itemData) => {
    try {
      await axios.post(props.apiEndpoint, itemData, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Accept': 'application/json',
          ...getCustomHeader(props.apiEndpoint),
          ...config.apiHeaders
        }
      })
      await fetchData()
      return { success: true, message: 'Item created successfully' }
    } catch (err) {
      console.error('Error creating item:', err)
      return { success: false, message: 'Failed to create item' }
    }
  }

  const updateItem = async (id, itemData) => {
    try {
      await axios.put(`${props.apiEndpoint}/${id}`, itemData, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Accept': 'application/json',
          ...getCustomHeader(props.apiEndpoint),
          ...config.apiHeaders
        }
      })
      await fetchData()
      return { success: true, message: 'Item updated successfully' }
    } catch (err) {
      console.error('Error updating item:', err)
      return { success: false, message: 'Failed to update item' }
    }
  }

  const deleteItem = async (id) => {
    try {
      const headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        ...getCustomHeader(props.apiEndpoint),
        ...config.apiHeaders
      }
      
      console.debug('DataTable: Delete request headers:', headers)
      console.debug('DataTable: API endpoint:', props.apiEndpoint)
      console.debug('DataTable: Custom header result:', getCustomHeader(props.apiEndpoint))
      
      await axios.delete(`${props.apiEndpoint}/${id}`, {
        headers
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
          ...getCustomHeader(props.apiEndpoint),
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

  return {
    createItem,
    updateItem,
    deleteItem,
    bulkDeleteItems,
    getCustomHeader
  }
}
