<!--
  DataTable - Complete Generic Data Table
  @version 1.0.0
  @date 29-Sep-2025
  @description Complete data table with pagination, bulk actions, filters, and side panel
-->
<script setup>
import { ref, computed } from 'vue'
import { useCommonSnippets } from '../composables/useCommonSnippets.js'
import { useDataTable } from '../composables/useDataTable.js'
// Import new components
import DataTableHeader from './DataTableHeader.vue'
import DataTableFilters from './DataTableFilters.vue'
import DataTableBody from './DataTableBody.vue'
import DataTableFooter from './DataTableFooter.vue'
import DataTableKPIs from './DataTableKPIs.vue'
import DataTableActions from './DataTableActions.vue'

import { useDesignSystem } from 'panadero-shared-styling'

// Replace hardcoded DESIGN_SYSTEM with shared one
const { designSystem: DESIGN_SYSTEM } = useDesignSystem()


// Props with optional features
const props = defineProps({
  config: { type: Object, required: true },
  darkModeClasses: { type: Object, required: true},
  scalingStyles: { type: Object, required: true }, // Make it required
  externalData: { type: Array, default: null }, // External filtered data
  apiEndpoint: { type: String, required: true }, // ADD THIS
  tableName: { type: String, required: true }, // ADD THIS
  // Optional features
  showKPIs: {
    type: Boolean,
    default: true
  },
  showFilters: {
    type: Boolean,
    default: true
  },
  showBulkActions: {
    type: Boolean,
    default: true
  },
  showExport: {
    type: Boolean,
    default: true
  }
})
// Get common functionality
const { 
  store, 
  showNotification
} = useCommonSnippets()



// Use the comprehensive data table composable
const {
  // State
  data,
  loading,
  error,
  dropdownData,
  searchQuery,
  collapsed,
  
  // Filtered data
  filteredData,
  filterStates,
  allFilterItems,
  selectFilter,
  clearAllFilters,
  
  // CRUD operations
  createItem,
  updateItem,
  deleteItem,
  bulkDeleteItems,
  
  // Analytics
  kpis,
  productTypeDistribution,
  brandDistribution,
  
  // Export
  exportData,
  
  // Refresh
  handleRefresh,
  
  // Helpers
  getFormProps,
  getItemDisplayName,
  getNestedValue
} = useDataTable(props, props.config)

// Modal states
const showForm = ref(false)
const editingItem = ref(null)
const showDeleteConfirm = ref(false)
const itemToDelete = ref(null)
const showBulkDeleteConfirm = ref(false)
const itemsToDelete = ref([])
const showRefreshModal = ref(false)
const refreshMessage = ref('')
const refreshCount = ref(0)

// Pagination state
const currentPage = ref(1)
const itemsPerPage = ref(20)
const selectedItems = ref([])

// Computed pagination
const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage.value))
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredData.value.slice(start, end)
})

// Event handlers for child components
const handleCreate = () => {
  editingItem.value = null
  showForm.value = true
}

const handleEdit = (item) => {
  editingItem.value = item
  showForm.value = true
}

const handleDelete = (item) => {
  itemToDelete.value = item
  showDeleteConfirm.value = true
}

const handleBulkDelete = (selectedIds) => {
  if (selectedIds.length === 0) return
  
  const selectedItems = filteredData.value.filter(item => selectedIds.includes(item.id))
  itemsToDelete.value = selectedItems
  showBulkDeleteConfirm.value = true
}

const confirmDelete = async () => {
  const item = itemToDelete.value
  if (!item) return
  
  const result = await deleteItem(item.id)
  if (result.success) {
    showNotification(result.message, 'success')
  } else {
    showNotification(result.message, 'error')
  }
  
  showDeleteConfirm.value = false
  itemToDelete.value = null
}

const confirmBulkDelete = async () => {
  const items = itemsToDelete.value
  if (!items || items.length === 0) return
  
  const itemIds = items.map(item => item.id)
  const result = await bulkDeleteItems(itemIds)
  
  if (result.success) {
    showNotification(result.message, 'success')
  } else {
    showNotification(result.message, 'error')
  }
  
  showBulkDeleteConfirm.value = false
  itemsToDelete.value = []
  selectedItems.value = []
}

const cancelDelete = () => {
  showDeleteConfirm.value = false
  itemToDelete.value = null
}

const cancelBulkDelete = () => {
  showBulkDeleteConfirm.value = false
  itemsToDelete.value = []
}

const handleItemSave = async (itemData) => {
  let result
  if (editingItem.value) {
    result = await updateItem(editingItem.value.id, itemData)
  } else {
    result = await createItem(itemData)
  }
  
  if (result.success) {
    showNotification(result.message, 'success')
    showForm.value = false
    editingItem.value = null
  } else {
    showNotification(result.message, 'error')
  }
}

const handleFormClose = () => {
  showForm.value = false
  editingItem.value = null
}

const handleExport = () => {
  const result = exportData()
  if (result.success) {
    showNotification(result.message, 'success')
  } else {
    showNotification(result.message, 'error')
  }
}

// Pagination handlers
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const setItemsPerPage = (newItemsPerPage) => {
  itemsPerPage.value = newItemsPerPage
  currentPage.value = 1 // Reset to first page when changing items per page
}

const selectAll = () => {
  if (selectedItems.value.length === paginatedData.value.length) {
    selectedItems.value = []
  } else {
    selectedItems.value = paginatedData.value.map(item => item.id)
  }
}

const toggleSelection = (itemId) => {
  const index = selectedItems.value.indexOf(itemId)
  if (index > -1) {
    selectedItems.value.splice(index, 1)
  } else {
    selectedItems.value.push(itemId)
  }
}

