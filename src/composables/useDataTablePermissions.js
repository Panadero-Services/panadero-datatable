// useDataTablePermissions - optional per-user action permissions from config.permissions
// config.permissions = { create, edit, delete, editKey, deleteKey } – all optional; absent means allowed.
// editKey / deleteKey name a row field (e.g. 'can_edit') that is false when that row may not be changed.
import { computed } from 'vue'

export function useDataTablePermissions(config) {
  const permissions = computed(() => config?.permissions || {})

  const canCreate = computed(() => permissions.value.create !== false)
  const canBulkDelete = computed(() => permissions.value.delete !== false)

  const rowAllows = (item, key) => !key || item?.[key] !== false
  const canEditRow = (item) => permissions.value.edit !== false && rowAllows(item, permissions.value.editKey)
  const canDeleteRow = (item) => permissions.value.delete !== false && rowAllows(item, permissions.value.deleteKey)

  return { canCreate, canBulkDelete, canEditRow, canDeleteRow }
}
