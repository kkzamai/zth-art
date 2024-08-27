import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', () => {
  const filter = ref()

  function updateFilter(text: String) {
    filter.value = text
  }

  return { filter, updateFilter }
})
