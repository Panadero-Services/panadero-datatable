<!--
  DataTableHeader - Header section with title and action buttons
  @version 1.0.0
  @date 29-Sep-2025
  @description Header component for DataTable with title and action buttons
-->
<script setup>
import { SharedButton } from 'panadero-shared-components'

// Props
const props = defineProps({
  config: { type: Object, required: true },
  darkModeClasses: { type: Object, required: true },
  scalingStyles: { type: Object, required: true },
  DESIGN_SYSTEM: { type: Object, required: true },
  showExport: { type: Boolean, default: true }
})

// Emits
const emit = defineEmits(['create', 'export'])

// Event handlers
const handleCreate = () => {
  emit('create')
}

const handleExport = () => {
  emit('export')
}
</script>

<template>
  <div :class="DESIGN_SYSTEM.container" class="flex items-center justify-between mb-6">
    <h2 :style="scalingStyles.titleFontSize" class="font-semibold" :class="DESIGN_SYSTEM.text.info">
      DataTable.{{ config.title }}
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
        v-if="showExport"
        @click="handleExport" 
        variant="success"
        size="normal"
        icon-left="fas fa-download"
      >
        Export 
      </SharedButton>
    </div>
  </div>
</template>
