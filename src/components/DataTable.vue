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
  // Optional: classes per cell state, for columns with column.stateKey (the row field that holds the state)
  cellStateClasses: { type: Object, default: () => ({}) },
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
  
  // Dataset operations
  createEmptyDataset,
  saveCurrentTable,
  saveDataset,
  addTableToDataset,
  restoreTable,
  loadDataset,
  getDatasetTables,
  validateDataset,
  
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

// Dataset state
const showSaveDatasetModal = ref(false)
const showRestoreDatasetModal = ref(false)
const showCreateDatasetModal = ref(false)
const datasetName = ref('')
const datasetDescription = ref('')
const loadedDataset = ref(null)
const availableTables = ref([])
const selectedRestoreTable = ref(null)
const createNewDataset = ref(true)
const existingDatasetName = ref('')

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

// Dataset handlers
const handleSaveDataset = () => {
  showCreateDatasetModal.value = true
  createNewDataset.value = true
  datasetName.value = ''
  datasetDescription.value = ''
}

const handleRestoreDataset = () => {
  showRestoreDatasetModal.value = true
  loadedDataset.value = null
  availableTables.value = []
  selectedRestoreTable.value = null
}

const confirmCreateDataset = () => {
  if (!datasetName.value.trim()) {
    showNotification('Please enter a dataset name', 'error')
    return
  }
  
  showCreateDatasetModal.value = false
  showSaveDatasetModal.value = true
}

const confirmSaveDataset = () => {
  if (!datasetName.value.trim()) {
    showNotification('Please enter a dataset name', 'error')
    return
  }
  
  // If we have an existing dataset loaded and want to add to it
  if (!createNewDataset.value && loadedDataset.value) {
    const result = addTableToDataset(loadedDataset.value)
    if (result.success) {
      // Save the updated dataset
      const saveResult = saveDataset(datasetName.value, datasetDescription.value, result.dataset)
      if (saveResult.success) {
        showNotification(saveResult.message, 'success')
        showSaveDatasetModal.value = false
        datasetName.value = ''
        datasetDescription.value = ''
        loadedDataset.value = null
      } else {
        showNotification(saveResult.message, 'error')
      }
    } else {
      showNotification(result.message, 'error')
    }
  } else {
    // Create new dataset
    const result = saveDataset(datasetName.value, datasetDescription.value)
    if (result.success) {
      showNotification(result.message, 'success')
      showSaveDatasetModal.value = false
      datasetName.value = ''
      datasetDescription.value = ''
    } else {
      showNotification(result.message, 'error')
    }
  }
}

const handleDatasetFileSelect = async (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  try {
    const result = await loadDataset(file)
    if (result.success) {
      const validation = validateDataset(result.dataset)
      if (!validation.valid) {
        showNotification('Invalid dataset: ' + validation.error, 'error')
        return
      }
      
      loadedDataset.value = result.dataset
      availableTables.value = getDatasetTables(result.dataset)
      selectedRestoreTable.value = availableTables.value[0]?.name || null
      showNotification('Dataset loaded successfully', 'success')
    }
  } catch (error) {
    showNotification('Failed to load dataset: ' + error.message, 'error')
  }
}

const confirmRestoreDataset = () => {
  if (!loadedDataset.value || !selectedRestoreTable.value) {
    showNotification('Please load a dataset and select a table', 'error')
    return
  }
  
  const result = restoreTable(loadedDataset.value, selectedRestoreTable.value)
  if (result.success) {
    showNotification(result.message, 'success')
    showRestoreDatasetModal.value = false
    loadedDataset.value = null
    availableTables.value = []
    selectedRestoreTable.value = null
  } else {
    showNotification(result.message, 'error')
  }
}

