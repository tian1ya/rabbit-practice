// 封装购物车模块
import {
  defineStore
} from 'pinia'
import {
  ref
} from 'vue'

import {
  computed
} from "vue";

export const useCartStore = defineStore('cart', () => {
  // 1. 定义state - cartList
  const cartList = ref([])
  // 2. 定义action - addCart
  const addCart = (goods) => {
    // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      // 找到了
      item.count++
    } else {
      // 没找到
      cartList.value.push(goods)
    }
  }

  const delCart = async (skuId) => {
    // 1. 找到要删除项的下标值 - splice
    // 2. 使用数组的过滤方法 - filter
    const idx = cartList.value.findIndex((item) => skuId === item.skuId)
    cartList.value.splice(idx, 1)
  }

  const allCount = computed(() => cartList.value.reduce((a, b) => a + b.count, 0))
  const allPrice = computed(() => cartList.value.reduce((a, b) => a + b.count * b.price, 0))

  // 单选功能
  const singleCheck = (skuId, selected) => {
    // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }

  // 当前选中的个数
  const allSelectedNum = computed(() => cartList.value.filter(a => a.selected === true).length)

  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }

  const isAll = computed(() => cartList.value.every(item => item.selected))

  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    allSelectedNum,
    selectedPrice,
    allCheck,
    isAll
  }
}, {
  persist: true,
})