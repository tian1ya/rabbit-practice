// vueuse 视图窗口函数，当检测的元素进入到浏览器窗口后做对应的操作
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    // 懒加载指令逻辑
    app.directive('img-lazy', {
      // 在绑定元素的父组件
      // 及他自己的所有子节点都挂载完成后调用
      mounted(el, binding) {
        // el: 指定绑定的元素，这里就是 <img>
        // binding: binding.value 指令等于号后面绑定的表达式的值，图片url
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              // 进入视图区后才给 img.src 赋值，然后才会去请求图片
              el.src = binding.value
              
              // 停止监听，第一次赋值，加载完之后，就停止监听
              stop()
            }
          },
        )
      
      }
    })
  }
}