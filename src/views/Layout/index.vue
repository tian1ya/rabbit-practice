<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
import { onMounted } from "vue";

// 触发获取 categories 的action
import { useCategoryStore } from '@/stores/category'
const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategories())
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加key 破坏复用机制 -->
  <!-- 
    <RouterView :key="$route.fullPath"/> 
    替代方案：onBeforeRouteUpdate钩子函数，监听路由的变化，当路由变化的时候触发里面逻辑的执行，然后更新对应的数据
  -->
  <RouterView/>
  <LayoutFooter />
</template>