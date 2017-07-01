import * as types from '../mutation_types'

const state = {
  swiperItems: [],
  scrollItems: []
}
const getters = {
  swiperItems: state => state.swiperItems,
  scrollItems: state => state.scrollItems
}
const actions = {
  likeSelect ({ commit }, index) {
    commit(types.CHANGE_INDEX, index)
  }
}
const mutations = {
  [types.CHANGE_INDEX] (state, index) {
    state.scrollItems.forEach(item => {
      item.isLiked = false
    })
    state.scrollItems[index].isLiked = true
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
