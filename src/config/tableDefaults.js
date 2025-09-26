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

export const commonTableConfigs = {
  // ERP Products
  erpProducts: {
    table: 'erp_products',
    title: 'Products',
    columns: [
      { key: 'id', label: 'ID', sortable: true, searchable: false, width: '80px' },
      { key: 'identifier', label: 'SKU', sortable: true, searchable: true, width: '120px' },
      { key: 'name', label: 'Name', sortable: true, searchable: true },
      { key: 'productGroup.name', label: 'Group', sortable: true, searchable: true },
      { key: 'productType.name', label: 'Type', sortable: true, searchable: true },
      { key: 'brand.name', label: 'Brand', sortable: true, searchable: true },
      { key: 'unit.name', label: 'Unit', sortable: true, searchable: false },
      { key: 'is_active', label: 'Status', sortable: true, searchable: false, width: '100px' }
    ],
    itemsPerPage: 20
  },

  // ERP Customers
  erpCustomers: {
    table: 'erp_customers',
    title: 'Customers',
    columns: [
      { key: 'id', label: 'ID', sortable: true, searchable: false, width: '80px' },
      { key: 'name', label: 'Name', sortable: true, searchable: true },
      { key: 'email', label: 'Email', sortable: true, searchable: true },
      { key: 'phone', label: 'Phone', sortable: true, searchable: true },
      { key: 'company', label: 'Company', sortable: true, searchable: true },
      { key: 'is_active', label: 'Status', sortable: true, searchable: false, width: '100px' }
    ],
    itemsPerPage: 15
  },

  // Generic Posts
  posts: {
    table: 'posts',
    title: 'Posts',
    columns: [
      { key: 'id', label: 'ID', sortable: true, searchable: false, width: '80px' },
      { key: 'title', label: 'Title', sortable: true, searchable: true },
      { key: 'author.name', label: 'Author', sortable: true, searchable: true },
      { key: 'status', label: 'Status', sortable: true, searchable: true, width: '100px' },
      { key: 'created_at', label: 'Created', sortable: true, searchable: false, width: '120px' }
    ],
    itemsPerPage: 10
  }
}

export default defaultTableConfig
