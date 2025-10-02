<!--
  DataTableComplete - Enhanced Generic Data Table
  @version 1.0.0
  @date 29-Sep-2025
  @description Maximum generic data table with KPIs, filters, forms, and modals
  @based-on: Products.vue (working version)
-->
<script setup>
import { ref, computed } from 'vue'
import { useCommonSnippets } from '../composables/useCommonSnippets.js'
import { useDataTableComplete } from '../composables/useDataTableComplete.js'
import { FilterSection } from 'panadero-filters'
// UI Shared Components 
import { SharedButton, KPICard, DistributionCard, ActionCard, ConfirmationModal } from 'panadero-shared-components'

// UI Components
import DataTable from './DataTable.vue'
import { createTableConfig } from '../utils/tableConfigFactory.js'

// Props
const props = defineProps({
  config: {
    type: Object,
    required: true
  },
  apiEndpoint: {
    type: String,
    required: true
  },
  tableName: {
    type: String,
    required: true
  },
  darkModeClasses: {
    type: Object,
    default: null
  },
  scalingStyles: {
    type: Object,
    default: null
  }
})

// Get common functionality
const { 
  darkModeClasses: internalDarkModeClasses, 
  scalingStyles: internalScalingStyles, 
  store, 
  showNotification
} = useCommonSnippets()

// Use passed props or fallback to internal
const darkModeClasses = computed(() => {
  if (props.darkModeClasses) return props.darkModeClasses
  if (internalDarkModeClasses && internalDarkModeClasses.value) return internalDarkModeClasses.value
  return {}
})
const scalingStyles = computed(() => {
  if (props.scalingStyles) return props.scalingStyles
  if (internalScalingStyles && internalScalingStyles.value) return internalScalingStyles.value
  return {}
})

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
} = useDataTableComplete(props, props.config)

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


// All data operations are now handled by the composable

// Table configuration
const tableConfig = computed(() => {
  return createTableConfig({
    table: props.tableName,
    title: props.config.title,
    columns: props.config.columns || [],
    itemsPerPage: 20,
    showCreate: true,
    showEdit: true,
    showDelete: true,
    showBulkActions: true,
    showSearch: false
  })
})




// Event handlers - Generic system
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

// Filter functions are now provided by useGenericFilters


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

// Helper functions are now provided by the composable


const handleRefreshClick = async () => {
  const result = await handleRefresh()
  refreshMessage.value = result.message
  refreshCount.value = result.newRecords
  showRefreshModal.value = true
  
  setTimeout(() => {
    showRefreshModal.value = false
  }, 2000)
}

const handleExport = () => {
  const result = exportData()
  if (result.success) {
    showNotification(result.message, 'success')
  } else {
    showNotification(result.message, 'error')
  }
}


// In DataTableComplete.vue
const resolvedFormComponent = computed(() => {
  if (typeof props.config.formComponent === 'string') {
    // Map component names to actual components
    const componentMap = {
      'StorageForm': StorageForm,
      'ProductForm': ProductForm,
      // etc.
    }
    return componentMap[props.config.formComponent] || null
  }
  return props.config.formComponent
})



// Lifecycle is handled by the composable
</script>

