import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/VbeeIndex'
import IndexLeft from '@/pages/VbeeInleft'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/indexLeft',
      name: 'IndexLeft',
      component: IndexLeft
    }
  ]
})
