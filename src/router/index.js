import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
// 导入全局样式表
import '../assets/css/global.css'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to代表将要访问的路径
  // from代表从哪个路径跳转而来
  // next是一个函数，表示放行，next()代表放行，next('/login')代表强制跳转
  if (to.path === '/login') return next()
  // 先获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
