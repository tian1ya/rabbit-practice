import './assets/main.css'

import {
  createPinia
} from 'pinia'

import {
  createApp
} from 'vue'

import router from '@/routers'
import App from './App.vue'


// 引入初始化样式文件
import '@/styles/common.scss'

import { useIntersectionObserver } from '@vueuse/core'
const app = createApp(App)

// 定义全局指令
app.directive('img-lazy', {
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding) {
    // el: 指定绑定的元素，这里就是 <img>
    // binding: binding.value 指令等于号后面绑定的表达式的值，图片url
    useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        console.log('进入到视口区域', isIntersecting);
        if (isIntersecting) {
          // 进入视图区后才给 img.src 赋值，然后才会去请求图片
          el.src = binding.value
        }
      },
    )
  
  }
})


app.use(createPinia())
app.use(router)
app.mount('#app')