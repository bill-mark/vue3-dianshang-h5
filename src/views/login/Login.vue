<template>
  <div class="wrapper">
    <div class="wrapper_input">
      <input
        class="wrapper_input_content"
        v-model="userdata.username"
        placeholder="账号"
      />
    </div>

    <div class="wrapper_input">
      <input
        class="wrapper_input_content"
        v-model="userdata.password"
        placeholder="密码"
        type="password"
      />
    </div>

    <div class="wrapper_login-button" @click="handleLogin">登陆</div>

    <div class="wrapper_login-link">立即注册</div>

    <Toast v-if="toastData.showToast" :message="toastData.toastMessage" />
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { login } from "@/api/login";
import Toast,{useToastEffect} from '@/components/Toast'
export default {
  name: "login",
  components:{
     Toast,
  },
  setup() {
       const router = useRouter();
    const userdata = reactive({
      username: "",
      password: "",
    });
    const {toastData,showToast } =useToastEffect()

   
    const handleLogin = async () => {
      let { data } = await login({
        username: userdata.username,
        password: userdata.password,
      });

      if (data.code === 0) {
        localStorage.isLogin = true;
        router.push({ name: "Home" });
      }else{
          showToast('登陆失败')
      }
    };
    return { handleLogin, userdata,toastData };
  },
};
</script>

<style scoped lang="scss">
</style>