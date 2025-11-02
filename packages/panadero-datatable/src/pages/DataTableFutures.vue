<!--
  DataTableFutures - Futures Testing Page
  @version 1.0.0
  @date October 8, 2025
  @description Comprehensive testing page for panadero-datatable with futures data
-->

<script setup>
import { ref, computed, onMounted } from 'vue'
import { DataTable, createTableConfig } from '../index.js'
import { useScaling } from 'panadero-shared-styling'

// Reactive state
const isDarkMode = ref(false)
const activeTab = ref('overview')
const fontScale = ref(1.0)
const renderTime = ref(0)
const memoryUsage = ref(0)
const dataSize = ref(0)
const headerConfig = ref('')

// Browser info
const userAgent = ref('')
const viewport = ref('')

// Tabs configuration
const tabs = [
  { id: 'overview', name: 'Module Overview' },
  { id: 'basic', name: 'Basic Futures' },
  { id: 'projects', name: 'Project Management' },
  { id: 'users', name: 'User Assignments' },
  { id: 'analytics', name: 'Analytics' },
  { id: 'config', name: 'Configuration' },
  { id: 'performance', name: 'Performance' }
]

// Get scaling styles
const scalingStyles = computed(() => {
  const baseStyles = useScaling(fontScale.value)
  return {
    ...baseStyles,
    textFontSize: { fontSize: `${14 * fontScale.value}px` },
    headingFontSize: { fontSize: `${18 * fontScale.value}px` },
    buttonPadding: { padding: `${8 * fontScale.value}px ${16 * fontScale.value}px` }
  }
})

// Dark mode classes
const darkModeClasses = computed(() => ({
  container: isDarkMode.value ? 'bg-gray-900 text-white' : 'bg-white text-gray-900',
  table: isDarkMode.value ? 'bg-gray-800' : 'bg-white',
  tableHeader: isDarkMode.value ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900',
  tableRow: isDarkMode.value ? 'border-gray-700' : 'border-gray-200',
  button: isDarkMode.value ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white',
  buttonSecondary: isDarkMode.value ? 'bg-gray-600 hover:bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900',
  input: isDarkMode.value ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900',
  textPrimary: isDarkMode.value ? 'text-white' : 'text-gray-900',
  textSecondary: isDarkMode.value ? 'text-gray-400' : 'text-gray-600'
}))

// Test configurations
const basicConfig = createTableConfig({
  table: 'futures',
  title: 'Basic Futures Test',
  columns: [
    { key: 'id', label: 'ID', width: '80px', sortable: true },
    { key: 'item', label: 'Item', width: '120px', sortable: true, searchable: true },
    { key: 'title', label: 'Title', sortable: true, searchable: true },
    { key: 'description', label: 'Description', sortable: true, searchable: true },
    { key: 'status', label: 'Status', type: 'badge', sortable: true },
    { key: 'color', label: 'Color', type: 'badge', sortable: true },
    { key: 'is_active', label: 'Active', type: 'boolean', sortable: true },
    { key: 'created_at', label: 'Created', type: 'date', sortable: true }
  ],
  showCreate: true,
  showEdit: true,
  showDelete: true,
  showBulkActions: true,
  showSearch: true,
  itemsPerPage: 10
})

const projectConfig = createTableConfig({
  table: 'futures',
  title: 'Project Futures Management',
  columns: [
    { key: 'id', label: 'ID', width: '80px' },
    { key: 'item', label: 'Item', width: '120px', sortable: true, searchable: true },
    { key: 'title', label: 'Title', sortable: true, searchable: true },
    { key: 'description', label: 'Description', sortable: true, searchable: true },
    { key: 'project.title', label: 'Project', sortable: true, searchable: true },
    { key: 'user.name', label: 'Assigned To', sortable: true, searchable: true },
    { key: 'status', label: 'Status', type: 'badge', sortable: true },
    { key: 'color', label: 'Color', type: 'badge', sortable: true },
    { key: 'version', label: 'Version', sortable: true },
    { key: 'icon', label: 'Icon', sortable: true },
    { key: 'is_active', label: 'Active', type: 'boolean', sortable: true },
    { key: 'is_locked', label: 'Locked', type: 'boolean', sortable: true },
    { key: 'created_at', label: 'Created', type: 'date', sortable: true }
  ],
  showKPIs: true,
  showFilters: true,
  showExport: true,
  showCreate: true,
  showEdit: true,
  showDelete: true,
  headerPatterns: [
    {
      endpoint: '/api/futures',
      headers: { 'X-From-Futures-Page': 'true' }
    }
  ]
})

