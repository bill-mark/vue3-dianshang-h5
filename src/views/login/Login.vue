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

    <div>{{abc}}</div>

    <Toast v-if="show" :message="toastMessage" />
  </div>
</template>

<script >
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
    abc:['111']
  });

  const handleLogin = async () => {
      userdata.abc[0]= '222'
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

  const {username,password,abc} = toRefs(userdata)
  return {username,password,abc,handleLogin}
};


export default {
  name: "login",
  components: {
    Toast,
  },
  // setup 只控制代码逻辑流                     
  setup() {
    const { show, toastMessage, showToast } = useToastEffect();
    const {username, password,abc,handleLogin} = useLoginEffect(showToast)

    return { 
        username, password,abc,handleLogin,show, toastMessage 
    };
  },
};


</script>

<style scoped lang="scss">
.wrapper_login-button{
  margin-top: 20px;
  margin-left: 20px;
}
</style>