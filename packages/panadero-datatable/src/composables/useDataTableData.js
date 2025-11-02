// useDataTableData - Data Fetching for Data Table
// @version 1.0.0
// @date 29-Sep-2025
// @description Handles data fetching and dropdown data for data table
import axios from 'axios'

export function useDataTableData(props, config, state) {
  // Data operations
  const fetchData = async () => {
    console.debug('DataTable: fetchData started')
    state.loading.value = true
    state.error.value = null
    
    try {
      console.debug('DataTable: Making API call to:', props.apiEndpoint)
      const response = await axios.get(props.apiEndpoint)
      console.debug('DataTable: API response received:', response.data)
      state.data.value = Array.isArray(response.data) ? response.data : (response.data.data || [])
      console.debug('DataTable: Data set, length:', state.data.value.length)
      
      // If no data from API, use sample data from config if provided
      if (state.data.value.length === 0 && config.sampleData) {
        state.data.value = config.sampleData
        console.debug('DataTable: Using sample data')
      }
    } catch (err) {
      console.error('DataTable: Error fetching data:', err)
      state.error.value = err.message
      
      // Use sample data from config if API fails
      if (config.sampleData) {
        state.data.value = config.sampleData
        console.debug('DataTable: Using sample data due to error')
      }
    } finally {
      state.loading.value = false
      console.debug('DataTable: fetchData completed')
    }
  }

  // Fetch dropdown data for forms - GENERIC based on config
  const fetchDropdownData = async () => {
    console.debug('DataTable: fetchDropdownData started')
    if (!config.dropdowns || !Array.isArray(config.dropdowns)) {
      console.debug('DataTable: No dropdowns to fetch')
      return
    }
    
    console.debug('DataTable: Dropdowns to fetch:', config.dropdowns)
    
    try {
      // Add timeout to prevent hanging
      const controller = new AbortController()
      const timeoutId = setTimeout(() => {
        console.debug('DataTable: Dropdown fetch timed out after 5 seconds')
        controller.abort()
      }, 5000) // 5 second timeout
      
      // Fetch all dropdown data in parallel based on configuration
      const dropdownPromises = config.dropdowns.map(dropdown => {
        console.debug(`DataTable: Fetching dropdown ${dropdown.key} from ${dropdown.endpoint}`)
        return axios.get(dropdown.endpoint, {
          signal: controller.signal,
          timeout: 5000
        }).then(response => {
          console.debug(`DataTable: Successfully fetched ${dropdown.key}:`, response.data)
          // Handle both array responses and wrapped { data: [...] } responses
          const responseData = response.data
          const data = Array.isArray(responseData) ? responseData : (responseData.data || responseData || [])
          return {
            key: dropdown.key,
            data: data
          }
        }).catch(error => {
          console.error(`DataTable: Error fetching ${dropdown.key}:`, error)
          throw error
        })
      })
      
      console.debug('DataTable: Waiting for all dropdown promises...')
      const results = await Promise.all(dropdownPromises)
      console.debug('DataTable: All dropdown promises completed')
      
      clearTimeout(timeoutId)
      
      // Convert results to object
      state.dropdownData.value = results.reduce((acc, result) => {
        acc[result.key] = result.data
        return acc
      }, {})
      
      console.debug('DataTable: Dropdown data set:', state.dropdownData.value)
    } catch (err) {
      console.error('DataTable: Error in fetchDropdownData:', err)
      // Set empty object as fallback
      state.dropdownData.value = {}
    }
    console.debug('DataTable: fetchDropdownData completed')
  }

  return {
    fetchData,
    fetchDropdownData
  }
}
