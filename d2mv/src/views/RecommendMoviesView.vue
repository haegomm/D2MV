<template>
  <div>
    <h1>Recommend Movies</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <MovieCardView
        v-for="movie in getList"
        :key = "movie.id"
        :movie="movie"
      />
    </div>
    <router-link to="/add">Add Movie</router-link>
  </div>
</template>

<script>
import MovieCardView from '@/views/MovieCardView.vue';

export default {
  name: "RecommendMoviesView",
  components: {
    MovieCardView
  },
  computed: {
    getList() {
      const id = this.$route.params.id
      let who
      for (const person of this.$store.state.residents) {
        if (person.id === id) {
          who = person
        }
      }
      return who.movies
    }
  },
};
</script>

<style>
</style>