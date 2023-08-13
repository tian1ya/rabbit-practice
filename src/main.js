import './assets/main.css'

import {
  createPinia
} from 'pinia'

import {
  createApp
} from 'vue'

// import router from '@/routers/index'
import router from './routers'
import App from './App.vue'

// 指令插件
import {
  lazyPlugin
} from '@/directives'

// 全局组件插件
import {
  componentPlugins
} from '@/components/index'

// 引入初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)


app.use(createPinia())
// 会执行 插件中的 install 方法
app.use(lazyPlugin)
app.use(componentPlugins)
app.use(router)
app.mount('#app')