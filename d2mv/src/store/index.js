import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    residents: [
      {
        id: '1',
        name: 'leegaeun',
        movies: [
          {
            "poster_path": "/oAt6OtpwYCdJI76AVtVKW1eorYx.jpg",
            "adult": false,
            "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
            "release_date": "1994-09-10",
            "genre_ids": [
              18,
              80
            ],
            "id": 278,
            "original_title": "The Shawshank Redemption",
            "original_language": "en",
            "title": "The Shawshank Redemption",
            "backdrop_path": "/xBKGJQsAIeweesB79KC89FpBrVr.jpg",
            "popularity": 6.741296,
            "vote_count": 5238,
            "video": false,
            "vote_average": 8.32,
          },
          {
            "poster_path": "/ceXJpyboNT94hhtxAL5s8H0I1Dn.jpg",
            "adult": false,
            "overview": "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
            "release_date": "2014-10-10",
            "genre_ids": [
              18,
              10402
            ],
            "id": 244786,
            "original_title": "Whiplash",
            "original_language": "en",
            "title": "Whiplash",
            "backdrop_path": "/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg",
            "popularity": 10.776056,
            "vote_count": 2059,
            "video": false,
            "vote_average": 8.29
          },
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
