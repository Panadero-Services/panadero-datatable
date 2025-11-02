<template>
  <div class="tax-management">
    <header class="tm-header">
      <h1>Tax Management</h1>
      <div class="tm-filters">
        <div class="period-filter">
          <label>Tax Period:</label>
          <select v-model="selectedPeriod">
            <option value="">All Periods</option>
            <option v-for="period in availablePeriods" :key="period" :value="period">
              {{ period }}
            </option>
          </select>
        </div>
        
        <div class="tax-type-filter">
          <label>Tax Type:</label>
          <select v-model="selectedTaxType">
            <option value="">All Types</option>
            <option value="VAT">VAT</option>
            <option value="income">Income Tax</option>
            <option value="payroll">Payroll Tax</option>
            <option value="property">Property Tax</option>
          </select>
        </div>
      </div>
    </header>

    <div class="tm-summary">
      <div v-for="(taxSummary, taxType) in summary" :key="taxType" class="tax-summary-card">
        <h3>{{ taxType }} Tax</h3>
        <div class="summary-stats">
          <div class="stat">
            <label>Total Amount:</label>
            <span>{{ formatCurrency(taxSummary.total) }}</span>
          </div>
          <div class="stat">
            <label>Filed:</label>
            <span>{{ formatCurrency(taxSummary.filed) }}</span>
          </div>
          <div class="stat">
            <label>Pending:</label>
            <span>{{ formatCurrency(taxSummary.pending) }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="tm-content">
      <div class="toolbar">
        <button @click="showNewTaxRecordForm = true">New Tax Record</button>
        <button @click="exportTaxRecords">Export</button>
      </div>

      <div v-if="taxRecords.length > 0" class="tax-records-list">
        <table>
          <thead>
            <tr>
              <th>Tax Type</th>
              <th>Period</th>
              <th>Taxable Amount</th>
              <th>Tax Amount</th>
              <th>Filing Due</th>
              <th>Payment Due</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in taxRecords" :key="record.id" 
                :class="{ 'overdue': isOverdue(record) }">
              <td>{{ record.tax_type }}</td>
              <td>{{ record.tax_period }}</td>
              <td>{{ formatCurrency(record.taxable_amount) }}</td>
              <td>{{ formatCurrency(record.tax_amount) }}</td>
              <td>{{ formatDate(record.filing_due_date) }}</td>
              <td>{{ formatDate(record.payment_due_date) }}</td>
              <td>
                <span :class="`status-${record.status}`">{{ record.status }}</span>
              </td>
              <td>
                <button v-if="record.status === 'pending'" 
                        @click="openFilingForm(record)">
                  File Return
                </button>
                <button v-if="record.status === 'filed'" 
                        @click="openPaymentForm(record)">
                  Record Payment
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="no-records">
        No tax records found for the selected criteria
      </div>
    </div>

    <!-- New Tax Record Form Modal -->
    <div v-if="showNewTaxRecordForm" class="modal-overlay">
      <div class="modal-content">
        <h3>New Tax Record</h3>
        <form @submit.prevent="handleNewTaxRecord">
          <div class="form-group">
            <label>Tax Type</label>
            <select v-model="newTaxRecord.tax_type" required>
              <option value="">Select Tax Type</option>
              <option value="VAT">VAT</option>
              <option value="income">Income Tax</option>
              <option value="payroll">Payroll Tax</option>
              <option value="property">Property Tax</option>
            </select>
          </div>

          <div class="form-group">
            <label>Tax Period</label>
            <input type="month" v-model="newTaxRecord.tax_period" required />
          </div>

          <div class="form-group">
            <label>Taxable Amount</label>
            <input type="number" v-model="newTaxRecord.taxable_amount" step="0.01" required />
          </div>

          <div class="form-group">
            <label>Tax Amount</label>
            <input type="number" v-model="newTaxRecord.tax_amount" step="0.01" required />
          </div>

          <div class="form-group">
            <label>Filing Due Date</label>
            <input type="date" v-model="newTaxRecord.filing_due_date" required />
          </div>

          <div class="form-group">
            <label>Payment Due Date</label>
            <input type="date" v-model="newTaxRecord.payment_due_date" required />
          </div>

          <div class="form-group">
            <label>Notes</label>
            <textarea v-model="newTaxRecord.notes"></textarea>
          </div>

          <div class="form-actions">
            <button type="submit" :disabled="isLoading">Save</button>
            <button type="button" @click="showNewTaxRecordForm = false">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Filing Form Modal -->
    <div v-if="showFilingForm" class="modal-overlay">
      <div class="modal-content">
        <h3>File Tax Return</h3>
        <form @submit.prevent="handleFiling">
          <div class="form-group">
            <label>Filing Date</label>
            <input type="date" v-model="filingDetails.filing_date" required />
          </div>

          <div class="form-group">
            <label>Return Reference</label>
            <input v-model="filingDetails.return_reference" required />
          </div>

          <div class="form-group">
            <label>Filing Method</label>
            <select v-model="filingDetails.filing_method" required>
              <option value="">Select Method</option>
              <option value="online">Online</option>
              <option value="mail">Mail</option>
              <option value="fax">Fax</option>
            </select>
          </div>

          <div class="form-group">
            <label>Notes</label>
            <textarea v-model="filingDetails.notes"></textarea>
          </div>

          <div class="form-actions">
            <button type="submit" :disabled="isLoading">File Return</button>
            <button type="button" @click="closeFilingForm">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Payment Form Modal -->
    <div v-if="showPaymentForm" class="modal-overlay">
      <div class="modal-content">
        <h3>Record Tax Payment</h3>
        <form @submit.prevent="handlePayment">
          <div class="form-group">
            <label>Payment Date</label>
            <input type="date" v-model="paymentDetails.payment_date" required />
          </div>

          <div class="form-group">
            <label>Payment Amount</label>
            <input type="number" 
                   v-model="paymentDetails.payment_amount" 
                   :max="selectedRecord.tax_amount"
                   step="0.01" 
                   required />
          </div>

          <div class="form-group">
            <label>Payment Method</label>
            <select v-model="paymentDetails.payment_method" required>
              <option value="">Select Method</option>
              <option value="bank_transfer">Bank Transfer</option>
              <option value="check">Check</option>
              <option value="credit_card">Credit Card</option>
              <option value="cash">Cash</option>
            </select>
          </div>

          <div class="form-group">
            <label>Reference Number</label>
            <input v-model="paymentDetails.reference_number" required />
          </div>

          <div class="form-group">
            <label>Notes</label>
            <textarea v-model="paymentDetails.notes"></textarea>
          </div>

          <div class="form-actions">
            <button type="submit" :disabled="isLoading">Record Payment</button>
            <button type="button" @click="closePaymentForm">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useTaxManagement } from '../composables/useTaxManagement';

