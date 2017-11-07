import Vue from 'vue'
import Router from 'vue-router'

import Nav from '../components/Nav'
import Home from '../components/Home'
import Home_index from '../components/Home_index'
import Home_detail from '../components/Home_detail'
import Cart from '../components/Cart'
import Vip from '../components/Vip'
import Vip_index from '../components/Vip_index'
import Vip_orderList from '../components/Vip_orderList'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path:'',
          component:Home_index
        },
        {
          path:'detail',
          name:'detail',
          component:Home_detail
        }
      ]
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/vip',
      component: Vip,
      children:[
        {
          path:'',
          component: Vip_index
        },
        {
          path:'order-list',
          component:Vip_orderList
        }
      ]
    },
    {
      path: '*',
      redirect:'/'
    }
  ]
});

export default router
