import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
// import { createRouter } from 'vue-router'

import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
// app.use(router)
app.mount('#app')
