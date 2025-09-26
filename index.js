// panadero-datatable v1.0.0
// Main entry point for the panadero-datatable package

export { default as DataTable } from './src/components/DataTable.vue'
export { useDynamicAPI } from './src/composables/useDynamicAPI.js'
export { useDataTable } from './src/composables/useDataTable.js'
export { useModelConfig } from './src/composables/useModelConfig.js'
export { createTableConfig } from './src/utils/tableConfigFactory.js'
export { default as tableDefaults } from './src/config/tableDefaults.js'
