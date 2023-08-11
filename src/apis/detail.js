import httpInstance from "@/utils/http";

export function getGoodsDetailAPI (id) {
  return httpInstance({
    url: '/goods',
    params: {
      id
    }
  })
}