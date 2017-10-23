import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../components/Cart'
import Index from '../components/Index'
import Nav from '../components/Nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '*',
      redirect:'/'
    }
  ]
})
