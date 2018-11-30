import Vue from 'vue'
import Router from 'vue-router'
import Newbeauty from '@/pages/Newbeauty'
import Cart from '@/pages/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/newbeauty',
      name: 'Newbeauty',
      component: Newbeauty
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
