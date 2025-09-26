<!-- v1.0.0 - Demo component for panadero-datatable -->
<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Panadero DataTable Demo</h1>
    
    <!-- Products Table Demo -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Products Table</h2>
      <DataTable 
        :config="productConfig" 
        @create="handleCreate"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    </div>

    <!-- Customers Table Demo -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Customers Table</h2>
      <DataTable 
        :config="customerConfig" 
        @create="handleCreate"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    </div>

    <!-- Custom Table Demo -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Custom Table</h2>
      <DataTable 
        :config="customConfig" 
        @create="handleCreate"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    </div>
  </div>
</template>

<script setup>
import { DataTable, getTableConfig, createCustomTableConfig } from '../index.js'

// Use preset configurations
const productConfig = getTableConfig('erpProducts')
const customerConfig = getTableConfig('erpCustomers')

// Create custom configuration
const customConfig = createCustomTableConfig('posts', {
  title: 'Blog Posts',
  columns: [
    { key: 'id', label: 'ID', sortable: true, width: '80px' },
    { key: 'title', label: 'Title', sortable: true, searchable: true },
    { key: 'author.name', label: 'Author', sortable: true },
    { key: 'status', label: 'Status', type: 'badge', badgeColors: {
      'published': 'bg-green-100 text-green-800',
      'draft': 'bg-yellow-100 text-yellow-800',
      'archived': 'bg-gray-100 text-gray-800'
    }},
    { key: 'created_at', label: 'Created', type: 'date' }
  ],
  itemsPerPage: 5,
  variant: 'compact'
})

// Event handlers
const handleCreate = () => {
  console.log('Create clicked')
  alert('Create functionality would be implemented here')
}

const handleEdit = (item) => {
  console.log('Edit clicked:', item)
  alert(`Edit item: ${item.name || item.title || item.id}`)
}

const handleDelete = (id) => {
  console.log('Delete clicked:', id)
  if (confirm('Are you sure you want to delete this item?')) {
    alert(`Delete item with ID: ${id}`)
  }
}
</script>
