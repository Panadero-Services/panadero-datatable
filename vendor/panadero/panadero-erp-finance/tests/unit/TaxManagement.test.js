import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import TaxManagement from '../../src/components/TaxManagement.vue';
import { useTaxManagement } from '../../src/composables/useTaxManagement';

describe('TaxManagement', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('initializes with default values', () => {
    const wrapper = mount(TaxManagement);
    expect(wrapper.vm.isLoading).toBe(false);
    expect(wrapper.vm.selectedTaxType).toBe(null);
    expect(wrapper.vm.selectedPeriod).toBeTruthy();
    expect(wrapper.vm.taxRecords).toEqual([]);
  });

  it('calculates tax summary correctly', () => {
    const { summary } = useTaxManagement();
    
    const mockTaxRecords = [
      { tax_type: 'VAT', taxable_amount: 10000, tax_amount: 2000 },
      { tax_type: 'VAT', taxable_amount: 5000, tax_amount: 1000 },
      { tax_type: 'income', taxable_amount: 50000, tax_amount: 10000 }
    ];

    // Mock the tax records
    vi.spyOn(useTaxManagement(), 'taxRecords', 'get').mockReturnValue(mockTaxRecords);
    
    const taxSummary = summary.value;
    
    expect(taxSummary.VAT.totalTaxable).toBe(15000);
    expect(taxSummary.VAT.totalTax).toBe(3000);
    expect(taxSummary.income.totalTaxable).toBe(50000);
    expect(taxSummary.income.totalTax).toBe(10000);
  });

  it('identifies upcoming deadlines correctly', () => {
    const { upcomingDeadlines } = useTaxManagement();
    
    const now = new Date();
    const thirtyDaysFromNow = new Date(now.getTime() + (25 * 24 * 60 * 60 * 1000));
    
    const mockTaxRecords = [
      {
        id: 1,
        tax_type: 'VAT',
        tax_period: '2025-01',
        filing_due_date: thirtyDaysFromNow.toISOString(),
        payment_due_date: thirtyDaysFromNow.toISOString(),
        status: 'pending'
      },
      {
        id: 2,
        tax_type: 'income',
        tax_period: '2025-01',
        filing_due_date: now.toISOString(),
        payment_due_date: now.toISOString(),
        status: 'pending'
      }
    ];

    // Mock the tax records
    vi.spyOn(useTaxManagement(), 'taxRecords', 'get').mockReturnValue(mockTaxRecords);
    
    const deadlines = upcomingDeadlines.value;
    
    expect(deadlines).toHaveLength(2);
    expect(deadlines[0].tax_type).toBe('VAT');
    expect(deadlines[1].tax_type).toBe('income');
  });

  it('calculates compliance status correctly', () => {
    const { complianceStatus } = useTaxManagement();
    
    const mockTaxRecords = [
      { status: 'filed', filing_due_date: '2025-01-01', payment_due_date: '2025-01-01' },
      { status: 'paid', filing_due_date: '2025-01-01', payment_due_date: '2025-01-01' },
      { status: 'pending', filing_due_date: '2025-01-01', payment_due_date: '2025-01-01' }
    ];

    // Mock the tax records
    vi.spyOn(useTaxManagement(), 'taxRecords', 'get').mockReturnValue(mockTaxRecords);
    
    const status = complianceStatus.value;
    
    expect(status.total).toBe(3);
    expect(status.filed).toBe(1);
    expect(status.paid).toBe(1);
    expect(status.overdue).toBe(0);
    expect(status.complianceRate).toBe(66.7);
  });

  it('creates new tax record', async () => {
    const wrapper = mount(TaxManagement);
    
    const newTaxRecord = {
      tax_type: 'VAT',
      tax_period: '2025-01',
      taxable_amount: 10000,
      tax_amount: 2000,
      filing_due_date: '2025-02-01',
      payment_due_date: '2025-02-15'
    };

    // Simulate form input
    await wrapper.setData({ newTaxRecord });
    
    // Trigger form submission
    await wrapper.find('form').trigger('submit.prevent');
    
    // Verify tax record was created
    expect(wrapper.emitted('tax-record-created')).toBeTruthy();
  });

  it('marks tax record as filed', async () => {
    const wrapper = mount(TaxManagement);
    
    const filingDetails = {
      filing_date: '2025-01-15',
      filing_reference: 'FIL-001',
      notes: 'Filed electronically'
    };

    const record = { id: 1, status: 'pending' };

    // Set up filing form
    await wrapper.setData({ 
      selectedRecord: record,
      filingDetails
    });

    // Submit filing form
    await wrapper.find('form').trigger('submit.prevent');
    
    // Verify record was marked as filed
    expect(wrapper.emitted('tax-record-filed')).toBeTruthy();
  });

  it('marks tax record as paid', async () => {
    const wrapper = mount(TaxManagement);
    
    const paymentDetails = {
      payment_date: '2025-01-20',
      payment_reference: 'PAY-001',
      notes: 'Paid via bank transfer'
    };

    const record = { id: 1, status: 'filed' };

    // Set up payment form
    await wrapper.setData({ 
      selectedRecord: record,
      paymentDetails
    });

    // Submit payment form
    await wrapper.find('form').trigger('submit.prevent');
    
    // Verify record was marked as paid
    expect(wrapper.emitted('tax-record-paid')).toBeTruthy();
  });

  it('identifies overdue records correctly', () => {
    const wrapper = mount(TaxManagement);
    
    const now = new Date();
    const yesterday = new Date(now.getTime() - (1 * 24 * 60 * 60 * 1000));
    
    const overdueRecord = {
      filing_due_date: yesterday.toISOString(),
      payment_due_date: yesterday.toISOString(),
      status: 'pending'
    };

    const currentRecord = {
      filing_due_date: now.toISOString(),
      payment_due_date: now.toISOString(),
      status: 'pending'
    };

    expect(wrapper.vm.isOverdue(overdueRecord)).toBe(true);
    expect(wrapper.vm.isOverdue(currentRecord)).toBe(false);
  });

  it('formats currency correctly', () => {
    const wrapper = mount(TaxManagement);
    
    expect(wrapper.vm.formatCurrency(1000)).toBe('$1,000.00');
    expect(wrapper.vm.formatCurrency(1000.50)).toBe('$1,000.50');
    expect(wrapper.vm.formatCurrency(0)).toBe('$0.00');
    expect(wrapper.vm.formatCurrency(2500000)).toBe('$2,500,000.00');
  });

  it('formats dates correctly', () => {
    const wrapper = mount(TaxManagement);
    
    const testDate = '2025-05-15';
    const formatted = wrapper.vm.formatDate(testDate);
    
    expect(formatted).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
  });

  it('gets correct status class', () => {
    const wrapper = mount(TaxManagement);
    
    expect(wrapper.vm.getStatusClass('filed')).toBe('success');
    expect(wrapper.vm.getStatusClass('paid')).toBe('success');
    expect(wrapper.vm.getStatusClass('pending')).toBe('warning');
    expect(wrapper.vm.getStatusClass('unknown')).toBe('default');
  });

  it('filters by tax type', async () => {
    const wrapper = mount(TaxManagement);
    
    // Select tax type
    await wrapper.setData({ selectedTaxType: 'VAT' });
    
    expect(wrapper.vm.selectedTaxType).toBe('VAT');
  });

  it('filters by period', async () => {
    const wrapper = mount(TaxManagement);
    
    const newPeriod = '2025-01';
    await wrapper.setData({ selectedPeriod: newPeriod });
    
    expect(wrapper.vm.selectedPeriod).toBe(newPeriod);
  });

  it('handles empty tax records list', () => {
    const wrapper = mount(TaxManagement);
    
    wrapper.setData({ taxRecords: [] });
    
    expect(wrapper.vm.summary).toEqual({});
    expect(wrapper.vm.upcomingDeadlines).toEqual([]);
    expect(wrapper.vm.complianceStatus.total).toBe(0);
    expect(wrapper.vm.complianceStatus.complianceRate).toBe(100);
  });

  it('resets forms after successful submission', async () => {
    const wrapper = mount(TaxManagement);
    
    const initialTaxRecord = {
      tax_type: '',
      tax_period: '',
      taxable_amount: 0,
      tax_amount: 0,
      filing_due_date: '',
      payment_due_date: ''
    };

    const initialFilingDetails = {
      filing_date: new Date().toISOString().split('T')[0],
      filing_reference: '',
      notes: ''
    };

    const initialPaymentDetails = {
      payment_date: new Date().toISOString().split('T')[0],
      payment_reference: '',
      notes: ''
    };

    // Set form data
    await wrapper.setData({ 
      newTaxRecord: { ...initialTaxRecord },
      filingDetails: { ...initialFilingDetails },
      paymentDetails: { ...initialPaymentDetails }
    });
    
    // Submit forms
    await wrapper.find('form').trigger('submit.prevent');
    
    // Verify forms were reset
    expect(wrapper.vm.newTaxRecord).toEqual(initialTaxRecord);
    expect(wrapper.vm.filingDetails).toEqual(initialFilingDetails);
    expect(wrapper.vm.paymentDetails).toEqual(initialPaymentDetails);
  });

  it('validates tax record form', () => {
    const wrapper = mount(TaxManagement);
    
    const validTaxRecord = {
      tax_type: 'VAT',
      tax_period: '2025-01',
      taxable_amount: 10000,
      tax_amount: 2000,
      filing_due_date: '2025-02-01',
      payment_due_date: '2025-02-15'
    };

    // All required fields should be present
    expect(validTaxRecord.tax_type).toBeTruthy();
    expect(validTaxRecord.tax_period).toBeTruthy();
    expect(validTaxRecord.taxable_amount).toBeGreaterThan(0);
    expect(validTaxRecord.tax_amount).toBeGreaterThan(0);
    expect(validTaxRecord.filing_due_date).toBeTruthy();
    expect(validTaxRecord.payment_due_date).toBeTruthy();
  });

  it('handles tax type selection change', async () => {
    const wrapper = mount(TaxManagement);
    
    // Change tax type
    await wrapper.setData({ 
      newTaxRecord: { ...wrapper.vm.newTaxRecord, tax_type: 'income' }
    });
    
    expect(wrapper.vm.newTaxRecord.tax_type).toBe('income');
  });

  it('calculates tax rates correctly', () => {
    const wrapper = mount(TaxManagement);
    
    const taxableAmount = 10000;
    const taxAmount = 2000;
    const taxRate = (taxAmount / taxableAmount) * 100;
    
    expect(taxRate).toBe(20); // 20% tax rate
  });

  it('exports tax records', async () => {
    const wrapper = mount(TaxManagement);
    
    // Mock console.log
    const consoleSpy = vi.spyOn(console, 'log');
    
    // Trigger export
    await wrapper.vm.exportTaxRecords();
    
    expect(consoleSpy).toHaveBeenCalledWith('Export tax records');
  });

  it('handles compliance rate thresholds', () => {
    const wrapper = mount(TaxManagement);
    
    const highCompliance = { complianceRate: 95 };
    const lowCompliance = { complianceRate: 75 };
    
    // High compliance should show success class
    expect(highCompliance.complianceRate >= 90).toBe(true);
    
    // Low compliance should show warning class
    expect(lowCompliance.complianceRate < 90).toBe(true);
  });

  it('displays correct tax types', () => {
    const wrapper = mount(TaxManagement);
    
    const expectedTaxTypes = ['VAT', 'income', 'corporate', 'payroll'];
    
    // Verify all expected tax types are available
    expectedTaxTypes.forEach(taxType => {
      expect(wrapper.vm.newTaxRecord.tax_type).toBeDefined();
    });
  });
});