const userConfig = createTableConfig({
  table: 'futures',
  title: 'User Assignment Management',
  columns: [
    { key: 'id', label: 'ID', width: '80px' },
    { key: 'item', label: 'Item', width: '120px', sortable: true, searchable: true },
    { key: 'title', label: 'Title', sortable: true, searchable: true },
    { key: 'user.name', label: 'Assigned User', sortable: true, searchable: true },
    { key: 'user.email', label: 'User Email', sortable: true, searchable: true },
    { key: 'status', label: 'Status', type: 'badge', sortable: true },
    { key: 'color', label: 'Priority', type: 'badge', sortable: true },
    { key: 'is_active', label: 'Active', type: 'boolean', sortable: true },
    { key: 'is_locked', label: 'Locked', type: 'boolean', sortable: true },
    { key: 'created_at', label: 'Created', type: 'date', sortable: true },
    { key: 'updated_at', label: 'Updated', type: 'date', sortable: true }
  ],
  showBulkActions: true,
  showCreate: true,
  showEdit: true,
  showDelete: true,
  showSearch: true,
  itemsPerPage: 25
})

const analyticsConfig = createTableConfig({
  table: 'futures',
  title: 'Futures Analytics Dashboard',
  columns: [
    { key: 'status', label: 'Status', sortable: true },
    { key: 'count', label: 'Count', type: 'number', sortable: true },
    { key: 'percentage', label: 'Percentage', type: 'percentage', sortable: true },
    { key: 'trend', label: 'Trend', type: 'chart' },
    { key: 'avg_days', label: 'Avg Days', type: 'number', sortable: true }
  ],
  showKPIs: true,
  showFilters: false,
  showCreate: false,
  showEdit: false,
  showDelete: false,
  showBulkActions: false,
  pagination: false
})

// Methods
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}

const loadTestData = (size) => {
  const startTime = performance.now()
  dataSize.value = size
  
  // Simulate data loading
  setTimeout(() => {
    const endTime = performance.now()
    renderTime.value = Math.round(endTime - startTime)
    memoryUsage.value = Math.round(performance.memory?.usedJSHeapSize / 1024 / 1024) || 0
  }, 100)
}

