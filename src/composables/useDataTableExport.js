// useDataTableExport - Export Functionality for Data Table
// @version 1.0.0
// @date 29-Sep-2025
// @description Handles data export functionality for data table
export function useDataTableExport(props, config, state, getNestedValue) {

  const convertToCSV = (data) => {
    if (!data.length) return ''
    
    const headers = Object.keys(data[0])
    const csvRows = [headers.join(',')]
    
    for (const row of data) {
      const values = headers.map(header => {
        const value = row[header] || ''
        return `"${value.toString().replace(/"/g, '""')}"`
      })
      csvRows.push(values.join(','))
    }
    
    return csvRows.join('\n')
  }

  const downloadCSV = (csvContent, filename) => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', filename)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const exportData = () => {
    try {
      state.isExporting.value = true
      
      // Use export fields from config
      const exportFields = config.exportFields || [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'created_at', label: 'Created At' }
      ]
      
      const dataToExport = state.data.value.map(item => {
        const exportItem = {}
        exportFields.forEach(field => {
          if (field.key.includes('.')) {
            exportItem[field.label] = getNestedValue(item, field.key) || ''
          } else if (field.transform && typeof field.transform === 'function') {
            exportItem[field.label] = field.transform(item[field.key], item)
          } else {
            exportItem[field.label] = item[field.key] || ''
          }
        })
        return exportItem
      })

      const csvContent = convertToCSV(dataToExport)
      downloadCSV(csvContent, `${props.tableName}_export_${new Date().toISOString().split('T')[0]}.csv`)
      
      state.isExporting.value = false
      return { success: true, message: 'Data exported successfully' }
    } catch (error) {
      console.error('Export error:', error)
      state.isExporting.value = false
      return { success: false, message: 'Export failed' }
    }
  }

  return {
    exportData,
    convertToCSV,
    downloadCSV
  }
}
