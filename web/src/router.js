import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/start',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Start.vue'),
      
      children: [
        {
          path:"",
          name: "dashboard",
          component: () => import('./views/dashboard.vue'),
        },
        {
          path:"widgets",
          name: "widgets",
          component: () => import('./views/widgets.vue'),
        }
      ]
    }
  ]
})
