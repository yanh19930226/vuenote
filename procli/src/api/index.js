import axios from 'axios';
import QS from 'qs';
// 2、统一全局配置
const baseURL = {
    development: "/api",
    production: "http://127.0.0.1:80",
    test: "其他模式的地址"
}
axios.defaults.baseURL = baseURL[process.env.NODE_ENV];

// 3、项目统一地址管理
const url = {
        Test: "",
        TestParam: "",
    }
    // 4、异步方法的统一定义
const baseFun = function({ statusText, data }) {
    if (statusText != "OK") {
        return Promise.reject("请求失败");
    }
    return data;
}

const Test = function() {
    return axios.get(url.Test)
        .then(baseFun)
        .then(function(data) {
            if (!data.resultState) {
                return Promise.reject(data.msg);
            }
            return data.result;
        })
}

const TestParam = function(params = {}) {
    return axios.post(url.TestParam, QS.stringify(params))
        .then(baseFun)
        .then(function(data) {
            if (!data.resultState) {
                return Promise.reject(data.msg);
            }
            return data.result;
        });
}

export default {
    install: function(Vue) {
        Vue.prototype.$api = {
            Test,
            TestParam
        }
    }
}