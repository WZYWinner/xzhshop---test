import Vue from 'vue'
import Router from 'vue-router'
import GoodsDetail0 from '@/components/GoodsDetail0'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goodsDetail0',
      name: 'GoodsDetail0',
      component: GoodsDetail0
    }
  ]
})
