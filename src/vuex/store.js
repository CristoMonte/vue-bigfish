import Vue from 'vue'
import Vuex from 'vuex'
import search from './modules/search'
import order from './modules/order'
import place from './modules/place'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    search,
    order,
    place
  }
})
