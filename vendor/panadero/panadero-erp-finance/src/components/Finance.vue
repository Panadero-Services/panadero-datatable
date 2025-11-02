<script setup>
import { ref, computed } from 'vue';

import GeneralLedger from './GeneralLedger.vue';
import AccountsPayable from './AccountsPayable.vue';
import AccountsReceivable from './AccountsReceivable.vue';
import CashFlow from './CashFlow.vue';
import TaxManagement from './TaxManagement.vue';

import FixedAssets from './FixedAssets.vue';
import Reporting from './Reporting.vue';
import BudgetingForecasting from './BudgetingForecasting.vue';
import ComplianceAudit from './ComplianceAudit.vue';

import { useFinanceStore } from '../stores/financeStore';

// Tabs: add Dashboard as default
const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-gauge', component: null },
  { id: 'general-ledger', label: 'General Ledger', icon: 'fas fa-book', component: GeneralLedger },
  { id: 'accounts-payable', label: 'Accounts Payable', icon: 'fas fa-credit-card', component: AccountsPayable },
  { id: 'accounts-receivable', label: 'Accounts Receivable', icon: 'fas fa-hand-holding-usd', component: AccountsReceivable },
  { id: 'cash-flow', label: 'Cash Flow', icon: 'fas fa-chart-line', component: CashFlow },
  { id: 'fixed-assets', label: 'Fixed Assets', icon: 'fas fa-industry', component: FixedAssets },
  { id: 'reporting', label: 'Reporting', icon: 'fas fa-file-alt', component: Reporting },
  { id: 'budgeting', label: 'Budgeting', icon: 'fas fa-chart-pie', component: BudgetingForecasting },
  { id: 'compliance', label: 'Compliance', icon: 'fas fa-shield-alt', component: ComplianceAudit },
  { id: 'tax-management', label: 'Tax Management', icon: 'fas fa-file-invoice-dollar', component: TaxManagement },
];

const activeTab = ref('dashboard');
const activeInfo = ref(1);

const activeComponent = computed(() => {
  if (activeTab.value === 'dashboard') return null;
  const tab = tabs.find(t => t.id === activeTab.value);
  return tab ? tab.component : GeneralLedger;
});

// Dashboard data (KPIs and lists)
const store = useFinanceStore();

const currentPeriod = computed(() => store.currentPeriod);

const journalEntriesCount = computed(() => {
  return store.journalEntries.filter(e => e.period === currentPeriod.value).length;
});

const receivablesOutstanding = computed(() => {
  return store.receivables.reduce((sum, r) => sum + Math.max(0, (Number(r.amount)||0) - (Number(r.received_amount)||0)), 0);
});

const payablesOutstanding = computed(() => {
  return store.payables.reduce((sum, p) => sum + Math.max(0, (Number(p.amount)||0) - (Number(p.paid_amount)||0)), 0);
});

const netCashThisPeriod = computed(() => {
  // inflow positive, outflow negative for current period
  const [y,m] = String(currentPeriod.value || '').split('-');
  const start = y && m ? new Date(parseInt(y), parseInt(m)-1) : null;
  const end   = y && m ? new Date(parseInt(y), parseInt(m)) : null;
  return store.cashFlowTransactions.reduce((sum, t) => {
    const d = new Date(t.transaction_date);
    const inPeriod = start && end ? (d >= start && d < end) : true;
    if (!inPeriod) return sum;
    const amt = Number(t.amount)||0;
    return sum + (t.type === 'inflow' ? amt : -amt);
  }, 0);
});

const recentJournalEntries = computed(() => {
  return [...store.journalEntries]
    .sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0,5);
});

function daysDiff(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  return Math.floor((now - d) / (1000*60*60*24));
}

const overdueAP = computed(() => {
  const today = new Date();
  return store.payables
    .filter(p => p.status !== 'paid' && new Date(p.due_date) < today)
    .sort((a,b) => new Date(a.due_date) - new Date(b.due_date))
    .slice(0,5);
});

