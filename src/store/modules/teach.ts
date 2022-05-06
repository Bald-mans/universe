
// export const useTestStore = defineStore({
//     state: {
//         name: 'zhang',
//         age: '100'
//     }
// })

// //state
// const Test = useTestStore()//store实例
// const change=()=>{
//     Test.current++ //每次加一  
//     Test.$patch({name:'wang',age:'99'})   //直接批量修改值，可以修改任意数量属性的值
//     Test.$patch(()=>{})   //创建一个函数，在函数里批量修改
//     Test.$state={}   //也是批量修改，不过它和$patch的区别是它必须修改state中所有属性值，
//     和actions结合

// }//我们来修改state


// //actions

// 1,处理异步和同步
// 2,支持数据共享
// 3,