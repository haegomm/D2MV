import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    residents: [
      {
        id: 1,
        name: 'leegaeeun',
        movies: [
          {
            title: 'thor',
            poster_path: '#'
            
          }
        ],
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
