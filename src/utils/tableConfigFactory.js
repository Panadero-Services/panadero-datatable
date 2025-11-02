// v1.0.0 - Table configuration factory for panadero-datatable
import { defaultTableConfig, commonTableConfigs } from '../config/tableDefaults.js'

export function createTableConfig(config) {
  console.debug('createTableConfig called with:', config)
  // Merge with defaults
  const mergedConfig = {
    ...defaultTableConfig,
    ...config
  }
  console.debug('createTableConfig merged result:', mergedConfig)

  // Merge column defaults
  if (mergedConfig.columns) {
    mergedConfig.columns = mergedConfig.columns.map(column => ({
      ...defaultTableConfig.columnDefaults,
      ...column
    }))
  }

  return mergedConfig
}

export function getTableConfig(preset) {
  if (commonTableConfigs[preset]) {
    return createTableConfig(commonTableConfigs[preset])
  }
  
  throw new Error(`Table preset '${preset}' not found. Available presets: ${Object.keys(commonTableConfigs).join(', ')}`)
}

export function createCustomTableConfig(tableName, options = {}) {
  const baseConfig = {
    table: tableName,
    title: options.title || `${tableName.charAt(0).toUpperCase() + tableName.slice(1)} Table`,
    ...options
  }

  return createTableConfig(baseConfig)
}
