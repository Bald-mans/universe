import { getAsyncRoutes } from "/@/api/routes"
import { RouteRecordNormalized,RouteRecordRaw } from "vue-router"
// 过滤后端传来的动态路由 重新生成规范路由，初始化时会用到它
function addAsyncRoutes(){
    
}

//初始化路由
function initRoutes(){
    return new Promise(resolve=>{
        getAsyncRoutes()
    })
}

const some=<RouteRecordRaw>{
    name:123
}
console.log(some.name)