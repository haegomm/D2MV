<template>
  <div>
    <h1>추천 영화 추가하기</h1>
    <MovieForm/>
  </div>
</template>

<script>
import MovieForm from "@/components/MovieForm";

export default {
  name: "AddMovieView",
  data() {
    return {
      id: null,
    }
  },
  components: {
    MovieForm,
  },
  computed: {
  },
  // mounted() {
  //   this.id = this.$route.params.id
  //   console.log(this.id)
  // },
};
</script>

<style>
</style>