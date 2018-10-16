import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
// @ts-ignore
import Login from './views/Login.vue'

import VaultView from './views/VaultView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/vault-view/:id',
      name: 'vaultView',
      props: true,
      component: VaultView
    }
  ]
})
