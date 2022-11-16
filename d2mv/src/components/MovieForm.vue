<template>
  <div>
    <div>
      <form @submit.prevent="">
        <input type="text" v-model.trim="addmovietitle" @input="searchMovie" />
        <button @click="searchMovie">검색</button>
      </form>
      <SearchItems
        v-for="(result, index) in results"
        :key="index"
        :result="result"
      />
    </div>
    <br />
    <button>Add</button>
  </div>
</template>

<script>
import axios from "axios";
import SearchItems from "@/components/SearchItems";

export default {
  name: "MovieForm",
  components: {
    SearchItems,
  },
  data() {
    return {
      addmovietitle: null,
      results: null,
    };
  },
  methods: {
    searchMovie() {
      if (this.addmovietitle) {
        const API_KEY = process.env.VUE_APP_API_KEY;
        const SEARCH_URL = "https://api.themoviedb.org/3/search/movie";

        axios({
          method: "get",
          url: SEARCH_URL,
          params: {
            api_key: API_KEY,
            query: this.addmovietitle,
            language: "ko",
          },
        })
          .then((responese) => {
            console.log(responese);
            this.results = responese.data.results;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
</style>