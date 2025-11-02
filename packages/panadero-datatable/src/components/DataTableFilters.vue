<!--
  DataTableFilters - Filter section with search and dynamic filters
  @version 1.0.15
  @date 01-Nov-2025
  @description Filter component for DataTable with search and dynamic filters
-->
<script setup>
import { ref } from 'vue'
import { FilterSection } from 'panadero-filters'

// Props
const props = defineProps({
  config: { type: Object, required: true },
  darkModeClasses: { type: Object, required: true },
  scalingStyles: { type: Object, required: true },
  DESIGN_SYSTEM: { type: Object, required: true },
  showFilters: { type: Boolean, default: true },
  collapsed: { type: Boolean, default: false },
  searchQuery: { type: String, default: '' },
  filterStates: { type: Object, default: () => ({}) },
  allFilterItems: { type: Object, default: () => ({}) }
})

// Emits
const emit = defineEmits(['update:collapsed', 'update:searchQuery', 'selectFilter', 'clearAllFilters'])

// Event handlers
const toggleCollapsed = () => {
  emit('update:collapsed', !props.collapsed)
}

const updateSearchQuery = (event) => {
  emit('update:searchQuery', event.target.value)
}

const handleSelectFilter = (key, value) => {
  emit('selectFilter', key, value)
}

const handleClearAllFilters = () => {
  emit('clearAllFilters')
}
</script>

<template>
  <div v-if="showFilters && config.filters && config.filters.length > 0" 
       :class="[DESIGN_SYSTEM.card, 'rounded-xl shadow-lg border p-6']">
    <div class="flex items-center justify-between mb-4">
      <h3 :style="scalingStyles.subtitleFontSize" :class="DESIGN_SYSTEM.text.primary" class="font-semibold">
        {{ config.title || 'Data' }} Filters
      </h3>
      <div class="rounded-full p-2" :class="DESIGN_SYSTEM.card">
        <i :class="collapsed ? 'fas fa-chevron-down' : 'fas fa-chevron-up'" 
           :style="scalingStyles.iconSizeSmall"
           class="text-blue-500 dark:text-blue-600 transition-transform duration-200 cursor-pointer hover:opacity-70"
           @click="toggleCollapsed"></i>
      </div>
    </div>

    <!-- Compact Single Row -->
    <div v-if="collapsed" class="flex items-center gap-4 flex-wrap">
      <!-- Dynamic Filters -->
      <div v-for="filter in config.filters" :key="filter.key" class="flex items-center gap-2">
        <span :style="scalingStyles.textFontSize" :class="DESIGN_SYSTEM.text.secondary" class="font-medium text-sm">
          {{ filter.label }}:
        </span>
        <select 
          :value="filterStates[filter.key] || 'all'"
          @change="handleSelectFilter(filter.key, $event.target.value)"
          :style="[scalingStyles.inputPadding, scalingStyles.textFontSize]"
          :class="[DESIGN_SYSTEM.input, 'rounded-lg border-2 focus:border-blue-500 transition-colors min-w-[120px]']"
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
            :value="searchQuery"
            @input="updateSearchQuery"
            type="text"
            :placeholder="`Search ${config.title?.toLowerCase() || 'items'}...`"
            :style="[scalingStyles.inputPadding, scalingStyles.textFontSize]"
            :class="[DESIGN_SYSTEM.input, 'rounded-lg border-2 focus:border-blue-500 transition-colors']"
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
        v-for="filter in config.filters" 
        :key="filter.key"
        :title="`Filter by ${filter.label}`"
        :items="allFilterItems[filter.key]"
        :selected-value="filterStates[filter.key] || 'all'"
        :scaling-styles="scalingStyles"
        :dark-mode-classes="DESIGN_SYSTEM"
        @select="(value) => handleSelectFilter(filter.key, value)"
      />
      <!-- Clear Filters -->
      <div class="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
        <button
          @click="handleClearAllFilters"
          class="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  </div>
</template>
