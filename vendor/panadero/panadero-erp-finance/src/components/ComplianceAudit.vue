<script setup>
import { computed } from 'vue'
import { useCompliance } from '../composables/useCompliance'

const { auditLogs, logAction, checkSoD } = useCompliance()
const logs = computed(()=> auditLogs.value)
const sod = checkSoD

function stringify(m){ try{ return JSON.stringify(m) }catch(e){ return '' } }

async function logTest(){
  await logAction('demo.entity','TEST_EVENT',{ sample:true })
}
</script>
<template>
  <div class="p-6">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-semibold">Compliance & Audit</h2>
      <div class="flex gap-2">
        <button @click="logTest" class="px-3 py-2 rounded bg-indigo-600 text-white">Log Test Event</button>
        <button @click="checkSoD" class="px-3 py-2 rounded bg-gray-100">Run SoD Check</button>
      </div>
    </div>

    <div class="bg-white rounded border">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-gray-50 text-left">
            <th class="p-2 border">Time</th>
            <th class="p-2 border">User</th>
            <th class="p-2 border">Entity</th>
            <th class="p-2 border">Action</th>
            <th class="p-2 border">Meta</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="l in logs" :key="l.id">
            <td class="p-2 border">{{ new Date(l.timestamp).toLocaleString() }}</td>
            <td class="p-2 border">{{ l.user_id }}</td>
            <td class="p-2 border">{{ l.entity }}</td>
            <td class="p-2 border">{{ l.action }}</td>
            <td class="p-2 border text-gray-500">{{ stringify(l.meta) }}</td>
          </tr>
          <tr v-if="logs.length===0">
            <td class="p-6 text-center text-gray-500 italic border" colspan="5">No audit entries</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="sod" class="mt-4 p-3 bg-yellow-50 border rounded">
      <strong>SoD Result:</strong> {{ sod.message }}
    </div>
  </div>
</template>