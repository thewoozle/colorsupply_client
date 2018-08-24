import Vue from 'vue'
import Router from 'vue-router'
import home_view from './views/home_view.vue'

Vue.use(Router)

export default new Router({
   mode: 'history',
   routes: [
   {
      path: '/',
      name: 'home_view',
      component: home_view
   },
   {
      path: '/create',
      name: 'create_view',
      component: () => import('./views/create.vue')
   },
   {
      path: '/mycolors',
      name: 'my_colors_view',
      component: () => import('./views/my_colors.vue')
   },
   {
      path: '/login',
      name: 'login_view',
      component: () => import('./views/login.vue')
   },
   {
      path: '/signup',
      name: 'sign_up_view',
      component: () => import('./views/signup.vue')
   },
   {
      path: '/account',
      name: 'account_view',
      component: () => import('./views/account.vue')
   },
   {
      path: '/premium',
      name: 'premium_view',
      component: () => import('./views/premium.vue')
   },
   {
      path: '/forgot',
      name: 'forgot_view',
      component: () => import('./views/forgot.vue')
   }
   ]
})

