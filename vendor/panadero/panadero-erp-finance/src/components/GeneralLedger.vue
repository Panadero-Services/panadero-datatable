<script setup>
import { ref, onMounted, computed } from 'vue';
import { useGeneralLedger } from '../composables/useGeneralLedger';

const {
  isLoading,
  currentPeriod,
  journalEntries,
  trialBalance,
  postJournalEntry,
  closePeriod
} = useGeneralLedger();

const showNewEntryForm = ref(false);
const accounts = ref([
  'Cash',
  'Accounts Receivable',
  'Inventory',
  'Accounts Payable',
  'Revenue',
  'Expenses'
]);

const newEntry = ref({
  description: '',
  lines: [
    { account: '', type: 'debit', amount: 0 },
    { account: '', type: 'credit', amount: 0 }
  ]
});

// Reset form to initial state
function resetForm() {
  newEntry.value = {
    description: '',
    lines: [
      { account: '', type: 'debit', amount: 0 },
      { account: '', type: 'credit', amount: 0 }
    ]
  };
}

// Initialize form when opening
function openNewEntryForm() {
  showNewEntryForm.value = true;
  resetForm();
}

// Computed properties for balance validation
const totalDebits = computed(() => {
  return newEntry.value.lines
    .filter(line => line.type === 'debit')
    .reduce((sum, line) => sum + (parseFloat(line.amount) || 0), 0);
});

const totalCredits = computed(() => {
  return newEntry.value.lines
    .filter(line => line.type === 'credit')
    .reduce((sum, line) => sum + (parseFloat(line.amount) || 0), 0);
});

const balanceDifference = computed(() => {
  return Math.abs(totalDebits.value - totalCredits.value);
});

const isBalanced = computed(() => {
  return Math.abs(totalDebits.value - totalCredits.value) < 0.01; // Allow for small rounding differences
});

const canSubmit = computed(() => {
  return newEntry.value.description.trim() !== '' && 
         newEntry.value.lines.every(line => line.account && line.amount > 0);
});

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

function addLine() {
  newEntry.value.lines.push({ account: '', type: 'debit', amount: 0 });
}

function removeLine(index) {
  newEntry.value.lines.splice(index, 1);
}

async function handleNewEntry() {
  try {
    await postJournalEntry(newEntry.value);
    showNewEntryForm.value = false;
    resetForm();
    alert('Journal entry posted successfully!');
  } catch (error) {
    alert(`Error posting journal entry: ${error.message}`);
    console.error('Post journal entry error:', error);
  }
}

async function handleClosePeriod() {
  if (confirm('Are you sure you want to close the current period?')) {
    try {
      const nextPeriod = await closePeriod(currentPeriod.value);
      alert(`Period ${currentPeriod.value} closed successfully. New period: ${nextPeriod}`);
    } catch (error) {
      alert(`Error closing period: ${error.message}`);
      console.error('Close period error:', error);
    }
  }
}
</script>
<template>
  <div class="general-ledger">
    <header class="gl-header">
      <h1>General Ledger</h1>
      <div class="period-info">
        Current Period: {{ currentPeriod }}
        <button @click="handleClosePeriod" :disabled="isLoading">
          Close Period
        </button>
      </div>
    </header>

    <div class="gl-content">
      <div class="journal-entries">
        <h2>Journal Entries</h2>
        <div class="toolbar">
          <button @click="openNewEntryForm">New Entry</button>
        </div>
        
        <div v-if="journalEntries.length > 0" class="entries-list">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Account</th>
                <th>Debit</th>
                <th>Credit</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="entry in journalEntries" :key="entry.id">
                <tr v-for="line in entry.lines" :key="line.id">
                  <td>{{ entry.timestamp }}</td>
                  <td>{{ entry.description }}</td>
                  <td>{{ line.account }}</td>
                  <td>{{ line.type === 'debit' ? line.amount : '' }}</td>
                  <td>{{ line.type === 'credit' ? line.amount : '' }}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <div v-else class="no-entries">
          No journal entries for this period
        </div>
      </div>

      <div class="trial-balance">
        <h2>Trial Balance</h2>

        <div class="toolbar">
          <button @click="handleClosePeriod">Close Period</button>
        </div>


        <table v-if="Object.keys(trialBalance).length > 0">
          <thead>
            <tr>
              <th>Account</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(balance, account) in trialBalance" :key="account">
              <td>{{ account }}</td>
              <td>{{ balance }}</td>
            </tr>
          </tbody>
        </table>
        <div v-else class="no-balance">
          No trial balance available
        </div>
      </div>
    </div>

    <div v-if="showNewEntryForm" class="entry-form-overlay">
      <div class="entry-form">
        <h3>New Journal Entry</h3>
        <form @submit.prevent="handleNewEntry">
          <div class="form-group">
            <label>Description</label>
            <input v-model="newEntry.description" required />
          </div>
          
          <div class="entry-lines">
            <div v-for="(line, index) in newEntry.lines" :key="index" class="entry-line">
              <select v-model="line.account" required>
                <option value="">Select Account</option>
                <option v-for="acc in accounts" :key="acc">{{ acc }}</option>
              </select>
              <select v-model="line.type" required>
                <option value="debit">Debit</option>
                <option value="credit">Credit</option>
              </select>
              <input type="number" v-model="line.amount" step="0.01" required />
              <button type="button" @click="removeLine(index)" v-if="newEntry.lines.length > 2">
                Remove
              </button>
            </div>
          </div>
          
          <button type="button" @click="addLine">Add Line</button>
          
          <!-- Balance Validation Display -->
          <div class="balance-validation" :class="{ 'balanced': isBalanced, 'unbalanced': !isBalanced }">
            <div class="balance-row">
              <span>Total Debits: {{ formatCurrency(totalDebits) }}</span>
              <span>Total Credits: {{ formatCurrency(totalCredits) }}</span>
            </div>
            <div class="balance-difference" v-if="!isBalanced">
              Difference: {{ formatCurrency(balanceDifference) }}
            </div>
            <div class="balance-status">
              Status: <span :class="{ 'balanced': isBalanced, 'unbalanced': !isBalanced }">
                {{ isBalanced ? 'Balanced ✓' : 'Unbalanced ✗' }}
              </span>
            </div>
          </div>
          
          <div class="form-actions">
            <button type="submit" :disabled="isLoading || !isBalanced || !canSubmit">Save Entry</button>
            <button type="button" @click="showNewEntryForm = false">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.general-ledger {
  padding: 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.gl-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f3f4f6;
}

