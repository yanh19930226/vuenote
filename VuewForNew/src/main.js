import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './routerconfig'
import stores from './store/store'
import Loading from './components/loading'
import axios from 'axios'
import filters from './filters'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
Vue.use(VueRouter);
Vue.use(Loading);

require('./assets/css/base.css'); //引入全局的base文件

//配置发送请求的信息，发送请求显示loading
axios.interceptors.request.use(function (config) {  
  stores.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});
//配置请求回来的信息,请求回来loading消失
axios.interceptors.response.use(function (response) { 
  stores.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});

Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了


const router=new VueRouter({
  mode:'history',
  scrollBehavior: () => ({ y: 0 }),
  routes:routerConfig
});


new Vue({
  el: '#app',
  router,
  store:stores,
  render: h => h(App)
})
