<template>
  <div></div>
</template>

<script>
export default {
  name: "MovieDetail",
  props: {
    movie: Object
  },
  computed: {
    poster_path() {
      const baseURL = 'https://image.tmdb.org/t/p/w500'
      return baseURL + this.movie.poster_path
    }
  },
};
</script>

<style>
</style>