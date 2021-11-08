import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/login/Login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from ,next) => {
  const { isLogin } = localStorage;
  (isLogin || to.name === "Login") ? next() : next({ name: 'Login'});
})

export default router
