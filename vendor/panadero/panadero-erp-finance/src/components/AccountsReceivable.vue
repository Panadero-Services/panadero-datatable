
<script setup>
import { ref, onMounted } from 'vue';
import { useAccountsReceivable } from '../composables/useAccountsReceivable';

const {
  isLoading,
  selectedCustomer,
  dateRange,
  receivables,
  summary,
  createReceivable,
  recordPayment,
  calculateDaysOverdue,
  init
} = useAccountsReceivable();

// UI state
const showNewReceivableForm = ref(false);
const showPaymentForm = ref(false);
const selectedReceivable = ref(null);

// Form models
const newReceivable = ref({
  customer_id: '',
  invoice_no: '',
  invoice_date: '',
  due_date: '',
  amount: 0,
  notes: ''
});

const payment = ref({
  date: new Date().toISOString().split('T')[0],
  amount: 0,
  reference_no: '',
  notes: ''
});

// Mock customers data (replace with actual data from your backend)
const customers = ref([
  { id: 1, name: 'Customer 1' },
  { id: 2, name: 'Customer 2' }
]);

function isOverdue(receivable) {
  return calculateDaysOverdue(receivable.due_date) > 0;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

async function handleNewReceivable() {
  await createReceivable(newReceivable.value);
  showNewReceivableForm.value = false;
  newReceivable.value = {
    customer_id: '',
    invoice_no: '',
    invoice_date: '',
    due_date: '',
    amount: 0,
    notes: ''
  };
}

function openPaymentForm(receivable) {
  selectedReceivable.value = receivable;
  payment.value.amount = receivable.amount - receivable.received_amount;
  showPaymentForm.value = true;
}

function closePaymentForm() {
  showPaymentForm.value = false;
  selectedReceivable.value = null;
  payment.value = {
    date: new Date().toISOString().split('T')[0],
    amount: 0,
    reference_no: '',
    notes: ''
  };
}

async function handlePayment() {
  await recordPayment(selectedReceivable.value.id, payment.value);
  closePaymentForm();
}

async function exportReceivables() {
  // Implement export functionality
  console.log('Export receivables');
}

onMounted(async () => {
  await init();
});
</script>

<template>
  <div class="accounts-receivable">
    <header class="ar-header">
      <h1>Accounts Receivable</h1>
      <div class="ar-filters">
        <div class="date-range">
          <label>Period:</label>
          <input type="date" v-model="dateRange.start" />
          <span>to</span>
          <input type="date" v-model="dateRange.end" />
        </div>
        
        <div class="customer-filter">
          <label>Customer:</label>
          <select v-model="selectedCustomer">
            <option value="">All Customers</option>
            <option v-for="customer in customers" :key="customer.id" :value="customer.id">
              {{ customer.name }}
            </option>
          </select>
        </div>
      </div>
    </header>

    <div class="ar-summary">
      <div class="summary-card">
        <h3>Total Receivables</h3>
        <p>{{ formatCurrency(summary.total) }}</p>
      </div>
      <div class="summary-card">
        <h3>Received Amount</h3>
        <p>{{ formatCurrency(summary.received) }}</p>
      </div>
      <div class="summary-card">
        <h3>Outstanding</h3>
        <p>{{ formatCurrency(summary.outstanding) }}</p>
      </div>
    </div>

    <div class="ar-aging">
      <h2>Aging Summary</h2>
      <div class="aging-grid">
        <div class="aging-card">
          <h4>Current</h4>
          <p>{{ formatCurrency(summary.aging.current) }}</p>
        </div>
        <div class="aging-card">
          <h4>1-30 Days</h4>
          <p>{{ formatCurrency(summary.aging['30days']) }}</p>
        </div>
        <div class="aging-card">
          <h4>31-60 Days</h4>
          <p>{{ formatCurrency(summary.aging['60days']) }}</p>
        </div>
        <div class="aging-card">
          <h4>61-90 Days</h4>
          <p>{{ formatCurrency(summary.aging['90days']) }}</p>
        </div>
        <div class="aging-card">
          <h4>>90 Days</h4>
          <p>{{ formatCurrency(summary.aging.older) }}</p>
        </div>
      </div>
    </div>

    <div class="ar-content">
      <div class="toolbar">
        <button @click="showNewReceivableForm = true">New Receivable</button>
        <button @click="exportReceivables">Export</button>
      </div>

      <div v-if="receivables.length > 0" class="receivables-list">
        <table>
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Due Date</th>
              <th>Amount</th>
              <th>Received</th>
              <th>Outstanding</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="receivable in receivables" :key="receivable.id" 
                :class="{ 'overdue': isOverdue(receivable) }">
              <td>{{ receivable.invoice_no }}</td>
              <td>{{ receivable.customer_name }}</td>
              <td>{{ formatDate(receivable.invoice_date) }}</td>
              <td>{{ formatDate(receivable.due_date) }}</td>
              <td>{{ formatCurrency(receivable.amount) }}</td>
              <td>{{ formatCurrency(receivable.received_amount) }}</td>
              <td>{{ formatCurrency(receivable.amount - receivable.received_amount) }}</td>
              <td>{{ receivable.status }}</td>
              <td>
                <button @click="openPaymentForm(receivable)" 
                        :disabled="receivable.status === 'paid'">
                  Record Payment
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="no-receivables">
        No receivables found for the selected criteria
      </div>
    </div>

    <!-- New Receivable Form Modal -->
    <div v-if="showNewReceivableForm" class="modal-overlay">
      <div class="modal-content">
        <h3>New Receivable</h3>
        <form @submit.prevent="handleNewReceivable">
          <div class="form-group">
            <label>Customer</label>
            <select v-model="newReceivable.customer_id" required>
              <option value="">Select Customer</option>
              <option v-for="customer in customers" :key="customer.id" :value="customer.id">
                {{ customer.name }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label>Invoice Number</label>
            <input v-model="newReceivable.invoice_no" required />
          </div>

          <div class="form-group">
            <label>Invoice Date</label>
            <input type="date" v-model="newReceivable.invoice_date" required />
          </div>

          <div class="form-group">
            <label>Due Date</label>
            <input type="date" v-model="newReceivable.due_date" required />
          </div>

          <div class="form-group">
            <label>Amount</label>
            <input type="number" v-model="newReceivable.amount" step="0.01" required />
          </div>

          <div class="form-group">
            <label>Notes</label>
            <textarea v-model="newReceivable.notes"></textarea>
          </div>

          <div class="form-actions">
            <button type="submit" :disabled="isLoading">Save</button>
            <button type="button" @click="showNewReceivableForm = false">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Payment Form Modal -->
    <div v-if="showPaymentForm" class="modal-overlay">
      <div class="modal-content">
        <h3>Record Payment</h3>
        <form @submit.prevent="handlePayment">
          <div class="form-group">
            <label>Payment Date</label>
            <input type="date" v-model="payment.date" required />
          </div>

          <div class="form-group">
            <label>Amount</label>
            <input type="number" 
                   v-model="payment.amount" 
                   :max="selectedReceivable.amount - selectedReceivable.received_amount"
                   step="0.01" 
                   required />
          </div>

          <div class="form-group">
            <label>Reference Number</label>
            <input v-model="payment.reference_no" required />
          </div>

          <div class="form-group">
            <label>Notes</label>
            <textarea v-model="payment.notes"></textarea>
          </div>

          <div class="form-actions">
            <button type="submit" :disabled="isLoading">Save</button>
            <button type="button" @click="closePaymentForm">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<style scoped>
.accounts-receivable {
  padding: 1rem;
}

.ar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.ar-filters {
  display: flex;
  gap: 1rem;
}

.ar-summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.summary-card {
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.aging-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.aging-card {
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.toolbar {
  margin-bottom: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.5rem;
  border: 1px solid #ddd;
  text-align: left;
}

tr.overdue {
  background-color: #fff3f3;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f5f5f5;
  cursor: pointer;
}

button:hover {
  background: #e5e5e5;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
