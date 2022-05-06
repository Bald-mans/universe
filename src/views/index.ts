export enum LoginStateEnum{
    //初始态
    LOGIN,
    //注册
    REGISTER,
    //重置密码
    FORGET_PASSWARD
}
//初始状态
const nowState=ref(LoginStateEnum.LOGIN)
export function LoginState() {
    //更改注册状态
    function setLoginState(state:LoginStateEnum){
        //改成什么状态返回什么状态
        nowState.value=state
    }
    const getLoginState=computed(()=>nowState.value)

    function backLogin(){
        setLoginState(LoginStateEnum.LOGIN)
    }
    return {getLoginState,setLoginState,backLogin}
}