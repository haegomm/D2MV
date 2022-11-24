<template>
  <div class="topdiv">
    <div>
      <form @submit.prevent="searchMovie">
        <div class="search jello-horizontal" style="display: inline-block">
          <input type="text" v-model.trim="addmovietitle" />
          <button class="search jello-horizontal" @click="searchMovie">
            &#128064;
          </button>
        </div>
      </form>
    </div>
    <div class="cards_list">
      <MovieFormItem
        v-for="(result, index) in results"
        :key="index"
        :result="result"
      />
    </div>
    <br />
    <button @click="AddToMovies">Add</button>
  </div>
</template>

<script>
import axios from "axios";
import MovieFormItem from "@/components/MovieFormItem";

export default {
  name: "MovieForm",
  components: {
    MovieFormItem,
  },
  data() {
    return {
      addmovietitle: null,
      results: null,
    };
  },
  props: {
    id: String,
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
        this.addmovietitle = null
      }
    },
    AddToMovies() {
      console.log(2);
      this.$store.dispatch("AddToMovies", this.id);
    },
  },
};
</script>

<style>
@-webkit-keyframes jello-horizontal {
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes jello-horizontal {
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.jello-horizontal:hover {
  -webkit-animation: jello-horizontal 0.9s both;
  animation: jello-horizontal 0.9s both;
}

.topdiv {
  margin-left: 0;
  margin-right: 0;
}

.cards_list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

input {
  width: 250px;
  height: 40px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid rgb(7, 3, 31);
}

.search {
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 50px;
}
</style>