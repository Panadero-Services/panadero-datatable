// Example usage of panadero-datatable with existing ERP data
import { DataTable, createTableConfig, getTableConfig } from './index.js'

// Example 1: Using preset configuration for ERP Products
const productConfig = getTableConfig('erpProducts')

// Example 2: Custom configuration for ERP Products with specific needs
const customProductConfig = createTableConfig({
  table: 'products', // Uses /products endpoint
  title: 'Product Master Data',
  columns: [
    { 
      key: 'id', 
      label: 'ID', 
      sortable: true, 
      searchable: false, 
      width: '80px' 
    },
    { 
      key: 'identifier', 
      label: 'SKU', 
      sortable: true, 
      searchable: true, 
      width: '120px' 
    },
    { 
      key: 'name', 
      label: 'Product Name', 
      sortable: true, 
      searchable: true 
    },
    { 
      key: 'productGroup.name', 
      label: 'Product Group', 
      sortable: true, 
      searchable: true 
    },
    { 
      key: 'productType.name', 
      label: 'Type', 
      sortable: true, 
      searchable: true 
    },
    { 
      key: 'brand.name', 
      label: 'Brand', 
      sortable: true, 
      searchable: true 
    },
    { 
      key: 'unit.name', 
      label: 'Unit', 
      sortable: true, 
      searchable: false,
      width: '80px'
    },
    { 
      key: 'is_active', 
      label: 'Status', 
      sortable: true, 
      searchable: false,
      type: 'badge',
      width: '100px',
      badgeColors: {
        'true': 'bg-green-100 text-green-800',
        'false': 'bg-red-100 text-red-800'
      }
    }
  ],
  itemsPerPage: 20,
  variant: 'default',
  showCreate: true,
  showEdit: true,
  showDelete: true,
  showBulkActions: true
})

// Example 3: Compact configuration for quick reference
const compactConfig = createTableConfig({
  table: 'products',
  title: 'Products',
  variant: 'compact',
  columns: [
    { key: 'identifier', label: 'SKU', width: '120px' },
    { key: 'name', label: 'Name' },
    { key: 'productType.name', label: 'Type', width: '100px' },
    { key: 'is_active', label: 'Active', type: 'boolean', width: '80px' }
  ],
  itemsPerPage: 50,
  showCreate: false,
  showBulkActions: false
})

// Example 4: Vue component usage
const ProductTableComponent = {
  template: `
    <div class="p-6">
      <DataTable 
        :config="tableConfig" 
        @create="handleCreate"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    </div>
  `,
  components: {
    DataTable
  },
  setup() {
    const tableConfig = customProductConfig
    
    const handleCreate = () => {
      console.log('Create new product')
      // Implement create logic
    }
    
    const handleEdit = (product) => {
      console.log('Edit product:', product)
      // Implement edit logic
    }
    
    const handleDelete = (productId) => {
      console.log('Delete product:', productId)
      // Implement delete logic
    }
    
    return {
      tableConfig,
      handleCreate,
      handleEdit,
      handleDelete
    }
  }
}

// Example 5: Integration with existing Products.vue
const replaceProductsTable = `
// In your existing Products.vue, replace the table section with:
<DataTable 
  :config="productTableConfig" 
  @create="openProductForm"
  @edit="openProductForm"
  @delete="handleDeleteProduct"
/>

// Add to script setup:
import { DataTable, createTableConfig } from 'panadero-datatable'

const productTableConfig = createTableConfig({
  table: 'products',
  title: 'Products',
  columns: [
    { key: 'id', label: 'ID', sortable: true, width: '80px' },
    { key: 'identifier', label: 'SKU', sortable: true, searchable: true },
    { key: 'name', label: 'Name', sortable: true, searchable: true },
    { key: 'productGroup.name', label: 'Group', sortable: true },
    { key: 'productType.name', label: 'Type', sortable: true },
    { key: 'brand.name', label: 'Brand', sortable: true },
    { key: 'unit.name', label: 'Unit', sortable: true },
    { key: 'is_active', label: 'Status', type: 'badge' }
  ],
  itemsPerPage: 20
})
`

export {
  productConfig,
  customProductConfig,
  compactConfig,
  ProductTableComponent,
  replaceProductsTable
}
