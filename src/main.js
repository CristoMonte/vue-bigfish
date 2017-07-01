// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import axios from 'axios'
// import VueLazyload from 'vue-lazyload'
// 将Mint UI全框架引入项目
import mint from '@/assets/js/mint'

Vue.use(Vuex)

// Vue.use(VueLazyload)
Vue.prototype.axios = axios
Vue.config.productionTip = false
axios.defaults.timeout = 5000
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mint,
  template: '<App/>',
  components: { App }
})
