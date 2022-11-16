<template>
  <div>
    <img src="https://cdn-icons-png.flaticon.com/512/2142/2142687.png" alt="" id="1" @click="getOwner">
  </div>
</template>

<script>
export default {
  name: "VillageView",
  data() {
    return{

    }
  },
  methods: {
    getOwner(event) {
      const id = event.target.id
      for (const person of this.$store.state.residents) {
        if (person.id === id) {
          this.$router.push({name: 'recommend', params:{id: id}})
        }
      }
    }
  }

};
</script>

<style>
</style>