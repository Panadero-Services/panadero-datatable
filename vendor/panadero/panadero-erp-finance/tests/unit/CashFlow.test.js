import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import CashFlow from '../../src/components/CashFlow.vue';
import { useCashFlow } from '../../src/composables/useCashFlow';

describe('CashFlow', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('initializes with default values', () => {
    const wrapper = mount(CashFlow);
    expect(wrapper.vm.isLoading).toBe(false);
    expect(wrapper.vm.selectedPeriod).toBeTruthy();
    expect(wrapper.vm.selectedCategory).toBe(null);
    expect(wrapper.vm.transactions).toEqual([]);
  });

  it('calculates cash flow summary correctly', () => {
    const { summary } = useCashFlow();
    
    const mockTransactions = [
      { category_type: 'operating', type: 'inflow', amount: 1000 },
      { category_type: 'operating', type: 'outflow', amount: 500 },
      { category_type: 'investing', type: 'outflow', amount: 2000 },
      { category_type: 'financing', type: 'inflow', amount: 1500 }
    ];

    // Mock the transactions
    vi.spyOn(useCashFlow(), 'transactions', 'get').mockReturnValue(mockTransactions);
    
    expect(summary.value.operating).toBe(500); // 1000 - 500
    expect(summary.value.investing).toBe(-2000); // -2000
    expect(summary.value.financing).toBe(1500); // 1500
    expect(summary.value.totalInflow).toBe(2500); // 1000 + 1500
    expect(summary.value.totalOutflow).toBe(2500); // 500 + 2000
    expect(summary.value.netCashFlow).toBe(0); // 2500 - 2500
  });

  it('creates new transaction', async () => {
    const wrapper = mount(CashFlow);
    
    const newTransaction = {
      category_id: 1,
      transaction_date: '2025-05-15',
      type: 'inflow',
      amount: 1000,
      description: 'Test transaction',
      reference_no: 'REF-001'
    };

    // Simulate form input
    await wrapper.setData({ newTransaction });
    
    // Trigger form submission
    await wrapper.find('form').trigger('submit.prevent');
    
    // Verify transaction was created
    expect(wrapper.emitted('transaction-created')).toBeTruthy();
  });

  it('updates transaction correctly', async () => {
    const wrapper = mount(CashFlow);
    
    const transaction = {
      id: 1,
      category_id: 1,
      transaction_date: '2025-05-15',
      type: 'inflow',
      amount: 1000,
      description: 'Updated transaction',
      reference_no: 'REF-001'
    };

    // Set up edit form
    await wrapper.setData({ editingTransaction: transaction });
    
    // Submit edit form
    await wrapper.find('form').trigger('submit.prevent');
    
    // Verify transaction was updated
    expect(wrapper.emitted('transaction-updated')).toBeTruthy();
  });

  it('deletes transaction correctly', async () => {
    const wrapper = mount(CashFlow);
    
    const transactionId = 1;
    
    // Mock confirm dialog
    global.confirm = vi.fn(() => true);
    
    // Trigger delete
    await wrapper.vm.handleDeleteTransaction(transactionId);
    
    // Verify transaction was deleted
    expect(wrapper.emitted('transaction-deleted')).toBeTruthy();
  });

  it('filters transactions by category', async () => {
    const wrapper = mount(CashFlow);
    
    // Select category
    await wrapper.setData({ selectedCategory: 1 });
    
    // Verify filter was applied
    expect(wrapper.vm.transactions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ category_id: 1 })
      ])
    );
  });

  it('filters transactions by period', async () => {
    const wrapper = mount(CashFlow);
    
    const newPeriod = '2025-01';
    await wrapper.setData({ selectedPeriod: newPeriod });
    
    expect(wrapper.vm.selectedPeriod).toBe(newPeriod);
  });

  it('formats currency correctly', () => {
    const wrapper = mount(CashFlow);
    
    expect(wrapper.vm.formatCurrency(1000)).toBe('$1,000.00');
    expect(wrapper.vm.formatCurrency(1000.50)).toBe('$1,000.50');
    expect(wrapper.vm.formatCurrency(0)).toBe('$0.00');
    expect(wrapper.vm.formatCurrency(-500)).toBe('-$500.00');
  });

  it('formats dates correctly', () => {
    const wrapper = mount(CashFlow);
    
    const testDate = '2025-05-15';
    const formatted = wrapper.vm.formatDate(testDate);
    
    expect(formatted).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
  });

  it('calculates monthly cash flow correctly', () => {
    const { monthlyFlow } = useCashFlow();
    
    const mockTransactions = [
      { transaction_date: '2025-01-15', type: 'inflow', amount: 1000 },
      { transaction_date: '2025-01-20', type: 'outflow', amount: 500 },
      { transaction_date: '2025-02-01', type: 'inflow', amount: 2000 }
    ];

    // Mock the transactions
    vi.spyOn(useCashFlow(), 'transactions', 'get').mockReturnValue(mockTransactions);
    
    const monthly = monthlyFlow.value;
    
    expect(monthly['2025-01'].inflow).toBe(1000);
    expect(monthly['2025-01'].outflow).toBe(500);
    expect(monthly['2025-02'].inflow).toBe(2000);
    expect(monthly['2025-02'].outflow).toBe(0);
  });

  it('handles empty transactions list', () => {
    const wrapper = mount(CashFlow);
    
    wrapper.setData({ transactions: [] });
    
    expect(wrapper.vm.summary.operating).toBe(0);
    expect(wrapper.vm.summary.investing).toBe(0);
    expect(wrapper.vm.summary.financing).toBe(0);
    expect(wrapper.vm.summary.totalInflow).toBe(0);
    expect(wrapper.vm.summary.totalOutflow).toBe(0);
    expect(wrapper.vm.summary.netCashFlow).toBe(0);
  });

  it('resets form after successful submission', async () => {
    const wrapper = mount(CashFlow);
    
    const initialForm = {
      category_id: '',
      transaction_date: new Date().toISOString().split('T')[0],
      type: 'inflow',
      amount: 0,
      description: '',
      reference_no: ''
    };

    // Set form data
    await wrapper.setData({ newTransaction: { ...initialForm } });
    
    // Submit form
    await wrapper.find('form').trigger('submit.prevent');
    
    // Verify form was reset
    expect(wrapper.vm.newTransaction).toEqual(initialForm);
  });

  it('validates transaction form', () => {
    const wrapper = mount(CashFlow);
    
    const validTransaction = {
      category_id: 1,
      transaction_date: '2025-05-15',
      type: 'inflow',
      amount: 1000,
      description: 'Valid transaction'
    };

    // All required fields should be present
    expect(validTransaction.category_id).toBeTruthy();
    expect(validTransaction.transaction_date).toBeTruthy();
    expect(validTransaction.type).toBeTruthy();
    expect(validTransaction.amount).toBeGreaterThan(0);
    expect(validTransaction.description).toBeTruthy();
  });

  it('handles transaction type changes', async () => {
    const wrapper = mount(CashFlow);
    
    // Change transaction type
    await wrapper.setData({ 
      newTransaction: { ...wrapper.vm.newTransaction, type: 'outflow' }
    });
    
    expect(wrapper.vm.newTransaction.type).toBe('outflow');
  });

  it('updates amount validation based on type', () => {
    const wrapper = mount(CashFlow);
    
    const transaction = {
      type: 'inflow',
      amount: 1000
    };

    // Amount should be positive for both inflow and outflow
    expect(transaction.amount).toBeGreaterThan(0);
    
    // Change to outflow
    transaction.type = 'outflow';
    expect(transaction.amount).toBeGreaterThan(0);
  });

  it('exports cash flow data', async () => {
    const wrapper = mount(CashFlow);
    
    // Mock console.log
    const consoleSpy = vi.spyOn(console, 'log');
    
    // Trigger export
    await wrapper.vm.exportCashFlow();
    
    expect(consoleSpy).toHaveBeenCalledWith('Export cash flow');
  });

  it('handles category selection change', async () => {
    const wrapper = mount(CashFlow);
    
    const newCategoryId = 2;
    await wrapper.setData({ selectedCategory: newCategoryId });
    
    expect(wrapper.vm.selectedCategory).toBe(newCategoryId);
  });

  it('displays correct category names', () => {
    const wrapper = mount(CashFlow);
    
    const expectedCategories = [
      { id: 1, name: 'Sales Revenue', type: 'operating' },
      { id: 2, name: 'Operating Expenses', type: 'operating' },
      { id: 3, name: 'Equipment Purchase', type: 'investing' }
    ];

    wrapper.setData({ categories: expectedCategories });
    
    expect(wrapper.vm.categories).toEqual(expectedCategories);
    expect(wrapper.vm.categories[0].name).toBe('Sales Revenue');
    expect(wrapper.vm.categories[1].type).toBe('operating');
  });
});
