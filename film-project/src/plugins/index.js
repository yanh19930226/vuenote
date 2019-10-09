import TipBox from './TipBox'

const tipBoxInit = function(Vue){
    const Tip = Vue.extend(TipBox);
    const tipbox = function (msg = "默认值", time = 3000) {
        let tip = new Tip();
        tip.msg = msg;
        tip.time = time;
        tip.$mount();
    }
    return tipbox;
}

export default {
    install:function(Vue){
        // 全局插件，组件，过滤器，指令……
        Vue.prototype.$tipBox = tipBoxInit(Vue);
        // Vue.component()
        // Vue.filter()
        // Vue.directive()
    }
}