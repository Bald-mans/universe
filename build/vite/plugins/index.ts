import vue from '@vitejs/plugin-vue'
import { PluginOption } from 'vite'

export function createVitePlugins(){
    //plugins:()[]
    const Plugins:(PluginOption|PluginOption)[]=[
        vue()
    ]
    return Plugins
}