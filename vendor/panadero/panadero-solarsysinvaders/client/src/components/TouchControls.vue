<template>
    <div class="touch-controls" v-if="isTouchDevice">
        <!-- Direction pad -->
        <div class="d-pad">
            <button 
                class="d-pad-btn left"
                @touchstart="handleTouch('rotate_left', true)"
                @touchend="handleTouch('rotate_left', false)"
            >
                ◀
            </button>
            <button 
                class="d-pad-btn right"
                @touchstart="handleTouch('rotate_right', true)"
                @touchend="handleTouch('rotate_right', false)"
            >
                ▶
            </button>
            <button 
                class="d-pad-btn thrust"
                @touchstart="handleTouch('thrust', true)"
                @touchend="handleTouch('thrust', false)"
            >
                ▲
            </button>
        </div>

        <!-- Action buttons -->
        <div class="action-buttons">
            <button 
                class="action-btn shoot"
                @touchstart="handleTouch('shoot', true)"
                @touchend="handleTouch('shoot', false)"
            >
                🔫
            </button>
            <button 
                class="action-btn rocket"
                @touchstart="handleTouch('rocket', true)"
                @touchend="handleTouch('rocket', false)"
            >
                🚀
            </button>
            <button 
                class="action-btn warp"
                @touchstart="handleTouch('warp_home', true)"
            >
                🏠
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    onInput: {
        type: Function,
        required: true
    },
    playSound: {
        type: Function,
        required: true
    },
    stopEngine: {
        type: Function,
        required: true
    }
});

const isTouchDevice = ref(false);

onMounted(() => {
    isTouchDevice.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
});

const handleTouch = (action, isPressed) => {
    props.onInput(action, isPressed);
    
    // Handle sounds
    if (action === 'thrust') {
        if (isPressed) {
            props.playSound('engine');
        } else {
            props.stopEngine();
        }
    } else if (action === 'shoot' && isPressed) {
        props.playSound('shoot');
    } else if (action === 'rocket' && isPressed) {
        props.playSound('rocket');
    }
};
</script>

<style scoped>
.touch-controls {
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    z-index: 1000;
    pointer-events: none; /* Allow clicks to pass through the container */
}

.d-pad, .action-buttons {
    pointer-events: auto; /* Re-enable pointer events for the buttons */
}

/* D-Pad styles */
.d-pad {
    position: relative;
    width: 180px;
    height: 180px;
}

.d-pad-btn {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid #30a0ff;
    color: #30a0ff;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    touch-action: none; /* Prevent default touch actions */
}

.d-pad-btn:active {
    background: rgba(48, 160, 255, 0.3);
    transform: scale(0.95);
}

.d-pad-btn.left {
    left: 0;
    top: 60px;
}

.d-pad-btn.right {
    right: 0;
    top: 60px;
}

.d-pad-btn.thrust {
    left: 60px;
    top: 0;
}

/* Action buttons styles */
.action-buttons {
    display: flex;
    gap: 20px;
    align-items: flex-end;
}

.action-btn {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid #30a0ff;
    color: white;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    touch-action: none;
}

.action-btn:active {
    background: rgba(48, 160, 255, 0.3);
    transform: scale(0.95);
}

.action-btn.shoot {
    border-color: #ff6b35;
}

.action-btn.rocket {
    border-color: #4ecdc4;
}

.action-btn.warp {
    border-color: #96ceb4;
}

/* Prevent text selection */
.d-pad-btn, .action-btn {
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .touch-controls {
        padding: 10px;
    }
    
    .d-pad {
        width: 150px;
        height: 150px;
    }
    
    .d-pad-btn {
        width: 50px;
        height: 50px;
        font-size: 20px;
    }
    
    .d-pad-btn.left {
        top: 50px;
    }
    
    .d-pad-btn.right {
        top: 50px;
    }
    
    .d-pad-btn.thrust {
        left: 50px;
    }
    
    .action-btn {
        width: 60px;
        height: 60px;
        font-size: 24px;
    }
}
</style>
