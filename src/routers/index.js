// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由

import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import cartList from '@/views/cartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [{
    path: '/',
    component: Layout,
    children: [{
      path: '',
      component: Home
    }, {
      path: 'category/:id',
      component: Category
    }, {
      path: 'category/sub/:id',
      component: SubCategory
    }, {
      path: 'detail/:id',
      component: Detail
    }, {
      path: 'cartlist',
      component: cartList
    },{
      path: 'checkout',
      component: Checkout
    }]
  }, {
    path: '/login',
    component: Login
  }, {
    path:'/pay',
    component: Pay
  }],

  // 路由行为定制, 切换路由的时候，回到顶部显示
  scrollBehavior() {
    return {
      top: 0
    }
  }
});

export default router