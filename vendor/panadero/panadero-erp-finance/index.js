// ERP Finance Module - Main Entry Point
export { default as Finance } from './src/components/Finance.vue';
export { default as GeneralLedger } from './src/components/GeneralLedger.vue';
export { default as AccountsPayable } from './src/components/AccountsPayable.vue';
export { default as AccountsReceivable } from './src/components/AccountsReceivable.vue';
export { default as CashFlow } from './src/components/CashFlow.vue';
export { default as TaxManagement } from './src/components/TaxManagement.vue';

// Export composables
export { useGeneralLedger } from './src/composables/useGeneralLedger.js';
export { useAccountsPayable } from './src/composables/useAccountsPayable.js';
export { useAccountsReceivable } from './src/composables/useAccountsReceivable.js';
export { useCashFlow } from './src/composables/useCashFlow.js';
export { useTaxManagement } from './src/composables/useTaxManagement.js';

// Export store
export { useFinanceStore } from './src/stores/financeStore.js';

// Package information
export const packageInfo = {
  name: 'panadero-erp-finance',
  version: '0.1.0',
  description: 'ERP Finance Module for comprehensive financial management',
  author: 'JaWsome.Orbit',
  components: [
    'Finance',
    'GeneralLedger', 
    'AccountsPayable',
    'AccountsReceivable',
    'CashFlow',
    'TaxManagement'
  ]
};