<!-- v1.0.0 - Main DataTable component for panadero-datatable -->
<script setup>
import { computed, onMounted, onUnmounted, watch, toRef } from 'vue'
import { useDataTable } from '../composables/useDataTable.js'
// Note: These composables should be provided by the parent component
// or we need to create fallback styling

// Props
const props = defineProps({
  config: { type: Object, required: true },
  darkModeClasses: { type: Object, required: true},
  scalingStyles: { type: Object, required: true }, // Make it required
  externalData: { type: Array, default: null } // External filtered data
})

// Emits
const emit = defineEmits(['create', 'edit', 'delete', 'refresh'])

// Data table logic
const {
  data,
  allData,
  selectedItems,
  searchQuery,
  sortField,
  sortDirection,
  currentPage,
  totalPages,
  allSelected,
  loading,
  error,
  refresh,
  handleSort,
  handleSelectAll,
  handleSelectItem,
  handleSearch,
  handlePageChange,
  handleDelete,
  handleBulkDelete,
  cleanup
} = useDataTable(props.config, toRef(props, 'externalData'))


// Computed classes
const containerClasses = computed(() => [
  'rounded-xl shadow-lg border',
  props.config.variant === 'compact' ? 'p-4' : 'p-6',
  props.config.variant === 'bordered' ? 'border-2' : 'border'
])

const headerClasses = computed(() => [
  'mb-6',
  props.config.variant === 'compact' ? 'mb-4' : 'mb-6'
])

const tableClasses = computed(() => [
  props.config.striped ? 'table-striped' : '',
  props.config.hover ? 'table-hover' : ''
])

// Methods
const getNestedValue = (obj, path) => {
  return path.split('.').reduce((current, key) => current?.[key], obj)
}

const getSortIcon = (field) => {
  if (sortField.value !== field) return 'fas fa-sort text-gray-400'
  return sortDirection.value === 'asc' ? 'fas fa-sort-up text-blue-500' : 'fas fa-sort-down text-blue-500'
}

const getBadgeClass = (item, column) => {
  const value = getNestedValue(item, column.key)
  if (column.badgeColors && column.badgeColors[value]) {
    return column.badgeColors[value]
  }
  return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
}

const formatDate = (dateString) => {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleDateString()
}

// Lifecycle
onMounted(() => {
  // Component is ready
})

// Watch for external data changes and reset page
watch(() => props.externalData, (newExternalData) => {
  // Reset to page 1 when external data changes (filters applied)
  currentPage.value = 1
}, { deep: true })

onUnmounted(() => {
  cleanup()
})
</script>

