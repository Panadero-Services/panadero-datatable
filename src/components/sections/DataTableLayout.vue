<script setup>
import Navigation from './DataTableNavigation.vue';
import { LAYOUT_FEATURE } from 'panadero-shared-styling';

const props = defineProps({
  activeTab: { type: String, required: true },
  tabs: { type: Array, required: true }
});

const emit = defineEmits(['tab-change']);
</script>

<template>
  <div :class="LAYOUT_FEATURE.container">
    <!-- Navigation Component + optional append slot -->
    <div :class="LAYOUT_FEATURE.navRow">
      <div class="flex-1 min-w-0">
      <Navigation 
        :active-tab="activeTab" 
        :tabs="tabs" 
        @tab-change="emit('tab-change', $event)" 
      />
      </div>
      <slot name="nav-append" />
    </div>

    <!-- Main Content Layout -->
    <div :class="LAYOUT_FEATURE.contentGrid">
      <main :class="LAYOUT_FEATURE.mainCol">
        <section>
          <div class="overflow-x-auto">
            <slot />
          </div>
        </section>
      </main>
    </div>

    <!-- Optional footer slot -->
    <slot name="footer" />
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