const loadExistingDataset = async (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  try {
    const result = await loadDataset(file)
    if (result.success) {
      const validation = validateDataset(result.dataset)
      if (!validation.valid) {
        showNotification('Invalid dataset: ' + validation.error, 'error')
        return
      }
      
      loadedDataset.value = result.dataset
      datasetName.value = result.dataset.name || ''
      datasetDescription.value = result.dataset.description || ''
      createNewDataset.value = false
      showNotification('Existing dataset loaded. You can add this table to it.', 'success')
    }
  } catch (error) {
    showNotification('Failed to load dataset: ' + error.message, 'error')
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
      @save-dataset="handleSaveDataset"
      @restore-dataset="handleRestoreDataset"
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
            :cell-state-classes="cellStateClasses"
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

    <!-- Create Dataset Modal -->
    <div v-if="showCreateDatasetModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div :class="DESIGN_SYSTEM.card || 'bg-white dark:bg-gray-800'" class="rounded-lg shadow-xl max-w-md w-full mx-4" :style="scalingStyles.cardPadding">
        <div class="flex items-center justify-between" :style="scalingStyles.marginScale">
          <h3 :style="scalingStyles.titleFontSize" :class="DESIGN_SYSTEM.text?.primary || 'text-gray-900 dark:text-white'" class="font-semibold">
            Create Dataset
          </h3>
          <button 
            @click="showCreateDatasetModal = false"
            :class="DESIGN_SYSTEM.text?.secondary || 'text-gray-600 dark:text-gray-400'"
            class="hover:opacity-70"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="space-y-4">
          <div class="flex items-center" :style="[scalingStyles.gapScale, scalingStyles.marginScale]">
            <label class="flex items-center cursor-pointer">
              <input
                type="radio"
                :value="true"
                v-model="createNewDataset"
                class="mr-2"
              />
              <span :style="scalingStyles.textFontSize">Create New Dataset</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input
                type="radio"
                :value="false"
                v-model="createNewDataset"
                class="mr-2"
              />
              <span :style="scalingStyles.textFontSize">Add to Existing Dataset</span>
            </label>
          </div>

          <div v-if="!createNewDataset">
            <label :style="{...scalingStyles.textFontSize, marginBottom: '8px'}" :class="DESIGN_SYSTEM.text?.primary || 'text-gray-900 dark:text-white'" class="block font-medium">
              Load Existing Dataset File
            </label>
            <input
              type="file"
              accept=".json"
              @change="loadExistingDataset"
              :style="[scalingStyles.inputPadding, scalingStyles.textFontSize]"
              :class="[DESIGN_SYSTEM.input || 'bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-600', 'w-full rounded']"
            />
            <p :style="{...scalingStyles.smallFontSize, marginTop: '8px'}" :class="DESIGN_SYSTEM.text?.secondary || 'text-gray-600 dark:text-gray-400'">
              Select an existing dataset file to add this table to it
            </p>
          </div>

          <div>
            <label :style="{...scalingStyles.textFontSize, marginBottom: '8px'}" :class="DESIGN_SYSTEM.text?.primary || 'text-gray-900 dark:text-white'" class="block font-medium">
              Dataset Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="datasetName"
              type="text"
              :style="[scalingStyles.inputPadding, scalingStyles.textFontSize]"
              :class="[DESIGN_SYSTEM.input || 'bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-600', 'w-full rounded']"
              placeholder="e.g., demo, initial-set, production-data"
              :disabled="!createNewDataset && !loadedDataset"
            />
            <p :style="{...scalingStyles.smallFontSize, marginTop: '4px'}" :class="DESIGN_SYSTEM.text?.secondary || 'text-gray-600 dark:text-gray-400'">
              {{ createNewDataset ? 'Enter a name for the new dataset' : 'Dataset name from loaded file' }}
            </p>
          </div>
          
          <div>
            <label :style="{...scalingStyles.textFontSize, marginBottom: '8px'}" :class="DESIGN_SYSTEM.text?.primary || 'text-gray-900 dark:text-white'" class="block font-medium">
              Description (optional)
            </label>
            <textarea
              v-model="datasetDescription"
              :style="[scalingStyles.inputPadding, scalingStyles.textFontSize]"
              :class="[DESIGN_SYSTEM.input || 'bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-600', 'w-full rounded']"
              rows="3"
              placeholder="Enter description"
              :disabled="!createNewDataset && !loadedDataset"
            ></textarea>
          </div>
          
          <div v-if="loadedDataset && !createNewDataset" :style="[scalingStyles.smallFontSize, scalingStyles.paddingScale]" :class="DESIGN_SYSTEM.text?.info || 'text-blue-600 dark:text-blue-400'" class="bg-blue-50 dark:bg-blue-900/20 rounded">
            Loaded: {{ loadedDataset.name }}<br>
            Tables in dataset: {{ Object.keys(loadedDataset.tables || {}).length }}
          </div>
          
          <div :style="scalingStyles.smallFontSize" :class="DESIGN_SYSTEM.text?.secondary || 'text-gray-600 dark:text-gray-400'">
            This will save the current table ({{ tableName }}) with all data, filters, and pagination state.
          </div>
        </div>
        
        <div class="flex justify-end" :style="[scalingStyles.buttonGap, {marginTop: scalingStyles.sectionMargin.marginBottom}]">
          <button
            @click="showCreateDatasetModal = false"
            :style="scalingStyles.buttonPadding"
            :class="[DESIGN_SYSTEM.button?.secondary || 'bg-gray-200 hover:bg-gray-300', 'rounded-md text-gray-900 dark:text-white']"
          >
            Cancel
          </button>
          <button
            @click="confirmCreateDataset"
            :disabled="!datasetName.trim() || (!createNewDataset && !loadedDataset)"
            :style="scalingStyles.buttonPadding"
            :class="[DESIGN_SYSTEM.button?.primary || 'bg-blue-600 hover:bg-blue-700 text-white', 'rounded-md disabled:opacity-50 disabled:cursor-not-allowed']"
          >
            Continue
          </button>
        </div>
      </div>
    </div>

    <!-- Save Dataset Modal -->
    <div v-if="showSaveDatasetModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div :class="DESIGN_SYSTEM.card || 'bg-white dark:bg-gray-800'" class="rounded-lg shadow-xl max-w-md w-full mx-4" :style="scalingStyles.cardPadding">
        <div class="flex items-center justify-between" :style="scalingStyles.marginScale">
          <h3 :style="scalingStyles.titleFontSize" :class="DESIGN_SYSTEM.text?.primary || 'text-gray-900 dark:text-white'" class="font-semibold">
            Save Dataset
          </h3>
          <button 
            @click="showSaveDatasetModal = false"
            :class="DESIGN_SYSTEM.text?.secondary || 'text-gray-600 dark:text-gray-400'"
            class="hover:opacity-70"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="space-y-4">
          <div v-if="!createNewDataset && loadedDataset" :style="[scalingStyles.textFontSize, scalingStyles.paddingScale]" :class="DESIGN_SYSTEM.text?.info || 'text-blue-600 dark:text-blue-400'" class="bg-blue-50 dark:bg-blue-900/20 rounded">
            <strong>Adding to existing dataset:</strong> {{ loadedDataset.name }}<br>
            Current tables: {{ Object.keys(loadedDataset.tables || {}).length }}
          </div>

          <div>
            <label :style="{...scalingStyles.textFontSize, marginBottom: '8px'}" :class="DESIGN_SYSTEM.text?.primary || 'text-gray-900 dark:text-white'" class="block font-medium">
              Dataset Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="datasetName"
              type="text"
              :style="[scalingStyles.inputPadding, scalingStyles.textFontSize]"
              :class="[DESIGN_SYSTEM.input || 'bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-600', 'w-full rounded']"
              placeholder="e.g., demo, initial-set"
            />
          </div>
          
          <div>
            <label :style="{...scalingStyles.textFontSize, marginBottom: '8px'}" :class="DESIGN_SYSTEM.text?.primary || 'text-gray-900 dark:text-white'" class="block font-medium">
              Description (optional)
            </label>
            <textarea
              v-model="datasetDescription"
              :style="[scalingStyles.inputPadding, scalingStyles.textFontSize]"
              :class="[DESIGN_SYSTEM.input || 'bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-600', 'w-full rounded']"
              rows="3"
              placeholder="Enter description"
            ></textarea>
          </div>
          
          <div :style="scalingStyles.smallFontSize" :class="DESIGN_SYSTEM.text?.secondary || 'text-gray-600 dark:text-gray-400'">
            This will save the current table ({{ tableName }}) along with all data, filters, and pagination state.
          </div>
        </div>
        
        <div class="flex justify-end" :style="[scalingStyles.buttonGap, {marginTop: scalingStyles.sectionMargin.marginBottom}]">
          <button
            @click="showSaveDatasetModal = false"
            :style="scalingStyles.buttonPadding"
            :class="[DESIGN_SYSTEM.button?.secondary || 'bg-gray-200 hover:bg-gray-300', 'rounded-md text-gray-900 dark:text-white']"
          >
            Cancel
          </button>
          <button
            @click="confirmSaveDataset"
            :disabled="!datasetName.trim()"
            :style="scalingStyles.buttonPadding"
            :class="[DESIGN_SYSTEM.button?.primary || 'bg-blue-600 hover:bg-blue-700 text-white', 'rounded-md disabled:opacity-50 disabled:cursor-not-allowed']"
          >
            Save Dataset
          </button>
        </div>
      </div>
    </div>

    <!-- Restore Dataset Modal -->
    <div v-if="showRestoreDatasetModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div :class="DESIGN_SYSTEM.card || 'bg-white dark:bg-gray-800'" class="rounded-lg shadow-xl max-w-md w-full mx-4" :style="scalingStyles.cardPadding">
        <div class="flex items-center justify-between" :style="scalingStyles.marginScale">
          <h3 :style="scalingStyles.titleFontSize" :class="DESIGN_SYSTEM.text?.primary || 'text-gray-900 dark:text-white'" class="font-semibold">
            Restore Dataset
          </h3>
          <button 
            @click="showRestoreDatasetModal = false"
            :class="DESIGN_SYSTEM.text?.secondary || 'text-gray-600 dark:text-gray-400'"
            class="hover:opacity-70"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="space-y-4">
          <div>
            <label :style="{...scalingStyles.textFontSize, marginBottom: '8px'}" :class="DESIGN_SYSTEM.text?.primary || 'text-gray-900 dark:text-white'" class="block font-medium">
              Load Dataset File
            </label>
            <input
              type="file"
              accept=".json"
              @change="handleDatasetFileSelect"
              :style="[scalingStyles.inputPadding, scalingStyles.textFontSize]"
              :class="[DESIGN_SYSTEM.input || 'bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-600', 'w-full rounded']"
            />
            <p :style="{...scalingStyles.smallFontSize, marginTop: '8px'}" :class="DESIGN_SYSTEM.text?.secondary || 'text-gray-600 dark:text-gray-400'">
              Select a .json dataset file
            </p>
          </div>
          
          <div v-if="loadedDataset" class="space-y-3 bg-gray-50 dark:bg-gray-700/50 rounded" :style="scalingStyles.cardPadding">
            <div :style="scalingStyles.textFontSize" class="font-medium" :class="DESIGN_SYSTEM.text?.primary || 'text-gray-900 dark:text-white'">
              Dataset: {{ loadedDataset.name }}
            </div>
            <div v-if="loadedDataset.description" :style="scalingStyles.smallFontSize" :class="DESIGN_SYSTEM.text?.secondary || 'text-gray-600 dark:text-gray-400'">
              {{ loadedDataset.description }}
            </div>
            <div :style="scalingStyles.smallFontSize" :class="DESIGN_SYSTEM.text?.secondary || 'text-gray-600 dark:text-gray-400'">
              Created: {{ new Date(loadedDataset.created).toLocaleDateString() }}
            </div>
            <div v-if="loadedDataset.updated" :style="scalingStyles.smallFontSize" :class="DESIGN_SYSTEM.text?.secondary || 'text-gray-600 dark:text-gray-400'">
              Updated: {{ new Date(loadedDataset.updated).toLocaleDateString() }}
            </div>
            
            <div :style="{marginTop: scalingStyles.marginScale.marginBottom}">
              <label :style="{...scalingStyles.textFontSize, marginBottom: '8px'}" :class="DESIGN_SYSTEM.text?.primary || 'text-gray-900 dark:text-white'" class="block font-medium">
                Select Table to Restore
              </label>
              <select
                v-model="selectedRestoreTable"
                :style="[scalingStyles.inputPadding, scalingStyles.textFontSize]"
                :class="[DESIGN_SYSTEM.input || 'bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-600', 'w-full rounded']"
              >
                <option v-for="table in availableTables" :key="table.name" :value="table.name">
                  {{ table.name }} ({{ table.rowCount }} rows)
                </option>
              </select>
              <p v-if="availableTables.length === 0" :style="{...scalingStyles.smallFontSize, marginTop: '8px'}" :class="DESIGN_SYSTEM.text?.warning || 'text-yellow-600 dark:text-yellow-400'">
                No tables found in this dataset
              </p>
            </div>
          </div>
        </div>
        
        <div class="flex justify-end" :style="[scalingStyles.buttonGap, {marginTop: scalingStyles.sectionMargin.marginBottom}]">
          <button
            @click="showRestoreDatasetModal = false"
            :style="scalingStyles.buttonPadding"
            :class="[DESIGN_SYSTEM.button?.secondary || 'bg-gray-200 hover:bg-gray-300', 'rounded-md text-gray-900 dark:text-white']"
          >
            Cancel
          </button>
          <button
            v-if="loadedDataset && selectedRestoreTable"
            @click="confirmRestoreDataset"
            :style="scalingStyles.buttonPadding"
            :class="[DESIGN_SYSTEM.button?.primary || 'bg-blue-600 hover:bg-blue-700 text-white', 'rounded-md']"
          >
            Restore Table
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.data-table {
  @apply space-y-6;
}
</style>