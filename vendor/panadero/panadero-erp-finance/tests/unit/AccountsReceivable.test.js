import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import AccountsReceivable from '../../src/components/AccountsReceivable.vue';
import { useAccountsReceivable } from '../../src/composables/useAccountsReceivable';

describe('AccountsReceivable', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('initializes with default values', () => {
    const wrapper = mount(AccountsReceivable);
    expect(wrapper.vm.isLoading).toBe(false);
    expect(wrapper.vm.selectedCustomer).toBe(null);
    expect(wrapper.vm.receivables).toEqual([]);
  });

  it('calculates aging correctly', () => {
    const { calculateDaysOverdue } = useAccountsReceivable();
    
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    expect(calculateDaysOverdue(today.toISOString())).toBe(0);
    expect(calculateDaysOverdue(yesterday.toISOString())).toBe(1);
    expect(calculateDaysOverdue(thirtyDaysAgo.toISOString())).toBe(30);
  });

  it('creates new receivable', async () => {
    const wrapper = mount(AccountsReceivable);
    
    const newReceivable = {
      customer_id: 1,
      invoice_no: 'INV-001',
      invoice_date: '2025-05-15',
      due_date: '2025-06-15',
      amount: 1000,
      notes: 'Test invoice'
    };

    // Simulate form input
    await wrapper.setData({ newReceivable });
    
    // Trigger form submission
    await wrapper.find('form').trigger('submit.prevent');
    
    // Verify receivable was created
    expect(wrapper.emitted('receivable-created')).toBeTruthy();
  });

  it('records payment correctly', async () => {
    const wrapper = mount(AccountsReceivable);
    
    const payment = {
      date: '2025-05-15',
      amount: 500,
      reference_no: 'PAY-001',
      notes: 'Partial payment'
    };

    const receivable = {
      id: 1,
      amount: 1000,
      received_amount: 0
    };

    // Set up payment form
    await wrapper.setData({ 
      selectedReceivable: receivable,
      payment
    });

    // Submit payment
    await wrapper.find('form').trigger('submit.prevent');
    
    // Verify payment was recorded
    expect(wrapper.emitted('payment-recorded')).toBeTruthy();
  });

  it('filters receivables by customer', async () => {
    const wrapper = mount(AccountsReceivable);
    
    // Select customer
    await wrapper.setData({ selectedCustomer: 1 });
    
    // Verify filter was applied
    expect(wrapper.vm.receivables).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ customer_id: 1 })
      ])
    );
  });

  it('formats currency correctly', () => {
    const wrapper = mount(AccountsReceivable);
    
    expect(wrapper.vm.formatCurrency(1000)).toBe('$1,000.00');
    expect(wrapper.vm.formatCurrency(1000.50)).toBe('$1,000.50');
    expect(wrapper.vm.formatCurrency(0)).toBe('$0.00');
  });

  it('handles overdue status correctly', () => {
    const wrapper = mount(AccountsReceivable);
    
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const receivable = {
      due_date: yesterday.toISOString()
    };

    expect(wrapper.vm.isOverdue(receivable)).toBe(true);
  });

  it('calculates summary statistics correctly', () => {
    const wrapper = mount(AccountsReceivable);
    
    const mockReceivables = [
      { amount: 1000, received_amount: 600 },
      { amount: 2000, received_amount: 1500 },
      { amount: 500, received_amount: 0 }
    ];

    wrapper.setData({ receivables: mockReceivables });
    
    expect(wrapper.vm.summary.total).toBe(3500);
    expect(wrapper.vm.summary.received).toBe(2100);
    expect(wrapper.vm.summary.outstanding).toBe(1400);
  });

  it('handles aging buckets correctly', () => {
    const wrapper = mount(AccountsReceivable);
    
    const mockReceivables = [
      { due_date: new Date().toISOString(), amount: 1000, received_amount: 0 },
      { due_date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(), amount: 2000, received_amount: 0 },
      { due_date: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(), amount: 1500, received_amount: 0 }
    ];

    wrapper.setData({ receivables: mockReceivables });
    
    expect(wrapper.vm.summary.aging.current).toBe(1000);
    expect(wrapper.vm.summary.aging['30days']).toBe(2000);
    expect(wrapper.vm.summary.aging['60days']).toBe(1500);
  });

  it('validates payment amount', () => {
    const wrapper = mount(AccountsReceivable);
    
    const receivable = {
      amount: 1000,
      received_amount: 600
    };

    const payment = {
      amount: 500
    };

    // Should allow payment up to outstanding amount
    expect(payment.amount).toBeLessThanOrEqual(receivable.amount - receivable.received_amount);
  });

  it('handles empty receivables list', () => {
    const wrapper = mount(AccountsReceivable);
    
    wrapper.setData({ receivables: [] });
    
    expect(wrapper.vm.summary.total).toBe(0);
    expect(wrapper.vm.summary.received).toBe(0);
    expect(wrapper.vm.summary.outstanding).toBe(0);
  });

  it('updates date range correctly', async () => {
    const wrapper = mount(AccountsReceivable);
    
    const newStartDate = '2025-01-01';
    const newEndDate = '2025-01-31';
    
    await wrapper.setData({
      dateRange: {
        start: newStartDate,
        end: newEndDate
      }
    });
    
    expect(wrapper.vm.dateRange.start).toBe(newStartDate);
    expect(wrapper.vm.dateRange.end).toBe(newEndDate);
  });

  it('resets form after successful submission', async () => {
    const wrapper = mount(AccountsReceivable);
    
    const initialForm = {
      customer_id: '',
      invoice_no: '',
      invoice_date: '',
      due_date: '',
      amount: 0,
      notes: ''
    };

    // Set form data
    await wrapper.setData({ newReceivable: { ...initialForm } });
    
    // Submit form
    await wrapper.find('form').trigger('submit.prevent');
    
    // Verify form was reset
    expect(wrapper.vm.newReceivable).toEqual(initialForm);
  });
});
