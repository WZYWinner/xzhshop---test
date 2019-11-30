import Vue from 'vue'
import Router from 'vue-router'
import GoodsTopBox from '@/components/GoodsTopBox'
import GoodsDetail0 from '@/components/GoodsDetail0'
import GoodsDetail1 from '@/components/GoodsDetail1'
import GoodsDetail2 from '@/components/GoodsDetail2'
import GoodsDetail3 from '@/components/GoodsDetail3'
import GoodsDetail4 from '@/components/GoodsDetail4'
import GoodsDetail5 from '@/components/GoodsDetail5'
import GoodsDetail6 from '@/components/GoodsDetail6'
import GoodsDetail7 from '@/components/GoodsDetail7'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Payment from '@/components/Payment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsTopBox',
      component: GoodsTopBox
    },
    {
      path: '/goodsDetail0',
      name: 'GoodsDetail0',
      component: GoodsDetail0
    },
    {
      path: '/goodsDetail1',
      name: 'GoodsDetail1',
      component: GoodsDetail1
    },
    {
      path: '/goodsDetail2',
      name: 'GoodsDetail2',
      component: GoodsDetail2
    },
    {
      path: '/goodsDetail3',
      name: 'GoodsDetail3',
      component: GoodsDetail3
    },
    {
      path: '/goodsDetail4',
      name: 'GoodsDetail4',
      component: GoodsDetail4
    },
    {
      path: '/goodsDetail5',
      name: 'GoodsDetail5',
      component: GoodsDetail5
    },
    {
      path: '/goodsDetail6',
      name: 'GoodsDetail6',
      component: GoodsDetail6
    },
    {
      path: '/goodsDetail7',
      name: 'GoodsDetail7',
      component: GoodsDetail7
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
