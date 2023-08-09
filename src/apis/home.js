import httpInstance from "@/utils/http";

export function getBannerAPI() {
  return httpInstance({
    url: 'home/banner'
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function findNewAPI() {
  return httpInstance({
    url: '/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export function getHotAPI() {
  return httpInstance({
    url: 'home/hot'
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export function getGoodsAPI() {
  return httpInstance({
    url: '/home/goods'
  })
}