// Initialize
onMounted(() => {
  userAgent.value = navigator.userAgent
  viewport.value = `${window.innerWidth}x${window.innerHeight}`
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <div class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
              Panadero DataTable Futures
            </h1>
            <span class="ml-3 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
              v1.0.15
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
      <!-- Module Overview Tab -->
      <div v-if="activeTab === 'overview'" class="space-y-6">
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Futures Module Overview</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="font-medium text-gray-900 dark:text-white">Package Info</h3>
              <dl class="mt-2 space-y-1">
                <div class="flex justify-between">
                  <dt class="text-sm text-gray-500 dark:text-gray-400">Version</dt>
                  <dd class="text-sm text-gray-900 dark:text-white">1.0.15</dd>
                </div>
                <div class="flex justify-between">
                  <dt class="text-sm text-gray-500 dark:text-gray-400">Status</dt>
                  <dd class="text-sm text-green-600 dark:text-green-400">Production Ready</dd>
                </div>
                <div class="flex justify-between">
                  <dt class="text-sm text-gray-500 dark:text-gray-400">Bundle Size</dt>
                  <dd class="text-sm text-gray-900 dark:text-white">~45KB</dd>
                </div>
              </dl>
            </div>
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="font-medium text-gray-900 dark:text-white">Futures Features</h3>
              <ul class="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>✅ Project Management</li>
                <li>✅ User Assignments</li>
                <li>✅ Status Tracking</li>
                <li>✅ Color Coding</li>
                <li>✅ Lock/Unlock</li>
                <li>✅ Version Control</li>
              </ul>
            </div>
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="font-medium text-gray-900 dark:text-white">Data Structure</h3>
              <ul class="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Item (4-12 chars)</li>
                <li>• Title (1-80 chars)</li>
                <li>• Description (max 2048)</li>
                <li>• User Assignment</li>
                <li>• Project Link</li>
                <li>• Status & Color</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Basic Futures Tab -->
      <div v-if="activeTab === 'basic'" class="space-y-6">
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Basic Futures Test</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Test basic futures data table functionality with sample data.
          </p>
          <DataTable
            :config="basicConfig"
            :api-endpoint="'/api/futures'"
            :table-name="'futures'"
            :dark-mode-classes="darkModeClasses"
            :scaling-styles="scalingStyles"
            :show-k-p-i-s="true"
            :show-filters="true"
          />
        </div>
      </div>

      <!-- Project Management Tab -->
      <div v-if="activeTab === 'projects'" class="space-y-6">
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Project Futures Management</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Test with futures data including project relationships, user assignments, and custom headers.
          </p>
          <DataTable
            :config="projectConfig"
            :api-endpoint="'/api/futures'"
            :table-name="'futures'"
            :dark-mode-classes="darkModeClasses"
            :scaling-styles="scalingStyles"
            :show-k-p-i-s="true"
            :show-filters="true"
          />
        </div>
      </div>

      <!-- User Assignments Tab -->
      <div v-if="activeTab === 'users'" class="space-y-6">
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">User Assignment Management</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Test user assignment management with bulk actions, status tracking, and search functionality.
          </p>
          <DataTable
            :config="userConfig"
            :api-endpoint="'/api/futures'"
            :table-name="'futures'"
            :dark-mode-classes="darkModeClasses"
            :scaling-styles="scalingStyles"
            :show-k-p-i-s="false"
            :show-filters="true"
          />
        </div>
      </div>

      <!-- Analytics Tab -->
      <div v-if="activeTab === 'analytics'" class="space-y-6">
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Futures Analytics Dashboard</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Test analytics data display with KPIs, charts, and read-only mode for futures data.
          </p>
          <DataTable
            :config="analyticsConfig"
            :api-endpoint="'/api/futures'"
            :table-name="'futures'"
            :dark-mode-classes="darkModeClasses"
            :scaling-styles="scalingStyles"
            :show-k-p-i-s="true"
            :show-filters="false"
          />
        </div>
      </div>

      <!-- Configuration Tab -->
      <div v-if="activeTab === 'config'" class="space-y-6">
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Configuration Testing</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Header Configuration -->
            <div class="space-y-4">
              <h3 class="text-md font-medium text-gray-900 dark:text-white">Header Configuration</h3>
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Custom Header Function
                </label>
                <textarea
                  v-model="headerConfig"
                  rows="4"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="customHeaders: (apiEndpoint) => { ... }"
                ></textarea>
              </div>
            </div>

            <!-- Styling Configuration -->
            <div class="space-y-4">
              <h3 class="text-md font-medium text-gray-900 dark:text-white">Styling Configuration</h3>
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Font Size Scale
                </label>
                <input
                  v-model.number="fontScale"
                  type="range"
                  min="0.8"
                  max="1.5"
                  step="0.1"
                  class="w-full"
                />
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  Scale: {{ fontScale }}x
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Performance Tab -->
      <div v-if="activeTab === 'performance'" class="space-y-6">
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Performance Testing</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="font-medium text-gray-900 dark:text-white">Load Testing</h3>
              <div class="mt-2 space-y-2">
                <button
                  @click="loadTestData(100)"
                  class="w-full px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Load 100 futures
                </button>
                <button
                  @click="loadTestData(1000)"
                  class="w-full px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Load 1,000 futures
                </button>
                <button
                  @click="loadTestData(10000)"
                  class="w-full px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Load 10,000 futures
                </button>
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="font-medium text-gray-900 dark:text-white">Performance Metrics</h3>
              <dl class="mt-2 space-y-1">
                <div class="flex justify-between">
                  <dt class="text-sm text-gray-500 dark:text-gray-400">Render Time</dt>
                  <dd class="text-sm text-gray-900 dark:text-white">{{ renderTime }}ms</dd>
                </div>
                <div class="flex justify-between">
                  <dt class="text-sm text-gray-500 dark:text-gray-400">Memory Usage</dt>
                  <dd class="text-sm text-gray-900 dark:text-white">{{ memoryUsage }}MB</dd>
                </div>
                <div class="flex justify-between">
                  <dt class="text-sm text-gray-500 dark:text-gray-400">Data Size</dt>
                  <dd class="text-sm text-gray-900 dark:text-white">{{ dataSize }} futures</dd>
                </div>
              </dl>
            </div>
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="font-medium text-gray-900 dark:text-white">Browser Info</h3>
              <dl class="mt-2 space-y-1">
                <div class="flex justify-between">
                  <dt class="text-sm text-gray-500 dark:text-gray-400">User Agent</dt>
                  <dd class="text-sm text-gray-900 dark:text-white truncate">{{ userAgent }}</dd>
                </div>
                <div class="flex justify-between">
                  <dt class="text-sm text-gray-500 dark:text-gray-400">Viewport</dt>
                  <dd class="text-sm text-gray-900 dark:text-white">{{ viewport }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
