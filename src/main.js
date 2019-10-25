import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 根实例
new Vue({
  render: h => h(App)
}).$mount('#app')

// main.js的作用是入口文件
// 职责1：创建一个根实例
// 职责2：复杂全局范围的依赖导入
