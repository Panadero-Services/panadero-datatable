# Panadero ERP Finance Module

Modern finance and accounting module for ERP apps. Includes General Ledger, AP/AR, Cash Flow, Tax Management, Fixed Assets, Reporting (IS/BS/CF), Budgeting & Forecasting, and Compliance/Audit. Ships with in-memory demo data (Pinia) and optional DB/API persistence.

## Features
- General Ledger: balanced journal entries, trial balance, period close
- Accounts Payable/Receivable: invoices, payments, aging summary
- Cash Flow: categorized inflow/outflow with basic summaries
- Tax Management: records, filing, payments
- Fixed Assets: register assets, straight-line depreciation, NBV
- Reporting: Income Statement, Balance Sheet, Cash Flow (export CSV)
- Budgeting & Forecasting: budgets by account, variance vs. actual
- Compliance & Audit: audit log, simple SoD check

## Package Structure
- Components:
  - `src/components/Finance.vue` (main shell + tabs)
  - `GeneralLedger.vue`, `AccountsPayable.vue`, `AccountsReceivable.vue`, `CashFlow.vue`, `TaxManagement.vue`
  - `FixedAssets.vue`, `Reporting.vue`, `BudgetingForecasting.vue`, `ComplianceAudit.vue`
- Composables:
  - `useGeneralLedger.js`, `useAccountsPayable.js`, `useAccountsReceivable.js`, `useCashFlow.js`, `useTaxManagement.js`
  - `useFixedAssets.js`, `useReporting.js`, `useBudgeting.js`, `useCompliance.js`
- Store: `src/stores/financeStore.js` (Pinia)

## Quick Start (Frontend)
1. Ensure Font Awesome is available in your app (optional for icons).
2. Import and render the shell component from your app wrapper:
```vue
<!-- resources/js/pages/erp/Finance.vue -->
<script setup>
import Finance from '../../../../vendor/panadero/panadero-erp-finance/src/components/Finance.vue'
</script>
<template>
  <Finance />
</template>
```
3. Start Vite/dev server. You’ll see tabs for all modules and demo data working out‑of‑the‑box (in-memory).

## State & Demo Data
- The Pinia store contains demo arrays for: `journalEntries`, `payables`, `receivables`, `cashFlowTransactions`, `taxRecords`, `fixedAssets`, `budgets`, `auditLogs`.
- GL validations enforce balancing debits/credits.
- Period close enforces debits==credits for that period.

## Optional: Persistence (DB/API)
This module can run fully in-memory. To persist, wire Laravel migrations, endpoints, and seeders.

### Database tables (core)
From `2025_05_15_000001_create_finance_tables.php`:
- `finance_accounts` (code, name, type, subtype, etc.)
- `finance_journal_entries`, `finance_journal_lines`
- `finance_payables`, `finance_receivables`
- `finance_tax_records`
- `finance_cashflow_categories`, `finance_cashflow_transactions`
- `finance_periods`

Additional migrations (recommended):
- `finance_fixed_assets`, `finance_asset_depreciations`, `finance_asset_disposals`
- `finance_budgets`, `finance_budget_lines`
- `finance_audit_logs`

### API Endpoints (examples)
```http
# Fixed Assets
GET  /api/finance/assets
POST /api/finance/assets
POST /api/finance/assets/depreciate

# Budgets
GET  /api/finance/budgets/{period}
POST /api/finance/budgets

# Audit logs
GET  /api/finance/audit-logs
POST /api/finance/audit-logs
```
Controllers:
- `App\Http\Controllers\Finance\FixedAssetController`
- `App\Http\Controllers\Finance\BudgetController`
- `App\Http\Controllers\Finance\AuditLogController`

Routes (in `routes/api.php`):
```php
Route::prefix('finance')->middleware('auth:sanctum')->group(function () {
  // assets
  Route::get('/assets', [FixedAssetController::class, 'index']);
  Route::post('/assets', [FixedAssetController::class, 'store']);
  Route::post('/assets/depreciate', [FixedAssetController::class, 'depreciate']);
  // budgets
  Route::get('/budgets/{period}', [BudgetController::class, 'show']);
  Route::post('/budgets', [BudgetController::class, 'upsert']);
  // audit
  Route::get('/audit-logs', [AuditLogController::class, 'index']);
  Route::post('/audit-logs', [AuditLogController::class, 'store']);
});
```

### Seeders
Register and run:
```php
// database/seeders/DatabaseSeeder.php
$this->call([
  FinanceCoreSeeder::class,
  FinanceDemoSeeder::class,
]);
```
- `FinanceCoreSeeder`: seeds `finance_accounts`, `finance_periods`, cashflow categories (meeting required columns like `type`, `status`, `start_date`, `end_date`).
- `FinanceDemoSeeder`: example fixed asset and budget for current period.

Run:
```bash
php artisan migrate
php artisan db:seed --class=FinanceCoreSeeder
php artisan db:seed --class=FinanceDemoSeeder
# or php artisan db:seed
```

### Wiring Pinia to API (optional)
Update store actions to call your API (using axios/fetch), e.g.:
```js
// addAsset
await axios.post('/api/finance/assets', asset)
// runDepreciation
await axios.post('/api/finance/assets/depreciate', { period })
```

## KPIs & Reporting
- AP/AR: add DPO/DSO and aging buckets (basic UI present; formulas easy to extend).
- Reporting: composable `useReporting()` computes IS/BS/CF from GL; CSV export included.
- Fixed assets: straight-line depreciation, GL postings (Depreciation Expense / Accumulated Depreciation).
- Budgeting: `useBudgeting()` compares actual vs budget per account.

## Roadmap
- Lease accounting (ASC 842/IFRS 16)
- Bank reconciliation, feeds (CSV/API)
- Automated AR reminders and AP discounting suggestions
- Advanced SoD policies and report attestations
- PDF exports and scheduled reports

## Notes
- This module is UI + store first. Persistence is optional and incremental.
- If you see “react-refresh” dev overlay warnings, they’re not module-related and can be ignored or disabled in Vite.