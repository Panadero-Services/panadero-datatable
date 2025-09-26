# Panadero DataTable Module

**Version:** 1.0.14
**Release Date:** 23 September 2025  
**Status:** Production Ready

A dynamic, configurable data table component for all Panadero packages with full integration to `panadero-shared-styling`.

## Features

- **Dynamic API Integration**: Works with any Laravel model via `/api/{table}` routes
- **External Data Support**: Accept external data arrays for integration with filter systems
- **Model-Driven Configuration**: Automatic configuration from Laravel models via `/api/model-config/{table}`
- **Shared Styling**: Full integration with `panadero-shared-styling` for consistent font scaling and theming
- **Configurable**: Highly customizable table behavior and appearance
- **CRUD Operations**: Built-in create, read, update, delete functionality
- **Search & Sort**: Advanced filtering and sorting capabilities
- **Pagination**: Built-in pagination with customizable page sizes and auto-reset on data changes
- **Bulk Actions**: Select multiple items for bulk operations
- **Responsive**: Mobile-friendly design with horizontal scrolling
- **Dark Mode**: Full dark mode support via shared styling
- **Flexible Search**: Optional search bar that can be disabled when using external filters
- **Enhanced Header**: Beautiful gradient header with centered search and action buttons

## Installation

```bash
npm install panadero-datatable
```

## Dependencies

- Vue 3.x
- panadero-shared-styling ^1.0.0
- axios ^1.6.0

## Quick Start

### Basic Usage

```vue
<template>
  <DataTable :config="tableConfig" @create="handleCreate" @edit="handleEdit" @delete="handleDelete" />
</template>

<script setup>
import { DataTable, createTableConfig } from 'panadero-datatable'

const tableConfig = createTableConfig({
  table: 'erp_products',
  title: 'Products',
  columns: [
    { key: 'id', label: 'ID', sortable: true, width: '80px' },
    { key: 'name', label: 'Name', sortable: true, searchable: true },
    { key: 'price', label: 'Price', sortable: true, type: 'currency' },
    { key: 'is_active', label: 'Status', sortable: true, type: 'boolean' }
  ]
})

const handleCreate = (data) => {
  console.log('Create:', data)
}

const handleEdit = (item) => {
  console.log('Edit:', item)
}

const handleDelete = (id) => {
  console.log('Delete:', id)
}
</script>
```

### External Data Integration

```vue
<template>
  <DataTable 
    :config="tableConfig" 
    :external-data="filteredProducts"
    :dark-mode-classes="darkModeClasses"
    :scaling-styles="scalingStyles"
    @create="handleCreate" 
    @edit="handleEdit" 
    @delete="handleDelete" 
  />
</template>

<script setup>
import { DataTable, createTableConfig, useModelConfig } from 'panadero-datatable'
import { useCommonSnippets } from 'panadero-shared-styling'

const { darkModeClasses, scalingStyles } = useCommonSnippets()

// Get model configuration
const { dataTableConfig, fetchConfig } = useModelConfig('erp_products')

// Fetch model configuration
onMounted(async () => {
  await fetchConfig()
})

// Use model-driven configuration
const tableConfig = computed(() => {
  return createTableConfig(dataTableConfig.value || {
    table: 'erp_products',
    title: 'Products',
    columns: []
  })
})

// External filtered data
const filteredProducts = ref([])
</script>
```

## Configuration

### Basic Configuration

```javascript
const config = {
  table: 'erp_products',           // API table name
  title: 'Products',               // Table title
  searchable: true,                // Enable search
  sortable: true,                  // Enable sorting
  selectable: true,                // Enable row selection
  pagination: true,                // Enable pagination
  itemsPerPage: 10,                // Items per page
  refreshInterval: 30000,          // Auto-refresh interval (ms)
  variant: 'default',              // 'default', 'compact', 'bordered'
  striped: true,                   // Striped rows
  hover: true,                     // Hover effects
  showActions: true,               // Show action buttons
  showCreate: true,                // Show create button
  showEdit: true,                  // Show edit button
  showDelete: true,                // Show delete button
  showBulkActions: true,           // Show bulk actions
  showSearch: true                 // Show search bar (can be disabled for external filters)
}
```

### Column Configuration

```javascript
const columns = [
  {
    key: 'id',                     // Data field key (supports dot notation)
    label: 'ID',                   // Column header
    sortable: true,                // Enable sorting
    searchable: true,              // Include in search
    width: '80px',                 // Column width
    align: 'left',                 // Text alignment
    type: 'text',                  // Data type: 'text', 'date', 'boolean', 'badge', 'currency'
    badgeColors: {                 // Badge colors for 'badge' type
      'active': 'bg-green-100 text-green-800',
      'inactive': 'bg-red-100 text-red-800'
    }
  }
]
```

## Layout Options & Customization

### Table Variants

```javascript
const config = createTableConfig({
  variant: 'default',    // 'default', 'compact', 'bordered'
  striped: true,         // Striped rows
  hover: true           // Hover effects
})
```

### Layout Controls

```javascript
const config = createTableConfig({
  // Basic layout
  title: 'My Table',
  itemsPerPage: 20,
  
  // Search & Actions
  showSearch: true,      // Show/hide search bar
  showActions: true,     // Show/hide action buttons
  showCreate: true,      // Show create button
  showEdit: true,        // Show edit button
  showDelete: true,      // Show delete button
  showBulkActions: true, // Show bulk action buttons
  
  // Table behavior
  searchable: true,      // Enable search
  sortable: true,        // Enable sorting
  selectable: true,      // Enable row selection
  pagination: true       // Enable pagination
})
```

