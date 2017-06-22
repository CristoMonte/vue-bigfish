import * as types from '../mutation_types'
const state = {
  searchMethods: [
    {id: 0, methods: '全部目的地', isActive: true, linkTo: '/place'},
    {id: 1, methods: '搜索历史', isActive: false, linkTo: '/history'},
    {id: 2, methods: '附近', isActive: false, linkTo: '/near'}
  ]
}
const actions = {
  changeSearchMethods ({ commit }, id) {
    commit(types.CHANGE_SEARCH_METHODS, id)
  }
}
const mutations = {
  [types.CHANGE_SEARCH_METHODS] (state, id) {
    state.searchMethods.forEach(list => {
      list.isActive = false
    })
    state.searchMethods[id].isActive = true
  }
}
const getters = {
  searchMethods: state => state.searchMethods
}
export default {
  state,
  actions,
  getters,
  mutations
}
