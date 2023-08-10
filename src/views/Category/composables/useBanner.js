// 封装轮播图
import {
  getBannerAPI
} from "@/apis/home";
import {
  onMounted,
  ref
} from "vue";

export function useBanner() {
  const catBanners = ref([]);

  const getBanners = async () => {
    const res = await getBannerAPI({
      distributionSite: "2"
    });
    catBanners.value = res.result;
  };

  onMounted(() => getBanners());

  return {
    catBanners,
  }
}