const overdueAR = computed(() => {
  const today = new Date();
  return store.receivables
    .filter(r => r.status !== 'paid' && new Date(r.due_date) < today)
    .sort((a,b) => new Date(a.due_date) - new Date(b.due_date))
    .slice(0,5);
});

const cashByCategory = computed(() => {
  const cat = {};
  const [y,m] = String(currentPeriod.value || '').split('-');
  const start = y && m ? new Date(parseInt(y), parseInt(m)-1) : null;
  const end   = y && m ? new Date(parseInt(y), parseInt(m)) : null;
  store.cashFlowTransactions.forEach(t => {
    const d = new Date(t.transaction_date);
    const inPeriod = start && end ? (d >= start && d < end) : true;
    if (!inPeriod) return;
    const delta = (t.type === 'inflow' ? 1 : -1) * (Number(t.amount)||0);
    cat[t.category_name] = (cat[t.category_name] || 0) + delta;
  });
  // return top 5 categories by abs value
  return Object.entries(cat)
    .sort((a,b) => Math.abs(b[1]) - Math.abs(a[1]))
    .slice(0,5)
    .map(([name, value]) => ({ name, value }));
});

function fmt(n){ return new Intl.NumberFormat('en-US',{ style:'currency', currency:'USD'}).format(n||0); }
function shortDate(d){ return new Date(d).toLocaleDateString(); }
</script>

