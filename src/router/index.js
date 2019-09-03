import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//懒加载
//方法一 : component :  resolve => require(['@/xx/xx.vue'],resolve)
//方法二 es提出的 import方法 (推荐使用这种方式)
const ShoppingMall = ()=>import("@/pages/ShoppingMall") 

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall
    }
  ]
})
