<template>
  <div>
    <div
      class="modal fade"
      id="passwordModal"
      tabindex="-1"
      aria-labelledby="passwordModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content" style="background-color: rgb(165 179 189)">
          <div class="modal-body">
            <h4 style="font-weight: revert; font-size: x-large">PASSWORD</h4>
            <div class="passwordhint">
              <p class="fa-solid fa-key">우리 기수</p>
              <p class="fa-solid fa-key">우리 기수</p>
              <p class="fa-solid fa-key">우리 기수</p>
              <p class="fa-solid fa-key">우리 기수</p>
            </div>
            <input type="password" v-model="password" />
            <button id="important_button" @click="confirm">🔒</button>
            <!-- <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#recommendModal"
              :data-bs-whatever="id"
            >
              뒤로가기
            </button> -->
          </div>
          <!-- <div class="modal-footer"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordView",
  data() {
    return {
      id: null,
      password: null,
    };
  },
  watch: {
    password: function (newVal, oldVal) {
      const id = this.id;
      console.log(oldVal);
      if (newVal === this.$store.state.residents[Number(id)].password) {
        const button = document.querySelector("#important_button");
        button.setAttribute("data-bs-toggle", "modal");
        button.setAttribute("data-bs-target", "#addModal");
      } else {
        const button = document.querySelector("#important_button");
        button.setAttribute("data-bs-dismiss", "null");
        button.setAttribute("data-bs-toggle", "null");
        button.setAttribute("data-bs-target", "null");
      }
    },
  },
  props: {},
  computed: {
    getId() {
      return this.$route.params.id;
    },
  },
  methods: {
    confirm() {
      const id = this.id;
      if (this.password === this.$store.state.residents[Number(id)].password) {
        this.password = null;
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    },
  },
  mounted() {
    const exampleModal = document.getElementById("passwordModal");
    exampleModal.addEventListener("show.bs.modal", (event) => {
      // Button that triggered the modal
      const button = event.relatedTarget;
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute("data-bs-whatever");
      console.log(recipient)
      // If necessary, you could initiate an AJAX request here
      // and then do the updating in a callback.
      //
      // Update the modal's content.
      // const modalTitle = exampleModal.querySelector(".modal-title");
      // const master = this.$store.state.residents[Number(recipient)].name;
      // modalTitle.textContent = `${master}의 추천영화`;
      this.id = recipient;
      console.log(recipient);

      const addbutton = document.getElementById("important_button");
      addbutton.setAttribute("data-bs-whatever", recipient);
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap");
.modal-header {
  text-align: center;
  /* background-color: dodgerblue; */
}

h4 {
  font-family: "Marcellus SC", serif;
  margin: 0;
}

.modal-body {
  display: inline-block;
  /* background-color: dodgerblue; */
}

.modal-dialog {
  position: relative;
  display: flex;
  justify-content: center;
  top: 8%;
  max-width: none;
  width: 100%;
  height: 40%;
}

#important_button {
  border: none;
  background-color: none;
}

.passwordhint {
  display: inline-block;
}
</style>