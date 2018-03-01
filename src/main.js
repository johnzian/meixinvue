// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueResource from 'vue-resource';
import store from './store/store';
import axios from 'axios';
import qs from 'qs';
axios.defaults.withCredentials=true;//默认跨域记住session
// axios.defaults.headers
axios.defaults.transformRequest = [function (data) {
  data=qs.stringify(data);//把axios的json格式字符转为字符串
  return data;
}]
Vue.prototype.$axios=axios;
Vue.use(qs);
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper) 
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
