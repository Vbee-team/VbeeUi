import Vue from 'vue'
import Router from 'vue-router'
import VbeeClassify from  '../pages/VbeeClassify'
import VbeeFication from  '../pages/VbeeFication'
import VbeeHunt from  '../pages/VbeeHunt'
// import ceshi from  '../pages/ceshi'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/classify',
      name: 'VbeeClassify',
      component: VbeeClassify
    },
    {
      path: '/fica',
      name: 'VbeeFication',
      component: VbeeFication
    },
    {
      path: '/hunt',
      name: 'VbeeHunt',
      component: VbeeHunt
    }
    // {
    //   path: '/ceshi',
    //   name: 'ceshi',
    //   component: ceshi
    // },

  ]
})
