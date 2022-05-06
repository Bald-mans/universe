//设置路由重定向


const redirectRouter=[
    {
        path:'/login',
        name:'login',
        component:()=>import('/@/views/login/login.vue'),
        meta:{
            title:'thislogin',
            rank:100
        }
    },
    {
        path:'/redirect',
        component:()=>import('/@/layout/index.vue'),
        meta:{
            title:'thisredirect',
            rank:101
        },
        children:[
            {
                path:'/redirect/:path(.*)',
                name:'redirect',
                component:()=>import('/@/layout/redirect/redirect.vue')
            }
        ]
    }
]
export default redirectRouter