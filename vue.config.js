const path = require("path"); //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}


module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias.set("@", resolve("src"));
        config
        .plugin('html')
        .tap((args) => {
            args[0].title = 'vue3电商';
            return args;
        });
      },
    lintOnSave: false,//关闭eslint
    devServer:{
        port:8095,
        proxy:{
            "/":{
                target:"https://www.fastmock.site/mock/d1f65b0c24bf4fc799a6d1555e634a30/dianshang",
                changOrigin: true, //允许跨域
            }
        }
    }
}