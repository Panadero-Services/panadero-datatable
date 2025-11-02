// useDataTableAnalytics - Analytics and KPIs for Data Table
// @version 1.0.0
// @date 29-Sep-2025
// @description Handles KPI calculations, distributions, and analytics for data table
import { computed } from 'vue'
import { useStyling } from 'panadero-shared-styling'

export function useDataTableAnalytics(config, filteredData) {
  // Get styling utilities
  const { getKpiColorClass, getKpiIconColor, getKpiBgColor } = useStyling()

  // KPI calculations
  const calculateKpiValue = (kpi) => {
    // Generic KPI calculation based on configuration
    if (typeof kpi.calculate === 'function') {
      return kpi.calculate(filteredData.value)
    }
    
    // Default calculations based on key
    switch (kpi.key) {
      case 'total':
        return filteredData.value.length
      case 'active':
        return filteredData.value.filter(item => item.is_active === true).length
      case 'inactive':
        return filteredData.value.filter(item => item.is_active === false).length
      case 'locked':
        return filteredData.value.filter(item => item.is_locked === true).length
      case 'unlocked':
        return filteredData.value.filter(item => item.is_locked === false).length
      default:
        // Try to calculate based on field name
        if (kpi.field) {
          return filteredData.value.filter(item => item[kpi.field] === kpi.value).length
        }
        return 0
    }
  }

  const kpis = computed(() => {
    if (!config.kpis || !Array.isArray(config.kpis)) return []
    
    const processedKpis = config.kpis.map(kpi => {
      const processedKpi = {
        ...kpi,
        value: calculateKpiValue(kpi),
        // Add color information if not already provided
        colorClass: kpi.colorClass || kpi.color || getKpiColorClass(kpi.key),
        iconColor: kpi.iconColor || getKpiIconColor(kpi.key),
        bgColor: kpi.bgColor || getKpiBgColor(kpi.key)
      }
      
      return processedKpi
    })
    
    return processedKpis
  })

  // Distribution calculations for charts
  const productTypeDistribution = computed(() => {
    if (config.title !== 'Products') return []
    
    const typeCounts = {}
    filteredData.value.forEach(item => {
      const type = item.product_type?.name || 'No Type'
      typeCounts[type] = (typeCounts[type] || 0) + 1
    })
    
    const colors = [
      '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
      '#FF8000', '#8000FF', '#FF0080', '#80FF00', '#0080FF', '#FF8080',
      '#80FF80', '#8080FF', '#FFFF80', '#FF80FF', '#80FFFF', '#FF4000',
      '#FF0040', '#4000FF', '#00FF80', '#FF8040', '#8040FF', '#40FF80',
      '#FF4080', '#4080FF', '#80FF40', '#FF8080', '#80FF80', '#8080FF',
      '#FFFF80', '#FF80FF'
    ]
    
    return Object.entries(typeCounts).map(([name, count], index) => ({
      name,
      count,
      percentage: Math.round((count / filteredData.value.length) * 100),
      color: colors[index % colors.length]
    }))
  })

  const brandDistribution = computed(() => {
    if (config.title !== 'Products') return []
    
    const brandCounts = {}
    const brandData = {}
    filteredData.value.forEach(item => {
      const brand = item.brand?.name || 'No Brand'
      brandCounts[brand] = (brandCounts[brand] || 0) + 1
      if (item.brand) {
        brandData[brand] = item.brand
      }
    })
    
    // Fallback colors for brands without defined colors
    const fallbackColors = [
      '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
      '#FF8000', '#8000FF', '#FF0080', '#80FF00', '#0080FF', '#FF8080',
      '#80FF80', '#8080FF', '#FFFF80', '#FF80FF', '#80FFFF', '#FF4000',
      '#FF0040', '#4000FF', '#00FF80', '#FF8040', '#8040FF', '#40FF80',
      '#FF4080', '#4080FF', '#80FF40', '#FF8080', '#80FF80', '#8080FF',
      '#FFFF80', '#FF80FF'
    ]
    
    return Object.entries(brandCounts).map(([name, count], index) => {
      const brand = brandData[name]
      const brandColor = brand?.json?.color || fallbackColors[index % fallbackColors.length]
      
      return {
        name,
        count,
        percentage: Math.round((count / filteredData.value.length) * 100),
        color: brandColor
      }
    })
  })

  return {
    kpis,
    productTypeDistribution,
    brandDistribution,
    calculateKpiValue
  }
}
