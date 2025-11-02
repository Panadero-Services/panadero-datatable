<script setup>
import { ref, onMounted } from 'vue'
import { useBudgeting } from '../composables/useBudgeting'
import { useReporting } from '../composables/useReporting'

const { getPeriods } = useReporting()
const { createBudget, getBudget, getVariance } = useBudgeting()

const periods = ref([])
const period = ref('')
const rows = ref([])

function fmt(n){ return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n||0) }

async function createSample(){
  await createBudget(period.value, [
    { account:'Revenue', amount: 20000 },
    { account:'Expenses', amount: 12000 }
  ])
  await refresh()
}

async function refresh(){
  const budget = await getBudget(period.value)
  const variance = await getVariance(period.value)
  rows.value = variance // already combined budget vs actual by account
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
      <h2 class="text-xl font-semibold">Budgeting & Forecasting</h2>
      <div class="flex gap-2">
        <button @click="createSample" class="px-3 py-2 rounded bg-indigo-600 text-white">Create Budget</button>
      </div>
    </div>

    <div class="bg-white rounded border p-4">
      <div class="flex items-center gap-2 mb-3">
        <label class="text-sm text-gray-600">Period:</label>
        <select v-model="period" class="border rounded p-2">
          <option v-for="p in periods" :key="p" :value="p">{{ p }}</option>
        </select>
        <button class="px-3 py-2 rounded bg-gray-100" @click="refresh">Refresh</button>
      </div>

      <table class="w-full text-sm">
        <thead>
          <tr class="bg-gray-50 text-left">
            <th class="p-2 border">Account</th>
            <th class="p-2 border">Budget</th>
            <th class="p-2 border">Actual</th>
            <th class="p-2 border">Variance</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.account">
            <td class="p-2 border">{{ row.account }}</td>
            <td class="p-2 border text-right">{{ fmt(row.budget) }}</td>
            <td class="p-2 border text-right">{{ fmt(row.actual) }}</td>
            <td class="p-2 border text-right" :class="row.variance < 0 ? 'text-red-600' : 'text-green-600'">{{ fmt(row.variance) }}</td>
          </tr>
          <tr v-if="rows.length===0">
            <td class="p-6 text-center text-gray-500 italic border" colspan="4">No budget data</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>