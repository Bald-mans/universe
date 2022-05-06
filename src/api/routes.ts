//路由相关的api

import {http} from '/@/utils/http/index'

//获取异步路由的网络请求
export const getAsyncRoutes=()=>{
    return http.request()
}