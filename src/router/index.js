import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/page/Index'),
      redirect: '/found',
      children: [
        {
          path: '/found',
          component: require('@/page/found/index')
        },
        {
          path: '/plan',
          component: require('@/page/plan/plan')
        },
        {
          path: '/order',
          component: require('@/page/order/order')
        },
        {
          path: '/mine',
          component: require('@/page/mine/mine')
        }
      ]
    },
    {
      path: '/search',
      component: require('@/components/public/SearchHome'),
      redirect: '/place',
      children: [
        {
          path: '/place',
          component: require('@/components/searchMethods/place')
        },
        {
          path: '/history',
          component: require('@/components/searchMethods/history')
        },
        {
          path: '/near',
          component: require('@/components/searchMethods/near')
        }
      ]
    },
    {
      path: '/add',
      component: require('@/components/add/country')
    },
    {
      path: '/detail',
      component: require('@/components/public/detail')
    },
    {
      path: '/calendar',
      component: require('@/components/public/calendar')
    },
    {
      path: '/comment',
      component: require('@/components/public/comment')
    }
  ]
})
