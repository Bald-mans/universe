//登录请求
import axios from 'axios'
import { AxiosResponse } from 'axios'
import { login } from './login'
import {ElLoading} from 'element-plus'

//创建axios实例
const loginRequest=axios.create({
    baseURL:'process.env.VITE_GLOB_API_URL',
    timeout:5000
})

//异常拦截处理器
const errorHandler=()={

}

//请求拦截器
loginRequest.interceptors.request.use(config=>{
    //从store里获取status登陆状态
    const {getStatus}=useLayoutstore()
    //登录加载时的动画特效
    loading=ElLoading.service({

    })
    const token=getStatus.ACCESS_TOKEN
    if(token){
        config
    }
})
//响应拦截器
loginRequest.interceptors.response.use

export default loginRequest