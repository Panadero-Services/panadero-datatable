<!--
  DataTableKPIs - KPI section with overview and distribution cards
  @version 1.0.0
  @date 29-Sep-2025
  @description KPI component for DataTable with overview and distribution cards
-->
<script setup>
// UI Shared Components 
import { KPICard, DistributionCard, ActionCard } from 'panadero-shared-components'

// Props
const props = defineProps({
  config: { type: Object, required: true },
  darkModeClasses: { type: Object, required: true },
  scalingStyles: { type: Object, required: true },
  DESIGN_SYSTEM: { type: Object, required: true },
  showKPIs: { type: Boolean, default: true },
  kpis: { type: Array, default: () => [] },
  productTypeDistribution: { type: Array, default: () => [] },
  brandDistribution: { type: Array, default: () => [] }
})

// Emits
const emit = defineEmits(['actionClick'])

// Event handlers
const handleActionClick = (action) => {
  emit('actionClick', action)
}
</script>

<template>
  <div v-if="showKPIs" class="col-span-1 space-y-6">

    <!-- KPI Overview -->
    <KPICard
      title="Overview"
      icon="fas fa-chart-pie"
      icon-color="text-blue-600"
      :kpis="kpis"
      :DESIGN_SYSTEM="DESIGN_SYSTEM"
      :dark-mode-classes="darkModeClasses"
      :scaling-styles="scalingStyles"
    />
    
    <!-- Distribution Cards (if available) -->
    <DistributionCard
      v-if="config.title === 'Products'"
      title="Product Types"
      icon="fas fa-chart-pie"
      icon-color="text-indigo-600"
      :distribution="productTypeDistribution"
      :DESIGN_SYSTEM="DESIGN_SYSTEM"
      :dark-mode-classes="darkModeClasses"
      :scaling-styles="scalingStyles"
    />

    <DistributionCard
      v-if="config.title === 'Products'"
      title="Brands"
      icon="fas fa-tags"
      icon-color="text-orange-600"
      :distribution="brandDistribution"
      :DESIGN_SYSTEM="DESIGN_SYSTEM"
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
      :DESIGN_SYSTEM="DESIGN_SYSTEM"
      :scaling-styles="scalingStyles"
      @action-click="handleActionClick"
    />
  </div>
</template>
