// useDataTablePagination - Pagination Logic for Data Table
// @version 1.0.0
// @date 29-Sep-2025
// @description Handles pagination logic for data table
import { ref, computed } from 'vue'

export function useDataTablePagination(filteredData, initialState = {}) {
  // Pagination state
  const currentPage = ref(initialState.currentPage || 1)
  const itemsPerPage = ref(initialState.itemsPerPage || 20)

  // Computed pagination
  const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage.value))
  
  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return filteredData.value.slice(start, end)
  })

  // Pagination methods
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  const goToFirstPage = () => {
    currentPage.value = 1
  }

  const goToLastPage = () => {
    currentPage.value = totalPages.value
  }

  const goToNextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  const goToPreviousPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  const setItemsPerPage = (items) => {
    itemsPerPage.value = items
    currentPage.value = 1 // Reset to first page when changing items per page
  }

  // Reset pagination when data changes
  const resetPagination = () => {
    currentPage.value = 1
  }

  return {
    // State
    currentPage,
    itemsPerPage,
    
    // Computed
    totalPages,
    paginatedData,
    
    // Methods
    goToPage,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPreviousPage,
    setItemsPerPage,
    resetPagination
  }
}
