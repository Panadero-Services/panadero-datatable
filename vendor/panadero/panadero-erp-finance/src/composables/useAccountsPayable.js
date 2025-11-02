import { ref, computed } from 'vue';
import { useFinanceStore } from '../stores/financeStore';

export function useAccountsPayable() {
  const financeStore = useFinanceStore();
  const isLoading = ref(false);
  const selectedVendor = ref(null);
  const dateRange = ref({ start: null, end: null });

  // Payables for the current filter
  const payables = computed(() => {
    return financeStore.getPayables({
      vendorId: selectedVendor.value,
      dateRange: dateRange.value
    });
  });

  // Summary statistics
  const summary = computed(() => {
    const total = payables.value.reduce((sum, p) => sum + p.amount, 0);
    const paid = payables.value.reduce((sum, p) => sum + p.paid_amount, 0);
    const outstanding = total - paid;
    
    const aging = {
      current: 0,
      '30days': 0,
      '60days': 0,
      '90days': 0,
      'older': 0
    };

    payables.value.forEach(p => {
      const daysOverdue = calculateDaysOverdue(p.due_date);
      const outstanding = p.amount - p.paid_amount;
      
      if (daysOverdue <= 0) aging.current += outstanding;
      else if (daysOverdue <= 30) aging['30days'] += outstanding;
      else if (daysOverdue <= 60) aging['60days'] += outstanding;
      else if (daysOverdue <= 90) aging['90days'] += outstanding;
      else aging.older += outstanding;
    });

    return {
      total,
      paid,
      outstanding,
      aging
    };
  });

  async function createPayable(payable) {
    isLoading.value = true;
    try {
      await financeStore.createPayable(payable);
    } finally {
      isLoading.value = false;
    }
  }

  async function recordPayment(payableId, payment) {
    isLoading.value = true;
    try {
      await financeStore.recordPayablePayment(payableId, payment);
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
    selectedVendor,
    dateRange,
    payables,
    summary,
    createPayable,
    recordPayment,
    calculateDaysOverdue,
    init
  };
}
