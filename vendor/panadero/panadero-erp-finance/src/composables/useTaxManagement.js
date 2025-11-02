import { ref, computed } from 'vue';
import { useFinanceStore } from '../stores/financeStore';

export function useTaxManagement() {
  const financeStore = useFinanceStore();
  const isLoading = ref(false);
  const selectedTaxType = ref(null);
  const selectedPeriod = ref(null);

  // Tax records for the current filter
  const taxRecords = computed(() => {
    return financeStore.getTaxRecords({
      taxType: selectedTaxType.value,
      period: selectedPeriod.value
    });
  });

  // Tax summary by type
  const summary = computed(() => {
    const summary = {};
    
    taxRecords.value.forEach(record => {
      if (!summary[record.tax_type]) {
        summary[record.tax_type] = {
          totalTaxable: 0,
          totalTax: 0,
          records: []
        };
      }
      
      summary[record.tax_type].totalTaxable += record.taxable_amount;
      summary[record.tax_type].totalTax += record.tax_amount;
      summary[record.tax_type].records.push(record);
    });

    return summary;
  });

  // Upcoming tax deadlines
  const upcomingDeadlines = computed(() => {
    const now = new Date();
    const thirtyDaysFromNow = new Date(now.getTime() + (30 * 24 * 60 * 60 * 1000));
    
    return taxRecords.value
      .filter(record => {
        const filingDue = new Date(record.filing_due_date);
        const paymentDue = new Date(record.payment_due_date);
        return (filingDue <= thirtyDaysFromNow || paymentDue <= thirtyDaysFromNow) && 
               record.status !== 'filed' && record.status !== 'paid';
      })
      .sort((a, b) => {
        const aDue = Math.min(new Date(a.filing_due_date), new Date(a.payment_due_date));
        const bDue = Math.min(new Date(b.filing_due_date), new Date(b.payment_due_date));
        return aDue - bDue;
      });
  });

  // Tax compliance status
  const complianceStatus = computed(() => {
    const total = taxRecords.value.length;
    const filed = taxRecords.value.filter(r => r.status === 'filed').length;
    const paid = taxRecords.value.filter(r => r.status === 'paid').length;
    const overdue = taxRecords.value.filter(r => {
      const filingDue = new Date(r.filing_due_date);
      const paymentDue = new Date(r.payment_due_date);
      const now = new Date();
      return (filingDue < now || paymentDue < now) && r.status !== 'filed' && r.status !== 'paid';
    }).length;

    return {
      total,
      filed,
      paid,
      overdue,
      complianceRate: total > 0 ? ((filed + paid) / total) * 100 : 100
    };
  });

  async function createTaxRecord(taxRecord) {
    isLoading.value = true;
    try {
      await financeStore.createTaxRecord(taxRecord);
    } finally {
      isLoading.value = false;
    }
  }

  async function updateTaxRecord(taxRecordId, updates) {
    isLoading.value = true;
    try {
      await financeStore.updateTaxRecord(taxRecordId, updates);
    } finally {
      isLoading.value = false;
    }
  }

  async function markAsFiled(taxRecordId, filingDetails) {
    isLoading.value = true;
    try {
      await financeStore.markTaxRecordAsFiled(taxRecordId, filingDetails);
    } finally {
      isLoading.value = false;
    }
  }

  async function markAsPaid(taxRecordId, paymentDetails) {
    isLoading.value = true;
    try {
      await financeStore.markTaxRecordAsPaid(taxRecordId, paymentDetails);
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
    selectedTaxType,
    selectedPeriod,
    taxRecords,
    summary,
    upcomingDeadlines,
    complianceStatus,
    createTaxRecord,
    updateTaxRecord,
    markAsFiled,
    markAsPaid,
    init
  };
}
