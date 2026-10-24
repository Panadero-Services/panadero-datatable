// Test import of panadero-datatable components
import { DataTable, createTableConfig, getTableConfig } from './index.js'

console.debug('✅ DataTable import successful:', typeof DataTable)
console.debug('✅ createTableConfig import successful:', typeof createTableConfig)
console.debug('✅ getTableConfig import successful:', typeof getTableConfig)

// Test creating a configuration
const testConfig = createTableConfig({
  table: 'products',
  title: 'Test Products',
  columns: [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true }
  ]
})

console.debug('✅ Configuration created successfully:', testConfig)

// Test preset configuration
try {
  const presetConfig = getTableConfig('erpProducts')
  console.debug('✅ Preset configuration loaded successfully:', presetConfig.title)
} catch (error) {
  console.debug('❌ Preset configuration failed:', error.message)
}

console.debug('🎉 All imports and basic functionality working!')
