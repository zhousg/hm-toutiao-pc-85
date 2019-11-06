import VueRouter from 'vue-router'
import Vue from 'vue'
import local from '@/utils/local'

import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
import Article from '@/views/article'
import Image from '@/views/image'
import Publish from '@/views/publish'
import Comment from '@/views/comment'
import Setting from '@/views/setting'
import Fans from '@/views/fans'

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
        { path: '/', component: Welcome },
        // 内容
        { path: '/article', component: Article },
        // 素材
        { path: '/image', component: Image },
        // 发布
        { path: '/publish', component: Publish },
        // 评论
        { path: '/comment', component: Comment },
        // 个人设置
        { path: '/setting', component: Setting },
        // 粉丝
        { path: '/fans', component: Fans }
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
