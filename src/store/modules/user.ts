/*
统一管理用户相关数据
*/


import { defineStore } from "pinia";
//用户api
import { userLogin, loginParam, refreshToken } from "/@/api/user";
//路由
import router from '/@/routers/index'
import { decode, getLocal } from '/@/utils/tools'


const { ACCESS_TOKEN } = getLocal<IStatus>('token')
//初始化用户store
export const userStore = defineStore({
    id: 'user',
    state: () => ({
        status: {
            isloading: false,
            ACCESS_TOKEN: ACCESS_TOKEN || ''
        }
    }),
    getters: {
        getStatus(): IStatus {
            return this.status
        }
    },
    actions: {


        test() {
            console.log('sss')
        },

        //用户点击登录按钮登录
        async userLogin(param: loginParam): Promise<void> {
            //登录传参
            const res = await userLogin(param)
            //定义token数据为string类型
            const token = res.data.Data
            //类型为string
            this.status.ACCESS_TOKEN = token
            //相当于引入
            const { query } = router.currentRoute.value
            router.push({path:'/home'})
            //typeof query.from === string ? decode(query.from) : '/'
        }

        //登出

        //刷新token
    }
})