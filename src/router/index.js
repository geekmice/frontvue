// 配置路由相关的信息
import Vue from 'vue'
import VueRouter from "vue-router"

import Home from '../components/Home'
// 通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 创建VueRouter对象
const routes = [
    {
        path: '/home',
        component: Home
    },
]

const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes,
    mode: "history",
})

// 将router对象传入Vue实例
export default router