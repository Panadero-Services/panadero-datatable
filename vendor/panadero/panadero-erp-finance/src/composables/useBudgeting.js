import { computed } from 'vue'
import { useFinanceStore } from '../stores/financeStore'

export function useBudgeting(){
  const store = useFinanceStore()
  const budgets = computed(()=> store.budgets)

  async function createBudget(period, lines){
    await store.createBudget(period, lines)
  }

  async function getBudget(period){
    return store.budgets.find(b=>b.period===period) || { period, lines:[] }
  }

  async function getVariance(period){
    const budget = await getBudget(period)
    const actualByAccount = {}
    store.journalEntries.filter(e=>e.period===period).forEach(e=>{
      e.lines.forEach(l=>{
        const amt = Number(l.amount)||0
        const sign = l.type==='debit' ? 1 : -1
        actualByAccount[l.account] = (actualByAccount[l.account]||0) + sign*amt
      })
    })
    const accounts = Array.from(new Set([
      ...budget.lines.map(l=>l.account),
      ...Object.keys(actualByAccount)
    ]))
    return accounts.map(acc=>{
      const b = budget.lines.find(l=>l.account===acc)?.amount || 0
      const a = actualByAccount[acc] || 0
      return { account: acc, budget: b, actual: a, variance: a - b }
    })
  }

  return { budgets, createBudget, getBudget, getVariance }
}