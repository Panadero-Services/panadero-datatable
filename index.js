// panadero-datatable v1.0.0
// Main entry point for the panadero-datatable package

// Core components
export { default as DataTable } from './src/components/DataTable.vue'
export { default as GenericForm } from './src/components/GenericForm.vue'

// Feature wrapper
export { default as DataTableWrapper } from './src/DataTableWrapper.vue'

// Shared layout (reusable for features/datatable, features/grid, etc.)
export { default as DataTableLayout } from './src/components/sections/DataTableLayout.vue'

// Core composables
export { useDynamicAPI } from './src/composables/useDynamicAPI.js'
export { useDataTable } from './src/composables/useDataTable.js'
export { useModelConfig } from './src/composables/useModelConfig.js'
export { useCommonSnippets } from './src/composables/useCommonSnippets.js'

// Specialized composables
export { useDataTableState } from './src/composables/useDataTableState.js'
export { useDataTableCRUD } from './src/composables/useDataTableCRUD.js'
export { useDataTableAnalytics } from './src/composables/useDataTableAnalytics.js'
export { useDataTablePagination } from './src/composables/useDataTablePagination.js'
export { useDataTableData } from './src/composables/useDataTableData.js'
export { useDataTableExport } from './src/composables/useDataTableExport.js'
export { useDataTableDataset } from './src/composables/useDataTableDataset.js'
export { useDataTableStore } from './src/composables/dataTableStore.js'
export { useDataTableConfigFetch } from './src/composables/useDataTableConfigFetch.js'

// Utilities and configs
export { createTableConfig } from './src/utils/tableConfigFactory.js'
export { default as tableDefaults } from './src/config/tableDefaults.js'
export { tableConfigs, getTableConfig } from './src/configs/tableConfigs.js'
