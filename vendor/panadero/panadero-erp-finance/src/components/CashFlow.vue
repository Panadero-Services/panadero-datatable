

<script setup>
import { ref, onMounted } from 'vue';
import { useCashFlow } from '../composables/useCashFlow';

const {
  isLoading,
  selectedPeriod,
  selectedCategory,
  transactions,
  summary,
  monthlyFlow,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  init
} = useCashFlow();

// UI state
const showNewTransactionForm = ref(false);
const showEditForm = ref(false);
const editingTransaction = ref(null);

// Form models
const newTransaction = ref({
  category_id: '',
  transaction_date: new Date().toISOString().split('T')[0],
  type: 'inflow',
  amount: 0,
  description: '',
  reference_no: ''
});

// Mock categories data (replace with actual data from your backend)
const categories = ref([
  { id: 1, name: 'Sales Revenue', type: 'operating' },
  { id: 2, name: 'Operating Expenses', type: 'operating' },
  { id: 3, name: 'Equipment Purchase', type: 'investing' },
  { id: 4, name: 'Loan Proceeds', type: 'financing' },
  { id: 5, name: 'Loan Repayment', type: 'financing' }
]);

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

async function handleNewTransaction() {
  await addTransaction(newTransaction.value);
  showNewTransactionForm.value = false;
  newTransaction.value = {
    category_id: '',
    transaction_date: new Date().toISOString().split('T')[0],
    type: 'inflow',
    amount: 0,
    description: '',
    reference_no: ''
  };
}

function editTransaction(transaction) {
  editingTransaction.value = { ...transaction };
  showEditForm.value = true;
}

function closeEditForm() {
  showEditForm.value = false;
  editingTransaction.value = null;
}

async function handleEditTransaction() {
  await updateTransaction(editingTransaction.value.id, editingTransaction.value);
  closeEditForm();
}

async function handleDeleteTransaction(transactionId) {
  if (confirm('Are you sure you want to delete this transaction?')) {
    await deleteTransaction(transactionId);
  }
}

async function exportCashFlow() {
  // Implement export functionality
  console.log('Export cash flow');
}

