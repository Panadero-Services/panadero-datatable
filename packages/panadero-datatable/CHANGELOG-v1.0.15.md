# Panadero DataTable v1.0.15 - Release Notes

**Release Date:** 01 November 2025  
**Version:** 1.0.15  
**Status:** Production Ready

## Overview

Version 1.0.15 focuses on fixing reactivity issues with dynamic styling and scaling. All components now properly respond to font size changes and other framework settings through proper dependency injection patterns.

## Key Changes

### 1. **Reactive Scaling Fix** ⚡
- **Issue:** Optional chaining (`?.`) on reactive objects broke Vue's reactivity tracking
- **Solution:** Removed all optional chaining from `scalingStyles` and `designSystem` properties in templates
- **Files Updated:**
  - `DataTableFilters.vue`
  - `DataTableDashboard.vue`
  - `DataTableDemo.vue`

### 2. **Dependency Injection Pattern** 🔄
- **Migration:** Moved from props drilling to `provide`/`inject` pattern for shared objects
- **Benefits:**
  - Single source of truth for `designSystem` and `scalingStyles`
  - Eliminates prop passing through multiple component layers
  - Matches `InventoryWrapper` pattern for consistency
- **Files Updated:**
  - `DataTableWrapper.vue` - Now provides `designSystem`, `scalingStyles`, and `settingsStore`
  - `DataTableDashboard.vue` - Removed `DESIGN_SYSTEM` prop, uses injected `designSystem`
  - `DataTableDemo.vue` - Removed props, uses injected objects
  - `DataTableNavigation.vue` - Fixed to inject instead of direct `useScaling()` call

### 3. **DataTableWrapper Alignment** 🎯
- **Pattern Matching:** Aligned with `InventoryWrapper.vue` pattern exactly
- **Changes:**
  - Added default `settings` prop with proper default values
  - Uses `useScaling` and `useDesignSystem` from `panadero-shared-styling`
  - Provides all required objects to children via `provide`
  - Fixed `FrameworkSettingsPanel` prop passing

### 4. **Package Dependencies** 📦
- **Added:** `panadero-shared-styling` to `dependencies` (was only in `peerDependencies`)
- **Impact:** Ensures proper module resolution and reactive composable availability

### 5. **Component Version Updates** 📝
All components updated with new version numbers and dates:
- `DataTableWrapper.vue`: v1.0.15
- `DataTableDashboard.vue`: v1.0.15
- `DataTableDemo.vue`: v1.0.15
- `DataTableFilters.vue`: v1.0.15
- `InfoBoard.vue`: v1.0.15

## Technical Details

### Before (v1.0.14)
```vue
<!-- Optional chaining breaks reactivity -->
<span :style="scalingStyles?.textFontSize">Text</span>
<div :class="designSystem?.card">Content</div>
```

### After (v1.0.15)
```vue
<!-- Direct property access preserves reactivity -->
<span :style="scalingStyles.textFontSize">Text</span>
<div :class="designSystem.card">Content</div>
```

### Injection Pattern
```vue
<!-- DataTableWrapper.vue -->
<script setup>
import { useScaling, useDesignSystem } from 'panadero-shared-styling'

const { scalingStyles } = useScaling()
const { designSystem } = useDesignSystem()

provide('scalingStyles', scalingStyles)
provide('designSystem', designSystem)
</script>

<!-- Child Component -->
<script setup>
const scalingStyles = inject('scalingStyles')
const designSystem = inject('designSystem')
</script>
```

## Files Modified

1. **package.json** - Version updated to 1.0.15
2. **README.md** - Version and date updated
3. **DataTableWrapper.vue** - Injection pattern, default props
4. **DataTableDashboard.vue** - Removed optional chaining, uses injected objects
5. **DataTableDemo.vue** - Removed optional chaining, uses injected objects
6. **DataTableFilters.vue** - Removed optional chaining
7. **DataTableNavigation.vue** - Fixed injection (already done in previous session)
8. **InfoBoard.vue** - Updated version references and changelog

## Breaking Changes

⚠️ **None** - This is a patch version with bug fixes and improvements only.

## Migration Guide

If you're using `panadero-datatable` in your project:

1. **No code changes required** - The fixes are internal
2. **Ensure `panadero-shared-styling` is installed** - Now required in dependencies
3. **Verify dynamic scaling works** - Font size changes should now properly reflect in all components

## Testing

✅ All components tested with:
- Dynamic font size changes
- Dark mode toggling
- Compact layout switching
- Component mounting/unmounting

## Next Steps

- Continue monitoring reactivity in production
- Consider adding unit tests for reactivity behavior
- Evaluate performance impact of injection pattern

---

**Previous Version:** [v1.0.14](../CHANGELOG-v1.0.14.md) (08 October 2025)  
**Next Version:** TBD