### Column Layout Options

```javascript
const config = createTableConfig({
  columns: [
    {
      key: 'id',
      label: 'ID',
      width: '80px',        // Fixed width
      align: 'left',        // 'left', 'center', 'right'
      sortable: true,       // Enable sorting
      searchable: true,     // Enable search
      type: 'badge',        // 'text', 'badge', 'boolean', 'date'
      badgeColors: {        // Custom badge colors
        'active': 'bg-green-100 text-green-800',
        'inactive': 'bg-red-100 text-red-800'
      }
    }
  ]
})
```

### Header Layout

The header includes:
- **Title** (configurable)
- **Search bar** (if `showSearch: true`)
- **Action buttons** (Create, Edit, Delete, Bulk actions)
- **Refresh button**

### Table Body Layout

- **Selectable rows** (if `selectable: true`)
- **Sortable columns** (if `sortable: true`)
- **Responsive design** with horizontal scroll
- **Empty state** with custom message
- **Loading state** with spinner

### Footer Layout

- **Pagination controls** (if `pagination: true`)
- **Items per page selector**
- **Row count display**

## Customization Examples

### Compact Layout

```javascript
const compactConfig = createTableConfig({
  variant: 'compact',
  itemsPerPage: 50,
  showBulkActions: false,
  showSearch: false
})
```

### Minimal Layout

```javascript
const minimalConfig = createTableConfig({
  showActions: false,
  showCreate: false,
  showEdit: false,
  showDelete: false,
  showBulkActions: false,
  showSearch: false,
  selectable: false
})
```

### Full-Featured Layout

```javascript
const fullConfig = createTableConfig({
  variant: 'bordered',
  striped: true,
  hover: true,
  showActions: true,
  showCreate: true,
  showEdit: true,
  showDelete: true,
  showBulkActions: true,
  showSearch: true,
  itemsPerPage: 25
})
```

## Preset Configurations

Use predefined configurations for common tables:

```javascript
import { getTableConfig } from 'panadero-datatable'

// ERP Products
const productConfig = getTableConfig('erpProducts')

// ERP Customers  
const customerConfig = getTableConfig('erpCustomers')

// Generic Posts
const postConfig = getTableConfig('posts')
```

## Custom Slots

Override default cell rendering with custom slots:

```vue
<DataTable :config="config">
  <template #cell-name="{ item, value, column }">
    <div class="flex items-center gap-2">
      <img :src="item.avatar" class="w-8 h-8 rounded-full" />
      <span class="font-medium">{{ value }}</span>
    </div>
  </template>
  
  <template #cell-status="{ item, value }">
    <span :class="value === 'active' ? 'text-green-500' : 'text-red-500'">
      {{ value }}
    </span>
  </template>
</DataTable>
```

## API Integration

The component automatically integrates with Laravel's dynamic API routes:

- `GET /api/{table}` - List records
- `GET /api/{table}/{id}` - Show record
- `POST /api/{table}` - Create record
- `PUT /api/{table}/{id}` - Update record
- `DELETE /api/{table}/{id}` - Delete record

## Styling Integration

Full integration with `panadero-shared-styling`:

- **Font Scaling**: Automatic font size scaling based on user preferences
- **Dark Mode**: Consistent dark mode theming
- **Responsive**: Mobile-friendly responsive design
- **Consistent**: Matches other Panadero package styling

## Events

| Event | Description | Parameters |
|-------|-------------|------------|
| `create` | Create button clicked | - |
| `edit` | Edit button clicked | `item` |
| `delete` | Delete button clicked | `id` |
| `refresh` | Refresh button clicked | - |

## Methods

Access table methods via ref:

```vue
<template>
  <DataTable ref="tableRef" :config="config" />
</template>

<script setup>
import { ref } from 'vue'

const tableRef = ref()

// Refresh data
const refreshData = () => {
  tableRef.value.refresh()
}

// Load specific page
const goToPage = (page) => {
  tableRef.value.handlePageChange(page)
}
</script>
```

## Examples

### Basic Products Table

```javascript
const productConfig = createTableConfig({
  table: 'erp_products',
  title: 'Products',
  columns: [
    { key: 'id', label: 'ID', sortable: true, width: '80px' },
    { key: 'identifier', label: 'SKU', sortable: true, searchable: true },
    { key: 'name', label: 'Name', sortable: true, searchable: true },
    { key: 'productGroup.name', label: 'Group', sortable: true },
    { key: 'productType.name', label: 'Type', sortable: true },
    { key: 'is_active', label: 'Status', type: 'boolean' }
  ],
  itemsPerPage: 20
})
```

### Compact Orders Table

```javascript
const orderConfig = createTableConfig({
  table: 'erp_orders',
  title: 'Orders',
  variant: 'compact',
  columns: [
    { key: 'id', label: 'ID', width: '60px' },
    { key: 'customer.name', label: 'Customer' },
    { key: 'total', label: 'Total', type: 'currency' },
    { key: 'status', label: 'Status', type: 'badge' }
  ],
  itemsPerPage: 50,
  showCreate: false
})
```

## License

MIT License - see LICENSE file for details.