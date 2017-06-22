import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/Index'
import SearchHome from '../components/search/SearchHome'
import Place from '../page/searchMethods/place'
import History from '../page/searchMethods/history'
import Near from '../page/searchMethods/near'
import Plan from '../page/home/plan'
import Order from '../page/home/order'
import Mine from '../page/home/mine'
import Country from '../page/add/country'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/plan',
      component: Plan
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/search',
      component: SearchHome,
      children: [
        {
          path: '/',
          component: Place
        },
        {
          path: '/place',
          component: Place
        },
        {
          path: '/history',
          component: History
        },
        {
          path: '/near',
          component: Near
        }
      ]
    },
    {
      path: '/add',
      component: Country
    }

  ]
})
