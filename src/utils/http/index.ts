/*
axios封装网络请求
记录http request和response相关方法
*/
import axios from "axios"
import { userStore } from "/@/store/modules/user"
import { AxiosResponse } from "axios"
import { ElLoading } from "element-plus"

let loading:{close():void}
//初始化请求实例
const request=axios.create({
    baseURL:import.meta.env.VUE_APP_API_BASE_URL as string | undefined,
    timeout:60000
})



// 异常拦截处理器
const errorHandler = (error:{message:string}) => {
    loading.close()
    console.log(`err${error}`)
    
    return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
    const { getStatus } = userStore()
    loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.4)'
    })
    const token = getStatus.ACCESS_TOKEN
    // 如果 token 存在
    // 让每个请求携带自定义 token 请根据实际情况自行修改
    if (token) {
        config.headers['Access-Token'] = token
    }
    return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response:AxiosResponse<IResponse>) => {
    const { data } = response
    const { getStatus, logout } = userStore()
    loading.close()
    if(data.Code !== 200) {
        let title = '请求失败'
        if(data.Code === 401) {
            if (getStatus.ACCESS_TOKEN) {
                logout()
            }
            title = '身份认证失败'
        }
        
        return Promise.reject(new Error(data.Msg || 'Error'))
    }
    return response
}, errorHandler)

export default request