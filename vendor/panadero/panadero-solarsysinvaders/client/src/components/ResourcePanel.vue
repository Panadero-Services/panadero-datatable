<script setup>
const props = defineProps({
    collections: Object,
    streak: Array
});

// Single array of resource definitions
const resourceTypes = [
    { label: 'Gold', type: 'gold', color: '#FFD700' },
    { label: 'Water', type: 'water', color: '#00FFFF' },
    { label: 'Kryptonite', type: 'kryptonite', color: '#FF00FF' }
];
</script>

<template>
    <div v-if="collections" class="absolute bottom-5 left-5 bg-black/30 text-green-400 p-2 rounded-lg border border-green-500 w-32 backdrop-blur-sm text-xxs">
        <div v-for="res in resourceTypes" 
             :key="res.type"
             class="flex justify-between items-center whitespace-pre text-xxs -my-1">
            <span class="text-white">{{ res.label }}:</span>

                <span class="text-yellow-400" v-if="streak?.filter(s => s === res.type).length">
                    {{ streak.filter(s => s === res.type).length }}
                </span>

            <div class="flex items-center gap-1">
                <div class="w-2 h-2 rounded-full" :style="{ backgroundColor: res.color }"></div>
              



                <span class="text-green-400 text-right min-w-[40px]">
                    {{ collections[res.type] }}
                </span>

            </div>
        </div>
    </div>
</template>

<style scoped>
.absolute {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 10;
}
</style> 