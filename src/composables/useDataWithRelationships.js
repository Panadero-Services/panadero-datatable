import { ref } from 'vue'
import axios from 'axios'

export function useDataWithRelationships(tableName) {
  const data = ref([])
  const loading = ref(false)
  const error = ref(null)
  const relationships = ref({})

  const loadData = async () => {
    loading.value = true
    error.value = null
    
    try {
      // 1. Get model configuration
      const configResponse = await axios.get(`/api/model-config/${tableName}`)
      const modelConfig = configResponse.data
      
      // 2. Load main data
      const mainResponse = await axios.get(`/api/${tableName}`)
      let records = Array.isArray(mainResponse.data) ? mainResponse.data : []
      
      // 3. Load relationship data if configured
      if (modelConfig.relationships && Object.keys(modelConfig.relationships).length > 0) {
        const relationshipPromises = Object.entries(modelConfig.relationships).map(([name, config]) =>
          axios.get(`/api/${config.table}`).then(res => ({
            name,
            config,
            data: res.data
          }))
        )
        
        const relationshipData = await Promise.all(relationshipPromises)
        
        // Create lookup maps
        const lookupMaps = {}
        relationshipData.forEach(({ name, data }) => {
          lookupMaps[name] = new Map(data.map(item => [item.id, item]))
        })
        
        // Enrich records with related data
        records = records.map(record => {
          const enriched = { ...record }
          Object.entries(modelConfig.relationships).forEach(([name, config]) => {
            const relatedId = record[config.foreignKey]
            if (relatedId && lookupMaps[name]) {
              enriched[name] = lookupMaps[name].get(relatedId)
            }
          })
          return enriched
        })
        
        relationships.value = modelConfig.relationships
      }
      
      data.value = records
    } catch (err) {
      error.value = err.response?.data?.message || err.message
      console.error('Failed to load data with relationships:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    loading,
    error,
    relationships,
    loadData
  }
}
