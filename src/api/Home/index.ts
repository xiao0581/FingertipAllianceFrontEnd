import axios from "../../utils/request"

// banner轮播图
export function getCaroursel(){
    return axios({
        url:"/api/api/banner",
        method:"get"
    })
}

// 美业快讯
export function getBeauty(params:any){
    return axios({
        url:"/api/api/beauty",
        method:"get",
        params
    })
}

// 最新商铺
export function getNewGoods(){
    return axios({
        url:"/api/api/newgoods",
        method:"get"
    })
}

// 人才库
export function getPersonStore(){
    return axios({
        url:"/api/api/personstore",
        method:"get"
    })
}

// 为你推荐
export function getRecommendgoods(){
    return axios({
        url:"/api/api/recommendgoods",
        method:"get"
    })
}