import { computed, inject } from 'vue'
// REMOVE THIS: import { useScaling } from 'panadero-shared-styling'

export function useCommonSnippets() {
  // Get settings store from parent (same pattern as inventory package)
  const settingsStore = inject('settingsStore', { 
    dark: false, 
    fontSize: 14,
    compactLayout: false,
    autoSave: true
  })
  
  // INJECT scaling styles from parent (provided by parent wrapper)
  const scalingStyles = inject('scalingStyles', {})
  
  // INJECT design system from parent (provided by parent wrapper)
  const designSystem = inject('designSystem', {})
  
  // Remove darkModeClasses - use designSystem instead
  
  // Common computed properties
  const isDark = computed(() => settingsStore.dark === true)
  const fontSize = computed(() => settingsStore.fontSize || 14)
  const compactLayout = computed(() => settingsStore.compactLayout || false)
  
  // Status options
  const statusOptions = [
    { value: 'active', label: 'Active', color: 'text-green-600' },
    { value: 'inactive', label: 'Inactive', color: 'text-gray-500' },
    { value: 'pending', label: 'Pending', color: 'text-yellow-600' },
    { value: 'suspended', label: 'Suspended', color: 'text-red-600' }
  ]
  
  // Type options
  const typeOptions = [
    { value: 'normal', label: 'Normal', color: 'text-blue-600' },
    { value: 'bulk', label: 'Bulk', color: 'text-green-600' },
    { value: 'service', label: 'Service', color: 'text-purple-600' },
    { value: 'raw', label: 'Raw Material', color: 'text-orange-600' }
  ]
  
  // Color options
  const colorOptions = [
    { value: 'blue', label: 'Blue', color: 'text-blue-600' },
    { value: 'green', label: 'Green', color: 'text-green-600' },
    { value: 'red', label: 'Red', color: 'text-red-600' },
    { value: 'yellow', label: 'Yellow', color: 'text-yellow-600' },
    { value: 'purple', label: 'Purple', color: 'text-purple-600' },
    { value: 'orange', label: 'Orange', color: 'text-orange-600' }
  ]
  
  // Utility functions
  const formatCurrency = (amount, currency = 'USD') => {
    if (typeof amount !== 'number') return '$0.00'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount)
  }
  
  const formatDate = (date) => {
    if (!date) return ''
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
  
  const formatDateTime = (date) => {
    if (!date) return ''
    return new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }
  
  const confirmAction = (message) => {
    return window.confirm(message)
  }
  
  const showNotification = (message, type = 'info') => {
    // Simple notification - can be enhanced with a proper notification system
    console.debug(`[${type.toUpperCase()}] ${message}`)
    
    // Create a simple toast notification
    const toast = document.createElement('div')
    toast.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
      type === 'success' ? 'bg-green-500 text-white' :
      type === 'error' ? 'bg-red-500 text-white' :
      type === 'warning' ? 'bg-yellow-500 text-black' :
      'bg-blue-500 text-white'
    }`
    toast.textContent = message
    document.body.appendChild(toast)
    
    // Remove after 3 seconds
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 3000)
  }
  
  return {
    // Store
    settingsStore,
    
    // Computed
    isDark,
    fontSize,
    compactLayout,
    
    // Injected from parent
    scalingStyles,
    designSystem,
    
    // Options
    statusOptions,
    typeOptions,
    colorOptions,
    
    // Utility functions
    formatCurrency,
    formatDate,
    formatDateTime,
    confirmAction,
    showNotification
  }
}