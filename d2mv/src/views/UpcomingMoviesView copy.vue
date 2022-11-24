<template>
  <div>
    <div v-for="movie in getMovies" :key="movie.id">
      <div>{{ movie?.title }}</div>
      <div v-if="movie">
      <img
        :src="`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`"
        alt=""
      />
      <p>{{ movie?.title }}</p>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const TMDB_KEY = '#'
const TMDB_URL = 'https://api.themoviedb.org/3/movie'

export default {
  name: 'TopRatedMovieView',
  data() {
    return {
      movies: [],
    }
  },
  computed: {
    getMovies() {
      // return this.$store.state.getTop20Movies 
      console.log("ff", this.movies.results)
      return this.movies.results
    }
  },
  methods: {
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
          this.movies = res.data
        })
    }
  },
  created() {
    this.getUpcomingMovies()
  }
}
</script>

<style>
.top20movies {
  z-index: 999
}
</style>