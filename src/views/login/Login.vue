<template>
    <div class="wrapper">

        <div class="wrapper_input">
            <input class="wrapper_input_content" placeholder="手机号">
        </div>

        <div class="wrapper_input">
            <input class="wrapper_input_content" placeholder="密码" type="password">
        </div>
   
        <div class="wrapper_login-button" @click="handleLogin">
            登陆
        </div>

        <div class="wrapper_login-link">
            立即注册
        </div>

    </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
    name:'login',
    setup(){
        const router = useRouter()
        const handleLogin = ()=>{
            localStorage.isLogin = true
            router.push({name:'Home'})
        }
        return {handleLogin}
    }
}
</script>

<style scoped lang="scss">

</style>