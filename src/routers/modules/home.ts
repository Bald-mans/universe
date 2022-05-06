//登录完成后进入的首页

import Layout from '/@/layout/index.vue'

export const homeRouter={
    path:'/home',
    name:'home',
    component:Layout,
    redirect:"/welcome",
    meta:{
        rank:'1'
    },
    children:[
        {
            path:'/welcome',
            name:'welcome',
            component:()=>import("/@/views/home/welcome.vue")
        }
    ]
}

export default homeRouter