import { ref, computed } from 'vue';
import { useFinanceStore } from '../stores/financeStore';

export function useAccountsReceivable() {
  const financeStore = useFinanceStore();
  const isLoading = ref(false);
  const selectedCustomer = ref(null);
  const dateRange = ref({ start: null, end: null });

  // Receivables for the current filter
  const receivables = computed(() => {
    return financeStore.getReceivables({
      customerId: selectedCustomer.value,
      dateRange: dateRange.value
    });
  });

  // Summary statistics
  const summary = computed(() => {
    const total = receivables.value.reduce((sum, r) => sum + r.amount, 0);
    const received = receivables.value.reduce((sum, r) => sum + r.received_amount, 0);
    const outstanding = total - received;
    
    const aging = {
      current: 0,
      '30days': 0,
      '60days': 0,
      '90days': 0,
      'older': 0
    };

    receivables.value.forEach(r => {
      const daysOverdue = calculateDaysOverdue(r.due_date);
      const outstanding = r.amount - r.received_amount;
      
      if (daysOverdue <= 0) aging.current += outstanding;
      else if (daysOverdue <= 30) aging['30days'] += outstanding;
      else if (daysOverdue <= 60) aging['60days'] += outstanding;
      else if (daysOverdue <= 90) aging['90days'] += outstanding;
      else aging.older += outstanding;
    });

    return {
      total,
      received,
      outstanding,
      aging
    };
  });

  async function createReceivable(receivable) {
    isLoading.value = true;
    try {
      await financeStore.createReceivable(receivable);
    } finally {
      isLoading.value = false;
    }
  }

  async function recordPayment(receivableId, payment) {
    isLoading.value = true;
    try {
      await financeStore.recordReceivablePayment(receivableId, payment);
    } finally {
      isLoading.value = false;
    }
  }

  function calculateDaysOverdue(dueDate) {
    const today = new Date();
    const due = new Date(dueDate);
    return Math.floor((today - due) / (1000 * 60 * 60 * 24));
  }

  async function init() {
    isLoading.value = true;
    try {
      const now = new Date();
      dateRange.value = {
        start: new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0],
        end: new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0]
      };
    } finally {
      isLoading.value = false;
    }
  }

  return {
    isLoading,
    selectedCustomer,
    dateRange,
    receivables,
    summary,
    createReceivable,
    recordPayment,
    calculateDaysOverdue,
    init
  };
}