onMounted(async () => {
  await init();
});
</script>
<template>
  <div class="cash-flow">
    <header class="cf-header">
      <h1>Cash Flow Management</h1>
      <div class="cf-filters">
        <div class="period-filter">
          <label>Period:</label>
          <input type="month" v-model="selectedPeriod" />
        </div>
        
        <div class="category-filter">
          <label>Category:</label>
          <select v-model="selectedCategory">
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>
      </div>
    </header>

    <div class="cf-summary">
      <div class="summary-card operating">
        <h3>Operating Activities</h3>
        <p :class="{ 'positive': summary.operating >= 0, 'negative': summary.operating < 0 }">
          {{ formatCurrency(summary.operating) }}
        </p>
      </div>
      <div class="summary-card investing">
        <h3>Investing Activities</h3>
        <p :class="{ 'positive': summary.investing >= 0, 'negative': summary.investing < 0 }">
          {{ formatCurrency(summary.investing) }}
        </p>
      </div>
      <div class="summary-card financing">
        <h3>Financing Activities</h3>
        <p :class="{ 'positive': summary.financing >= 0, 'negative': summary.financing < 0 }">
          {{ formatCurrency(summary.financing) }}
        </p>
      </div>
      <div class="summary-card net-flow">
        <h3>Net Cash Flow</h3>
        <p :class="{ 'positive': summary.netCashFlow >= 0, 'negative': summary.netCashFlow < 0 }">
          {{ formatCurrency(summary.netCashFlow) }}
        </p>
      </div>
    </div>

    <div class="cf-totals">
      <div class="total-card">
        <h4>Total Inflow</h4>
        <p class="positive">{{ formatCurrency(summary.totalInflow) }}</p>
      </div>
      <div class="total-card">
        <h4>Total Outflow</h4>
        <p class="negative">{{ formatCurrency(summary.totalOutflow) }}</p>
      </div>
    </div>

    <div class="cf-content">
      <div class="toolbar">
        <button @click="showNewTransactionForm = true">New Transaction</button>
        <button @click="exportCashFlow">Export</button>
      </div>

      <div v-if="transactions.length > 0" class="transactions-list">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Reference</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactions" :key="transaction.id">
              <td>{{ formatDate(transaction.transaction_date) }}</td>
              <td>{{ transaction.category_name }}</td>
              <td>{{ transaction.description }}</td>
              <td>
                <span :class="transaction.type">{{ transaction.type }}</span>
              </td>
              <td>{{ formatCurrency(transaction.amount) }}</td>
              <td>{{ transaction.reference_no || '-' }}</td>
              <td>
                <button @click="editTransaction(transaction)" class="edit-btn">Edit</button>
                <button @click="deleteTransaction(transaction.id)" class="delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="no-transactions">
        No transactions found for the selected criteria
      </div>
    </div>

    <!-- New Transaction Form Modal -->
    <div v-if="showNewTransactionForm" class="modal-overlay">
      <div class="modal-content">
        <h3>New Cash Flow Transaction</h3>
        <form @submit.prevent="handleNewTransaction">
          <div class="form-group">
            <label>Category</label>
            <select v-model="newTransaction.category_id" required>
              <option value="">Select Category</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label>Transaction Date</label>
            <input type="date" v-model="newTransaction.transaction_date" required />
          </div>

          <div class="form-group">
            <label>Type</label>
            <select v-model="newTransaction.type" required>
              <option value="inflow">Inflow</option>
              <option value="outflow">Outflow</option>
            </select>
          </div>

          <div class="form-group">
            <label>Amount</label>
            <input type="number" v-model="newTransaction.amount" step="0.01" required />
          </div>

          <div class="form-group">
            <label>Description</label>
            <textarea v-model="newTransaction.description" required></textarea>
          </div>

          <div class="form-group">
            <label>Reference Number</label>
            <input v-model="newTransaction.reference_no" />
          </div>

          <div class="form-actions">
            <button type="submit" :disabled="isLoading">Save</button>
            <button type="button" @click="showNewTransactionForm = false">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Edit Transaction Form Modal -->
    <div v-if="showEditForm" class="modal-overlay">
      <div class="modal-content">
        <h3>Edit Transaction</h3>
        <form @submit.prevent="handleEditTransaction">
          <div class="form-group">
            <label>Category</label>
            <select v-model="editingTransaction.category_id" required>
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label>Transaction Date</label>
            <input type="date" v-model="editingTransaction.transaction_date" required />
          </div>

          <div class="form-group">
            <label>Type</label>
            <select v-model="editingTransaction.type" required>
              <option value="inflow">Inflow</option>
              <option value="outflow">Outflow</option>
            </select>
          </div>

          <div class="form-group">
            <label>Amount</label>
            <input type="number" v-model="editingTransaction.amount" step="0.01" required />
          </div>

          <div class="form-group">
            <label>Description</label>
            <textarea v-model="editingTransaction.description" required></textarea>
          </div>

          <div class="form-group">
            <label>Reference Number</label>
            <input v-model="editingTransaction.reference_no" />
          </div>

          <div class="form-actions">
            <button type="submit" :disabled="isLoading">Update</button>
            <button type="button" @click="closeEditForm">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cash-flow {
  padding: 1rem;
}

.cf-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.cf-filters {
  display: flex;
  gap: 1rem;
}

.cf-summary {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.summary-card {
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.cf-totals {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.total-card {
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.positive {
  color: #059669;
  font-weight: bold;
}

.negative {
  color: #dc2626;
  font-weight: bold;
}

.inflow {
  color: #059669;
  font-weight: bold;
}

.outflow {
  color: #dc2626;
  font-weight: bold;
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

.edit-btn {
  background: #3b82f6;
  color: white;
  margin-right: 0.5rem;
}

.delete-btn {
  background: #dc2626;
  color: white;
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
