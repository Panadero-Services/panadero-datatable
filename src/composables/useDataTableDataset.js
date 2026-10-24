// useDataTableDataset - Dataset Save/Restore Functionality
// @version 1.0.16
// @date 01-Nov-2025
// @description Handles saving and restoring datatable datasets to/from JSON files with support for multiple tables per dataset
import { downloadJsonFile, readJsonFile, validateJsonDatasetEnvelope } from 'panadero-shared-styling';

export function useDataTableDataset(props, config, state, filterStates, searchQuery) {
  
  /**
   * Create a new empty dataset structure
   */
  const createEmptyDataset = (name, description = '') => {
    return {
      version: '1.0',
      name: name || `dataset_${new Date().toISOString().split('T')[0]}`,
      description: description,
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
      tables: {}
    }
  }

  /**
   * Save current table state to a dataset structure
   */
  const saveCurrentTable = (datasetName = null) => {
    try {
      const tableData = {
        tableName: props.tableName,
        config: {
          title: config.title,
          columns: config.columns,
          filters: config.filters,
          exportFields: config.exportFields
        },
        data: JSON.parse(JSON.stringify(state.data.value)), // Deep copy
        filters: JSON.parse(JSON.stringify(filterStates.value || {})),
        searchQuery: searchQuery.value || '',
        pagination: {
          currentPage: state.currentPage?.value || 1,
          itemsPerPage: state.itemsPerPage?.value || 10
        },
        metadata: {
          savedAt: new Date().toISOString(),
          rowCount: state.data.value.length
        }
      }
      
      return tableData
    } catch (error) {
      console.error('Error saving table:', error)
      return null
    }
  }

  /**
   * Save dataset to JSON file (download)
   */
  const saveDataset = (datasetName, description = '', existingDataset = null) => {
    try {
      // If existing dataset, merge with new table
      let dataset = existingDataset || createEmptyDataset(datasetName, description)

      // Update dataset metadata
      dataset.updated = new Date().toISOString()
      if (datasetName && datasetName !== dataset.name) {
        dataset.name = datasetName
      }
      if (description) {
        dataset.description = description
      }

      // Save current table to dataset
      const tableData = saveCurrentTable()
      if (tableData) {
        dataset.tables[props.tableName] = tableData
      }

      downloadJsonFile(dataset, dataset.name || 'dataset')

      return { 
        success: true, 
        message: `Dataset "${dataset.name}" saved successfully`,
        dataset 
      }
    } catch (error) {
      console.error('Error saving dataset:', error)
      return { 
        success: false, 
        message: 'Failed to save dataset',
        error: error.message 
      }
    }
  }

  /**
   * Add current table to existing dataset (merge)
   */
  const addTableToDataset = (existingDataset) => {
    try {
      if (!existingDataset || !existingDataset.tables) {
        return {
          success: false,
          message: 'Invalid dataset provided'
        }
      }

      // Update dataset metadata
      existingDataset.updated = new Date().toISOString()

      // Add current table to dataset
      const tableData = saveCurrentTable()
      if (tableData) {
        existingDataset.tables[props.tableName] = tableData
      }

      return {
        success: true,
        message: `Table "${props.tableName}" added to dataset "${existingDataset.name}"`,
        dataset: existingDataset
      }
    } catch (error) {
      console.error('Error adding table to dataset:', error)
      return {
        success: false,
        message: 'Failed to add table to dataset',
        error: error.message
      }
    }
  }

  /**
   * Restore table from dataset
   */
  const restoreTable = (dataset, tableName = null) => {
    try {
      const targetTableName = tableName || props.tableName
      const tableData = dataset.tables[targetTableName]

      if (!tableData) {
        return { 
          success: false, 
          message: `Table "${targetTableName}" not found in dataset` 
        }
      }

      // Restore data
      state.data.value = tableData.data || []
      
      // Restore filters
      if (tableData.filters && filterStates.value) {
        Object.keys(tableData.filters).forEach(key => {
          filterStates.value[key] = tableData.filters[key]
        })
      }

      // Restore search query
      if (searchQuery && tableData.searchQuery !== undefined) {
        searchQuery.value = tableData.searchQuery
      }

      // Restore pagination
      if (tableData.pagination) {
        if (state.currentPage) state.currentPage.value = tableData.pagination.currentPage || 1
        if (state.itemsPerPage) state.itemsPerPage.value = tableData.pagination.itemsPerPage || 10
      }

      return { 
        success: true, 
        message: `Table "${targetTableName}" restored successfully`,
        tableData 
      }
    } catch (error) {
      console.error('Error restoring table:', error)
      return { 
        success: false, 
        message: 'Failed to restore table',
        error: error.message 
      }
    }
  }

  /**
   * Load dataset from JSON file
   */
  const loadDataset = async (file) => {
    const dataset = await readJsonFile(file)
    const validation = validateJsonDatasetEnvelope(dataset)
    if (!validation.valid) {
      throw new Error(validation.error || 'Invalid dataset format')
    }
    return {
      success: true,
      dataset,
    }
  }

  /**
   * Get list of tables in dataset
   */
  const getDatasetTables = (dataset) => {
    if (!dataset || !dataset.tables) return []
    return Object.keys(dataset.tables).map(name => ({
      name,
      rowCount: dataset.tables[name].metadata?.rowCount || 0,
      savedAt: dataset.tables[name].metadata?.savedAt
    }))
  }

  /**
   * Validate dataset structure
   */
  const validateDataset = (dataset) => validateJsonDatasetEnvelope(dataset)

  return {
    createEmptyDataset,
    saveCurrentTable,
    saveDataset,
    addTableToDataset,
    restoreTable,
    loadDataset,
    getDatasetTables,
    validateDataset
  }
}
