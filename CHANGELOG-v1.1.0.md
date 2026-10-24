# Changelog v1.1.0

## [1.1.0] - 2026-10-24

All additions are optional: without the new config a table behaves as in 1.0.16.

### Added

- `cellStateClasses` prop (`DataTable`, passed to `DataTableBody`): classes per cell state for columns with `column.stateKey` (the row field that holds the state), e.g. overdue tasks in red.
- `useDataTablePermissions(config)`: optional `config.permissions = { create, delete, editKey, deleteKey }`; absent means allowed. Hides Add, bulk delete, and edit/delete per row (`editKey` / `deleteKey` name a row field that is `false` when the row may not be changed).
- Header options: `config.heading`, `config.createLabel`, `config.headerVariant: 'compact'` (uses `SharedButton` size `compact`, panadero-shared-components 1.1.0), `config.showDatasetButtons: false`.
- `src/config/tableLabels.js` (`DEFAULT_TABLE_LABELS`): screen-reader names for actions, edit, delete and the selection checkboxes; override with `config.labels`. Icons in row buttons are `aria-hidden`.

### Changed

- `DataTableKPIs` hides the Add quick action when `permissions.create` is `false`.
