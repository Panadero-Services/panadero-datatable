<script setup>
import Navigation from './DataTableNavigation.vue';

const props = defineProps({
  activeTab: { type: String, required: true },
  tabs: { type: Array, required: true }
});

const emit = defineEmits(['tab-change']);
</script>

<template>
  <div class="layout-page dark:bg-gray-900">
    <!-- Navigation Component -->
    <Navigation 
      :active-tab="activeTab" 
      :tabs="tabs" 
      @tab-change="emit('tab-change', $event)" 
    />

    <!-- Main Content Layout -->
    <div class="grid grid-cols-12 gap-6 mt-1">
      <main class="col-span-12 lg:col-span-12">
        <section>
          <div class="overflow-x-auto">
            <slot />
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout-page {
  min-height: 100vh;
  padding: 0;
  margin: 24px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Keep existing styles for tabs/cards when needed (dashboard uses Tailwind utilities) */
</style>