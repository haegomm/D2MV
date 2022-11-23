<template>
  <div>
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="addModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <nav>
              <router-link :to="{name: 'recommend', params: {id: getId}}">뒤로 가기</router-link>
            </nav>
            <h1>추천 영화 추가하기</h1>
            <MovieForm/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
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
    getId() {
      return this.$route.params.id
    }
  },
  mounted() {
    const exampleModal = document.getElementById('addModal')
    exampleModal.addEventListener('show.bs.modal', event => {
      const button = event.relatedTarget
      const recipient = button.getAttribute('data-bs-whatever')
      const modalTitle = exampleModal.querySelector('.modal-title')
      modalTitle.textContent = `New message to ${recipient}`
      this.id = recipient
      console.log(recipient)    
    })
  }  
};
</script>

<style>
</style>