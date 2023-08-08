import { fileURLToPath, URL } from 'node:url'

// elementplus 按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 导入对应包
import ElementPlus from 'unplugin-element-plus/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 配置采用sass 样式配置系统
      resolvers: [ElementPlusResolver({importStyle: "sass"})],
    }),
    // 按需定制主题配置
    ElementPlus({
      useSource: true,
    }),

    vue(),
  ],
  // 实际的路径转换，@ -> src
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入定制化样式文件进行样式覆盖
        additionalData: `
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;
        `,
      }
    }
  }
})
