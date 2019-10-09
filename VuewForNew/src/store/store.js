import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex);

import actions from './actions'
import mutations from './mutations'
export default new Vuex.Store({
    modules:{
        mutations
    },
    actions
});
