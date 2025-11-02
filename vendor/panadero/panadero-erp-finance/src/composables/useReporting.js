import { computed } from 'vue'
import { useFinanceStore } from '../stores/financeStore'

const accountMap = {
  revenue: ['Revenue', 'Sales'],
  expense: ['Expenses', 'Depreciation Expense'],
  assets: ['Cash','Accounts Receivable','Inventory','Fixed Assets'],
  liabilities: ['Accounts Payable','Accrued Liabilities','Loans'],
  equity: ['Capital','Retained Earnings','Accumulated Depreciation']
}

function sumByAccounts(entries, period, types){
  const set = new Set(types.flatMap(t => accountMap[t]||[]))
  let total = 0
  entries.filter(e=>e.period===period).forEach(e=>{
    e.lines.forEach(l=>{
      if(set.has(l.account)){
        const amt = Number(l.amount)||0
        total += (l.type==='debit' ? +amt : -amt)
      }
    })
  })
  return total
}

export function useReporting(){
  const store = useFinanceStore()
  const periods = computed(()=> {
    const all = store.journalEntries.map(e=>e.period)
    return Array.from(new Set(all)).sort()
  })

  async function getPeriods(){ return periods.value }

  async function getIncomeStatement(period){
    const revenue = -sumByAccounts(store.journalEntries, period, ['revenue'])
    const expense = sumByAccounts(store.journalEntries, period, ['expense'])
    return {
      rows: [
        { label:'Revenue', value: revenue },
        { label:'Expenses', value: expense },
      ],
      net: revenue - expense
    }
  }

  async function getBalanceSheet(period){
    const assets = sumByAccounts(store.journalEntries, period, ['assets'])
    const liab = -sumByAccounts(store.journalEntries, period, ['liabilities'])
    const equity = -sumByAccounts(store.journalEntries, period, ['equity'])
    return {
      rows: [
        { label:'Assets', value: assets },
        { label:'Liabilities', value: liab },
        { label:'Equity', value: equity },
      ],
      check: assets - (liab + equity)
    }
  }

  async function getCashFlow(period){
    // Simple indirect: Net Income + (ΔAssets, ΔLiab) approximations omitted here
    const is = await getIncomeStatement(period)
    return {
      rows: [
        { label:'Net Income', value: is.net },
        { label:'Working Capital (approx)', value: 0 },
      ],
      net: is.net
    }
  }

  function exportReportCsv(type, data){
    const rows = []
    if(type==='income'){
      rows.push(['Label','Value'])
      data.income.rows.forEach(r=>rows.push([r.label, r.value]))
      rows.push(['Net Income', data.income.net])
    } else if(type==='balance'){
      rows.push(['Label','Value'])
      data.balance.rows.forEach(r=>rows.push([r.label, r.value]))
      rows.push(['Check', data.balance.check])
    } else if(type==='cashflow'){
      rows.push(['Label','Value'])
      data.cash.rows.forEach(r=>rows.push([r.label, r.value]))
      rows.push(['Net', data.cash.net])
    }
    return rows.map(r=>r.join(',')).join('\n')
  }

  return { getPeriods, getIncomeStatement, getBalanceSheet, getCashFlow, exportReportCsv }
}