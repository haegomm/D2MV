<template>
  <div>
    <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
      <span class="modal__title">{{movie.title}}</span>
      <div class="modal__content">
        <p>{{movie.overview}}</p>
        <img :src="poster_path" alt="">
      </div>
    </vue-final-modal>
    <button @click="showModal = true">More Detail</button>
  </div>
</template>

<script>
import {VueFinalModal} from 'vue-final-modal'

export default {
  name: "MovieDetail",
  data() {
    return {
      showModal: false
    }
  },
  components: {
    VueFinalModal
  },
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
<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>