// useDataTableState - State Management for Data Table
// @version 1.0.0
// @date 29-Sep-2025
// @description Manages reactive state for data table operations
import { ref } from 'vue'

export function useDataTableState() {
  // Core state
  const data = ref([])
  const loading = ref(false)
  const error = ref(null)
  const dropdownData = ref({})
  const searchQuery = ref('')
  const collapsed = ref(true)

  // Pagination state
  const currentPage = ref(1)
  const itemsPerPage = ref(10)
  const totalItems = ref(0)

  // Selection state
  const selectedItems = ref([])
  const selectAll = ref(false)

  // Modal state
  const showCreateModal = ref(false)
  const showEditModal = ref(false)
  const showDeleteModal = ref(false)
  const editingItem = ref(null)

  // Export state
  const isExporting = ref(false)

  return {
    // Core state
    data,
    loading,
    error,
    dropdownData,
    searchQuery,
    collapsed,

    // Pagination state
    currentPage,
    itemsPerPage,
    totalItems,

    // Selection state
    selectedItems,
    selectAll,

    // Modal state
    showCreateModal,
    showEditModal,
    showDeleteModal,
    editingItem,

    // Export state
    isExporting
  }
}
