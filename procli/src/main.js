import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins';
import router from './router/index'
import stores from './store/store'
import api from './api';
import * as filters from './filters'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
    //Animate
import Animate from 'animate.css'
//loadsh
import _ from 'lodash'
//工具
import utils from './utils' //获取url参数
Vue.prototype.$utils = utils //注册全局方法

Vue.use(api);
Vue.use(plugins);
Vue.use(Animate);
Vue.use(_);

Vue.config.productionTip = false

new Vue({
    router,
    store: stores,
    render: h => h(App),
}).$mount('#app')