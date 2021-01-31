import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: '初期メッセージ'
  },
  getters: {
    message(state) { return state.message }
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.message
    }
  },
  actions: {
    doUpdate({ commit }, message){
      commit('setMessage', { message })
    }
  },
  modules: {
  }
})
