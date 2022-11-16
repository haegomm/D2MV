<template>
  <div>
    <span>{{ result.title }}</span>
    <button @click="AddToMovies">R</button>
    <br>
    <img :src="imgUrl">
  </div>
</template>

<script>
export default {
  name: 'SearchItems',
  props: {
    result: Object,
  },
  computed: {
    imgUrl() {
      return `https://image.tmdb.org/t/p/w200${this.result.poster_path}`
    }
  },
  methods: {
    AddToMovies() {
      this.$store.dispatch('AddToMovies', this.result)
    }
  }
}
</script>

<style>

</style>