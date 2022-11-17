<template>
  <div>
    <span>{{ result.title }}</span>
    <button @click="AddToMovies">R</button>
    <br />
    <img :src="imgUrl" @click="addChoice" />
  </div>
</template>

<script>
export default {
  name: "SearchItems",
  props: {
    result: Object,
  },
  data() {
    return {
      choice: false,
    };
  },
  computed: {
    imgUrl() {
      return `https://image.tmdb.org/t/p/w200${this.result.poster_path}`;
    },
  },
  methods: {
    AddToMovies() {
      this.$store.dispatch("AddToMovies", this.result);
    },
    addChoice() {
      this.choice = !this.choice;
      this.$emit("add-choice", this.choice);
    },
  },
};
</script>

<style>
</style>