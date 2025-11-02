import { ref, computed } from 'vue';
import { useFinanceStore } from '../stores/financeStore';

export function useGeneralLedger() {
  const financeStore = useFinanceStore();
  const isLoading = ref(false);
  const currentPeriod = ref(null);

  // Journal entries for the current period
  const journalEntries = computed(() => {
    return financeStore.getJournalEntriesForPeriod(currentPeriod.value);
  });

  // Trial balance
  const trialBalance = computed(() => {
    return financeStore.getTrialBalance(currentPeriod.value);
  });

  async function postJournalEntry(entry) {
    isLoading.value = true;
    try {
      await financeStore.postJournalEntry(entry);
    } finally {
      isLoading.value = false;
    }
  }

  async function closePeriod(period) {
    isLoading.value = true;
    try {
      await financeStore.closePeriod(period);
      currentPeriod.value = await financeStore.getNextPeriod(period);
    } finally {
      isLoading.value = false;
    }
  }

  async function init() {
    isLoading.value = true;
    try {
      currentPeriod.value = await financeStore.getCurrentPeriod();
    } finally {
      isLoading.value = false;
    }
  }

  return {
    isLoading,
    currentPeriod,
    journalEntries,
    trialBalance,
    postJournalEntry,
    closePeriod,
    init
  };
}