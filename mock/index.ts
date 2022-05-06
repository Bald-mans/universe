import {MockMethod} from 'vite-plugin-mock'
import {login,setToken} from '/mock/response'

export interface IReq { 
    body: any; 
    query: any, 
    headers: any; 
}
const responseData = (code: number, msg: string, data: any) => {
    return {
        Code: code,
        Msg: msg,
        Data: data
    }
}
export default[
    {
        //login的mock
        url:'api/user/login',
        methods:"post",
        timeout:200,
        response:(req:IReq)=>{
            cosnt{username,password}=req.body
            if(login(username, password)) return responseData(200, '登陆成功', setToken(username))
            return responseData(401, '用户名或密码错误', '')
        }
    }
    {

    }
]