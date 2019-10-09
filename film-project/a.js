function show(){
    console.log("a.js中的 show方法");
}

function print(){
    console.log("私有方法");
}

// 环境中 js文件需要作为模块 只需完成 功能导出即可
// node 语法
// module.exports = {
//     show:show
// }

// ES6 模块导出语法
//    export default 方式 导入时不能解构
// export default {
//     show
// }

//      export { } 导出的结果 需要在导入时使用解构方式加载
export {
    show
}
