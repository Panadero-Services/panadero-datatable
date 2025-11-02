<script setup>
import { computed } from 'vue';

const props = defineProps({
  shipInfo: {
    type: Object,
    required: true
  },
  score: {
    type: Number,
    default: 0
  },
  inSafeZone: {
    type: Boolean,
    default: false
  }
});

// Helper functions
const formatNumber = (num, width) => {
  if (typeof num === 'number') {
    return num.toString().padStart(width, ' ');
  }
  return ''.padStart(width, ' ');
};

const padString = (str, width) => {
  return (str || '').toString().padEnd(width, ' ');
};

// Team counts tracking
const teamCounts = {
    '#00FFFF': 1,  // Cyan: 1 player
    '#FF69B4': 1,  // Pink: 1 player
    '#FFFF00': 0   // Yellow: 0 players
};

function assignBalancedTeam() {
    const minCount = Math.min(...Object.values(teamCounts));
    console.log('Current team counts:', teamCounts);
    console.log('Minimum count:', minCount);
    
    const availableColors = Object.entries(teamCounts)
        .filter(([_, count]) => count === minCount)
        .map(([color, _]) => color);
    console.log('Available colors:', availableColors);
    
    const selectedColor = availableColors[Math.floor(Math.random() * availableColors.length)];
    console.log('Selected color:', selectedColor);
    return selectedColor;
}

// Info items computed property
const infoItems = computed(() => [
  {
    label: 'CallSign',
    value: () => padString(props.shipInfo.callSign, 6)
  },
  {
    label: 'Health',
    value: () => `${formatNumber(props.shipInfo.health, 3)}/${formatNumber(props.shipInfo.maxHealth, 3)}`
  },
  {
    label: 'Position',
    value: () => `${formatNumber(props.shipInfo.position.x, 6)}, ${formatNumber(props.shipInfo.position.y, 6)}`
  },
  {
    label: 'Angle',
    value: () => `${formatNumber(props.shipInfo.angle, 6)}°`
  },
  {
    label: 'Velocity',
    value: () => `${formatNumber(props.shipInfo.velocity.x, 6)}, ${formatNumber(props.shipInfo.velocity.y, 6)}`
  },
  {
    label: 'Home',
    value: () => `${formatNumber(props.shipInfo.home.x, 6)}, ${formatNumber(props.shipInfo.home.y, 6)}`
  },
  {
    label: 'Score',
    value: () => formatNumber(props.shipInfo.score, 6)  // Use shipInfo.score instead of props.score
  },
  {
    label: 'Pattern',
    value: () => padString(props.shipInfo.pattern, 6)
  },
  {
    label: 'Team',
    value: () => "",
    // Add color block by returning an object with value and color
    valueStyle: () => ({ 
        backgroundColor: props.shipInfo.color,
        width: '10px',
        height: '10px',
        display: 'inline-block',
        marginLeft: '4px',
        borderRadius: '2px'
    })
  },
  {
    label: 'Safe Zone',
    value: () => props.inSafeZone ? 'Yes' : 'No',
    valueClass: 'text-green-600'
  }
]);
</script>

<template>
  <div class="absolute top-5 left-5 bg-black/30 text-green-400 p-2 rounded-lg border border-green-500 w-32 backdrop-blur-sm text-xxs">
    <div v-for="(item, index) in infoItems" 
         :key="index"
         class="flex justify-between items-center whitespace-pre text-xxs -my-1">
      <span class="text-white">{{ item.label }}:</span>
      <div class="flex items-center">
        <span :class="['text-green-400 text-right min-w-[60px]']">
          {{ item.value() }}
        </span>
        <div v-if="item.valueStyle" 
             :style="item.valueStyle()">
        </div>
      </div>
    </div>
  </div>
</template> 