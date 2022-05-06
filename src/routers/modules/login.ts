const loginRouter={
    path:'/',
    name:'Login',
    component:()=>import('/@/views/login/login.vue'),
    meta:{
        rank:'0'
    }
}

export default loginRouter