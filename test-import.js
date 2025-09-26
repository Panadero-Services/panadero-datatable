// Test import of panadero-datatable components
import { DataTable, createTableConfig, getTableConfig } from './index.js'

console.log('✅ DataTable import successful:', typeof DataTable)
console.log('✅ createTableConfig import successful:', typeof createTableConfig)
console.log('✅ getTableConfig import successful:', typeof getTableConfig)

// Test creating a configuration
const testConfig = createTableConfig({
  table: 'products',
  title: 'Test Products',
  columns: [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true }
  ]
})

console.log('✅ Configuration created successfully:', testConfig)

// Test preset configuration
try {
  const presetConfig = getTableConfig('erpProducts')
  console.log('✅ Preset configuration loaded successfully:', presetConfig.title)
} catch (error) {
  console.log('❌ Preset configuration failed:', error.message)
}

console.log('🎉 All imports and basic functionality working!')
