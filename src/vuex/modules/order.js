import * as types from '../mutation_types'

const state = {
  todos: [
    {id: 0, todo: '待确认', isActive: true},
    {id: 1, todo: '待支付', isActive: false},
    {id: 2, todo: '待入住', isActive: false},
    {id: 3, todo: '待评价', isActive: false},
    {id: 4, todo: '全部', isActive: false}
  ]
}
const getters = {
  todos: state => state.todos
}
const actions = {
  changeTodos ({ commit }, index) {
    commit(types.CHANGE_TODOS, index)
  }
}
const mutations = {
  [types.CHANGE_TODOS] (state, index) {
    state.todos.forEach(todo => {
      todo.isActive = false
    })
    state.todos[index].isActive = true
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
