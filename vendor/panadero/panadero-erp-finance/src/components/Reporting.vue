<script setup>
import { ref, onMounted } from 'vue'
import { useReporting } from '../composables/useReporting'

const { getPeriods, getIncomeStatement, getBalanceSheet, getCashFlow, exportReportCsv } = useReporting()

const periods = ref([])
const period = ref('')
const income = ref({ rows:[], net:0 })
const balance = ref({ rows:[], check:0 })
const cash = ref({ rows:[], net:0 })

function fmt(n){ return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n||0) }

async function refresh(){
  income.value = await getIncomeStatement(period.value)
  balance.value = await getBalanceSheet(period.value)
  cash.value = await getCashFlow(period.value)
}

function exportCsv(type){
  const csv = exportReportCsv(type, { income:income.value, balance:balance.value, cash:cash.value })
  const blob = new Blob([csv], { type:'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${type}-${period.value}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

onMounted(async ()=>{
  periods.value = await getPeriods()
  period.value = periods.value[periods.value.length-1] || ''
  if (period.value) await refresh()
})
</script>
<template>
  <div class="p-6">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-semibold">Financial Reporting</h2>
      <div class="flex gap-2">
        <select v-model="period" class="border rounded p-2">
          <option v-for="p in periods" :key="p" :value="p">{{ p }}</option>
        </select>
        <button class="px-3 py-2 rounded bg-gray-100" @click="refresh">Refresh</button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="bg-white rounded border p-4">
        <div class="flex items-center justify-between mb-2">
          <h3 class="font-semibold">Income Statement</h3>
          <button class="text-sm text-indigo-600" @click="exportCsv('income')">Export CSV</button>
        </div>
        <table class="w-full text-sm">
          <tbody>
            <tr v-for="row in income.rows" :key="row.label">
              <td class="py-1">{{ row.label }}</td>
              <td class="py-1 text-right">{{ fmt(row.value) }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="font-semibold border-t">
              <td class="py-1">Net Income</td>
              <td class="py-1 text-right">{{ fmt(income.net) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="bg-white rounded border p-4">
        <div class="flex items-center justify-between mb-2">
          <h3 class="font-semibold">Balance Sheet</h3>
          <button class="text-sm text-indigo-600" @click="exportCsv('balance')">Export CSV</button>
        </div>
        <table class="w-full text-sm">
          <tbody>
            <tr v-for="row in balance.rows" :key="row.label">
              <td class="py-1">{{ row.label }}</td>
              <td class="py-1 text-right">{{ fmt(row.value) }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="font-semibold border-t">
              <td class="py-1">Assets - (Liab + Equity)</td>
              <td class="py-1 text-right">{{ fmt(balance.check) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="bg-white rounded border p-4">
        <div class="flex items-center justify-between mb-2">
          <h3 class="font-semibold">Cash Flow (Indirect)</h3>
          <button class="text-sm text-indigo-600" @click="exportCsv('cashflow')">Export CSV</button>
        </div>
        <table class="w-full text-sm">
          <tbody>
            <tr v-for="row in cash.rows" :key="row.label">
              <td class="py-1">{{ row.label }}</td>
              <td class="py-1 text-right">{{ fmt(row.value) }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="font-semibold border-t">
              <td class="py-1">Net Cash Change</td>
              <td class="py-1 text-right">{{ fmt(cash.net) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>