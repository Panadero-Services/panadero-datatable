<!--
  DataTable InfoBoard Component
  @version 1.0.15
  @date 01-Nov-2025
  @description Info board component for DataTable features
-->
<script setup>
import { computed, inject } from 'vue';

const props = defineProps({
  datatableStore: { type: Object, required: true }
});

const emit = defineEmits(['tab-change']);

const scalingStyles = inject('scalingStyles');
const designSystem = inject('designSystem');

// DataTable-specific stats
const stats = computed(() => ({
  totalTables: 0,
  activeConnections: 0,
  dataProcessed: '0',
  uptime: '100%'
}));
</script>

<template>
  <div class="generic-info-section">
    <!-- Info Boxes Grid -->
    <div class="grid grid-cols-12 gap-6 mt-0 text-black dark:text-white">
      <!-- Module Description Info Box -->
      <div class="col-span-6 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
        <div class="mb-4">
          <h3 :style="scalingStyles.subtitleFontSize" class="font-semibold text-gray-900 dark:text-white">
            DataTable Management System
          </h3>
          <p :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-400">
            Business data management and table automation
          </p>
        </div>
        
        <div class="space-y-3">
          <div class="p-3 rounded-md border dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
            <div :style="scalingStyles.subtitleFontSize" class="mt-2 text-blue-700 dark:text-blue-400">
              DataTable Management Module v1.0.15 (0 records)
            </div>
          </div>
        </div>
      </div>

      <!-- Version Updates Info Box -->
      <div class="col-span-6 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
        <div class="mb-4">
          <p :style="scalingStyles.subtitleFontSize" class="font-semibold text-gray-900 dark:text-white">Version Updates</p>
          <p :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-400">Recent updates and new features</p>
        </div>
        
        <div class="overflow-scroll">
          <div class="gap-3 flex">
            <div class="p-3 rounded-md border dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
              <div class="flex items-center justify-between w-48">
                <div>
                  <div :style="scalingStyles.subtitleFontSize" class="font-medium text-gray-900 dark:text-white">v1.0.15</div>
                  <div :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-400">01 Nov 2025</div>
                </div>
                <div :style="scalingStyles.smallFontSize" class="text-gray-400 dark:text-gray-500">8 features</div>
              </div>
            </div>
            <div class="p-3 rounded-md border dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
              <div class="flex items-center justify-between w-48">
                <div>
                  <div :style="scalingStyles.subtitleFontSize" class="font-medium text-gray-900 dark:text-white">v1.0.14</div>
                  <div :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-400">08 Oct 2025</div>
                </div>
                <div :style="scalingStyles.smallFontSize" class="text-gray-400 dark:text-gray-500">12 features</div>
              </div>
            </div>
            <div class="p-3 rounded-md border dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
              <div class="flex items-center justify-between w-48">
                <div>
                  <div :style="scalingStyles.subtitleFontSize" class="font-medium text-gray-900 dark:text-white">v1.0.13</div>
                  <div :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-400">07 Oct 2025</div>
                </div>
                <div :style="scalingStyles.smallFontSize" class="text-gray-400 dark:text-gray-500">10 features</div>
              </div>
            </div>
            <div class="p-3 rounded-md border dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
              <div class="flex items-center justify-between w-48">
                <div>
                  <div :style="scalingStyles.subtitleFontSize" class="font-medium text-gray-900 dark:text-white">v1.0.12</div>
                  <div :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-400">06 Oct 2025</div>
                </div>
                <div :style="scalingStyles.smallFontSize" class="text-gray-400 dark:text-gray-500">8 features</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- What's in the Package? Info Box -->
      <div class="col-span-12 lg:col-span-6 xl:col-span-4">
        <div class="col-span-6 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
          <div class="mb-4">
            <h3 :style="scalingStyles.subtitleFontSize" class="font-semibold text-gray-900 dark:text-white">What's in the Package?</h3>
          </div>
          <div class="space-y-3">
            <div class="p-3 rounded-md border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 h-80 overflow-scroll">
              <!-- Module description -->
              <div class="mb-6">
                <p :style="scalingStyles.subtitleFontSize" class="text-gray-700 dark:text-gray-200 mb-1 font-bold">
                  Data Tables <span :style="scalingStyles.smallFontSize" class="ml-8 text-gray-500 dark:text-gray-400">0 Total</span> 
                </p>
                <ul :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-300 list-disc ml-5 space-y-1">
                  <li>Active data tables</li>
                  <li>Real-time data binding</li>
                  <li>CRUD operations</li>
                  <li>Live updates</li>
                </ul>
              </div>
              <div class="mb-6">
                <p :style="scalingStyles.subtitleFontSize" class="text-gray-700 dark:text-gray-200 mb-1 font-bold">
                  Data Sources <span :style="scalingStyles.smallFontSize" class="ml-8 text-gray-500 dark:text-gray-400">0 Total</span> 
                </p>
                <ul :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-300 list-disc ml-5 space-y-1">
                  <li>API endpoints</li>
                  <li>Database tables</li>
                  <li>External sources</li>
                  <li>Real-time sync</li>
                </ul>
              </div>
              <div class="mb-6">
                <p :style="scalingStyles.subtitleFontSize" class="text-gray-700 dark:text-gray-200 mb-1 font-bold">
                  Analytics <span :style="scalingStyles.smallFontSize" class="ml-8 text-gray-500 dark:text-gray-400">0 Total</span> 
                </p>
                <ul :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-300 list-disc ml-5 space-y-1">
                  <li>KPI calculations</li>
                  <li>Data distribution</li>
                  <li>Export functions</li>
                  <li>Performance metrics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- What's New? Info Box -->
      <div class="col-span-12 lg:col-span-6 xl:col-span-4">
        <div class="col-span-6 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
          <div class="mb-4">
            <h3 :style="scalingStyles.subtitleFontSize" class="font-semibold text-gray-900 dark:text-white">What's New?</h3>
          </div>
          <div class="space-y-3">
            <div class="p-3 rounded-md border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 h-80 overflow-scroll">
              <!-- Version updates -->
              <div class="mb-6">
                <p :style="scalingStyles.subtitleFontSize" class="text-gray-700 dark:text-gray-200 mb-1 font-bold">
                  v1.0.15 <span :style="scalingStyles.smallFontSize" class="ml-16 text-gray-500 dark:text-gray-400">01 Nov 2025</span> 
                </p>
                <ul :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-300 list-disc ml-5 space-y-1">
                  <li>Reactive Scaling Fix - Removed optional chaining to fix reactivity tracking</li>
                  <li>Injection Pattern - Migrated from props to provide/inject for designSystem and scalingStyles</li>
                  <li>DataTableWrapper Alignment - Matched InventoryWrapper pattern exactly</li>
                  <li>Dynamic Styling - All components now properly reactive to font size changes</li>
                  <li>DataTableNavigation - Fixed scalingStyles injection and direct property access</li>
                  <li>DataTableDashboard - Removed DESIGN_SYSTEM prop, uses injected designSystem</li>
                  <li>DataTableDemo - Updated to use injected objects instead of props</li>
                  <li>Package Dependencies - Added panadero-shared-styling to dependencies</li>
                </ul>
              </div>
              <div class="mb-6">
                <p :style="scalingStyles.subtitleFontSize" class="text-gray-700 dark:text-gray-200 mb-1 font-bold">
                  v1.0.14 <span :style="scalingStyles.smallFontSize" class="ml-16 text-gray-500 dark:text-gray-400">08 Oct 2025</span> 
                </p>
                <ul :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-300 list-disc ml-5 space-y-1">
                  <li>DataTableWrapper v1.1.0 - Complete refactoring following Workflow pattern</li>
                  <li>DataTableLayout v1.0.0 - Identical layout structure to WorkflowLayout</li>
                  <li>DataTableNavigation v1.0.0 - Exact same tab styling and behavior</li>
                  <li>InfoBoard v1.0.0 - DataTable-specific content with version updates</li>
                  <li>DataTableDashboard v1.0.0 - Live DataTable integration with real API endpoints</li>
                  <li>DataTableDemo v1.0.0 - Interactive demo with multiple table configurations</li>
                  <li>useDataTableStore v1.0.0 - Pinia store following Workflow pattern</li>
                  <li>Component Architecture - Modular components with proper separation</li>
                  <li>Scaling Integration - useScaling composable integration</li>
                  <li>Package Structure - Complete package organization</li>
                  <li>Feature Parity - Exact same layout and tabs as Workflow</li>
                  <li>Error Resolution - Fixed scalingStyles prop passing issues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dependencies Info box -->
      <div class="col-span-12 lg:col-span-6 xl:col-span-4">
        <div class="col-span-6 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
          <div class="mb-4">
            <h3 :style="scalingStyles.subtitleFontSize" class="font-semibold text-gray-900 dark:text-white">Dependencies</h3>
          </div>
          <div class="space-y-3">
            <div class="p-3 rounded-md border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 h-80 overflow-scroll">
              <!-- Package Tables -->
              <div>
                <p :style="scalingStyles.subtitleFontSize" class="text-gray-700 dark:text-gray-200 mb-3 font-bold">
                  Package Tables <span :style="scalingStyles.smallFontSize" class="ml-8 text-gray-500 dark:text-gray-400">5 Tables</span>
                </p>

                <div class="space-y-2 mb-4">
                  <div class="grid grid-cols-2 gap-x-6 gap-y-2">
                    <button class="w-full text-left rounded transition-colors cursor-pointer border dark:border-gray-500 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 text-blue-700 dark:text-blue-300 p-2">
                      <div class="flex items-center justify-between">
                        <span :style="scalingStyles.textFontSize" class="font-medium">erp products</span>
                        <i :style="scalingStyles.iconSizeSmall" class="fas fa-table"></i>
                      </div>
                      <span :style="scalingStyles.smallFontSize">0 recs • never</span>
                    </button>
                    <button class="w-full text-left rounded transition-colors cursor-pointer border dark:border-gray-500 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 text-blue-700 dark:text-blue-300 p-2">
                      <div class="flex items-center justify-between">
                        <span :style="scalingStyles.textFontSize" class="font-medium">erp storages</span>
                        <i :style="scalingStyles.iconSizeSmall" class="fas fa-table"></i>
                      </div>
                      <span :style="scalingStyles.smallFontSize">0 recs • never</span>
                    </button>
                    <button class="w-full text-left rounded transition-colors cursor-pointer border dark:border-gray-500 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 text-blue-700 dark:text-blue-300 p-2">
                      <div class="flex items-center justify-between">
                        <span :style="scalingStyles.textFontSize" class="font-medium">erp customers</span>
                        <i :style="scalingStyles.iconSizeSmall" class="fas fa-table"></i>
                      </div>
                      <span :style="scalingStyles.smallFontSize">0 recs • never</span>
                    </button>
                    <button class="w-full text-left rounded transition-colors cursor-pointer border dark:border-gray-500 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 text-blue-700 dark:text-blue-300 p-2">
                      <div class="flex items-center justify-between">
                        <span :style="scalingStyles.textFontSize" class="font-medium">erp suppliers</span>
                        <i :style="scalingStyles.iconSizeSmall" class="fas fa-table"></i>
                      </div>
                      <span :style="scalingStyles.smallFontSize">0 recs • never</span>
                    </button>
                    <button class="w-full text-left rounded transition-colors cursor-pointer border dark:border-gray-500 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 text-blue-700 dark:text-blue-300 p-2">
                      <div class="flex items-center justify-between">
                        <span :style="scalingStyles.textFontSize" class="font-medium">futures</span>
                        <i :style="scalingStyles.iconSizeSmall" class="fas fa-table"></i>
                      </div>
                      <span :style="scalingStyles.smallFontSize">0 recs • never</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Framework Shared Entities -->
              <div>
                <p :style="scalingStyles.subtitleFontSize" class="text-gray-700 dark:text-gray-200 mb-3 font-bold">
                  Framework Shared Entities <span :style="scalingStyles?.smallFontSize" class="ml-8 text-gray-500 dark:text-gray-400">3 Entities</span>
                </p>

                <div class="space-y-2">
                  <div class="grid grid-cols-2 gap-x-6 gap-y-2">
                    <button class="w-full text-left rounded transition-colors cursor-pointer border dark:border-gray-500 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/40 text-green-700 dark:text-green-300 p-2">
                      <div class="flex items-center justify-between">
                        <span :style="scalingStyles.textFontSize" class="font-medium">Users</span>
                        <i :style="scalingStyles.iconSizeSmall" class="fas fa-user"></i>
                      </div>
                      <span :style="scalingStyles.smallFontSize">today</span>
                    </button>
                    <button class="w-full text-left rounded transition-colors cursor-pointer border dark:border-gray-500 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/40 text-green-700 dark:text-green-300 p-2">
                      <div class="flex items-center justify-between">
                        <span :style="scalingStyles.textFontSize" class="font-medium">Roles</span>
                        <i :style="scalingStyles.iconSizeSmall" class="fas fa-user-tag"></i>
                      </div>
                      <span :style="scalingStyles.smallFontSize">today</span>
                    </button>
                    <button class="w-full text-left rounded transition-colors cursor-pointer border dark:border-gray-500 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/40 text-green-700 dark:text-green-300 p-2">
                      <div class="flex items-center justify-between">
                        <span :style="scalingStyles.textFontSize" class="font-medium">Permissions</span>
                        <i :style="scalingStyles.iconSizeSmall" class="fas fa-key"></i>
                      </div>
                      <span :style="scalingStyles.smallFontSize">today</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Package Tables Info Box Section -->
    <div class="mt-8 space-y-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <!-- Package Tables Info Box -->
        <div class="rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
          <div class="mb-4">
            <h3 :style="scalingStyles.subtitleFontSize" class="font-semibold text-gray-900 dark:text-white">Package Tables</h3>
            <p :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-400">DataTable module data tables and their current status</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div class="p-4 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
              <div class="flex items-center justify-between">
                <div class="flex items-start space-x-3">
                  <i :style="scalingStyles.iconSizeSmall" class="fas fa-table text-indigo-600 dark:text-indigo-400"></i>
                  <div>
                    <div :style="scalingStyles.textFontSize" class="text-gray-900 dark:text-white capitalize font-medium -mt-2">erp products</div>
                    <div :style="scalingStyles.smallFontSize" class="text-gray-500 dark:text-gray-400">0 records</div>
                  </div>
                </div>
                <div :style="scalingStyles.smallFontSize" class="text-gray-400 dark:text-gray-500 text-right">never</div>
              </div>
            </div>
            <div class="p-4 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
              <div class="flex items-center justify-between">
                <div class="flex items-start space-x-3">
                  <i :style="scalingStyles.iconSizeSmall" class="fas fa-table text-indigo-600 dark:text-indigo-400"></i>
                  <div>
                    <div :style="scalingStyles.textFontSize" class="text-gray-900 dark:text-white capitalize font-medium -mt-2">erp storages</div>
                    <div :style="scalingStyles.smallFontSize" class="text-gray-500 dark:text-gray-400">0 records</div>
                  </div>
                </div>
                <div :style="scalingStyles.smallFontSize" class="text-gray-400 dark:text-gray-500 text-right">never</div>
              </div>
            </div>
            <div class="p-4 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
              <div class="flex items-center justify-between">
                <div class="flex items-start space-x-3">
                  <i :style="scalingStyles.iconSizeSmall" class="fas fa-table text-indigo-600 dark:text-indigo-400"></i>
                  <div>
                    <div :style="scalingStyles.textFontSize" class="text-gray-900 dark:text-white capitalize font-medium -mt-2">erp customers</div>
                    <div :style="scalingStyles.smallFontSize" class="text-gray-500 dark:text-gray-400">0 records</div>
                  </div>
                </div>
                <div :style="scalingStyles?.smallFontSize" class="text-gray-400 dark:text-gray-500 text-right">never</div>
              </div>
            </div>
            <div class="p-4 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
              <div class="flex items-center justify-between">
                <div class="flex items-start space-x-3">
                  <i :style="scalingStyles.iconSizeSmall" class="fas fa-table text-indigo-600 dark:text-indigo-400"></i>
                  <div>
                    <div :style="scalingStyles.textFontSize" class="text-gray-900 dark:text-white capitalize font-medium -mt-2">futures</div>
                    <div :style="scalingStyles.smallFontSize" class="text-gray-500 dark:text-gray-400">0 records</div>
                  </div>
                </div>
                <div :style="scalingStyles.smallFontSize" class="text-gray-400 dark:text-gray-500 text-right">never</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Framework Shared Entities Info Box -->
        <div class="rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
          <div class="mb-4">
            <h3 :style="scalingStyles.subtitleFontSize" class="font-semibold text-gray-900 dark:text-white">Framework Shared Entities</h3>
            <p :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-400">Core business entities shared across the framework</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div class="p-4 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
              <div class="flex items-center justify-between">
                <div class="flex items-start space-x-3">
                  <i :style="scalingStyles.iconSizeSmall" class="fas fa-user text-green-600 dark:text-green-400"></i>
                  <div>
                    <div :style="scalingStyles.textFontSize" class="font-medium text-gray-900 dark:text-white -mt-2">Users</div>
                    <div :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-400">0 records</div>
                  </div>
                </div>
                <div :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-500">today</div>
              </div>
            </div>
            <div class="p-4 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
              <div class="flex items-center justify-between">
                <div class="flex items-start space-x-3">
                  <i :style="scalingStyles.iconSizeSmall" class="fas fa-user-tag text-green-600 dark:text-green-400"></i>
                  <div>
                    <div :style="scalingStyles.textFontSize" class="font-medium text-gray-900 dark:text-white -mt-2">Roles</div>
                    <div :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-400">0 records</div>
                  </div>
                </div>
                <div :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-500">today</div>
              </div>
            </div>
            <div class="p-4 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
              <div class="flex items-center justify-between">
                <div class="flex items-start space-x-3">
                  <i :style="scalingStyles.iconSizeSmall" class="fas fa-key text-green-600 dark:text-green-400"></i>
                  <div>
                    <div :style="scalingStyles.textFontSize" class="font-medium text-gray-900 dark:text-white -mt-2">Permissions</div>
                    <div :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-400">0 records</div>
                  </div>
                </div>
                <div :style="scalingStyles.smallFontSize" class="text-gray-600 dark:text-gray-500">today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.generic-info-section {
  /* Generic styles */
}
</style>