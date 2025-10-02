// panadero-datatable v1.0.0
// Main entry point for the panadero-datatable package

// Core components
export { default as DataTable } from './src/components/DataTable.vue'
export { default as DataTableComplete } from './src/components/DataTableComplete.vue'

// Core composables
export { useDynamicAPI } from './src/composables/useDynamicAPI.js'
export { useDataTable } from './src/composables/useDataTable.js'
export { useModelConfig } from './src/composables/useModelConfig.js'
export { useDataTableComplete } from './src/composables/useDataTableComplete.js'
export { useCommonSnippets } from './src/composables/useCommonSnippets.js'

// Utilities and configs
export { createTableConfig } from './src/utils/tableConfigFactory.js'
export { default as tableDefaults } from './src/config/tableDefaults.js'
export { tableConfigs, getTableConfig } from './src/configs/tableConfigs.js'
