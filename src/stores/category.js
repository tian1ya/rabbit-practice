import {
  ref,
  computed
} from 'vue'
import {
  defineStore
} from 'pinia'

import {
  getCategoryAPI
} from "@/apis/layouts.js";

// action
export const useCategoryStore = defineStore('category', () => {

  const categories = ref([])

  const getCategories = async () => {
    const res = await getCategoryAPI();
    categories.value = res.result
  }

  return {
    categories,
    getCategories
  }

})