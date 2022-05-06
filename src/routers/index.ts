import { createRouter, createWebHistory, RouteRecordRaw, RouteComponent } from 'vue-router'
//import { formatFlatteningRoutes, formatTwoStageRoutes } from './utils'


import redirectRouter from './modules/redirect'
import homeRouter from './modules/home'
import loginRouter from './modules/login'
const modulesRoutes = import.meta.glob("/src/views/*/*/*.vue")
const constantRoutes = [
    homeRouter,
    loginRouter
]
//按rank值升序为路由排序
export const ascending = arr => {
    return arr.sort((a: any, b: any) => {
        return a?.meta?.rank - b?.meta?.rank;
    });
};
//导出所有静态路由
export const constantRoutesArr: Array<RouteComponent> = ascending(
    constantRoutes
).concat(...redirectRouter);





//创建路由实例
const router = createRouter({
    routes: ascending(constantRoutes).concat(...redirectRouter),
    history: createWebHistory(),
    //控制自定义路由切换时的页面滚动
    // scrollBehavior(to, from, savedPosition) {
    //     return new Promise(resolve => {
    //         if (savedPosition) {
    //             return savedPosition
    //         }
    //         else {
    //             if (from.meta.saveSrollTop) {
    //                 const top: number =
    //                     document.documentElement.scrollTop || document.body.scrollTop;
    //                 resolve({ left: 0, top });
    //             }
    //         }
    //     })

    // }
})


//前置导航守卫
router.beforeEach((to, from, next) => {
    if(to.name==='Login'){
        next({path:'/'})
    }
})
//后置导航守卫
export default router