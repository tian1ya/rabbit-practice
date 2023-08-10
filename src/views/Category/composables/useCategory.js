// 封装分类数据// 封装轮播图
import {
  getCategoryAPI
} from "@/apis/category";
import {
  useRoute
} from "vue-router";

import {
  onMounted,
  ref
} from "vue";

import { onBeforeRouteUpdate } from "vue-router";

export function useCategory() {

  // 路由中获取参数
  const router = useRoute();
  const categoryData = ref([]);

  const getCategories = async (id = router.params.id) => {
    const res = await getCategoryAPI(id);
    console.log("调用新路由", id);
    categoryData.value = res.result;
  };

  onMounted(() => getCategories());

  onBeforeRouteUpdate((to) => {
    console.log("导航变了");
    getCategories(to.params.id);
  });

  return {
    categoryData,
  }
}