<!--
  DataTableHeader - Header section with title and action buttons
  @version 1.0.0
  @date 29-Sep-2025
  @description Header component for DataTable with title and action buttons
-->
<script setup>
import { computed } from 'vue'
import { SharedButton } from 'panadero-shared-components'
import { useDataTablePermissions } from '../composables/useDataTablePermissions.js'

// Props
const props = defineProps({
  config: { type: Object, required: true },
  darkModeClasses: { type: Object, required: true },
  scalingStyles: { type: Object, required: true },
  DESIGN_SYSTEM: { type: Object, required: true },
  showExport: { type: Boolean, default: true },
  showSaveDataset: { type: Boolean, default: true },
  showRestoreDataset: { type: Boolean, default: true }
})

// Emits
const emit = defineEmits(['create', 'export', 'save-dataset', 'restore-dataset'])

const { canCreate } = useDataTablePermissions(props.config)

// Optional config: headerVariant 'compact' (small, flat, single-line buttons), showDatasetButtons false
const buttonSize = computed(() => (props.config.headerVariant === 'compact' ? 'compact' : 'normal'))
const datasetButtons = computed(() => props.config.showDatasetButtons !== false)

// Event handlers
const handleCreate = () => {
  emit('create')
}

const handleExport = () => {
  emit('export')
}

const handleSaveDataset = () => {
  emit('save-dataset')
}

const handleRestoreDataset = () => {
  emit('restore-dataset')
}
</script>

<template>
  <div :class="DESIGN_SYSTEM.container" class="flex items-center justify-between mb-6">
    <h2 :style="scalingStyles.titleFontSize" class="font-semibold" :class="DESIGN_SYSTEM.text.info">
      {{ config.heading ?? `DataTable.${config.title}` }}
    </h2>
    <div :style="scalingStyles.buttonGap" class="flex items-center gap-2">
      <SharedButton 
        v-if="canCreate"
        @click="handleCreate" 
        variant="primary"
        :size="buttonSize"
        icon-left="fas fa-plus"
      >
        {{ config.createLabel ?? `Add ${config.title?.slice(0, -1) || 'Item'}` }}
      </SharedButton>
      
      <SharedButton 
        v-if="showExport"
        @click="handleExport" 
        variant="success"
        :size="buttonSize"
        icon-left="fas fa-download"
      >
        Export 
      </SharedButton>
      
      <SharedButton 
        v-if="showSaveDataset && datasetButtons"
        @click="handleSaveDataset" 
        variant="info"
        :size="buttonSize"
        icon-left="fas fa-save"
      >
        Save Dataset
      </SharedButton>
      
      <SharedButton 
        v-if="showRestoreDataset && datasetButtons"
        @click="handleRestoreDataset" 
        variant="secondary"
        :size="buttonSize"
        icon-left="fas fa-upload"
      >
        Restore Dataset
      </SharedButton>
    </div>
  </div>
</template>
