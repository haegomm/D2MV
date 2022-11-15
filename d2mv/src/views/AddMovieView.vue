<template>
  <div>
    <h1>추천 영화 추가하기</h1>
    <MovieFrom />
  </div>
</template>

<script>
import MovieForm from "@/components/MovieForm";

export default {
  name: "AddMovieView",
  components: {
    MovieForm,
  },
};
</script>

<style>
</style>