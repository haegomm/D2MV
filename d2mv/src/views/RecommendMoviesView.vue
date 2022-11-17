<template>
  <div>
    <h1>Recommended Movies</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <MovieCardView
        v-for="movie in getList"
        :key = "movie.id"
        :movie="movie"
      />
    </div>
    <button @click="goAdd">Add Movie</button>
  </div>
</template>

<script>
import MovieCardView from '@/views/MovieCardView.vue';

export default {
  name: "RecommendMoviesView",
  data() {
    return {
      id: null,
    }
  },
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
  methods: {
    goAdd() {
      this.$router.push({ name: 'add' })
    }
  }
  // created() {
  //   this.id = this.$route.params.id
  //   console.log(this.id)
  // }
  
};
</script>

<style>
</style>