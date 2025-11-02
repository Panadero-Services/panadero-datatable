<template>
  <div class="real-test-page">
    <!-- Header -->
    <div class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
              Panadero DataTable - Real Database Testing
            </h1>
            <span class="ml-3 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
              v1.0.14
            </span>
          </div>
          <div class="flex items-center space-x-4">
            <button
              @click="toggleDarkMode"
              class="p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path v-if="!isDarkMode" fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                <path v-else fill-rule="evenodd" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex space-x-8">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
            ]"
          >
            {{ tab.name }}
          </button>
        </nav>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- ERP Products Tab -->
      <div v-if="activeTab === 'products'" class="space-y-6">
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">ERP Products - Real DataTable Component</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Testing the actual DataTable component with real ERP Products data from your database.
          </p>
          
          <!-- Real DataTable Component -->
          <DataTable 
            v-if="productsConfig && !error"
            :config="productsConfig"
            :api-endpoint="'/api/erp_products'"
            :table-name="'erp_products'"
            :dark-mode-classes="darkModeClasses"
            :scaling-styles="scalingStyles"
            :show-k-p-i-s="true"
            :show-filters="true"
          />
          
          <div v-else-if="error" class="text-center py-8">
            <div class="text-red-600 dark:text-red-400 mb-4">{{ error }}</div>
            <button @click="loadProductsConfig" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Retry
            </button>
          </div>
          
          <div v-else class="text-center py-8">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <div class="mt-2 text-gray-600 dark:text-gray-400">Loading configuration...</div>
          </div>
        </div>
      </div>

      <!-- ERP Storages Tab -->
      <div v-if="activeTab === 'storages'" class="space-y-6">
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">ERP Storages - Real DataTable Component</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Testing the actual DataTable component with real ERP Storages data from your database.
          </p>
          
          <!-- Real DataTable Component -->
          <DataTable 
            v-if="storagesConfig && !error"
            :config="storagesConfig"
            :api-endpoint="'/api/erp_storages'"
            :table-name="'erp_storages'"
            :dark-mode-classes="darkModeClasses"
            :scaling-styles="scalingStyles"
            :show-k-p-i-s="true"
            :show-filters="true"
          />
          
          <div v-else-if="error" class="text-center py-8">
            <div class="text-red-600 dark:text-red-400 mb-4">{{ error }}</div>
            <button @click="loadStoragesConfig" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Retry
            </button>
          </div>
          
          <div v-else class="text-center py-8">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <div class="mt-2 text-gray-600 dark:text-gray-400">Loading configuration...</div>
          </div>
        </div>
      </div>

      <!-- ERP Customers Tab -->
      <div v-if="activeTab === 'customers'" class="space-y-6">
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">ERP Customers - Real DataTable Component</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Testing the actual DataTable component with real ERP Customers data from your database.
          </p>
          
          <!-- Real DataTable Component -->
          <DataTable 
            v-if="customersConfig && !error"
            :config="customersConfig"
            :api-endpoint="'/api/erp_customers'"
            :table-name="'erp_customers'"
            :dark-mode-classes="darkModeClasses"
            :scaling-styles="scalingStyles"
            :show-k-p-i-s="true"
            :show-filters="true"
          />
          
          <div v-else-if="error" class="text-center py-8">
            <div class="text-red-600 dark:text-red-400 mb-4">{{ error }}</div>
            <button @click="loadCustomersConfig" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Retry
            </button>
          </div>
          
          <div v-else class="text-center py-8">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <div class="mt-2 text-gray-600 dark:text-gray-400">Loading configuration...</div>
          </div>
        </div>
      </div>

      <!-- Futures Tab -->
      <div v-if="activeTab === 'futures'" class="space-y-6">
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Futures - Real DataTable Component</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Testing the actual DataTable component with real Futures data from your database.
          </p>
          
          <!-- Real DataTable Component -->
          <DataTable 
            v-if="futuresConfig && !error"
            :config="futuresConfig"
            :api-endpoint="'/api/futures'"
            :table-name="'futures'"
            :dark-mode-classes="darkModeClasses"
            :scaling-styles="scalingStyles"
            :show-k-p-i-s="true"
            :show-filters="true"
          />
          
          <div v-else-if="error" class="text-center py-8">
            <div class="text-red-600 dark:text-red-400 mb-4">{{ error }}</div>
            <button @click="loadFuturesConfig" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Retry
            </button>
          </div>
          
          <div v-else class="text-center py-8">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <div class="mt-2 text-gray-600 dark:text-gray-400">Loading configuration...</div>
          </div>
        </div>
      </div>

      <!-- API Testing Tab -->
      <div v-if="activeTab === 'api'" class="space-y-6">
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">API Testing & Debug</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Test API endpoints and see real-time responses from your database.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h3 class="text-md font-medium text-gray-900 dark:text-white">Available Endpoints</h3>
              <div class="space-y-2">
                <button @click="testEndpoint('/api/erp_products')" class="w-full text-left px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800">
                  GET /api/erp_products
                </button>
                <button @click="testEndpoint('/api/erp_storages')" class="w-full text-left px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800">
                  GET /api/erp_storages
                </button>
                <button @click="testEndpoint('/api/erp_customers')" class="w-full text-left px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800">
                  GET /api/erp_customers
                </button>
                <button @click="testEndpoint('/api/erp_suppliers')" class="w-full text-left px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800">
                  GET /api/erp_suppliers
                </button>
                <button @click="testEndpoint('/api/futures')" class="w-full text-left px-4 py-2 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-md hover:bg-purple-100 dark:hover:bg-purple-800">
                  GET /api/futures
                </button>
                <button @click="testEndpoint('/api/model-config/erp_products')" class="w-full text-left px-4 py-2 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-md hover:bg-green-100 dark:hover:bg-green-800">
                  GET /api/model-config/erp_products
                </button>
              </div>
            </div>
            
            <div class="space-y-4">
              <h3 class="text-md font-medium text-gray-900 dark:text-white">API Response</h3>
              <div class="bg-gray-100 dark:bg-gray-700 rounded-md p-4 max-h-96 overflow-y-auto">
                <pre class="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{{ apiResponse }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { DataTable } from 'panadero-datatable'
