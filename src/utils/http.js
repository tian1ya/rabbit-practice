import axios from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
import { useRouter } from 'vue-router'

const rouer = useRouter()

const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 10000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  
    // 提示
    ElMessage({
      message: e.response.data.message,
      grouping: true,
      type: "warning",
    });

    // 401 处理
    if (e.response.status === 401) {
      userStore.clearUserInfo()
      rouer.push('/login')
    }
  return Promise.reject(e)
})

export default httpInstance