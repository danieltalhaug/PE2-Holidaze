import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      // lazy-loaded when the route is visited.
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/adminpanel',
      name: 'adminpanel',
      component: () => import('./views/AdminPanel.vue')
    },
    {
      path: '/hotels/:hotelsId',
      name: 'Hotels',
      component: () => import('./views/Hotels.vue')
    }
  ]
})
