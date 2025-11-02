<script setup>
import { ref, onMounted } from 'vue';
import { useAccountsPayable } from '../composables/useAccountsPayable';

const {
  isLoading,
  selectedVendor,
  dateRange,
  payables,
  summary,
  createPayable,
  recordPayment,
  calculateDaysOverdue,
  init
} = useAccountsPayable();

// UI state
const showNewPayableForm = ref(false);
const showPaymentForm = ref(false);
const selectedPayable = ref(null);

// Form models
const newPayable = ref({
  vendor_id: '',
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

// Mock vendors data (replace with actual data from your backend)
const vendors = ref([
  { id: 1, name: 'Vendor 1' },
  { id: 2, name: 'Vendor 2' }
]);

function isOverdue(payable) {
  return calculateDaysOverdue(payable.due_date) > 0;
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

async function handleNewPayable() {
  await createPayable(newPayable.value);
  showNewPayableForm.value = false;
  newPayable.value = {
    vendor_id: '',
    invoice_no: '',
    invoice_date: '',
    due_date: '',
    amount: 0,
    notes: ''
  };
}

function openPaymentForm(payable) {
  selectedPayable.value = payable;
  payment.value.amount = payable.amount - payable.paid_amount;
  showPaymentForm.value = true;
}

function closePaymentForm() {
  showPaymentForm.value = false;
  selectedPayable.value = null;
  payment.value = {
    date: new Date().toISOString().split('T')[0],
    amount: 0,
    reference_no: '',
    notes: ''
  };
}

async function handlePayment() {
  await recordPayment(selectedPayable.value.id, payment.value);
  closePaymentForm();
}

async function exportPayables() {
  // Implement export functionality
  console.log('Export payables');
}

onMounted(async () => {
  await init();
});
</script>
<template>
  <div class="accounts-payable">
    <header class="ap-header">
      <h1>Accounts Payable</h1>
      <div class="ap-filters">
        <div class="date-range">
          <label>Period:</label>
          <input type="date" v-model="dateRange.start" />
          <span>to</span>
          <input type="date" v-model="dateRange.end" />
        </div>
        
        <div class="vendor-filter">
          <label>Vendor:</label>
          <select v-model="selectedVendor">
            <option value="">All Vendors</option>
            <option v-for="vendor in vendors" :key="vendor.id" :value="vendor.id">
              {{ vendor.name }}
            </option>
          </select>
        </div>
      </div>
    </header>

    <div class="ap-summary">
      <div class="summary-card">
        <h3>Total Payables</h3>
        <p>{{ formatCurrency(summary.total) }}</p>
      </div>
      <div class="summary-card">
        <h3>Paid Amount</h3>
        <p>{{ formatCurrency(summary.paid) }}</p>
      </div>
      <div class="summary-card">
        <h3>Outstanding</h3>
        <p>{{ formatCurrency(summary.outstanding) }}</p>
      </div>
    </div>

    <div class="ap-aging">
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

    <div class="ap-content">
      <div class="toolbar">
        <button @click="showNewPayableForm = true">New Payable</button>
        <button @click="exportPayables">Export</button>
      </div>

      <div v-if="payables.length > 0" class="payables-list">
        <table>
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Vendor</th>
              <th>Date</th>
              <th>Due Date</th>
              <th>Amount</th>
              <th>Paid</th>
              <th>Outstanding</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="payable in payables" :key="payable.id" 
                :class="{ 'overdue': isOverdue(payable) }">
              <td>{{ payable.invoice_no }}</td>
              <td>{{ payable.vendor_name }}</td>
              <td>{{ formatDate(payable.invoice_date) }}</td>
              <td>{{ formatDate(payable.due_date) }}</td>
              <td>{{ formatCurrency(payable.amount) }}</td>
              <td>{{ formatCurrency(payable.paid_amount) }}</td>
              <td>{{ formatCurrency(payable.amount - payable.paid_amount) }}</td>
              <td>{{ payable.status }}</td>
              <td>
                <button @click="openPaymentForm(payable)" 
                        :disabled="payable.status === 'paid'">
                  Record Payment
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="no-payables">
        No payables found for the selected criteria
      </div>
    </div>

    <!-- New Payable Form Modal -->
    <div v-if="showNewPayableForm" class="modal-overlay">
      <div class="modal-content">
        <h3>New Payable</h3>
        <form @submit.prevent="handleNewPayable">
          <div class="form-group">
            <label>Vendor</label>
            <select v-model="newPayable.vendor_id" required>
              <option value="">Select Vendor</option>
              <option v-for="vendor in vendors" :key="vendor.id" :value="vendor.id">
                {{ vendor.name }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label>Invoice Number</label>
            <input v-model="newPayable.invoice_no" required />
          </div>

          <div class="form-group">
            <label>Invoice Date</label>
            <input type="date" v-model="newPayable.invoice_date" required />
          </div>

          <div class="form-group">
            <label>Due Date</label>
            <input type="date" v-model="newPayable.due_date" required />
          </div>

          <div class="form-group">
            <label>Amount</label>
            <input type="number" v-model="newPayable.amount" step="0.01" required />
          </div>

          <div class="form-group">
            <label>Notes</label>
            <textarea v-model="newPayable.notes"></textarea>
          </div>

          <div class="form-actions">
            <button type="submit" :disabled="isLoading">Save</button>
            <button type="button" @click="showNewPayableForm = false">Cancel</button>
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
                   :max="selectedPayable.amount - selectedPayable.paid_amount"
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
.accounts-payable {
  padding: 1rem;
}

.ap-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.ap-filters {
  display: flex;
  gap: 1rem;
}

.ap-summary {
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
