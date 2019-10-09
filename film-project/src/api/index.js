// ajax 请求的模块化定义
// ajax请求对象的统一配置
// ajax 地址的统一管理
// ajax 方法的定义定义

// 1、加载异步请求对象
import axios from 'axios';
import QS from 'qs';
// 2、统一全局配置
// 2.1、地址前缀的拦截地址定义
const baseURL = {
    // key 定义模式名称  value 写模式对应的地址
    development: "/api",
    production: "http://127.0.0.1:80",
    test: "其他模式的地址"
}
axios.defaults.baseURL = baseURL[process.env.NODE_ENV];

// 3、项目统一地址管理
const url = {
    loadTyps: "/filmApi/loadTyps.php",
    loadFilms: "/filmApi/loadFilms.php",
    loadFilmById: "/filmApi/loadFilmById.php",
    addComment: "/filmApi/addComment.php",
    loadComments: "/filmApi/loadComments.php"
}


// 4、异步方法的统一定义
//    完成统一数据默认处理
const baseFun = function ({ statusText, data }) {
    if (statusText != "OK") {
        return Promise.reject("请求失败");
    }
    return data;
}

const loadTypes = function () {
    return axios.get(url.loadTyps)
        .then(baseFun)
        .then(function(data){
            if(!data.resultState){
                return Promise.reject(data.msg);
            }
            return data.result;
        })
}

const loadFilms = function (params={}) {
    return axios.post(url.loadFilms,QS.stringify(params))
        .then(baseFun)
        .then(function(data){
            if(!data.resultState){
                return Promise.reject(data.msg);
            }
            return data.result;
        });
}

const loadFilmById = function (params={}) {
    return axios.post(url.loadFilmById,QS.stringify(params))
        .then(baseFun)
        .then(function(data){
            if(!data.resultState){
                return Promise.reject(data.msg);
            }
            return data.result;
        });
}

const loadComments = function (params={}) {
    return axios.get(url.loadComments,{ params })
            .then(baseFun)
            .then(function(data){
                if(!data.resultState){
                    return Promise.reject(data.msg);
                }
                return data.result;
            });
}
const addComment = function (params={}) {
    return axios.post(url.addComment,QS.stringify(params))
            .then(baseFun)
            .then(function(data){
                if(!data.resultState){
                    return Promise.reject(data.msg);
                }
                return data.msg;
            });
}

export default {
    install:function(Vue){
        Vue.prototype.$api = {
            loadTypes,loadFilms,loadFilmById,loadComments,addComment
        }
    }
}