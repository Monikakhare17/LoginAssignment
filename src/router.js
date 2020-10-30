import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/login'
import Signup from './components/signup'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/components/dashboard.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router