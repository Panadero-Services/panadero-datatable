import { computed, ref } from 'vue'
import { useScaling } from 'panadero-shared-styling'

export function useCommonSnippets() {
  // Get scaling styles
  const { scalingStyles } = useScaling()
  
  // Default settings store (can be overridden by parent)
  const store = ref({
    dark: false,
    fontSize: 14,
    compactLayout: false,
    autoSave: true
  })
  
  // Dark mode classes
  const darkModeClasses = computed(() => {
    const isDark = store.value.dark === true
    return {
      container: isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900',
      card: isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200',
      tableHeader: isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-500',
      tableRow: isDark ? 'hover:bg-gray-700 border-gray-700' : 'hover:bg-gray-50',
      modal: isDark ? 'bg-gray-800' : 'bg-white',
      text: isDark ? 'text-gray-100' : 'text-gray-900',
      textSecondary: isDark ? 'text-gray-400' : 'text-gray-500',
      border: isDark ? 'border-gray-700' : 'border-gray-200',
      input: isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300',
      button: isDark ? 'bg-gray-600 hover:bg-gray-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white',
      buttonSecondary: isDark ? 'bg-gray-500 hover:bg-gray-400 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900',
      iconDanger: isDark ? 'text-red-500' : 'hover:bg-red-300 text-red-600',
      icon: isDark ? 'text-blue-500' : 'hover:bg-blue-300 text-blue-600',
      bgSecondary: isDark ? 'bg-gray-700' : 'bg-gray-100'
    }
  })
  
  // Common computed properties
  const isDark = computed(() => store.value.dark === true)
  const fontSize = computed(() => store.value.fontSize || 14)
  const compactLayout = computed(() => store.value.compactLayout || false)
  
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
    console.log(`[${type.toUpperCase()}] ${message}`)
    
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
  
  const loadSettings = () => {
    // Load settings from localStorage or default values
    const savedSettings = localStorage.getItem('panadero-settings')
    if (savedSettings) {
      try {
        store.value = { ...store.value, ...JSON.parse(savedSettings) }
      } catch (error) {
        console.warn('Failed to load settings:', error)
      }
    }
  }
  
  const saveSettings = () => {
    // Save settings to localStorage
    try {
      localStorage.setItem('panadero-settings', JSON.stringify(store.value))
    } catch (error) {
      console.warn('Failed to save settings:', error)
    }
  }
  
  return {
    // Store
    store,
    
    // Computed
    darkModeClasses,
    isDark,
    fontSize,
    compactLayout,
    
    // Scaling
    scalingStyles,
    
    // Options
    statusOptions,
    typeOptions,
    colorOptions,
    
    // Utility functions
    formatCurrency,
    formatDate,
    formatDateTime,
    confirmAction,
    showNotification,
    loadSettings,
    saveSettings
  }
}
