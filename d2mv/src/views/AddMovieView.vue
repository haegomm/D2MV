<template>
  <div>
    <h1 class="title">Add Recommend Movie</h1>
    <MovieForm />
  </div>
</template>

<script>
import MovieForm from "@/components/MovieForm";

export default {
  name: "AddMovieView",
  data() {
    return {
      id: null,
    };
  },
  components: {
    MovieForm,
  },
  computed: {},
  // mounted() {
  //   this.id = this.$route.params.id
  //   console.log(this.id)
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gaegu:wght@300&display=swap");

.title {
  font-family: "Gaegu", cursive;
}
</style>