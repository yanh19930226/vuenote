import Vue from 'vue';
import App from './App.vue';
import plugins from './plugins';
import api from './api';
import router from './router.js';

Vue.config.productionTip = false;

Vue.use(plugins);
Vue.use(api);

new Vue({
    router,
    render: h => h(App),
    //   mounted() {
    //       console.log(this);
    //   },
}).$mount('#app')
