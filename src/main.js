// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import store from './store/store'
import axios from 'axios';
axios.defaults.withCredentials=true;//默认跨域记住session
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper) 
Vue.config.productionTip = false
Vue.prototype.$axios=axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
