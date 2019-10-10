import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import NotFound from '../views/NotFound.vue'
import Home from '../components/Home.vue'


export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/home',
            component: Home,
            meta: {

            }
        }, {
            path: '/',
            component: Home,
            redirect: '/home',
            meta: {

            }
        },
        {
            path: '*',
            component: NotFound,
            meta: {

            }
        }

    ],
    scrollBehavior: () => ({
        y: 0
    }),
});