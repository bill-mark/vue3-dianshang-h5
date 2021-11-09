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
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { login } from "@/api/login";
export default {
  name: "login",
  setup() {
    const userdata = reactive({
      username: "",
      password: "",
    });

    const router = useRouter();
    const handleLogin = async () => {
      let { data } = await login({
        username: userdata.username,
        password: userdata.password,
      });

      if (data.code === 0) {
        localStorage.isLogin = true;
        router.push({ name: "Home" });
      }
    };
    return { handleLogin, userdata };
  },
};
</script>

<style scoped lang="scss">
</style>