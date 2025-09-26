<!-- Test integration of panadero-datatable -->
<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">DataTable Integration Test</h1>
    
    <!-- Test Products Table -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Products Table Test</h2>
      <DataTable 
        :config="productConfig" 
        @create="handleCreate"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { DataTable, createTableConfig } from './index.js'

// Test configuration
const productConfig = createTableConfig({
  table: 'products',
  title: 'Products Test',
  columns: [
    { key: 'id', label: 'ID', sortable: true, width: '80px' },
    { key: 'identifier', label: 'SKU', sortable: true, searchable: true, width: '120px' },
    { key: 'name', label: 'Name', sortable: true, searchable: true },
    { key: 'productType.name', label: 'Type', sortable: true },
    { key: 'brand.name', label: 'Brand', sortable: true },
    { key: 'is_active', label: 'Status', type: 'badge', badgeColors: {
      'true': 'bg-green-100 text-green-800',
      'false': 'bg-red-100 text-red-800'
    }}
  ],
  itemsPerPage: 10
})

const handleCreate = () => {
  console.log('Create clicked')
  alert('Create functionality would be implemented here')
}

const handleEdit = (item) => {
  console.log('Edit clicked:', item)
  alert(`Edit item: ${item.name}`)
}

const handleDelete = (id) => {
  console.log('Delete clicked:', id)
  if (confirm('Are you sure you want to delete this item?')) {
    alert(`Delete item with ID: ${id}`)
  }
}
</script>