.gl-header h1 {
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.gl-content {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Changed from 2fr 1fr to 1fr 1fr for equal columns */
  gap: 2rem;
  align-items: start; /* Ensure both columns start at the same top level */
}

.journal-entries,
.trial-balance {
  display: flex;
  flex-direction: column;
  min-height: 400px; /* Ensure minimum height for consistent alignment */
}

.journal-entries h2,
.trial-balance h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 1rem 0;
  height: 2.5rem; /* Fixed height for headers to ensure alignment */
  display: flex;
  align-items: center;
}

.toolbar {
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1rem;
  height: 3.5rem; /* Fixed height for toolbar to ensure alignment */
  align-items: center;
}

.toolbar button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.toolbar button:first-child {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
}

.toolbar button:first-child:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.toolbar button:last-child {
  background: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
}

.toolbar button:last-child:hover {
  background: #e5e7eb;
}

.entries-list table,
.trial-balance table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

th, td {
  border: 1px solid #e5e7eb;
  padding: 1rem;
  text-align: left;
  font-size: 0.875rem;
}

th {
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  color: #374151;
  font-weight: 600;
  font-size: 0.875rem;
}

.no-entries,
.no-balance {
  text-align: center;
  padding: 3rem 2rem;
  color: #6b7280;
  font-style: italic;
  background: #f9fafb;
  border-radius: 8px;
  border: 2px dashed #d1d5db;
  flex: 1; /* Take remaining space */
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px; /* Minimum height for empty state */
}

.entry-form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.entry-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.entry-form h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 1.5rem 0;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #374151;
  font-size: 0.875rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.entry-lines {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.entry-line {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
}

.entry-line:last-child {
  margin-bottom: 0;
}

.entry-line button {
  padding: 0.5rem;
  border: none;
  background: #ef4444;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.75rem;
  transition: background-color 0.2s ease;
}

.entry-line button:hover {
  background: #dc2626;
}

.balance-validation {
  margin: 1.5rem 0;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid;
  font-size: 0.875rem;
}

.balance-validation.balanced {
  background-color: #f0fdf4;
  border-color: #10b981;
}

.balance-validation.unbalanced {
  background-color: #fef2f2;
  border-color: #ef4444;
}

.balance-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
}

.balance-difference {
  text-align: center;
  margin-bottom: 0.75rem;
  color: #ef4444;
  font-weight: 600;
  font-size: 1rem;
}

.balance-status {
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
}

.balance-status .balanced {
  color: #10b981;
}

.balance-status .unbalanced {
  color: #ef4444;
}

.form-actions {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.form-actions button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-actions button:first-child {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
}

.form-actions button:first-child:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.form-actions button:first-child:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.form-actions button:last-child {
  background: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
}

.form-actions button:last-child:hover {
  background: #e5e7eb;
}

/* Responsive Design */
@media (max-width: 768px) {
  .general-ledger {
    padding: 1rem;
  }
  
  .gl-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .entry-line {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .entry-form {
    padding: 1.5rem;
    margin: 1rem;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .form-actions button {
    width: 100%;
  }
}
</style>