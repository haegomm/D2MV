<template>
  <div>
    <div class="modal fade" id="recommendModal" tabindex="-1" aria-labelledby="recommendModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="recommendModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="cardlist">
              <MovieCardView
                v-for="movie in getList"
                :key = "movie.id"
                :movie="movie"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button id="passwordButton" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#passwordModal" >Add</button>
          </div>
        </div>
      </div>
    </div>   
  </div>
</template>

<script>
import MovieCardView from '@/views/MovieCardView.vue';


export default {
  name: "RecommendMoviesView",
  data() {
    return {
      id: '0',
      showModal: false
    }
  },
  components: {
    MovieCardView,
  },
  computed: {
    getList() {
      const id = this.id
      let who
      for (const person of this.$store.state.residents) {
        if (person.id === id) {
          who = person
        }
      }
      return who.movies
    },
    getId() {
      const id = this.$route.params.id
      return id
    }
    
  },
  methods: {
    goPass() {
      this.$router.push({ name: 'password' })
    }
  },
  mounted() {
    const exampleModal = document.getElementById('recommendModal')
    exampleModal.addEventListener('show.bs.modal', event => {
      const button = event.relatedTarget 
      const recipient = button.getAttribute('data-bs-whatever')
      const modalTitle = exampleModal.querySelector('.modal-title')
      modalTitle.textContent = `New message to ${recipient}`
      this.id = recipient
      console.log(recipient)
      const passbutton = document.getElementById('passwordButton')
      passbutton.setAttribute('data-bs-whatever', recipient)
      
    })
  }  
};
</script>

<style scoped>
.modal-dialog {
  position: relative;
  display: flex;
  justify-content: center;
  top: 8%;
  max-width: none;
  width: 100%;
  height: 80%;
}

.modal-content {
  position: absolute;
  display: flex;
  width: 70%;
  height: 100%;
}
  .modal-body {
    /* position: relative;
    display: flex;
    justify-content: center;
    align-items: center; */
    display: grid;
    place-items: center;
  }

.cardlist {
  display: flex;
  grid-gap: 1rem;
  padding: 1rem;
  max-width: 1024px;
  margin: 0;
  grid-template-columns: repeat(auto-fill, minmax(auto, auto));
  grid-template-rows: 1;
}

.card {
  /* position: absolute;
  display: block; */
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  height: 500px;
  width: 350px;
}


</style>

