import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import productList from '@/components/productList'
import productDetail from '@/components/productDetail'
import register from '@/components/register'
import login from '@/components/login'

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
    {
      path: '/productdetail',
      name: 'productdetail',
      component: productDetail
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})
