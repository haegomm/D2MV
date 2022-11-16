<template>
  <div class="card">
    <img :src="poster_path" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">{{ movie.title}}</h5>
    </div>
    
  </div>
</template>

<script>
import MovieDetailVue from '@/components/MovieDetail.vue';
import axios from 'axios'

export default {
  name: "MovieCardView",
  components: {
    MovieDetailVue
  },
  data() {
    return {
      youTubeURL: null,
      
    }
  },
  props: {
    movie: Object
  },
  computed: {
    poster_path() {
      const baseURL = 'https://image.tmdb.org/t/p/w500'
      return baseURL + this.movie.poster_path
    }
  },
  methods: {
    getVideos() {
      const apiKey = '4cdf408509bad3e333bfd82fc3c222bb'
      const baseURL = `https://api.themoviedb.org/3/movie/${this.movie.id}/videos?api_key=${apiKey}&language=en-US`
      axios({
        method: 'get',
        url: baseURL,
      })
        .then((response) =>{
          console.log(response.data.results[0])
          const key = response.data.results[0].key
          const URL = `https://www.youtube.com/embed/${key}`
          this.youTubeURL = URL
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
};
</script>

<style>
</style>