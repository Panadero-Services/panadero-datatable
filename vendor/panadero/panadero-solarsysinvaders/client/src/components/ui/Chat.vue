<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { CHAT_TYPES, formatMessage, createSystemMessage } from '../../../../shared/chat.js';

const props = defineProps({
  socket: {
    type: Object,
    required: true
  },
  playerInfo: {
    type: Object,
    required: true
  }
});

// Single emit for all message types
const emit = defineEmits(['message']);

const messages = ref([]);
const inputMessage = ref('');
const isInputVisible = ref(false);
const MAX_MESSAGES = 10;
const MESSAGE_LIFETIME = 20000;

function addMessage(message) {
  messages.value.push(message);
  if (messages.value.length > MAX_MESSAGES) {
    messages.value.shift();
  }
  
  setTimeout(() => {
    const index = messages.value.findIndex(m => 
      m.timestamp === message.timestamp && 
      m.content === message.content
    );
    if (index !== -1) {
      messages.value.splice(index, 1);
    }
  }, MESSAGE_LIFETIME);
}

function handleWindowKeyPress(event) {
  if (!isInputVisible.value && event.key === 'Enter') {
    event.preventDefault();
    isInputVisible.value = true;
    setTimeout(() => {
      document.getElementById('chatInput')?.focus();
    }, 0);
  }
}

function handleInputKeyPress(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const content = inputMessage.value.trim();
    if (content) {
      // Single emit with all data - parent decides what to do
      emit('message', {
        content,
        isGlobal: content.startsWith(':'),
        sender: props.playerInfo.callSign,
        color: props.playerInfo.color,
        timestamp: Date.now(),
        // Add command detection
        isCommand: content.startsWith('/'),
        command: content.startsWith('/') ? content.split(' ')[0] : null
      });
    }
    inputMessage.value = '';
    isInputVisible.value = false;
  } else if (event.key === 'Escape') {
    event.preventDefault();
    isInputVisible.value = false;
    inputMessage.value = '';
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleWindowKeyPress);
  
  props.socket.on('chat_broadcast', (message) => {
    addMessage({
      ...message,
      timestamp: Date.now()
    });
  });
  
  props.socket.on('help', (data) => {
    console.log(' Chat received help response:', data);
    emit('message', {
      type: 'help_response',
      content: data.content,
      timestamp: Date.now()
    });
  });
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleWindowKeyPress);
  props.socket.off('chat_broadcast');
  props.socket.off('help');
});
</script>

<template>
  <div class="chat-container">
    <div class="messages">
      <div v-for="(msg, index) in messages" 
           :key="msg.timestamp" 
           class="message">
        <span class="callsign" :style="{ color: msg.color }">{{ msg.sender }}:</span>
        <span class="content">{{ msg.content }}</span>
      </div>
    </div>
    <div v-if="isInputVisible" class="input-container">
      <input 
        id="chatInput"
        v-model="inputMessage"
        type="text"
        placeholder="Team chat (prefix with : for global)"
        maxlength="100"
        @keydown.stop
        @keydown="handleInputKeyPress"
      />
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 3px;
  color: white;
  width: 300px;
  font-size: 11px;
}

.messages {
  margin-bottom: 2px;
  min-height: 12px;
}

.message {
  margin: 1px 0;
  line-height: 1.2;
}

.callsign {
  font-weight: bold;
  margin-right: 5px;
}

.content {
  color: white; /* All message content is white */
  word-break: break-word;
}

.input-container {
  width: 100%;
}

input {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2px 5px;
  color: white;
  border-radius: 2px;
  font-size: 11px;
}

input:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.4);

}

input::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-size: 11px;
}
</style>