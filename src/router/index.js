import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import productList from '@/components/productList'
import productDetail from '@/components/productDetail'
import register from '@/components/register'
import login from '@/components/login'
import cart from '@/components/cart'
import personalCenter from '@/components/personalCenter'
import personalAddress from '@/components/personalAddress'
import personalDetails from '@/components/personalDetails'
import personalOrder from '@/components/personalOrder'

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
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/personalcenter',
      name: 'personalcenter',
      component: personalCenter,
      children:[
        {
          path: '/',
          name: 'personaldetails',
          component: personalDetails,
        },
        {
          path: '/personaladdress',
          name: 'personaladdress',
          component: personalAddress,
        },
        {
          path: '/personalorder',
          name: 'personalorder',
          component: personalOrder,
        },
        {
          path: '/personaldetails',
          name: 'personaldetails',
          component: personalDetails,
        }
      ]
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    window.scrollTo(0,0);
  }
})
