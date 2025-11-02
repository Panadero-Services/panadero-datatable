import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import AccountsPayable from '../../src/components/AccountsPayable.vue';
import { useAccountsPayable } from '../../src/composables/useAccountsPayable';

describe('AccountsPayable', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('initializes with default values', () => {
    const wrapper = mount(AccountsPayable);
    expect(wrapper.vm.isLoading).toBe(false);
    expect(wrapper.vm.selectedVendor).toBe(null);
    expect(wrapper.vm.payables).toEqual([]);
  });

  it('calculates aging correctly', () => {
    const { calculateDaysOverdue } = useAccountsPayable();
    
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    expect(calculateDaysOverdue(today.toISOString())).toBe(0);
    expect(calculateDaysOverdue(yesterday.toISOString())).toBe(1);
    expect(calculateDaysOverdue(thirtyDaysAgo.toISOString())).toBe(30);
  });

  it('creates new payable', async () => {
    const wrapper = mount(AccountsPayable);
    
    const newPayable = {
      vendor_id: 1,
      invoice_no: 'INV-001',
      invoice_date: '2025-05-15',
      due_date: '2025-06-15',
      amount: 1000,
      notes: 'Test invoice'
    };

    // Simulate form input
    await wrapper.setData({ newPayable });
    
    // Trigger form submission
    await wrapper.find('form').trigger('submit.prevent');
    
    // Verify payable was created
    expect(wrapper.emitted('payable-created')).toBeTruthy();
  });

  it('records payment correctly', async () => {
    const wrapper = mount(AccountsPayable);
    
    const payment = {
      date: '2025-05-15',
      amount: 500,
      reference_no: 'PAY-001',
      notes: 'Partial payment'
    };

    const payable = {
      id: 1,
      amount: 1000,
      paid_amount: 0
    };

    // Set up payment form
    await wrapper.setData({ 
      selectedPayable: payable,
      payment
    });

    // Submit payment
    await wrapper.find('form').trigger('submit.prevent');
    
    // Verify payment was recorded
    expect(wrapper.emitted('payment-recorded')).toBeTruthy();
  });

  it('filters payables by vendor', async () => {
    const wrapper = mount(AccountsPayable);
    
    // Select vendor
    await wrapper.setData({ selectedVendor: 1 });
    
    // Verify filter was applied
    expect(wrapper.vm.payables).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ vendor_id: 1 })
      ])
    );
  });

  it('formats currency correctly', () => {
    const wrapper = mount(AccountsPayable);
    
    expect(wrapper.vm.formatCurrency(1000)).toBe('$1,000.00');
    expect(wrapper.vm.formatCurrency(1000.50)).toBe('$1,000.50');
    expect(wrapper.vm.formatCurrency(0)).toBe('$0.00');
  });

  it('handles overdue status correctly', () => {
    const wrapper = mount(AccountsPayable);
    
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const payable = {
      due_date: yesterday.toISOString()
    };

    expect(wrapper.vm.isOverdue(payable)).toBe(true);
  });
});
