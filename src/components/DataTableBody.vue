<!--
  DataTableBody - Main table body with data rows and bulk actions
  @version 1.0.0
  @date 29-Sep-2025
  @description Table body component for DataTable with data rows and bulk actions
-->
<script setup>
import { computed } from 'vue'
import { useDataTablePermissions } from '../composables/useDataTablePermissions.js'
import { DEFAULT_TABLE_LABELS } from '../config/tableLabels.js'

// Props
const props = defineProps({
  config: { type: Object, required: true },
  darkModeClasses: { type: Object, required: true },
  scalingStyles: { type: Object, required: true },
  DESIGN_SYSTEM: { type: Object, required: true },
  showBulkActions: { type: Boolean, default: true },
  loading: { type: Boolean, default: false },
  error: { type: String, default: null },
  paginatedData: { type: Array, default: () => [] },
  selectedItems: { type: Array, default: () => [] },
  getNestedValue: { type: Function, required: true },
  cellStateClasses: { type: Object, default: () => ({}) }
})

// Emits
const emit = defineEmits(['selectAll', 'toggleSelection', 'edit', 'delete', 'bulkDelete'])

const { canBulkDelete, canEditRow, canDeleteRow } = useDataTablePermissions(props.config)
const bulkEnabled = computed(() => props.showBulkActions && canBulkDelete.value)
const labels = computed(() => ({ ...DEFAULT_TABLE_LABELS, ...(props.config.labels || {}) }))

// Event handlers
const handleSelectAll = () => {
  emit('selectAll')
}

const handleToggleSelection = (itemId) => {
  emit('toggleSelection', itemId)
}

const handleEdit = (item) => {
  emit('edit', item)
}

const handleDelete = (item) => {
  emit('delete', item)
}

const handleBulkDelete = () => {
  emit('bulkDelete', props.selectedItems)
}

const isSelected = (itemId) => {
  return props.selectedItems.includes(itemId)
}

const cellStateClass = (item, column) => (column.stateKey ? props.cellStateClasses[item[column.stateKey]] || '' : '')





</script>

<template>
  <div :class="[DESIGN_SYSTEM.card, 'overflow-x-auto rounded-xl shadow-lg p-6 border']" class="">
    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center h-64">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p :class="DESIGN_SYSTEM.text.secondary">Loading data...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex items-center justify-center h-64">
      <div class="text-center">
        <div class="text-red-500 mb-4">
          <i class="fas fa-exclamation-triangle"></i>
        </div>
        <h3 :class="DESIGN_SYSTEM.text.primary" class="font-semibold mb-2">Error Loading Data</h3>
        <p :class="[DESIGN_SYSTEM.text.secondary, 'text-red-600 dark:text-red-400']" class="mb-4">{{ error }}</p>
      </div>
    </div>
    
    <!-- Data Table -->
    <div v-else>
      <!-- Bulk Actions Bar -->
      <div v-if="bulkEnabled && selectedItems.length > 0" 
           class="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
        <div class="flex items-center justify-between">
          <span :class="DESIGN_SYSTEM.text.primary" class="font-medium">
            {{ selectedItems.length }} item(s) selected
          </span>
          <div class="flex gap-2">
            <button
              @click="handleBulkDelete"
              :class="[DESIGN_SYSTEM.button.danger, 'px-3 py-1 rounded']"
            >
              <i class="fas fa-trash mr-1"></i>
              Delete Selected
            </button>
            <button
              @click="$emit('clearSelection')"
              :class="[DESIGN_SYSTEM.button.secondary, 'px-3 py-1 rounded']"
            >
              Clear Selection
            </button>
          </div>
        </div>
      </div>

      <!-- Table Header -->
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead :class="DESIGN_SYSTEM.table.header">
            <tr>
              <th v-if="bulkEnabled" class="px-6 py-3 text-left font-medium uppercase tracking-wider">
                <input
                  type="checkbox"
                  :checked="selectedItems.length === paginatedData.length && paginatedData.length > 0"
                  @change="handleSelectAll"
                  :aria-label="labels.selectAll"
                  class="rounded border-gray-300" 
                />
              </th>
              <th v-for="column in config.columns" :key="column.key" 
                :style="scalingStyles.textFontSize"
                :class="[DESIGN_SYSTEM.table.header, 'px-6 py-3 text-left font-medium uppercase tracking-wider']">
                {{ column.label }}
              </th>
              <th 
                :style="scalingStyles.textFontSize"
                :class="[DESIGN_SYSTEM.table.header, 'px-6 py-3 text-left font-medium uppercase tracking-wider']">
                {{ labels.actions }}
              </th>
            </tr>
          </thead>
          <tbody :class="[DESIGN_SYSTEM.table.border, 'divide-y divide-gray-200 dark:divide-gray-700']">
            <tr v-for="item in paginatedData" :key="item.id" 
                :class="[DESIGN_SYSTEM.table.row, 'hover:bg-gray-50 dark:hover:bg-gray-700']">
              <td v-if="bulkEnabled" class="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  :checked="isSelected(item.id)"
                  @change="handleToggleSelection(item.id)"
                  :aria-label="labels.selectRow"
                  class="rounded border-gray-300" 
                />
              </td>
              <td v-for="column in config.columns" :key="column.key" 
                :style="scalingStyles.smallFontSize"
                :class="[cellStateClass(item, column) || DESIGN_SYSTEM.text.primary, 'px-6 py-4 whitespace-nowrap']">
                {{ getNestedValue(item, column.key) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap font-medium">
                <div class="flex gap-2">
                  <button v-if="canEditRow(item)" @click="handleEdit(item)" 
                    :aria-label="labels.edit" :title="labels.edit"
                    :style="scalingStyles.iconSizeSmall"
                    :class="[DESIGN_SYSTEM.icon.primary, 'p-0 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900']">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </button>
                  <button v-if="canDeleteRow(item)" @click="handleDelete(item)" 
                    :aria-label="labels.delete" :title="labels.delete"
                    :style="scalingStyles.iconSizeSmall"
                    :class="[DESIGN_SYSTEM.icon.danger, 'p-0 rounded-lg hover:bg-red-100 dark:hover:bg-red-900']">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
