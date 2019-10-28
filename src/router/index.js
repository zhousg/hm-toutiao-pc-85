import VueRouter from 'vue-router'
import Vue from 'vue'
import local from '@/utils/local'

import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 登录
    { path: '/login', component: Login },
    // 首页
    {
      path: '/',
      component: Home,
      children: [
        // 欢迎
        { path: '/', component: Welcome }
      ]
    },
    // 404处理
    { path: '*', component: NotFound }
  ]
})

// 路由导航守卫（前置导航守卫）
router.beforeEach((to, from, next) => {
  // to 跳转目标路由对象
  // from 从哪里跳过来的路由对象
  // next() 放行  next('/login') 拦截到登录
  // next()
  // 如果你访问的不是登录页面，且又没有登录，跳转到登录页面。
  const user = local.getUser()
  if (to.path !== '/login' && !user) return next('/login')
  next()
})

export default router