import { useScaling } from 'panadero-shared-styling'
import axios from 'axios'

// Reactive state
const isDarkMode = ref(false)
const activeTab = ref('products')
const error = ref(null)
const apiResponse = ref('Click an endpoint to test...')

// Configurations
const productsConfig = ref(null)
const storagesConfig = ref(null)
const customersConfig = ref(null)
const futuresConfig = ref(null)

// Tabs configuration
const tabs = [
  { id: 'products', name: 'ERP Products' },
  { id: 'storages', name: 'ERP Storages' },
  { id: 'customers', name: 'ERP Customers' },
  { id: 'futures', name: 'Futures' },
  { id: 'api', name: 'API Testing' }
]

// Styling
const { scalingStyles } = useScaling(16) // Default font size

const darkModeClasses = computed(() => ({
  container: isDarkMode.value ? 'dark' : '',
  textPrimary: isDarkMode.value ? 'text-white' : 'text-gray-900',
  textSecondary: isDarkMode.value ? 'text-gray-300' : 'text-gray-600',
  button: isDarkMode.value ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white',
  buttonSecondary: isDarkMode.value ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700',
  input: isDarkMode.value ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300',
  table: isDarkMode.value ? 'bg-gray-800' : 'bg-white',
  tableHeader: isDarkMode.value ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-500',
  tableRow: isDarkMode.value ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
}))

// Methods
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

const loadProductsConfig = async () => {
  try {
    error.value = null
    const response = await axios.get('/api/model-config/erp_products')
    productsConfig.value = {
      columns: [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'name', label: 'Name', sortable: true },
        { key: 'sku', label: 'SKU', sortable: true },
        { key: 'price', label: 'Price', sortable: true },
        { key: 'is_active', label: 'Status', sortable: true }
      ],
      ...response.data
    }
    console.debug('Products config loaded:', productsConfig.value)
  } catch (err) {
    error.value = `Failed to load products configuration: ${err.message}`
    console.error('Error loading products config:', err)
  }
}

const loadStoragesConfig = async () => {
  try {
    error.value = null
    const response = await axios.get('/api/model-config/erp_storages')
    storagesConfig.value = {
      columns: [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'name', label: 'Name', sortable: true },
        { key: 'type', label: 'Type', sortable: true },
        { key: 'location', label: 'Location', sortable: true },
        { key: 'is_active', label: 'Status', sortable: true }
      ],
      ...response.data
    }
    console.debug('Storages config loaded:', storagesConfig.value)
  } catch (err) {
    error.value = `Failed to load storages configuration: ${err.message}`
    console.error('Error loading storages config:', err)
  }
}

const loadCustomersConfig = async () => {
  try {
    error.value = null
    const response = await axios.get('/api/model-config/erp_customers')
    customersConfig.value = {
      columns: [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'name', label: 'Name', sortable: true },
        { key: 'email', label: 'Email', sortable: true },
        { key: 'phone', label: 'Phone', sortable: true },
        { key: 'is_active', label: 'Status', sortable: true }
      ],
      ...response.data
    }
    console.debug('Customers config loaded:', customersConfig.value)
  } catch (err) {
    error.value = `Failed to load customers configuration: ${err.message}`
    console.error('Error loading customers config:', err)
  }
}

const loadFuturesConfig = async () => {
  try {
    error.value = null
    const response = await axios.get('/api/model-config/futures')
    futuresConfig.value = {
      columns: [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'item', label: 'Item', sortable: true },
        { key: 'title', label: 'Title', sortable: true },
        { key: 'status', label: 'Status', sortable: true },
        { key: 'version', label: 'Version', sortable: true },
        { key: 'is_active', label: 'Active', sortable: true }
      ],
      ...response.data
    }
    console.debug('Futures config loaded:', futuresConfig.value)
  } catch (err) {
    error.value = `Failed to load futures configuration: ${err.message}`
    console.error('Error loading futures config:', err)
  }
}

const testEndpoint = async (endpoint) => {
  try {
    const response = await axios.get(endpoint)
    apiResponse.value = JSON.stringify(response.data, null, 2)
    console.debug('API Response:', response.data)
  } catch (err) {
    apiResponse.value = `Error: ${err.message}\n${JSON.stringify(err.response?.data, null, 2)}`
    console.error('API Error:', err)
  }
}

// Initialize
onMounted(() => {
  loadProductsConfig()
})
</script>

<style scoped>
.real-test-page {
  min-height: 100vh;
  background-color: #f9fafb;
}

.dark .real-test-page {
  background-color: #111827;
}
</style>
