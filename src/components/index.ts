import buttontype from './button.vue'
import HomePage from './home/home.vue'
//引入匿名函数，并起名为buttontype
export {
    buttontype,
    HomePage
}
//vue文件中使用export default后加大括号，是指导出了这个组件对象，在ts文件
//中就不能用export default大括号了，而是export{}
//如果使用export default相当于导入了一个名为default{}的方法,这方法里仅有
//一个buuttontype