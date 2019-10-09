import Vue from 'vue'
import TipBox from './TipBox'

const Tip = Vue.extend(TipBox);

function tipBox(msg = "默认值", time = 3000) {
    let tip = new Tip();
    tip.msg = msg;
    tip.time = time;
    tip.$mount();
}

window.tipBox = tipBox;