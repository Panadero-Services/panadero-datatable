// v1.0.0 - Default table configurations for panadero-datatable

export const defaultTableConfig = {
  // Basic settings
  title: 'Data Table',
  searchable: true,
  sortable: true,
  selectable: true,
  pagination: true,
  itemsPerPage: 10,
  refreshInterval: null,

  // Styling
  variant: 'default', // 'default', 'compact', 'bordered'
  striped: true,
  hover: true,

  // Actions
  showActions: true,
  showCreate: true,
  showEdit: true,
  showDelete: true,
  showBulkActions: true,
  showSearch: true, // Show search bar by default

  // Column defaults
  columnDefaults: {
    sortable: true,
    searchable: true,
    align: 'left',
    width: 'auto'
  }
}

// Generic table configs - no hardcoded model-specific data
export const commonTableConfigs = {
  // Generic configuration templates
  default: {
    itemsPerPage: 20,
    variant: 'default',
    showCreate: true,
    showEdit: true,
    showDelete: true,
    showBulkActions: true
  },
  
  compact: {
    itemsPerPage: 10,
    variant: 'compact',
    showCreate: true,
    showEdit: true,
    showDelete: true,
    showBulkActions: false
  },
  
  minimal: {
    itemsPerPage: 5,
    variant: 'minimal',
    showCreate: false,
    showEdit: false,
    showDelete: false,
    showBulkActions: false
  }
}

export default defaultTableConfig
