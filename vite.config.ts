import type { UserConfig, ConfigEnv, UserConfigExport } from 'vite';
//import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dayjs from 'dayjs';
import { resolve } from 'path'
//import { createVitePlugins } from './build/vite/plugins'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: resolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: resolve('types') + '/',
        },
      ],
    },

    //本地运行配置
    server: {
      https: true,
      host: true,
      cors: true,
      port: '3001',
      hmr: true,
      //配置代理，解决跨域问题
      proxy: {
        '/api': {
          //后端地址
          target: "http://localehost:3003",
          //是否跨域
          changeOrigin: true,
          //把实际请求的'/api'用''代替
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          //modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },

    // The vite plugin used by the project. The quantity is large, so it is separately extracted and managed
    //plugins: createVitePlugins(viteEnv, isBuild),
    plugins: [
      vue(),
      //使用mock插件
      viteMockServe({
        mockPath: "./mock",
        localEnabled:command==='serve',
        //打开后可以读取ts文件模块，但将无法监视js文件
        supportTs:true,
        //监听文件夹更改
        watchFiles:true
      }),
      //createVitePlugins(),
      //配置ui库自动引用
      Components({
        resolvers: [
          ElementPlusResolver()
        ]
      })
    ],
    optimizeDeps: {
      //@iconify/iconify: The dependency is dynamically and virtually loaded by @purge-icons/generated, so it needs to be specified explicitly
      include: [
        '@vue/runtime-core',
        //'@vue/shared',
        //'@iconify/iconify',
        'ant-design-vue/es/locale/zh_CN',
        //'ant-design-vue/es/locale/en_US',
      ],
    },

  }

}
