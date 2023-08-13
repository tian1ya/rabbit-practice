import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";

export const useUserStore = defineStore('user', () => {

  const userInfo = ref({})

  const doUserLogin = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result; 
  }

  const clearUserInfo = () => {
    userInfo.value = {}
  }

  return {
    doUserLogin,
    userInfo,
    clearUserInfo
  }
}, {
  persist: true
})