<template>
  <!-- Container Layout -->
  <div class="data-table-complete" :class="darkModeClasses.container">
    <div class="flex items-center justify-between mb-6">
      <h2 :style="scalingStyles.titleFontSize" class="font-semibold dark:text-white">
        {{ config.title }}
      </h2>
      <div :style="scalingStyles.buttonGap" class="flex items-center gap-2">
        <SharedButton 
          @click="handleCreate" 
          variant="primary"
          size="normal"
          icon-left="fas fa-plus"
        >
          Add {{ config.title?.slice(0, -1) || 'Item' }}
        </SharedButton>
        
        <SharedButton 
          @click="handleExport" 
          variant="success"
          size="normal"
          icon-left="fas fa-download"
        >
          Export 
        </SharedButton>
      </div>
    </div>

    <!-- Main Grid Layout -->
    <div class="grid grid-cols-3 xl:grid-cols-5 gap-6">
      <!-- LEFT Main Content Section (2/3 on regular, 4/5 on XL) - LEFT SIDE -->
      <div class="col-span-2 xl:col-span-4">
        <!-- Filter Section -->
        <div v-if="props.config.filters && props.config.filters.length > 0" :class="[darkModeClasses.card, 'rounded-xl shadow-lg border p-6']">
          <div class="flex items-center justify-between mb-4">
            <h3 :style="scalingStyles.subtitleFontSize" :class="darkModeClasses.text" class="font-semibold">
              {{ props.config.title || 'Data' }} Filters
            </h3>
            <div class="rounded-full p-2" :class="darkModeClasses.bgSecondary">
              <i :class="collapsed ? 'fas fa-chevron-down' : 'fas fa-chevron-up'" 
                 :style="scalingStyles?.iconSizeSmall || { fontSize: '0.875rem' }"
                 class="text-blue-500 dark:text-blue-600 transition-transform duration-200 cursor-pointer hover:opacity-70"
                 @click="collapsed=!collapsed"></i>
            </div>
          </div>

          <!-- Compact Single Row -->
          <div v-if="collapsed" class="flex items-center gap-4 flex-wrap">
            <!-- Dynamic Filters -->
            <div v-for="filter in props.config.filters" :key="filter.key" class="flex items-center gap-2">
              <span :style="scalingStyles?.textFontSize" :class="darkModeClasses?.textSecondary" class="font-medium text-sm">
                {{ filter.label }}:
              </span>
              <select 
                :value="filterStates[filter.key] || 'all'"
                @change="selectFilter(filter.key, $event.target.value)"
                :style="[scalingStyles.inputPadding,scalingStyles?.textFontSize]"
                :class="[darkModeClasses.input, 'rounded-lg border-2 focus:border-blue-500 transition-colors min-w-[120px]']"
              >
                <option value="all">All {{ filter.label.toLowerCase() }}</option>
                <option v-for="item in allFilterItems[filter.key]" :key="item.value" :value="item.value">
                  {{ item.label }} ({{ item.count }})
                </option>
              </select>
            </div>

            <!-- Search Bar -->
            <div class="flex-1 flex justify-end">
              <div class="relative w-64 mr-8">
                <input
                  v-model="searchQuery"
                  type="text"
                  :placeholder="`Search ${props.config.title?.toLowerCase() || 'items'}...`"
                  :style="[scalingStyles.inputPadding,scalingStyles?.textFontSize]"
                  :class="[darkModeClasses.input, 'rounded-lg border-2 focus:border-blue-500 transition-colors']"
                  class="w-full ml-8"
                />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-search text-gray-400" :style="scalingStyles.iconSize"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Expanded Filters -->
          <div v-if="!collapsed" class="space-y-6">
            <!-- Dynamic Filter Sections -->
            <FilterSection
              v-for="filter in props.config.filters" 
              :key="filter.key"
              :title="`Filter by ${filter.label}`"
              :items="allFilterItems[filter.key]"
              :selected-value="filterStates[filter.key] || 'all'"
              :scaling-styles="scalingStyles"
              :dark-mode-classes="darkModeClasses"
              @select="(value) => selectFilter(filter.key, value)"
            />
            <!-- Clear Filters -->
            <div class="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                @click="clearAllFilters"
                class="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>

        <!-- Records List -->
        <div class="col-span-4 mt-6">
          <div :class="[darkModeClasses.card, 'overflow-x-auto rounded-xl shadow-lg p-6 border']">
            <!-- Enhanced Data Table -->
            <DataTable 
              :config="tableConfig"
              :dark-mode-classes="darkModeClasses"
              :scaling-styles="scalingStyles"
              :external-data="filteredData"
              @create="handleCreate"
              @edit="handleEdit"
              @delete="handleDelete"
              @bulk-delete="handleBulkDelete"
              @refresh="handleRefreshClick"
            />
          </div>
        </div>
      </div>

      <!-- END LEFT SIDE Main Content Section -->

      <!-- RIGHT SIDE : Main Content Section (1/3 on regular, 1/5 on XL) -->
      <div class="col-span-1 space-y-6">
        <!-- KPI Overview -->
        <KPICard
          title="Overview"
          icon="fas fa-chart-pie"
          icon-color="text-blue-600"
          :kpis="kpis"
          :dark-mode-classes="darkModeClasses"
          :scaling-styles="scalingStyles"
        />
        

        <!-- Distribution Cards (if available) -->
        <DistributionCard
          v-if="props.config.title === 'Products'"
          title="Product Types"
          icon="fas fa-chart-pie"
          icon-color="text-indigo-600"
          :distribution="productTypeDistribution"
          :dark-mode-classes="darkModeClasses"
          :scaling-styles="scalingStyles"
        />

        <DistributionCard
          v-if="props.config.title === 'Products'"
          title="Brands"
          icon="fas fa-tags"
          icon-color="text-orange-600"
          :distribution="brandDistribution"
          :dark-mode-classes="darkModeClasses"
          :scaling-styles="scalingStyles"
        />

        <!-- Quick Actions -->
        <ActionCard
          title="Quick Actions"
          icon="fas fa-bolt"
          icon-color="text-yellow-600"
          :actions="[
            { key: 'create', label: 'Add New', icon: 'fas fa-plus', variant: 'primary' },
            { key: 'export', label: 'Export Data', icon: 'fas fa-download', variant: 'secondary' }
          ]"
          :dark-mode-classes="darkModeClasses"
          :scaling-styles="scalingStyles"
          @action-click="(action) => action.key === 'create' ? handleCreate() : exportData()"
        />
      </div>
    </div>

    <!-- Modals -->
    <ConfirmationModal
      :show="showDeleteConfirm"
      title="Delete Item"
      :message="itemToDelete ? `Are you sure you want to delete this item?\n\n${itemToDelete.name || 'Item'}\n\n⚠️  This action cannot be undone.` : ''"
      confirm-text="Delete"
      cancel-text="Cancel"
      variant="danger"
      @confirm="confirmDelete"
      @cancel="cancelDelete"
      @close="cancelDelete"
    />

    <ConfirmationModal
      :show="showBulkDeleteConfirm"
      title="Delete Items"
      :message="itemsToDelete.length > 0 ? `Are you sure you want to delete ${itemsToDelete.length} item(s)?\n\n⚠️  This action cannot be undone.` : ''"
      confirm-text="Delete All"
      cancel-text="Cancel"
      variant="danger"
      @confirm="confirmBulkDelete"
      @cancel="cancelBulkDelete"
      @close="cancelBulkDelete"
    />

    <ConfirmationModal
      :show="showRefreshModal"
      :title="refreshCount > 0 ? 'Data Refreshed' : 'Refresh Complete'"
      :message="refreshMessage"
      :confirm-text="refreshCount > 0 ? 'View New Records' : 'OK'"
      :cancel-text="null"
      :variant="refreshCount > 0 ? 'success' : 'info'"
      @confirm="() => { showRefreshModal = false; refreshMessage = ''; refreshCount = 0; }"
      @close="() => { showRefreshModal = false; refreshMessage = ''; refreshCount = 0; }"
    />

    <!-- Generic Form Modal (if config provides form component) -->
    <component
      v-if="props.config.formComponent"
      :is="props.config.formComponent"
      :show="showForm"
      :item="editingItem"
      v-bind="getFormProps()"
      @saved="handleItemSave"
      @close="handleFormClose"
    />

    <!-- Generic Delete Confirmation Modal -->
    <ConfirmationModal
      :show="showDeleteConfirm"
      :title="`Delete ${props.config.title?.slice(0, -1) || 'Item'}`"
      :message="itemToDelete ? `Are you sure you want to delete this ${props.config.title?.slice(0, -1).toLowerCase() || 'item'}?\n\n${getItemDisplayName(itemToDelete)}\n\n⚠️  This action cannot be undone.` : ''"
      confirm-text="Delete"
      cancel-text="Cancel"
      variant="danger"
      @confirm="confirmDelete"
      @cancel="cancelDelete"
    />

    <!-- Generic Bulk Delete Confirmation Modal -->
    <ConfirmationModal
      :show="showBulkDeleteConfirm"
      :title="`Delete ${props.config.title || 'Items'}`"
      :message="itemsToDelete.length > 0 ? `Are you sure you want to delete ${itemsToDelete.length} ${props.config.title?.toLowerCase() || 'item(s)'}?\n\n📦 ${props.config.title || 'Items'}:\n${itemsToDelete.map(item => `• ${getItemDisplayName(item)}`).join('\n')}\n\n⚠️  This action cannot be undone.` : ''"
      confirm-text="Delete All"
      cancel-text="Cancel"
      variant="danger"
      @confirm="confirmBulkDelete"
      @cancel="cancelBulkDelete"
    />
  </div>
</template>

<style scoped>
.data-table-complete {
  @apply space-y-6;
}
</style>