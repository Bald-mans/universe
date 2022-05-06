/*
    用户相关接口
*/
import request from '/@/utils/http/index'
import { AxiosResponse } from 'axios'
/*
用户相关操作均为调用http实例类中的request方法实现
*/

//登录所需参数类型
export interface loginParam {
    name: string,
    pwd: string
}
//登录请求函数
//函数是一个promise函数，函数的类型继承自AxiosResponse接口，AxiosResponse有两个类型，IResponse作为它的第一个类型被传入，目的是赋予其data属性值


export function userLogin(param: loginParam): Promise<AxiosResponse<IResponse<string>>> {
    //这个request常量就是axios实例，可以在里面使用axios的方法
    return request({
        url: 'api/user/login',
        method: 'post',
        // `data` 是作为请求主体被发送的数据
        // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
        // 在没有设置 `transformRequest` 时，必须是以下类型之一：
        // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
        // - 浏览器专属：FormData, File, Blob
        // - Node 专属： Stream
        data: param
    })
}
//刷新token
export const refreshToken = (data: object) => {
    return http.request()
}



