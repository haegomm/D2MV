<template>
  <div>
    <h1>Top Rated Movies</h1>
    <div v-for="movie in getTopRatedMovies" :key="`toprated-${movie.id}`">
      <div>{{ movie?.title }}</div>
      <div v-if="movie">
      <img
        :src="`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`"
        alt=""
      />
    </div>
    </div>
    <div>
    <h1>Now Playing Movies</h1>
    <div v-for="movie in getNowPlayingMovies" :key="`nowplaying-${movie.id}`">
      <div>{{ movie?.title }}</div>
      <div v-if="movie">
      <img
        :src="`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`"
        alt=""
      />
    </div>
    </div>
    </div>
    <div>
    <h1>Upcoming Movies</h1>
    <div v-for="movie in getUpComingMovies" :key="`upcoming-${movie.id}`">
      <div>{{ movie?.title }}</div>
      <div v-if="movie">
      <img
        :src="`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`"
        alt=""
      />
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const TMDB_KEY = '#'
const TMDB_URL = 'https://api.themoviedb.org/3/movie'

export default {
  name: 'MoviesView',
  data() {
    return {
      top_rated_movies: [],
      now_playing_movies: [],
      up_coming_movies: []
    }
  },
  computed: {
    getTopRatedMovies() {
      // return this.$store.state.getTop20Movies 
      console.log("ff", this.top_rated_movies.results)
      return this.top_rated_movies.results
    },
    getNowPlayingMovies() {
      // return this.$store.state.getTop20Movies 
      console.log("ff", this.now_playing_movies.results)
      return this.now_playing_movies.results
    },
    getUpComingMovies() {
      // return this.$store.state.getTop20Movies 
      console.log("ff", this.now_playing_movies.results)
      return this.up_coming_movies.results
    },
  },
  methods: {
    getTop20Movies() {
      axios({
        method: 'get',
        url: `${TMDB_URL}/top_rated`,
        params: {
          api_key: TMDB_KEY,
          language: 'ko-KR',
        }
      })
        .then((res) => {
          console.log(res.data)
          this.top_rated_movies = res.data
        })
    },
    nowPlayingMovies() {
      axios({
        method: 'get',
        url: `${TMDB_URL}/now_playing`,
        params: {
          api_key: TMDB_KEY,
          language: 'ko-KR',
        }
      })
        .then((res) => {
          console.log(res.data)
          this.now_playing_movies = res.data
        })
    },
    getUpcomingMovies() {
      axios({
        method: 'get',
        url: `${TMDB_URL}/upcoming`,
        params: {
          api_key: TMDB_KEY,
          language: 'ko-KR',
        }
      })
        .then((res) => {
          console.log(res.data)
          this.up_coming_movies = res.data
        })
    }
  },
  created() {
    this.getTop20Movies()
    this.nowPlayingMovies()
    this.getUpcomingMovies()
  }
}
</script>

<style>
.top20movies {
  z-index: 999
}
</style>