<template>
  <div class="finance-page">


    <div class="grid grid-cols-12 gap-6 mt-8 text-black">

    <!-- Info box section1-->
    <div class="col-span-12 lg:col-span-6 xl:col-span-4 ">
      <div class="mb-6 col-span-1">
        <div @click="activeInfo = !activeInfo" class="rounded-xl overflow-hidden  border-gray-200 " :class="activeInfo ? 'border bg-indigo-100' : 'text-gray-700'">
          <div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2 ">
            <h2 class=" font-semibold ">ERP Finance Module v1.0.1</h2>
          </div>

            <div v-if="activeInfo" class="bg-white px-6 py-5 h-64 overflow-scroll">

              <!-- ERP Finance Module -->
              <p class="text-gray-700 mb-3">
                This module provides comprehensive financial management capabilities including:
              </p>
              <ul class="text-gray-600 list-disc ml-5 space-y-1">
                <li>General Ledger with journal entries and trial balance</li>
                <li>Accounts Payable with vendor management and aging analysis</li>
                <li>Accounts Receivable with customer management and aging analysis</li>
                <li>Cash Flow tracking with categorization</li>
                <li>Tax Management with compliance tracking</li>
              </ul>

            </div>

        </div>
      </div>
    </div>


    <!-- Info box section2-->
    <div class="col-span-12 lg:col-span-6 xl:col-span-4">
      <div class="mb-6 col-span-1">
        <div @click="activeInfo = !activeInfo" class="rounded-xl overflow-hidden  border-gray-200" :class="activeInfo ? 'border bg-indigo-100' : 'text-gray-700'">
          <div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2">
            <h2 class="">What's New?</h2>
          </div>

            <div v-if="activeInfo" class="bg-white px-6 py-5 h-64 overflow-scroll ">

              <!-- What's new / updates -->
              <p class="text-gray-700 mb-1 font-bold">
                v1.01 <span class="ml-16 font-normal text-xs">11-aug-2025</span> 
              </p>

              <ul class="text-gray-600 list-disc ml-5 space-y-1">
                <li>Dashboard overview (KPIs, recent entries, overdue AP/AR, cash by category)</li>
                <li>Fixed Assets (register assets, straight-line depreciation posted to GL)</li>
                <li>Reporting (Income Statement, Balance Sheet, Cash Flow) with CSV export</li>
                <li>Budgeting & Forecasting (budgets, variance vs actual per account)</li>
                <li>Compliance & Audit (audit logs, basic segregation-of-duties check)</li>
                <li>API ready: endpoints for assets, budgets, audit; seeders for accounts/periods/categories</li>
                <li>Improved GL validation and period close (debits must equal credits)</li>
              </ul>

              <!-- What's new / updates -->
              <p class="text-gray-700 mb-2 mt-6 font-bold">
                v1.02 <span class="ml-16 font-normal text-xs">13-aug-2025</span> 
              </p>

              <ul class="text-gray-600 list-disc ml-5 space-y-1">
                <li>Dependencies</li>
              </ul>
            </div>

        </div>
      </div>
    </div>


    <!-- Info box section3-->
    <div class="col-span-12 lg:col-span-6 xl:col-span-4">
      <div class="mb-6 col-span-1">
        <div @click="activeInfo = !activeInfo" class="rounded-xl overflow-hidden  border-gray-200" :class="activeInfo ? 'border bg-indigo-100' : 'text-gray-700'">
          <div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2">
            <h2 class="">Shared Entities</h2>
          </div>

            <div v-if="activeInfo" class="bg-white px-6 py-5 h-64 overflow-scroll ">
              <!-- What's are the shared entities? include them here!! -->
              <p class="text-gray-700 mb-1 font-bold">
                System  <span class="ml-16 font-normal text-xs"></span> 
              </p>
              These are system entities
              ../home/business_services
              ../project/projects

            </div>
        </div>
      </div>
    </div>

    </div>
      <!-- Horizontal Bar Navigation -->
      <div class="flex flex-row lg:flex-col gap-2 overflow-x-auto py-2">
        <div class="flex gap-1">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium',
              activeTab === tab.id ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-50'
            ]"
          >
            <i :class="tab.icon"></i>
            <span class="truncate">{{ tab.label }}</span>
          </button>
        </div>
    </div>

    <div class="grid grid-cols-12 gap-6 mt-8">

      <!-- Main content -->
      <main class="col-span-12 lg:col-span-12">
        <!-- Dashboard -->
        <section v-if="activeTab === 'dashboard'" class="space-y-6">
          <!-- KPI cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div class="rounded-xl border border-gray-200 bg-white p-4">
              <div class="text-xs text-gray-500">Current Period</div>
              <div class="mt-1 text-2xl font-semibold text-gray-900">{{ currentPeriod }}</div>
              <div class="mt-2 text-sm text-gray-500">Journal Entries: {{ journalEntriesCount }}</div>
            </div>

            <div class="rounded-xl border border-gray-200 bg-white p-4">
              <div class="text-xs text-gray-500">Receivables Outstanding</div>
              <div class="mt-1 text-2xl font-semibold text-emerald-600">{{ fmt(receivablesOutstanding) }}</div>
              <div class="mt-2 text-sm text-gray-500">Top overdue AR below</div>
            </div>

            <div class="rounded-xl border border-gray-200 bg-white p-4">
              <div class="text-xs text-gray-500">Payables Outstanding</div>
              <div class="mt-1 text-2xl font-semibold text-rose-600">{{ fmt(payablesOutstanding) }}</div>
              <div class="mt-2 text-sm text-gray-500">Top overdue AP below</div>
            </div>

            <div class="rounded-xl border border-gray-200 bg-white p-4">
              <div class="text-xs text-gray-500">Net Cash (Period)</div>
              <div class="mt-1 text-2xl font-semibold text-indigo-600">{{ fmt(netCashThisPeriod) }}</div>
              <div class="mt-2 text-sm text-gray-500">Inflow − Outflow</div>
            </div>
          </div>

          <!-- Grids: recent JE, overdue AP/AR, cash categories -->
          <div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <!-- Recent Journal Entries -->
            <div class="rounded-xl border border-gray-200 bg-white p-4">
              <div class="mb-3 flex items-center justify-between">
                <h3 class="font-semibold text-gray-900">Recent Journal Entries</h3>
                <button class="text-sm text-indigo-600" @click="activeTab = 'general-ledger'">Open GL</button>
              </div>
              <div class="divide-y">
                <div v-for="e in recentJournalEntries" :key="e.id" class="py-3">
                  <div class="flex items-center justify-between">
                    <div class="font-medium text-gray-800">{{ e.description }}</div>
                    <div class="text-xs text-gray-500">{{ shortDate(e.timestamp) }}</div>
                  </div>
                  <div class="mt-1 text-xs text-gray-500">Lines: {{ e.lines.length }} • Period: {{ e.period }}</div>
                </div>
                <div v-if="recentJournalEntries.length === 0" class="py-6 text-center text-sm text-gray-500 italic">No entries</div>
              </div>
            </div>

            <!-- Overdue AP -->
            <div class="rounded-xl border border-gray-200 bg-white p-4">
              <div class="mb-3 flex items-center justify-between">
                <h3 class="font-semibold text-gray-900">Overdue Payables</h3>
                <button class="text-sm text-indigo-600" @click="activeTab = 'accounts-payable'">Open AP</button>
              </div>
              <div class="divide-y">
                <div v-for="p in overdueAP" :key="p.id" class="py-3">
                  <div class="flex items-center justify-between">
                    <div class="font-medium text-gray-800">{{ p.vendor_name }} — {{ p.invoice_no }}</div>
                    <div class="text-xs text-rose-600 font-semibold">+{{ daysDiff(p.due_date) }}d</div>
                  </div>
                  <div class="mt-1 text-xs text-gray-500">Due: {{ shortDate(p.due_date) }} • Outstanding: {{ fmt((Number(p.amount)||0) - (Number(p.paid_amount)||0)) }}</div>
                </div>
                <div v-if="overdueAP.length === 0" class="py-6 text-center text-sm text-gray-500 italic">No overdue payables</div>
              </div>
            </div>

            <!-- Overdue AR -->
            <div class="rounded-xl border border-gray-200 bg-white p-4">
              <div class="mb-3 flex items-center justify-between">
                <h3 class="font-semibold text-gray-900">Overdue Receivables</h3>
                <button class="text-sm text-indigo-600" @click="activeTab = 'accounts-receivable'">Open AR</button>
              </div>
              <div class="divide-y">
                <div v-for="r in overdueAR" :key="r.id" class="py-3">
                  <div class="flex items-center justify-between">
                    <div class="font-medium text-gray-800">{{ r.customer_name }} — {{ r.invoice_no }}</div>
                    <div class="text-xs text-rose-600 font-semibold">+{{ daysDiff(r.due_date) }}d</div>
                  </div>
                  <div class="mt-1 text-xs text-gray-500">Due: {{ shortDate(r.due_date) }} • Outstanding: {{ fmt((Number(r.amount)||0) - (Number(r.received_amount)||0)) }}</div>
                </div>
                <div v-if="overdueAR.length === 0" class="py-6 text-center text-sm text-gray-500 italic">No overdue receivables</div>
              </div>
            </div>
          </div>

          <!-- Cash by Category -->
          <div class="rounded-xl border border-gray-200 bg-white p-4">
            <div class="mb-3 flex items-center justify-between">
              <h3 class="font-semibold text-gray-900">Cash Flow by Category ({{ currentPeriod }})</h3>
              <button class="text-sm text-indigo-600" @click="activeTab = 'cash-flow'">Open Cash Flow</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div v-for="row in cashByCategory" :key="row.name" class="rounded-lg border p-3">
                <div class="text-sm text-gray-500">{{ row.name }}</div>
                <div class="mt-1 text-lg font-semibold" :class="row.value>=0 ? 'text-emerald-600' : 'text-rose-600'">{{ fmt(row.value) }}</div>
              </div>
              <div v-if="cashByCategory.length === 0" class="text-sm text-gray-500 italic p-3">No cash flow data</div>
            </div>
          </div>
        </section>

        <!-- Module content -->
        <section v-else>
          <div class="overflow-x-auto">
            <component :is="activeComponent" />
          </div>
        </section>

      </main>
    </div>
  </div>
</template>

<style scoped>
.finance-page {
  min-height: 100vh;
  padding: 0;
  margin: 24px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Keep existing styles for tabs/cards when needed (dashboard uses Tailwind utilities) */
</style>