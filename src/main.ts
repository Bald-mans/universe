import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import { pinia } from './store'


const app=createApp(App)
app.use(router)
app.use(pinia)
//await router.isReady()
app.mount('#app')

