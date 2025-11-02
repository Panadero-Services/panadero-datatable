<!--
  DataTableActions - Action modals and confirmation dialogs
  @version 1.0.0
  @date 29-Sep-2025
  @description Actions component for DataTable with modals and confirmations
-->
<script setup>
import { ref, computed } from 'vue'
import { ConfirmationModal } from 'panadero-shared-components'
// Import form components
import StorageForm from '../../../panadero-erp-inventory/src/components/StorageForm.vue'
import ProductForm from '../../../panadero-erp-inventory/src/components/ProductForm.vue'
import ProductGroupForm from '../../../panadero-erp-inventory/src/components/ProductGroupForm.vue'
import SiteForm from '../../../panadero-erp-inventory/src/components/SiteForm.vue'

// Props
const props = defineProps({
  config: { type: Object, required: true },
  showDeleteConfirm: { type: Boolean, default: false },
  showBulkDeleteConfirm: { type: Boolean, default: false },
  showForm: { type: Boolean, default: false },
  editingItem: { type: Object, default: null },
  itemToDelete: { type: Object, default: null },
  itemsToDelete: { type: Array, default: () => [] },
  getFormProps: { type: Function, required: true },
  DESIGN_SYSTEM: { type: Object, required: true },
  getItemDisplayName: { type: Function, required: true }
})

// Emits
const emit = defineEmits([
  'confirmDelete',
  'cancelDelete',
  'confirmBulkDelete',
  'cancelBulkDelete',
  'itemSave',
  'formClose'
])

// Event handlers
const handleConfirmDelete = () => {
  emit('confirmDelete')
}

const handleCancelDelete = () => {
  emit('cancelDelete')
}

const handleConfirmBulkDelete = () => {
  emit('confirmBulkDelete')
}

const handleCancelBulkDelete = () => {
  emit('cancelBulkDelete')
}

const handleItemSave = (itemData) => {
  emit('itemSave', itemData)
}

const handleFormClose = () => {
  emit('formClose')
}

// Resolved form component
const resolvedFormComponent = computed(() => {
  if (typeof props.config.formComponent === 'string') {
    // Map component names to actual components
    const componentMap = {
      'StorageForm': StorageForm,
      'ProductForm': ProductForm,
      'ProductGroupForm': ProductGroupForm,
      'SiteForm': SiteForm,
      // etc.
    }
    return componentMap[props.config.formComponent] || null
  }
  return props.config.formComponent
})
</script>

<template>
  <!-- Delete Confirmation Modal -->
  <ConfirmationModal
    :show="showDeleteConfirm"
    :title="`Delete ${config.title?.slice(0, -1) || 'Item'}`"
    :message="itemToDelete ? `Are you sure you want to delete this ${config.title?.slice(0, -1).toLowerCase() || 'item'}?\n\n${getItemDisplayName(itemToDelete)}\n\n⚠️  This action cannot be undone.` : ''"
    confirm-text="Delete"
    cancel-text="Cancel"
    variant="danger"
    @confirm="handleConfirmDelete"
    @cancel="handleCancelDelete"
  />

  <!-- Bulk Delete Confirmation Modal -->
  <ConfirmationModal
    :show="showBulkDeleteConfirm"
    :title="`Delete ${config.title || 'Items'}`"
    :message="itemsToDelete.length > 0 ? `Are you sure you want to delete ${itemsToDelete.length} ${config.title?.toLowerCase() || 'item(s)'}?\n\n📦 ${config.title || 'Items'}:\n${itemsToDelete.map(item => `• ${getItemDisplayName(item)}`).join('\n')}\n\n⚠️  This action cannot be undone.` : ''"
    confirm-text="Delete All"
    cancel-text="Cancel"
    variant="danger"
    @confirm="handleConfirmBulkDelete"
    @cancel="handleCancelBulkDelete"
  />

  <!-- Generic Form Modal (if config provides form component) -->
  <component
    v-if="config.formComponent"
    :is="resolvedFormComponent"
    :show="showForm"
    :item="editingItem"
        :DESIGN_SYSTEM="DESIGN_SYSTEM"
    v-bind="getFormProps()"
    @saved="handleItemSave"
    @close="handleFormClose"
  />
</template>
