import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import productList from '@/components/productList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/productlist',
      name: 'productlist',
      component: productList
    },
  ]
})
