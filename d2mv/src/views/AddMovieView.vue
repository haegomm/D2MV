<template>
  <div>
    <div
      class="modal fade"
      id="addModal"
      tabindex="-1"
      aria-labelledby="addModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content" style="background-color: rgb(133 178 211)">
          <div class="modal-header">
            <h1
              class="modal-title"
              style="font-weight: revert; font-size: x-large"
              id="addModalLabel"
            >
              Modal title
            </h1>
          </div>
          <div class="modal-body">
            <!-- <h1>추천 영화 추가하기</h1> -->
            <MovieForm :id="id" />
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
    };
  },
  components: {
    MovieForm,
  },
  mounted() {
    const exampleModal = document.getElementById("addModal");
    exampleModal.addEventListener("show.bs.modal", (event) => {
      const button = event.relatedTarget;
      const recipient = button.getAttribute("data-bs-whatever");
      const modalTitle = exampleModal.querySelector(".modal-title");
      const master = this.$store.state.residents[Number(recipient)].name;
      modalTitle.textContent = `ADD TO ${master}'S MOVIES`;
      this.id = recipient;
      console.log(this.id);
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap");

@font-face {
  font-family: "Marcellus SC";
  src: url("https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap")
    format("woff");
  font-style: normal;
}

@font-face {
  font-family: "SpoqaHanSansNeo-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  unicode-range: U+AC00-D7A3;
}

.modal-dialog {
  position: relative;
  display: flex;
  justify-content: center;
  top: 15%;
  max-width: none;
  width: 100%;
  height: 60%;
}

.modal-body {
  overflow: auto;
}

.modal-content {
  position: relative;
  display: flex;
  width: 80%;
  height: 100%;
  scrollbar-width: none;
  /* overflow: auto; */
}

.modal-header {
  border: none;
  justify-content: center;
  padding-bottom: 0;
}

.modal-title {
  padding: 10px;
  font-family: "Marcellus SC", "SpoqaHanSansNeo-Regular";
  font-weight: revert;
  font-size: x-large;
  justify-content: center;
}
</style>