import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 1. 导入某一个目录，默认会去找索引文件（index.js index.vue index.json） 基于webpack
// 2. @ 别名  指定的是 /src 路径  一个绝对路径。 基于webpack
import router from '@/router'

import axios from '@/api'
Vue.prototype.$http = axios

Vue.use(ElementUI)

Vue.config.productionTip = false

// 根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// main.js的作用是入口文件
// 职责1：创建一个根实例
// 职责2：复杂全局范围的依赖导入
