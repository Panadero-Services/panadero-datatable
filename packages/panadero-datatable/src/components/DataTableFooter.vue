<!--
  DataTableFooter - Pagination footer for DataTable
  @version 1.0.0
  @date 29-Sep-2025
  @description Footer component for DataTable with pagination controls
-->
<script setup>
// Props
const props = defineProps({
  darkModeClasses: { type: Object, required: true },
  scalingStyles: { type: Object, required: true },
  DESIGN_SYSTEM: { type: Object, required: true },
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
  itemsPerPage: { type: Number, required: true },
  filteredDataLength: { type: Number, required: true },
  showItemsPerPage: { type: Boolean, default: true }
})

// Emits
const emit = defineEmits(['goToPage', 'changeItemsPerPage'])

// Event handlers
const handleGoToPage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('goToPage', page)
  }
}

const handleItemsPerPageChange = (event) => {
  const newItemsPerPage = parseInt(event.target.value)
  emit('changeItemsPerPage', newItemsPerPage)
}

// Items per page options
const itemsPerPageOptions = [10, 20, 50, 100]

// Computed
const startItem = () => (props.currentPage - 1) * props.itemsPerPage + 1
const endItem = () => Math.min(props.currentPage * props.itemsPerPage, props.filteredDataLength)

// Smart page number calculation
const getPageNumbers = () => {
  const { currentPage, totalPages } = props
  
  if (totalPages <= 7) {
    // Show all pages if 7 or fewer
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }
  
  const pages = []
  const showEllipsis = totalPages > 7
  
  if (currentPage <= 4) {
    // Show first 5 pages + ellipsis + last page
    for (let i = 1; i <= 5; i++) {
      pages.push(i)
    }
  } else if (currentPage >= totalPages - 3) {
    // Show first page + ellipsis + last 5 pages
    pages.push(1)
    for (let i = totalPages - 4; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    // Show first page + ellipsis + current-1, current, current+1 + ellipsis + last page
    pages.push(1)
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      pages.push(i)
    }
  }
  
  return pages
}
</script>

<template>
  <div :class="DESIGN_SYSTEM.container" class="mt-6 px-4 py-3 border-t">
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
      <!-- Results Info and Items Per Page -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <!-- Results Info -->
        <div class="flex items-center gap-2">
          <span :style="scalingStyles.textFontSize" :class="DESIGN_SYSTEM.text.secondary">
            Showing
          </span>
          <span :style="scalingStyles.textFontSize" :class="DESIGN_SYSTEM.text.primary" class="font-medium">
            {{ startItem() }}-{{ endItem() }}
          </span>
          <span :style="scalingStyles.textFontSize" :class="DESIGN_SYSTEM.text.secondary">
            of
          </span>
          <span :style="scalingStyles.textFontSize" :class="DESIGN_SYSTEM.text.primary" class="font-medium">
            {{ filteredDataLength }}
          </span>
          <span :style="scalingStyles.textFontSize" :class="DESIGN_SYSTEM.text.secondary">
            results
          </span>
        </div>

        <!-- Items Per Page Selector -->
        <div v-if="showItemsPerPage" class="flex items-center gap-2">
          <span :style="scalingStyles.textFontSize" :class="DESIGN_SYSTEM.text.secondary">
            Show:
          </span>
          <select
            :value="itemsPerPage"
            @change="handleItemsPerPageChange"
            :style="scalingStyles.textFontSize"
            :class="[DESIGN_SYSTEM.input, 'px-2 py-1 rounded border focus:ring-2 focus:ring-blue-500 focus:border-transparent']"
          >
            <option
              v-for="option in itemsPerPageOptions"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
          <span :style="scalingStyles.textFontSize" :class="DESIGN_SYSTEM.text.secondary">
            per page
          </span>
        </div>
      </div>

      <!-- Pagination Controls -->
      <div class="flex items-center gap-1">
        <!-- First Page -->
        <button
          v-if="totalPages > 1 && currentPage > 3"
          :style="[scalingStyles.textFontSize, scalingStyles.buttonPadding]"
          @click="handleGoToPage(1)"
          :class="[DESIGN_SYSTEM.button.secondary, 'px-2 py-1 rounded-md hover:bg-opacity-80 transition-colors']"
          title="First page"
        >
          ««
        </button>

        <!-- Previous Page -->
        <button
          :style="[scalingStyles.textFontSize, scalingStyles.buttonPadding]"
          @click="handleGoToPage(currentPage - 1)"
          :disabled="currentPage === 1"
          :class="[DESIGN_SYSTEM.button.secondary, 'px-3 py-1 rounded-md hover:bg-opacity-80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed']"
          title="Previous page"
        >
          ‹
        </button>

        <!-- Page Numbers -->
        <div class="flex items-center gap-1">
          <!-- Show ellipsis if needed -->
          <span 
            v-if="currentPage > 4 && totalPages > 7"
          :style="[scalingStyles.textFontSize, scalingStyles.buttonPadding]"
            :class="DESIGN_SYSTEM.text.secondary"
            class="px-2"
          >
            ...
          </span>

          <!-- Page numbers with smart range -->
          <button
            v-for="page in getPageNumbers()"
            :key="page"
          :style="[scalingStyles.textFontSize, scalingStyles.buttonPadding]"
            @click="handleGoToPage(page)"
            :class="[
              page === currentPage
                ? [DESIGN_SYSTEM.button.primary, 'shadow-sm']
                : [DESIGN_SYSTEM.button.secondary, 'hover:bg-opacity-80'],
              'px-3 py-1 rounded-md transition-colors font-medium'
            ]"
          >
            {{ page }}
          </button>

          <!-- Show ellipsis if needed -->
          <span 
            v-if="currentPage < totalPages - 3 && totalPages > 7"
          :style="[scalingStyles.textFontSize, scalingStyles.buttonPadding]"
            :class="DESIGN_SYSTEM.text.secondary"
            class="px-2"
          >
            ...
          </span>
        </div>

        <!-- Next Page -->
        <button
          :style="[scalingStyles.textFontSize, scalingStyles.buttonPadding]"
          @click="handleGoToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          :class="[DESIGN_SYSTEM.button.secondary, 'px-3 py-1 rounded-md hover:bg-opacity-80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed']"
          title="Next page"
        >
          ›
        </button>

        <!-- Last Page -->
        <button
          v-if="totalPages > 1 && currentPage < totalPages - 2"
          :style="[scalingStyles.textFontSize, scalingStyles.buttonPadding]"
          @click="handleGoToPage(totalPages)"
          :class="[DESIGN_SYSTEM.button.secondary, 'px-2 py-1 rounded-md hover:bg-opacity-80 transition-colors']"
          title="Last page"
        >
          »»
        </button>
      </div>
    </div>

    <!-- Page Info for Mobile -->
    <div class="mt-2 sm:hidden text-center">
      <span 
        :style="scalingStyles.smallFontSize" 
        :class="DESIGN_SYSTEM.text.secondary"
      >
        Page {{ currentPage }} of {{ totalPages }}
      </span>
    </div>
  </div>
</template>
