import { ref } from 'vue'
import { useFinanceStore } from '../stores/financeStore'

export function useCompliance(){
  const store = useFinanceStore()
  const auditLogs = ref(store.auditLogs)

  async function logAction(entity, action, meta={}, user_id='system'){
    await store.logAudit({ entity, action, meta, user_id })
  }

  function checkSoD(){
    // Demo SoD check
    return { ok:true, message: 'No SoD conflicts detected (demo)' }
  }

  return { auditLogs, logAction, checkSoD }
}