<template>
  <div class="data-table-container" :class="containerClasses">
    <!-- Enhanced Header Section -->
    <div class="data-table-header bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-t-xl border-b-2 border-blue-200 dark:border-gray-600 p-6 relative">
      <!-- Main Header Row -->
      <div class="flex items-center justify-between mb-4">
        <!-- Title and Stats (Left) -->
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-3">
            <div class="bg-blue-500 rounded-xl p-3 shadow-lg">
              <i class="fas fa-table text-white" :style="scalingStyles.iconSizeLarge"></i>
            </div>
            <div>
              <h2 :style="scalingStyles.titleFontSize" :class="darkModeClasses.text" class="font-bold">
                {{ config.title }}
              </h2>
              <p :style="scalingStyles.smallFontSize" :class="darkModeClasses.textSecondary" class="mt-1">
                {{ data.length }} {{ data.length === 1 ? 'record' : 'records' }} found
              </p>
            </div>
          </div>
        </div>
        
        <!-- Search Bar (Center) - Only show when no external data and searchable is enabled -->
        <div v-if="config.searchable && !props.externalData && config.showSearch" class="absolute left-1/2 transform -translate-x-1/2">
          <div class="relative w-80">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search records..."
              :style="scalingStyles.inputPadding"
              :class="[darkModeClasses.input, 'rounded-xl border-2 focus:border-blue-500 transition-all duration-200 shadow-sm']"
              class="pl-10 pr-4 py-2 w-full"
            />
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" :style="scalingStyles.iconSizeSmall"></i>
          </div>
        </div>
        
        <!-- Action Buttons (Right) -->
        <div class="flex items-center gap-3">
          <!-- Refresh Button -->
          <button
            @click="refresh"
            :disabled="loading"
            :class="[darkModeClasses.button, 'rounded-xl p-3 transition-all duration-200 hover:shadow-lg']"
            :style="scalingStyles.buttonPadding"
            title="Refresh data"
          >
            <i :class="[loading ? 'fa-spin' : '', 'fas fa-sync-alt']" :style="scalingStyles.iconSize"></i>
          </button>

          <!-- Create Button -->
          <button
            v-if="config.showCreate"
            @click="$emit('create')"
            :class="[darkModeClasses.buttonPrimary, 'rounded-xl font-semibold transition-all duration-200 hover:shadow-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700']"
            :style="scalingStyles.buttonPadding"
          >
            <i class="fas fa-plus mr-2" :style="scalingStyles.iconSizeSmall"></i>
            <span :style="scalingStyles.textFontSize">Add {{ config.title.slice(0, -1) }}</span>
          </button>
        </div>
      </div>

      <!-- Enhanced Bulk Actions -->
      <div v-if="config.showBulkActions && selectedItems.length > 0" class="mt-4 p-4 rounded-xl border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="bg-orange-500 rounded-full p-2">
              <i class="fas fa-check-circle text-white" :style="scalingStyles.iconSize"></i>
            </div>
            <div>
              <span :style="scalingStyles.textFontSize" :class="darkModeClasses.text" class="font-semibold">
                {{ selectedItems.length }} {{ selectedItems.length === 1 ? 'item' : 'items' }} selected
              </span>
              <p :style="scalingStyles.smallFontSize" :class="darkModeClasses.textSecondary" class="text-sm">
                Choose an action to perform on selected items
              </p>
            </div>
          </div>
          <div class="flex gap-2">
            <button
              @click="handleBulkDelete"
              :class="[darkModeClasses.buttonDanger, 'rounded-xl font-semibold transition-all duration-200 hover:shadow-lg']"
              :style="scalingStyles.buttonPadding"
            >
              <i class="fas fa-trash mr-2" :style="scalingStyles.iconSizeSmall"></i>
              <span :style="scalingStyles.textFontSize">Delete Selected</span>
            </button>
            <button
              @click="selectedItems = []"
              :class="[darkModeClasses.buttonSecondary, 'rounded-xl font-semibold transition-all duration-200 hover:shadow-lg']"
              :style="scalingStyles.buttonPadding"
            >
              <i class="fas fa-times mr-2" :style="scalingStyles.iconSizeSmall"></i>
              <span :style="scalingStyles.textFontSize">Clear Selection</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Table Section -->
    <div class="data-table-content">
      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-12">
        <div class="text-center">
          <i class="fas fa-spinner fa-spin text-4xl text-blue-500 mb-4" :style="scalingStyles.iconSizeExtraLarge"></i>
          <p :style="scalingStyles.textFontSize" :class="darkModeClasses.text" class="font-medium">Loading...</p>
        </div>
      </div>

          <!-- Empty State -->
          <div v-else-if="data.length === 0" class="flex items-center justify-center py-12">
            <div class="text-center">
              <i class="fas fa-table text-6xl text-gray-300 mb-4" :style="scalingStyles.iconSizeExtraLarge"></i>
              <p :style="scalingStyles.textFontSize" :class="darkModeClasses.text" class="font-medium mb-2">No data found</p>
              <p :style="scalingStyles.smallFontSize" :class="darkModeClasses.textSecondary">
                {{ searchQuery ? 'Try adjusting your search criteria' : 'No records to display' }}
              </p>
            </div>
          </div>

      <!-- Data Table -->
      <div v-else class="overflow-x-auto">
        <table class="w-full" :class="tableClasses">
          <thead :class="darkModeClasses.tableHeader">
            <tr>
              <!-- Select All Checkbox -->
              <th v-if="config.selectable" :style="scalingStyles.tableHeader" class="px-6 py-4 text-left w-12">
                <input
                  type="checkbox"
                  :checked="allSelected"
                  @change="handleSelectAll"
                  :class="[darkModeClasses.input, 'rounded border-2 border-gray-300 focus:border-blue-500']"
                />
              </th>

              <!-- Column Headers -->
              <th
                v-for="column in config.columns"
                :key="column.key"
                :style="scalingStyles.tableHeader"
                :class="[
                  'px-6 py-4 text-left font-semibold uppercase tracking-wider',
                  column.sortable && config.sortable ? 'cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-700' : '',
                  darkModeClasses.tableRow
                ]"
                @click="column.sortable && config.sortable ? handleSort(column.key) : null"
              >
                <div class="flex items-center gap-1">
                  {{ column.label }}
                  <i v-if="column.sortable && config.sortable" :class="getSortIcon(column.key)" :style="scalingStyles.iconSizeSmall"></i>
                </div>
              </th>

              <!-- Actions Column -->
              <th v-if="config.showActions" :style="scalingStyles.tableHeader" class="px-6 py-4 text-left font-semibold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody class="divide-y" :class="[darkModeClasses.table, darkModeClasses.border]">
            <tr
              v-for="item in data"
              :key="item.id"
              :class="[
                darkModeClasses.tableRow,
                'transition-colors',
                config.hover ? 'hover:bg-gray-50 dark:hover:bg-gray-700' : '',
                selectedItems.includes(item.id) ? 'border-l-4 border-blue-500' : ''
              ]"
            >
              <!-- Select Checkbox -->
              <td v-if="config.selectable" :style="scalingStyles.textFontSize" class="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  :checked="selectedItems.includes(item.id)"
                  @change="handleSelectItem(item.id)"
                  :class="[darkModeClasses.input, 'rounded border-2 border-gray-300 focus:border-blue-500']"
                />
              </td>

              <!-- Data Cells -->
              <td
                v-for="column in config.columns"
                :key="column.key"
                :style="scalingStyles.textFontSize"
                :class="[darkModeClasses.text, 'px-6 py-4 whitespace-nowrap']"
              >
                <slot
                  :name="`cell-${column.key}`"
                  :item="item"
                  :value="getNestedValue(item, column.key)"
                  :column="column"
                >
                  <span v-if="column.type === 'badge'" class="px-2 py-1 rounded-full text-xs font-medium" :class="getBadgeClass(item, column)">
                    {{ getNestedValue(item, column.key) }}
                  </span>
                  <span v-else-if="column.type === 'date'" :class="darkModeClasses.textSecondary">
                    {{ formatDate(getNestedValue(item, column.key)) }}
                  </span>
                  <span v-else-if="column.type === 'boolean'">
                    <i :class="getNestedValue(item, column.key) ? 'fas fa-check text-green-500' : 'fas fa-times text-red-500'" :style="scalingStyles.iconSizeSmall"></i>
                  </span>
                  <span v-else :class="column.key === 'identifier' ? 'font-mono' : ''">
                    {{ getNestedValue(item, column.key) || '-' }}
                  </span>
                </slot>
              </td>

              <!-- Actions -->
              <td v-if="config.showActions" :style="scalingStyles.textFontSize" :class="darkModeClasses.text" class="px-6 py-4 whitespace-nowrap">
                <div class="flex gap-2">
                  <button
                    v-if="config.showEdit"
                    @click="$emit('edit', item)"
                    :class="[darkModeClasses.icon, 'rounded p-1 transition-colors']"
                    :style="scalingStyles.actionButton"
                  >
                    <i class="fas fa-edit" :style="scalingStyles.iconSizeSmall"></i>
                  </button>
                  <button
                    v-if="config.showDelete"
                    @click="() => { console.debug('Delete button clicked for item:', item.id); $emit('delete', item.id) }"
                    :class="[darkModeClasses.iconDanger, 'rounded p-1 transition-colors']"
                    :style="scalingStyles.actionButton"
                  >
                    <i class="fas fa-trash" :style="scalingStyles.iconSizeSmall"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div v-if="config.pagination && totalPages > 1" class="mt-6 px-6 py-4 border-t" :class="[darkModeClasses.bgSecondary, darkModeClasses.border]">
        <div class="flex items-center justify-between">
          <div :style="scalingStyles.smallFontSize" :class="darkModeClasses.textSecondary" class="flex items-center gap-2">
            <i class="fas fa-info-circle" :style="scalingStyles.iconSizeSmall"></i>
            Showing {{ (currentPage - 1) * config.itemsPerPage + 1 }} to {{ Math.min(currentPage * config.itemsPerPage, allData.length) }} of {{ allData.length }} results
          </div>

          <div class="flex items-center gap-3">
            <!-- Previous Button -->
            <button
              @click="handlePageChange(currentPage - 1)"
              :disabled="currentPage === 1"
              :class="[darkModeClasses.buttonSecondary, 'rounded-lg px-4 py-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed']"
              :style="[scalingStyles.buttonPadding, scalingStyles.textFontSize]"
            >
              <i class="fas fa-chevron-left mr-1" :style="scalingStyles.iconSizeSmall"></i>
              Previous
            </button>
            <!-- Page Numbers -->
            <div class="flex gap-1">
              <button
                v-for="page in Math.min(5, totalPages)"
                :key="page"
                @click="handlePageChange(page)"
                :class="[
                  'px-4 py-2 rounded-lg font-medium transition-colors',
                  page === currentPage
                    ? 'bg-blue-500 text-white shadow-lg'
                    : [darkModeClasses.buttonSecondary, 'hover:bg-gray-100 dark:hover:bg-gray-700']
                ]"
              :style="[scalingStyles.buttonPadding, scalingStyles.textFontSize]"
              >
                {{ page }}
              </button>
            </div>

            <!-- Next Button -->
            <button
              @click="handlePageChange(currentPage + 1)"
              :disabled="currentPage === totalPages"
              :class="[darkModeClasses.buttonSecondary, 'rounded-lg px-4 py-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed']"
              :style="[scalingStyles.buttonPadding, scalingStyles.textFontSize]"
            >
              Next
              <i class="fas fa-chevron-right ml-1" :style="scalingStyles.iconSizeSmall"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.table-striped tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.02);
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

@media (prefers-color-scheme: dark) {
  .table-striped tbody tr:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.02);
  }
  
  .table-hover tbody tr:hover {
    background-color: rgba(255, 255, 255, 0.04);
  }
}
</style>
