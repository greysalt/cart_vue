import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../components/Cart'
import Index from '../components/Index'
import Nav from '../components/Nav'
import Detail from'../components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
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
      name:'detail',
      path: '/detail',
      component: Detail
    },
    {
      path: '*',
      redirect:'/'
    }
  ]
})
