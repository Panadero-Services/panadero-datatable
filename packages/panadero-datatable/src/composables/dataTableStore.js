// DataTable Store
// @version 1.0.0
// @date 08-Oct-2025
// @description Pinia store for DataTable features

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useDataTableStore = defineStore('dataTable', () => {
  // State
  const tables = ref([]);
  const activeTable = ref(null);
  const isLoading = ref(false);
  const error = ref(null);
  const settings = ref({
    defaultPageSize: 10,
    enableKPIs: true,
    enableFilters: true,
    enableExport: true,
    theme: 'light'
  });

  // Getters
  const activeTableData = computed(() => {
    return tables.value.find(table => table.id === activeTable.value);
  });

  const totalTables = computed(() => tables.value.length);

  const isLoadingData = computed(() => isLoading.value);

  // Actions
  const setActiveTable = (tableId) => {
    activeTable.value = tableId;
  };

  const addTable = (table) => {
    tables.value.push(table);
  };

  const removeTable = (tableId) => {
    const index = tables.value.findIndex(table => table.id === tableId);
    if (index > -1) {
      tables.value.splice(index, 1);
    }
  };

  const updateTable = (tableId, updates) => {
    const table = tables.value.find(table => table.id === tableId);
    if (table) {
      Object.assign(table, updates);
    }
  };

  const setLoading = (loading) => {
    isLoading.value = loading;
  };

  const setError = (errorMessage) => {
    error.value = errorMessage;
  };

  const clearError = () => {
    error.value = null;
  };

  const updateSettings = (newSettings) => {
    settings.value = { ...settings.value, ...newSettings };
  };

  // Initialize with sample data
  const initializeStore = () => {
    tables.value = [
      {
        id: 'erp_products',
        name: 'ERP Products',
        description: 'Product catalog and inventory',
        endpoint: '/api/erp_products',
        columns: [
          { key: 'id', label: 'ID', sortable: true },
          { key: 'name', label: 'Name', sortable: true },
          { key: 'description', label: 'Description', sortable: true },
          { key: 'price', label: 'Price', sortable: true },
          { key: 'status', label: 'Status', sortable: true }
        ],
        recordCount: 1247,
        lastUpdated: new Date()
      },
      {
        id: 'erp_storages',
        name: 'ERP Storages',
        description: 'Storage locations and inventory',
        endpoint: '/api/erp_storages',
        columns: [
          { key: 'id', label: 'ID', sortable: true },
          { key: 'name', label: 'Name', sortable: true },
          { key: 'location', label: 'Location', sortable: true },
          { key: 'capacity', label: 'Capacity', sortable: true },
          { key: 'status', label: 'Status', sortable: true }
        ],
        recordCount: 89,
        lastUpdated: new Date()
      },
      {
        id: 'erp_customers',
        name: 'ERP Customers',
        description: 'Customer data and contacts',
        endpoint: '/api/erp_customers',
        columns: [
          { key: 'id', label: 'ID', sortable: true },
          { key: 'name', label: 'Name', sortable: true },
          { key: 'email', label: 'Email', sortable: true },
          { key: 'phone', label: 'Phone', sortable: true },
          { key: 'status', label: 'Status', sortable: true }
        ],
        recordCount: 456,
        lastUpdated: new Date()
      }
    ];
    
    if (tables.value.length > 0) {
      activeTable.value = tables.value[0].id;
    }
  };

  return {
    // State
    tables,
    activeTable,
    isLoading,
    error,
    settings,
    
    // Getters
    activeTableData,
    totalTables,
    isLoadingData,
    
    // Actions
    setActiveTable,
    addTable,
    removeTable,
    updateTable,
    setLoading,
    setError,
    clearError,
    updateSettings,
    initializeStore
  };
});