const {
  isLoading,
  selectedPeriod,
  selectedTaxType,
  taxRecords,
  summary,
  availablePeriods,
  createTaxRecord,
  markTaxRecordAsFiled,
  markTaxRecordAsPaid,
  init
} = useTaxManagement();

// UI state
const showNewTaxRecordForm = ref(false);
const showFilingForm = ref(false);
const showPaymentForm = ref(false);
const selectedRecord = ref(null);

// Form models
const newTaxRecord = ref({
  tax_type: '',
  tax_period: '',
  taxable_amount: 0,
  tax_amount: 0,
  filing_due_date: '',
  payment_due_date: '',
  notes: ''
});

const filingDetails = ref({
  filing_date: new Date().toISOString().split('T')[0],
  return_reference: '',
  filing_method: '',
  notes: ''
});

const paymentDetails = ref({
  payment_date: new Date().toISOString().split('T')[0],
  payment_amount: 0,
  payment_method: '',
  reference_number: '',
  notes: ''
});

function isOverdue(record) {
  const today = new Date();
  const dueDate = new Date(record.payment_due_date);
  return today > dueDate && record.status !== 'paid';
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount || 0);
}

async function handleNewTaxRecord() {
  await createTaxRecord(newTaxRecord.value);
  showNewTaxRecordForm.value = false;
  newTaxRecord.value = {
    tax_type: '',
    tax_period: '',
    taxable_amount: 0,
    tax_amount: 0,
    filing_due_date: '',
    payment_due_date: '',
    notes: ''
  };
}

function openFilingForm(record) {
  selectedRecord.value = record;
  showFilingForm.value = true;
}

function closeFilingForm() {
  showFilingForm.value = false;
  selectedRecord.value = null;
  filingDetails.value = {
    filing_date: new Date().toISOString().split('T')[0],
    return_reference: '',
    filing_method: '',
    notes: ''
  };
}

async function handleFiling() {
  await markTaxRecordAsFiled(selectedRecord.value.id, filingDetails.value);
  closeFilingForm();
}

function openPaymentForm(record) {
  selectedRecord.value = record;
  paymentDetails.value.payment_amount = record.tax_amount;
  showPaymentForm.value = true;
}

function closePaymentForm() {
  showPaymentForm.value = false;
  selectedRecord.value = null;
  paymentDetails.value = {
    payment_date: new Date().toISOString().split('T')[0],
    payment_amount: 0,
    payment_method: '',
    reference_number: '',
    notes: ''
  };
}

async function handlePayment() {
  await markTaxRecordAsPaid(selectedRecord.value.id, paymentDetails.value);
  closePaymentForm();
}

async function exportTaxRecords() {
  // Implement export functionality if needed
  console.log('Export tax records');
}

onMounted(async () => {
  await init();
});
</script>

<style scoped>
.tax-management { padding: 1rem; }
.tm-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
.tm-filters { display: flex; gap: 1rem; }
.tm-summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
.tax-summary-card { padding: 1rem; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.summary-stats { display: grid; gap: 0.5rem; }
.stat { display: flex; justify-content: space-between; }
.toolbar { margin-bottom: 1rem; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 0.5rem; border: 1px solid #ddd; text-align: left; }
tr.overdue { background-color: #fff3f3; }
.status-pending { color: #f59e0b; font-weight: bold; }
.status-filed { color: #10b981; font-weight: bold; }
.status-paid { color: #059669; font-weight: bold; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; }
.modal-content { background: white; padding: 2rem; border-radius: 8px; width: 90%; max-width: 600px; }
.form-group { margin-bottom: 1rem; }
.form-group label { display: block; margin-bottom: 0.5rem; }
.form-group input, .form-group select, .form-group textarea { width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; }
.form-actions { display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1rem; }
button { padding: 0.5rem 1rem; border: 1px solid #ddd; border-radius: 4px; background: #f5f5f5; cursor: pointer; }
button:hover { background: #e5e5e5; }
button:disabled { opacity: 0.5; cursor: not-allowed; }
</style>