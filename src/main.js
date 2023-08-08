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

// getCategoryAPI().then(res => {
//   console.log(res);
// })

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')