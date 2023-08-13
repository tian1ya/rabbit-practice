// component 目录下的所有组件，使用插件方式均进行全局化注册

import ImageView from './imageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componentPlugins = {
  install(app) {
    // app.component('组件名字', 组件配置对象)

    app.component('XtxImageView', ImageView)
    app.component('XtxSku', Sku)
  }
}