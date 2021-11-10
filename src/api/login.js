import request from "@/utils/request";

// 数据地图
export const login = params =>{
    return request({
        url:"/login",
        method:"POST",
        data:params,
    })
}