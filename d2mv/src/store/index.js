import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

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
    ],
  },
  getters: {
  },
  mutations: {
    ADD_TO_MOVIES(state, recommendMovie) {
      // state.residents[id].movies.push(recommendMovie)
      state.residents.push(recommendMovie)
      console.log(state.residents)
    }
  },
  actions: {
    AddToMovies(context, result) {
      const recommendMovie = {
        title: result.title,
        poster_path: result.poster_path,
        genre_ids: result.genre_ids,
        overview: result.overview,
      }
      context.commit('ADD_TO_MOVIES', recommendMovie)
    }
  },
  modules: {
  }
})
