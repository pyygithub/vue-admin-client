import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import Login from './views/Login'
import NotFound from './views/404'
import Home from './views/Home'
import UserInfo from './views/UserInfo'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {path: '', component: Home},
        {path: '/home', name: 'Home', component: Home},
        {path: '/userInfo', name: 'UserInfo', component: UserInfo},
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      name: '/404',
      component: NotFound
    }
  ]
});

// 路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.eleToken ? true : false;
//   if (to.path == "/login") {
//     next();
//   } else {
//     isLogin ? next() : next("/login");
//   }
// })

export default router;