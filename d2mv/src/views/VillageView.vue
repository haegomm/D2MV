<template>
  
    <carousel>
      <slide>
        <img src="https://cdn-icons-png.flaticon.com/512/2142/2142687.png" alt="" id="1" @click="getOwner">
      </slide>
      <slide>
        <img src="../assets/10.png" alt="building" id="2" @click="getOwner">
      </slide>
      <slide>
        <img src="../assets/6.png" alt="building">
      </slide>
      <slide>
        <img src="../assets/5.png" alt="building">
      </slide>
    </carousel>
  
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