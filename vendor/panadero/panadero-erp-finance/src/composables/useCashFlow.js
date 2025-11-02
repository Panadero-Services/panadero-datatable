import { ref, computed } from 'vue';
import { useFinanceStore } from '../stores/financeStore';

export function useCashFlow() {
  const financeStore = useFinanceStore();
  const isLoading = ref(false);
  const selectedPeriod = ref(null);
  const selectedCategory = ref(null);

  // Cash flow transactions for the current filter
  const transactions = computed(() => {
    return financeStore.getCashFlowTransactions({
      period: selectedPeriod.value,
      categoryId: selectedCategory.value
    });
  });

  // Cash flow summary by category
  const summary = computed(() => {
    const operating = transactions.value
      .filter(t => t.category_type === 'operating')
      .reduce((sum, t) => sum + (t.type === 'inflow' ? t.amount : -t.amount), 0);
    
    const investing = transactions.value
      .filter(t => t.category_type === 'investing')
      .reduce((sum, t) => sum + (t.type === 'inflow' ? t.amount : -t.amount), 0);
    
    const financing = transactions.value
      .filter(t => t.category_type === 'financing')
      .reduce((sum, t) => sum + (t.type === 'inflow' ? t.amount : -t.amount), 0);

    const totalInflow = transactions.value
      .filter(t => t.type === 'inflow')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const totalOutflow = transactions.value
      .filter(t => t.type === 'outflow')
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      operating,
      investing,
      financing,
      totalInflow,
      totalOutflow,
      netCashFlow: totalInflow - totalOutflow
    };
  });

  // Monthly cash flow for charting
  const monthlyFlow = computed(() => {
    const monthly = {};
    transactions.value.forEach(t => {
      const month = new Date(t.transaction_date).toISOString().slice(0, 7);
      if (!monthly[month]) {
        monthly[month] = { inflow: 0, outflow: 0 };
      }
      if (t.type === 'inflow') {
        monthly[month].inflow += t.amount;
      } else {
        monthly[month].outflow += t.amount;
      }
    });
    return monthly;
  });

  async function addTransaction(transaction) {
    isLoading.value = true;
    try {
      await financeStore.addCashFlowTransaction(transaction);
    } finally {
      isLoading.value = false;
    }
  }

  async function updateTransaction(transactionId, updates) {
    isLoading.value = true;
    try {
      await financeStore.updateCashFlowTransaction(transactionId, updates);
    } finally {
      isLoading.value = false;
    }
  }

  async function deleteTransaction(transactionId) {
    isLoading.value = true;
    try {
      await financeStore.deleteCashFlowTransaction(transactionId);
    } finally {
      isLoading.value = false;
    }
  }

  async function init() {
    isLoading.value = true;
    try {
      const now = new Date();
      selectedPeriod.value = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}`;
    } finally {
      isLoading.value = false;
    }
  }

  return {
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
  };
}
