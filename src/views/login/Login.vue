<template>
  <div class="wrapper">
    <div class="wrapper_input">
      <input
        class="wrapper_input_content"
        v-model="username"
        placeholder="账号"
      />
    </div>

    <div class="wrapper_input">
      <input
        class="wrapper_input_content"
        v-model="password"
        placeholder="密码"
        type="password"
      />
    </div>

    <div class="wrapper_login-button" @click="handleLogin">登陆</div>

    <Toast v-if="show" :message="toastMessage" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { login } from "@/api/login";
import Toast, { useToastEffect } from "@/components/Toast";

//处理登陆逻辑
const useLoginEffect = (showToast) => {
  const router = useRouter();
  const userdata = reactive({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    let { data } = await login({
      username: userdata.username,
      password: userdata.password,
    });

    if (data.code === 0) {
      localStorage.isLogin = true;
      router.push({ name: "Home" });
    } else {
      showToast("登陆失败");
    }
  };
  
  const {username,password} = toRefs(userdata)
  return {username,password,handleLogin}
};

export default {
  name: "login",
  components: {
    Toast,
  },
  // setup 只控制代码流程
  setup() {
    const { show, toastMessage, showToast } = useToastEffect();
    const {username, password,handleLogin} = useLoginEffect(showToast)

    return { 
        username, password,handleLogin,show, toastMessage 
    };
  },
};


</script>

<style scoped lang="scss">
</style>