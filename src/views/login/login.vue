<template>
  
  <div class="login-container" @keyup="enterSubmit">
    <el-form class="login" :rules="rules" ref="ruleForm" :model="state">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="state.username" name="username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="state.password" name="password"></el-input>
      </el-form-item>

      <el-form-item >
        
          <el-button type="primary" size="default" @click="login_in">登录</el-button>
          <el-button type="primary" size="default" @click="sign_in">注册</el-button>
        
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
//功能需求：点击按钮跳转，允许键入信息，信息查验，信息获取
import { reactive,ref } from 'vue'
import {userStore} from '/@/store/modules/user'
import {validate} from '/@/utils/login/formExtend'

const {userLogin}=userStore()
const rules = reactive({
  name: [
    { required: true, message: '请填写用户名', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请填写密码', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],

})
//状态信息统一放这里
const state = reactive({
  username:'',
  password:'',
  
 })
 const ruleForm = ref(null)
//将响应式对象转换为普通对象
//const {username,password,loading}=toRefs(state);
//方法统一放置这里
 const enterSubmit = (e:KeyboardEvent) => {
        if(e.key === 'Enter') {
            login_in()
        }
    }

  //点击登录
  const login_in=async() => {
    //定义一个异步函数
    let {username,password}=state
    if(!await validate(ruleForm)){
      return await userLogin({name:username,pwd:password})
    }
  }
  //点击注册
  const sign_in=() => {
    console.log('ok')
  }




</script>


<style lang="less" scoped>
.login-container{
  padding-top: 200px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  .login{
  position: relative;
  display: inline-block;
  
  overflow: hidden;}
}
</style>