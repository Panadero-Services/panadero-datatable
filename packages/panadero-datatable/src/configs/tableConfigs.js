// Generic table configuration templates - no hardcoded model data
export const tableConfigs = {
  // Generic configuration template
  default: {
    title: 'Data Table',
    icon: 'fas fa-table',
    kpis: [
      { key: 'total', label: 'Total Records', color: 'text-gray-700 dark:text-gray-300' },
      { key: 'active', label: 'Active Records', color: 'text-green-600' }
    ],
    filters: [],
    actions: [
      { key: 'create', label: 'Add Record', icon: 'fas fa-plus', variant: 'primary' },
      { key: 'export', label: 'Export', icon: 'fas fa-download', variant: 'success' }
    ]
  }
}

// Helper function to get configuration by table name
export function getTableConfig(tableName) {
  return tableConfigs[tableName] || null
}

// Helper function to create custom configuration
export function createTableConfig(config) {
  return {
    title: config.title || 'Data Table',
    icon: config.icon || 'fas fa-table',
    apiEndpoint: config.apiEndpoint || '/api/data',
    tableName: config.tableName || 'data',
    kpis: config.kpis || [],
    filters: config.filters || [],
    actions: config.actions || [],
    columns: config.columns || [],
    form: config.form || { fields: [] }
  }
}
