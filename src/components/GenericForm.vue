<!--
  Generic Form Component
  @version 2.0.0
  @date 08-Oct-2025
  @description Truly generic form component that works with any data structure
-->
<script setup>
import { ref, computed, watch } from 'vue'
import { useCommonSnippets } from '../composables/useCommonSnippets.js'

// Get common functionality
const { 
  darkModeClasses, 
  scalingStyles, 
  showNotification 
} = useCommonSnippets()

// Props
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  item: {
    type: Object,
    default: null
  },
  formConfig: {
    type: Object,
    required: true,
    default: () => ({
      title: 'Form',
      fields: [],
      submitText: 'Save',
      editText: 'Update',
      createText: 'Create'
    })
  },
  DESIGN_SYSTEM: { type: Object, required: true },

  dropdownData: {
    type: Object,
    default: () => ({})
  }
})

// Emits
const emit = defineEmits(['close', 'saved'])

// Form state
const isSaving = ref(false)
const formErrors = ref({})
const formData = ref({})

// Computed properties
const isEdit = computed(() => !!props.item)
const formTitle = computed(() => {
  if (isEdit.value) {
    return props.formConfig.editText || `Edit ${props.formConfig.title}`
  }
  return props.formConfig.createText || `Add ${props.formConfig.title}`
})

// Initialize form data based on formConfig
const initializeFormData = () => {
  const initialData = {}
  
  if (props.formConfig.fields) {
    props.formConfig.fields.forEach(field => {
      if (isEdit.value && props.item) {
        initialData[field.key] = props.item[field.key] ?? field.defaultValue ?? getDefaultValue(field.type)
      } else {
        initialData[field.key] = field.defaultValue ?? getDefaultValue(field.type)
      }
    })
  }
  
  formData.value = initialData
}

// Get default value based on field type
const getDefaultValue = (type) => {
  switch (type) {
    case 'text':
    case 'email':
    case 'password':
    case 'url':
    case 'tel':
      return ''
    case 'number':
      return 0
    case 'boolean':
    case 'checkbox':
      return false
    case 'select':
    case 'dropdown':
      return null
    case 'textarea':
      return ''
    default:
      return ''
  }
}

// Watch for item prop changes
watch(() => props.item, () => {
  initializeFormData()
}, { immediate: true })

// Watch for show prop changes
watch(() => props.show, (newShow) => {
  if (newShow) {
    initializeFormData()
  }
})

const handleClose = () => {
  emit('close')
}

const handleSave = async () => {
  try {
    isSaving.value = true
    formErrors.value = {}

    const dataToSend = { ...formData.value }
    emit('saved', dataToSend)
    handleClose()

  } catch (error) {
    console.error('Error preparing form data:', error)
    showNotification('Error preparing form data', 'error')
  } finally {
    isSaving.value = false
  }
}

const hasFieldError = (field) => {
  return formErrors.value[field] && formErrors.value[field].length > 0
}

const getFieldError = (field) => {
  return formErrors.value[field]?.[0] || ''
}

// Get dropdown options for a field
const getDropdownOptions = (field) => {
  if (field.options) {
    return field.options
  }
  
  if (field.dropdownKey && props.dropdownData[field.dropdownKey]) {
    return props.dropdownData[field.dropdownKey].map(item => ({
      value: item.id || item.value,
      label: item.name || item.label || item.title
    }))
  }
  
  return []
}
</script>

<template>
  <div v-if="show"  class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="handleClose"></div>
    
    <!-- Modal -->
    <div class="flex min-h-full items-center justify-center p-4">
      <div :class="[DESIGN_SYSTEM.card, 'relative w-full max-w-2xl rounded-lg shadow-xl']">
        <!-- Header -->
        <div :class="[DESIGN_SYSTEM.table.border, 'flex items-center justify-between border-b px-6 py-4']">
          <h3 :class="DESIGN_SYSTEM.text.primary" class="text-lg font-semibold">
            {{ formTitle }}
          </h3>
          <button @click="handleClose" :class="[DESIGN_SYSTEM.text.secondary, 'hover:text-gray-900 dark:hover:text-white']">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- Form Content -->
        <form @submit.prevent="handleSave" class="p-6 space-y-6">
          <!-- Dynamic Fields -->
          <div v-for="field in props.formConfig.fields" :key="field.key" :class="field.colSpan || 'col-span-1'">
            <div v-if="field.type === 'boolean' || field.type === 'checkbox'" class="flex items-center">
              <input
                v-model="formData[field.key]"
                type="checkbox"
                :class="['h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded', DESIGN_SYSTEM.input]"
              />
              <label :class="[DESIGN_SYSTEM.text.primary, 'ml-2 block text-sm']">
                {{ field.label }}
                <span v-if="field.required" class="text-red-500">*</span>
              </label>
            </div>

            <div v-else>
              <label :class="DESIGN_SYSTEM.text.primary" class="block text-sm font-medium mb-2">
                {{ field.label }}
                <span v-if="field.required" class="text-red-500">*</span>
              </label>
              
              <!-- Text Input -->
              <input
                v-if="['text', 'email', 'password', 'url', 'tel', 'number'].includes(field.type)"
                v-model="formData[field.key]"
                :type="field.type"
                :step="field.type === 'number' ? (field.step || 'any') : undefined"
                :class="[DESIGN_SYSTEM.input, 'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500', hasFieldError(field.key) ? 'border-red-500' : '']"
                :style="scalingStyles.input"
                :placeholder="field.placeholder || `Enter ${field.label.toLowerCase()}`"
              />
              
              <!-- Textarea -->
              <textarea
                v-else-if="field.type === 'textarea'"
                v-model="formData[field.key]"
                :rows="field.rows || 3"
                :class="[DESIGN_SYSTEM.input, 'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500', hasFieldError(field.key) ? 'border-red-500' : '']"
                :style="scalingStyles.input"
                :placeholder="field.placeholder || `Enter ${field.label.toLowerCase()}`"
              ></textarea>
              
              <!-- Select/Dropdown -->
              <select
                v-else-if="['select', 'dropdown'].includes(field.type)"
                v-model="formData[field.key]"
                :class="[DESIGN_SYSTEM.input, 'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500', hasFieldError(field.key) ? 'border-red-500' : '']"
                :style="scalingStyles.input"
              >
                <option value="" disabled>{{ field.placeholder || `Select ${field.label.toLowerCase()}` }}</option>
                <option 
                  v-for="option in getDropdownOptions(field)" 
                  :key="option.value" 
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
              
              <!-- Error Message -->
              <p v-if="hasFieldError(field.key)" class="mt-1 text-sm text-red-600 dark:text-red-400">
                {{ getFieldError(field.key) }}
              </p>
            </div>
          </div>

          <!-- Form Actions -->
          <div class="flex justify-end gap-3 pt-4 border-t" :class="DESIGN_SYSTEM.table.border">
            <button
              type="button"
              @click="handleClose"
              :class="[DESIGN_SYSTEM.button.secondary, 'px-4 py-2 rounded-md font-medium transition-colors duration-200']"
              :style="scalingStyles.buttonPadding"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="isSaving"
              :class="[DESIGN_SYSTEM.button.primary, 'px-4 py-2 rounded-md font-medium transition-colors duration-200', isSaving ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90']"
              :style="scalingStyles.buttonPadding"
            >
              {{ isSaving ? 'Saving...' : (isEdit ? (props.formConfig.editText || 'Update') : (props.formConfig.createText || 'Create')) }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>