const handleActionClick = (action) => {
  if (action.key === 'create') {
    handleCreate()
  } else if (action.key === 'export') {
    handleExport()
  }
}

// Recommended design system structure
 const DESIGN_SYSTEMz = {
  // Containers
  container: 'bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white',
  card: 'bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700',
  modal: 'bg-white dark:bg-gray-800',
  
  // Text
  text: {
    primary: 'text-gray-900 dark:text-white',
    secondary: 'text-gray-600 dark:text-gray-400',
    muted: 'text-gray-500 dark:text-gray-400',
    error: 'text-red-600 dark:text-red-400',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    info: 'text-blue-600 dark:text-blue-400'
  },
  
  // Buttons
  button: {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white dark:bg-gray-600 dark:hover:bg-gray-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600',
    danger: 'bg-red-600 hover:bg-red-700 text-white dark:bg-red-600 dark:hover:bg-red-700',
    success: 'bg-green-600 hover:bg-green-700 text-white dark:bg-green-600 dark:hover:bg-green-700'
  },
  
  // Forms
  input: 'bg-white border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white',
  
  // Tables
  table: {
    header: 'bg-gray-50 text-gray-500 dark:bg-gray-700 dark:text-gray-300',
    row: 'hover:bg-gray-50 dark:hover:bg-gray-700',
    border: 'divide-gray-200 dark:divide-gray-700'
  },
  
  // Icons
  icon: {
    primary: 'text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900',
    danger: 'text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900'
  }
}

</script>

<template>
  <!-- Container Layout -->
  <div class="data-table" :class="DESIGN_SYSTEM.container">
    
    <!-- DataTable 
      <div :class="DESIGN_SYSTEM.text.success"> src/components/DataTable.vue </div>
    -->

    <!-- Header Section -->
    <DataTableHeader
      :config="config"
      :dark-mode-classes="darkModeClasses"
      :scaling-styles="scalingStyles"
      :DESIGN_SYSTEM="DESIGN_SYSTEM"
      :show-export="showExport"
      @create="handleCreate"
      @export="handleExport"
    />

    <!-- Main Grid Layout -->
    <div :class="DESIGN_SYSTEM.container"  class="grid grid-cols-2 xl:grid-cols-5 gap-6">
      <!-- LEFT Main Content Section -->
      <div class="col-span-2 xl:col-span-4">
        <!-- Filter Section -->
        <DataTableFilters
          :config="config"
          :dark-mode-classes="darkModeClasses"
          :scaling-styles="scalingStyles"
      :DESIGN_SYSTEM="DESIGN_SYSTEM"
          :show-filters="showFilters"
          v-model:collapsed="collapsed"
          v-model:search-query="searchQuery"
          :filter-states="filterStates"
          :all-filter-items="allFilterItems"
          @select-filter="selectFilter"
          @clear-all-filters="clearAllFilters"
        />
        
        <!-- Records List -->
        <div class="col-span-4 mt-6">
          <DataTableBody
            :config="config"
            :dark-mode-classes="darkModeClasses"
            :scaling-styles="scalingStyles"
            :DESIGN_SYSTEM="DESIGN_SYSTEM"
            :show-bulk-actions="showBulkActions"
            :loading="loading"
            :error="error"
            :paginated-data="paginatedData"
            :selected-items="selectedItems"
            :get-nested-value="getNestedValue"
            @select-all="selectAll"
            @toggle-selection="toggleSelection"
            @edit="handleEdit"
            @delete="handleDelete"
            @bulk-delete="handleBulkDelete"
            @clear-selection="selectedItems = []"
          />

          <!-- Pagination -->
          <DataTableFooter
            :dark-mode-classes="darkModeClasses"
            :scaling-styles="scalingStyles"
            :DESIGN_SYSTEM="DESIGN_SYSTEM"
            :current-page="currentPage"
            :total-pages="totalPages"
            :items-per-page="itemsPerPage"
            :filtered-data-length="filteredData.length"
            :show-items-per-page="true"
            @go-to-page="goToPage"
            @change-items-per-page="setItemsPerPage"
          />
        </div>
      </div>

      <!-- RIGHT SIDE: KPI Section -->
      <DataTableKPIs
        :config="config"
        :dark-mode-classes="darkModeClasses"
        :scaling-styles="scalingStyles"
        :DESIGN_SYSTEM="DESIGN_SYSTEM"
        :show-kpis="showKPIs"
        :kpis="kpis"
        :product-type-distribution="productTypeDistribution"
        :brand-distribution="brandDistribution"
        @action-click="handleActionClick"
      />
    </div>

    <!-- Actions/Modals -->
    <DataTableActions
      :config="config"
      :show-delete-confirm="showDeleteConfirm"
      :show-bulk-delete-confirm="showBulkDeleteConfirm"
      :show-form="showForm"
      :editing-item="editingItem"
      :item-to-delete="itemToDelete"
      :items-to-delete="itemsToDelete"
      :get-form-props="getFormProps"
      :get-item-display-name="getItemDisplayName"
      :DESIGN_SYSTEM="DESIGN_SYSTEM"
      @confirm-delete="confirmDelete"
      @cancel-delete="cancelDelete"
      @confirm-bulk-delete="confirmBulkDelete"
      @cancel-bulk-delete="cancelBulkDelete"
      @item-save="handleItemSave"
      @form-close="handleFormClose"
    />
  </div>
</template>

<style scoped>
.data-table {
  @apply space-y-6;
}
</style>