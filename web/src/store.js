import Vue from 'vue'
import Vuex from 'vuex'
import VueLocalStorage from 'vue-localstorage'

Vue.use(Vuex)

Vue.use(VueLocalStorage)

export default new Vuex.Store({
  state: {
    language: Vue.localStorage.get('language')
  },
  mutations: {
    setLanguage(state, lang) {
      Vue.localStorage.set('language', lang)
      state.language = lang
    }
  },
  actions: {
    setLanguage({commit}, lang) {
      commit('setLanguage', lang)
    }
  }
})
