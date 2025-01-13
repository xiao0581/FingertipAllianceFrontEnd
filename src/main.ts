import "./assets/css/main.css"
import "./assets/font/iconfont.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from "pinia-plugin-persist"

import App from './App.vue'
import router from './router'

import BaiduMap from 'vue-baidu-map-3x';

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPersist)

app.use(pinia)
app.use(router)
app.use(BaiduMap,{ak:"2MzwGA0Ef5qvIbWbmtKyW3rBfgXGlKvY"})

app.mount('#app')
