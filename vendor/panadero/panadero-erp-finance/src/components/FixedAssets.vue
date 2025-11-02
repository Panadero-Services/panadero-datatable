<script setup>
import { ref } from 'vue'
import { useFixedAssets } from '../composables/useFixedAssets'

const { assets, addAsset, runPeriodDepreciation } = useFixedAssets()
const openAdd = ref(false)
const form = ref({
  name: '', cost: 0, category: 'Equipment', acquired_at: new Date().toISOString().slice(0,10),
  method: 'straight_line', useful_life_months: 36
})

function fmt(n){ return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n||0) }
function fmtDate(d){ return new Date(d).toLocaleDateString() }

async function add(){
  await addAsset({ ...form.value })
  openAdd.value = false
  form.value = { name:'', cost:0, category:'Equipment', acquired_at:new Date().toISOString().slice(0,10), method:'straight_line', useful_life_months:36 }
}

async function runDep(){
  await runPeriodDepreciation()
}
</script>
<template>
  <div class="p-6">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-semibold">Fixed Assets</h2>
      <div class="flex gap-2">
        <button @click="openAdd = true" class="px-3 py-2 rounded bg-indigo-600 text-white">Add Asset</button>
        <button @click="runDep" class="px-3 py-2 rounded bg-gray-100">Run Depreciation</button>
      </div>
    </div>

    <div class="bg-white rounded border">
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-50 text-left">
            <th class="p-3 border">Name</th>
            <th class="p-3 border">Category</th>
            <th class="p-3 border">Cost</th>
            <th class="p-3 border">Acquired</th>
            <th class="p-3 border">Method</th>
            <th class="p-3 border">Life (months)</th>
            <th class="p-3 border">Accum. Dep.</th>
            <th class="p-3 border">NBV</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in assets" :key="a.id">
            <td class="p-3 border">{{ a.name }}</td>
            <td class="p-3 border">{{ a.category }}</td>
            <td class="p-3 border">{{ fmt(a.cost) }}</td>
            <td class="p-3 border">{{ fmtDate(a.acquired_at) }}</td>
            <td class="p-3 border">{{ a.method }}</td>
            <td class="p-3 border">{{ a.useful_life_months }}</td>
            <td class="p-3 border">{{ fmt(a.accumulated_depreciation || 0) }}</td>
            <td class="p-3 border">{{ fmt(a.cost - (a.accumulated_depreciation || 0)) }}</td>
          </tr>
          <tr v-if="assets.length === 0">
            <td class="p-6 text-center text-gray-500 italic border" colspan="8">No assets yet</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="openAdd" class="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div class="bg-white rounded p-6 w-[520px]">
        <h3 class="text-lg font-semibold mb-4">Add Asset</h3>
        <form @submit.prevent="add">
          <div class="grid grid-cols-2 gap-3">
            <input v-model="form.name" class="border rounded p-2" placeholder="Name" required />
            <input v-model.number="form.cost" class="border rounded p-2" type="number" step="0.01" placeholder="Cost" required />
            <input v-model="form.category" class="border rounded p-2" placeholder="Category" />
            <input v-model="form.acquired_at" class="border rounded p-2" type="date" />
            <select v-model="form.method" class="border rounded p-2">
              <option value="straight_line">Straight-line</option>
            </select>
            <input v-model.number="form.useful_life_months" class="border rounded p-2" type="number" min="1" placeholder="Life (months)" />
          </div>
          <div class="flex justify-end gap-2 mt-4">
            <button type="button" class="px-3 py-2 rounded bg-gray-100" @click="openAdd=false">Cancel</button>
            <button class="px-3 py-2 rounded bg-indigo-600 text-white">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>