import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import Decimal from 'decimal.js';

export const useFinanceStore = defineStore('finance', () => {
  // Core GL state (demo data)
  const journalEntries = ref([
    {
      id: 1,
      description: 'Initial capital investment',
      lines: [
        { account: 'Cash', type: 'debit', amount: 10000 },
        { account: 'Capital', type: 'credit', amount: 10000 },
      ],
      timestamp: '2025-05-01T00:00:00.000Z',
      period: '2025-05',
    },
    {
      id: 2,
      description: 'Purchase inventory on credit',
      lines: [
        { account: 'Inventory', type: 'debit', amount: 5000 },
        { account: 'Accounts Payable', type: 'credit', amount: 5000 },
      ],
      timestamp: '2025-05-02T00:00:00.000Z',
      period: '2025-05',
    },
  ]);
  const accountBalances = ref({});
  const currentPeriod = ref('2025-05');

  // AP/AR/Cash/Tax demo data
  const payables = ref([
    { id: 1, invoice_no: 'INV-001', vendor_name: 'Vendor 1', invoice_date: '2025-05-01', due_date: '2025-05-31', amount: 1000, paid_amount: 0, status: 'pending' },
    { id: 2, invoice_no: 'INV-002', vendor_name: 'Vendor 2', invoice_date: '2025-05-05', due_date: '2025-06-04', amount: 2500, paid_amount: 1000, status: 'partial' },
  ]);
  const receivables = ref([
    { id: 1, invoice_no: 'AR-001', customer_name: 'Customer 1', invoice_date: '2025-05-01', due_date: '2025-05-31', amount: 1500, received_amount: 0, status: 'pending' },
    { id: 2, invoice_no: 'AR-002', customer_name: 'Customer 2', invoice_date: '2025-05-05', due_date: '2025-06-04', amount: 3000, received_amount: 1500, status: 'partial' },
  ]);
  const cashFlowTransactions = ref([
    { id: 1, category_id: 1, category_name: 'Sales Revenue', category_type: 'operating', transaction_date: '2025-05-15', type: 'inflow', amount: 5000, description: 'Monthly sales revenue', reference_no: 'CF-001' },
    { id: 2, category_id: 2, category_name: 'Operating Expenses', category_type: 'operating', transaction_date: '2025-05-15', type: 'outflow', amount: 2000, description: 'Monthly operating expenses', reference_no: 'CF-002' },
  ]);
  const taxRecords = ref([
    { id: 1, tax_type: 'VAT', tax_period: '2025-01', taxable_amount: 10000, tax_amount: 2000, filing_due_date: '2025-02-01', payment_due_date: '2025-02-15', status: 'pending' },
    { id: 2, tax_type: 'income', tax_period: '2025-01', taxable_amount: 50000, tax_amount: 10000, filing_due_date: '2025-04-15', payment_due_date: '2025-04-15', status: 'filed' },
  ]);

  // Fixed Assets / Budgets / Audit
  const fixedAssets = ref([
    { id: 1001, name: 'Lathe Machine', category: 'Equipment', cost: 12000, acquired_at: '2025-04-01', method: 'straight_line', useful_life_months: 36, accumulated_depreciation: 0 },
  ]);
  const budgets = ref([]); // { period, lines:[{account, amount}] }
  const auditLogs = ref([]); // {id,timestamp,user_id,entity,action,meta}

  // Getters
  const getJournalEntriesForPeriod = computed(() => (period) =>
    journalEntries.value.filter((e) => e.period === period)
  );

  const getTrialBalance = computed(() => (period) => {
    const balance = {};
    journalEntries.value
      .filter((e) => e.period === period)
      .forEach((entry) => {
        entry.lines.forEach((line) => {
          if (!balance[line.account]) balance[line.account] = new Decimal(0);
          balance[line.account] = balance[line.account].plus(new Decimal(line.amount));
        });
      });
    return balance;
  });

  // GL actions
  async function postJournalEntry(entry) {
    const totalDebit = entry.lines
      .filter((l) => l.type === 'debit')
      .reduce((sum, l) => sum.plus(new Decimal(l.amount)), new Decimal(0));
    const totalCredit = entry.lines
      .filter((l) => l.type === 'credit')
      .reduce((sum, l) => sum.plus(new Decimal(l.amount)), new Decimal(0));
    if (!totalDebit.equals(totalCredit)) {
      throw new Error('Journal entry must balance (total debits must equal total credits)');
    }

    journalEntries.value.push({
      ...entry,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      period: currentPeriod.value,
    });

    entry.lines.forEach((line) => {
      if (!accountBalances.value[line.account]) {
        accountBalances.value[line.account] = new Decimal(0);
      }
      const amount = new Decimal(line.amount);
      accountBalances.value[line.account] =
        line.type === 'debit'
          ? accountBalances.value[line.account].plus(amount)
          : accountBalances.value[line.account].minus(amount);
    });
  }

  async function closePeriod(period) {
    const entries = getJournalEntriesForPeriod.value(period);
    let deb = new Decimal(0);
    let cred = new Decimal(0);
    entries.forEach((e) =>
      e.lines.forEach((l) => {
        const amt = new Decimal(l.amount);
        if (l.type === 'debit') deb = deb.plus(amt);
        else cred = cred.plus(amt);
      })
    );
    if (!deb.equals(cred)) {
      const difference = deb.minus(cred);
      throw new Error(`Cannot close period: debits (${deb}) do not equal credits (${cred}). Difference: ${difference}`);
    }
    const [y, m] = period.split('-');
    const nm = parseInt(m, 10) + 1;
    const ny = nm > 12 ? String(parseInt(y, 10) + 1) : y;
    const next = `${ny}-${(nm > 12 ? 1 : nm).toString().padStart(2, '0')}`;
    currentPeriod.value = next;
    return next;
  }

  async function getCurrentPeriod() {
    if (!currentPeriod.value) {
      const now = new Date();
      currentPeriod.value = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}`;
    }
    return currentPeriod.value;
  }
  async function getNextPeriod(period) {
    const [y, m] = period.split('-');
    const nm = parseInt(m, 10) + 1;
    const ny = nm > 12 ? String(parseInt(y, 10) + 1) : y;
    return `${ny}-${(nm > 12 ? 1 : nm).toString().padStart(2, '0')}`;
  }

  // AP
  const getPayables = computed(() => (filters = {}) => {
    let filtered = payables.value;
    if (filters.vendorId) filtered = filtered.filter((p) => p.vendor_id === filters.vendorId);
    if (filters.dateRange) {
      filtered = filtered.filter((p) => {
        const d = new Date(p.invoice_date);
        return d >= new Date(filters.dateRange.start) && d <= new Date(filters.dateRange.end);
      });
    }
    return filtered;
  });
  async function createPayable(payable) {
    const p = { ...payable, id: Date.now(), status: 'draft', paid_amount: 0, created_at: new Date().toISOString() };
    payables.value.push(p);
    return p;
  }
  async function recordPayablePayment(payableId, payment) {
    const p = payables.value.find((x) => x.id === payableId);
    if (p) {
      p.paid_amount += payment.amount;
      p.status = p.paid_amount >= p.amount ? 'paid' : p.paid_amount > 0 ? 'partial' : p.status;
    }
  }

  // AR
  const getReceivables = computed(() => (filters = {}) => {
    let filtered = receivables.value;
    if (filters.customerId) filtered = filtered.filter((r) => r.customer_id === filters.customerId);
    if (filters.dateRange) {
      filtered = filtered.filter((r) => {
        const d = new Date(r.invoice_date);
        return d >= new Date(filters.dateRange.start) && d <= new Date(filters.dateRange.end);
      });
    }
    return filtered;
  });
  async function createReceivable(receivable) {
    const r = { ...receivable, id: Date.now(), status: 'draft', received_amount: 0, created_at: new Date().toISOString() };
    receivables.value.push(r);
    return r;
  }
  async function recordReceivablePayment(receivableId, payment) {
    const r = receivables.value.find((x) => x.id === receivableId);
    if (r) {
      r.received_amount += payment.amount;
      r.status = r.received_amount >= r.amount ? 'paid' : r.received_amount > 0 ? 'partial' : r.status;
    }
  }

  // Cash Flow
  const getCashFlowTransactions = computed(() => (filters = {}) => {
    let filtered = cashFlowTransactions.value;
    if (filters.period) {
      filtered = filtered.filter((t) => {
        const d = new Date(t.transaction_date);
        const [y, m] = filters.period.split('-');
        const s = new Date(parseInt(y, 10), parseInt(m, 10) - 1);
        const e = new Date(parseInt(y, 10), parseInt(m, 10));
        return d >= s && d < e;
      });
    }
    if (filters.categoryId) filtered = filtered.filter((t) => t.category_id === filters.categoryId);
    return filtered;
  });
  async function addCashFlowTransaction(transaction) {
    const tx = { ...transaction, id: Date.now(), created_at: new Date().toISOString() };
    cashFlowTransactions.value.push(tx);
    return tx;
  }
  async function updateCashFlowTransaction(id, updates) {
    const t = cashFlowTransactions.value.find((x) => x.id === id);
    if (t) Object.assign(t, updates, { updated_at: new Date().toISOString() });
  }
  async function deleteCashFlowTransaction(id) {
    const idx = cashFlowTransactions.value.findIndex((x) => x.id === id);
    if (idx > -1) cashFlowTransactions.value.splice(idx, 1);
  }

  // Tax
  const getTaxRecords = computed(() => (filters = {}) => {
    let filtered = taxRecords.value;
    if (filters.taxType) filtered = filtered.filter((t) => t.tax_type === filters.taxType);
    if (filters.period) filtered = filtered.filter((t) => t.tax_period === filters.period);
    return filtered;
  });
  async function createTaxRecord(taxRecord) {
    const tr = { ...taxRecord, id: Date.now(), status: 'pending', created_at: new Date().toISOString() };
    taxRecords.value.push(tr);
    return tr;
  }
  async function updateTaxRecord(id, updates) {
    const t = taxRecords.value.find((x) => x.id === id);
    if (t) Object.assign(t, updates, { updated_at: new Date().toISOString() });
  }
  async function markTaxRecordAsFiled(id, filingDetails) {
    const t = taxRecords.value.find((x) => x.id === id);
    if (t) Object.assign(t, { status: 'filed', filed_at: new Date().toISOString() }, filingDetails);
  }
  async function markTaxRecordAsPaid(id, paymentDetails) {
    const t = taxRecords.value.find((x) => x.id === id);
    if (t) Object.assign(t, { status: 'paid', paid_at: new Date().toISOString() }, paymentDetails);
  }

  // Fixed Assets / Depreciation / Budgets / Audit
  async function addAsset(asset) {
    fixedAssets.value.push({ id: Date.now(), accumulated_depreciation: 0, ...asset });
    await logAudit({ entity: 'fixed_asset', action: 'CREATE', meta: asset });
  }
  async function runDepreciation(period) {
    const p = period || (await getCurrentPeriod());
    const entries = [];
    fixedAssets.value.forEach((a) => {
      if (a.method !== 'straight_line' || !a.useful_life_months) return;
      const monthly = Number(a.cost) / Number(a.useful_life_months);
      if (monthly > 0) {
        a.accumulated_depreciation = (a.accumulated_depreciation || 0) + monthly;
        entries.push({
          description: `Depreciation - ${a.name}`,
          lines: [
            { account: 'Depreciation Expense', type: 'debit', amount: monthly },
            { account: 'Accumulated Depreciation', type: 'credit', amount: monthly },
          ],
        });
      }
    });
    for (const e of entries) await postJournalEntry({ ...e });
    await logAudit({ entity: 'depreciation', action: 'RUN', meta: { period: p, entries: entries.length } });
  }
  async function createBudget(period, lines) {
    const idx = budgets.value.findIndex((b) => b.period === period);
    if (idx >= 0) budgets.value.splice(idx, 1);
    budgets.value.push({ period, lines });
    await logAudit({ entity: 'budget', action: 'UPSERT', meta: { period, lines } });
  }
  async function logAudit({ entity, action, meta, user_id = 'system' }) {
    auditLogs.value.push({ id: Date.now(), timestamp: new Date().toISOString(), user_id, entity, action, meta });
  }

  return {
    // GL
    journalEntries,
    accountBalances,
    currentPeriod,
    getJournalEntriesForPeriod,
    getTrialBalance,
    postJournalEntry,
    closePeriod,
    getCurrentPeriod,
    getNextPeriod,

    // AP
    payables,
    getPayables,
    createPayable,
    recordPayablePayment,

    // AR
    receivables,
    getReceivables,
    createReceivable,
    recordReceivablePayment,

    // Cash
    cashFlowTransactions,
    getCashFlowTransactions,
    addCashFlowTransaction,
    updateCashFlowTransaction,
    deleteCashFlowTransaction,

    // Tax
    taxRecords,
    getTaxRecords,
    createTaxRecord,
    updateTaxRecord,
    markTaxRecordAsFiled,
    markTaxRecordAsPaid,

    // Assets/Budgets/Audit
    fixedAssets,
    budgets,
    auditLogs,
    addAsset,
    runDepreciation,
    createBudget,
    logAudit,
  };
});