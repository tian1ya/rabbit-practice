import httpInstance from "@/utils/http";

export function insertCartAPI({
  skuId,
  count
}) {
  return httpInstance({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}


export function findNewCartListAPI() {
  return httpInstance({
    url: '/member/cart',
  })
}


export function delCartAPI(ids){
  return request({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}