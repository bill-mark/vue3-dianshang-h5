import axios from "axios";
//import Vue from "vue";

let the_host = "";

/* eslint-disable */

if (process.env.NODE_ENV == "production") {
    the_host = JSON.parse(localStorage.publicconfig).baseURL
}


const request = axios.create({
  baseURL: the_host,
  timeout: 40000
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    if (
      response.data.code != 200 &&
      response.request.responseType != "arraybuffer"
    ) {
     // Vue.prototype.$message.error("接口报错:" + response.data.message);
      return response;
    }
    return response;
  }, error => {
   
    const { code, message } = error;
   

    if (code === "ECONNABORTED" || message === "Network Error") {
      // 请求超时
    //  Vue.prototype.$message.error("网络异常,请检查网络连接");
      return Promise.reject(error);
    }

   // Vue.prototype.$message.error("接口报错:" + error.response.data.message);

    return Promise.reject(error);
  }
);

export default request;
