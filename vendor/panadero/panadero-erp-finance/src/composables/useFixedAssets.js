import { computed } from 'vue'
import { useFinanceStore } from '../stores/financeStore'

export function useFixedAssets(){
  const store = useFinanceStore()
  const assets = computed(()=> store.fixedAssets)

  async function addAsset(asset){
    await store.addAsset(asset)
  }

  async function runPeriodDepreciation(period){
    const p = period || await store.getCurrentPeriod()
    await store.runDepreciation(p)
  }

  return { assets, addAsset, runPeriodDepreciation }
}