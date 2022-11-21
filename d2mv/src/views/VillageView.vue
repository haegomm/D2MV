<template>
  <div class="background">
     <div class="container">
        <!-- <img id="b1" class="shadow-pop-tr" src="../assets/5.png" alt="" />
        <img id="b2" class="shadow-pop-tr" src="../assets/7.png" alt="" />
        <img id="b3" class="shadow-pop-tr" src="../assets/8.png" alt="" />
        <img id="b4" class="shadow-pop-tr" src="../assets/9.png" alt="" />
        <img id="b5" class="shadow-pop-tr" src="../assets/10.png" alt="" />
        <img id="b6" class="shadow-pop-tr" src="../assets/11.png" alt="" />
        <img id="b7" class="shadow-pop-tr" src="../assets/12-1.png" alt="" />
        <img id="b8" class="shadow-pop-tr" src="../assets/13-1.png" alt="" />
        <img id="b9" class="shadow-pop-tr" src="../assets/14.png" alt="" /> -->
        <img id="b10" class="shadow-pop-tr" src="../assets/15.png" alt="" />
      <!-- <img id="t1" class="shadow-pop-tr" src="../assets/20.png" alt="" /> -->
    </div>
    <button @click="getSnow">snow</button>
    <div class="snowflakes" aria-hidden="true" v-if="snowing">
      <div class="snowflake">
      ❅
      </div>
      <div class="snowflake">
      ❆
      </div>
      <div class="snowflake">
      ❅
      </div>
      <div class="snowflake">
      ❆
      </div>
      <div class="snowflake">
      ❅
      </div>
      <div class="snowflake">
      ❆
      </div>
      <div class="snowflake">
        ❅
      </div>
      <div class="snowflake">
        ❆
      </div>
      <div class="snowflake">
        ❅
      </div>
      <div class="snowflake">
        ❆
      </div>
      <div class="snowflake">
        ❅
      </div>
      <div class="snowflake">
        ❆
      </div>
    </div>
    <!-- <carousel :per-page='1'>
      <slide>
        <img src="../assets/city.png" usemap="#image-map" class="mapper" >
        <map name="image-map" id="image-map">
          <area target="_parent" alt="이가은" title="이가은" href="http://localhost:8080/recommend/0" coords="407,560,327,318" shape="rect" >
          <area target="_top" alt="송대현" title="송대현" href="http://localhost:8080/recommend/1" coords="752,562,644,311" shape="rect" >
        </map> 

      </slide>
      <slide>

      </slide>
    </carousel> -->
  </div>
</template>


<script>


export default {
  name: "VillageView",
  components: {
    
  },
  data() {
    return{
      snowing: false
    }

// < src="https://kit.fontawesome.com/150aa59347.js" crossorigin="anonymous">
  },
  methods: {
    getOwner(event) {
      const id = event.target.id;
      for (const person of this.$store.state.residents) {
        if (person.id === id) {
          this.$router.push({ name: "recommend", params: { id: id } });
        }
      }
    },

    getSnow() {
      this.snowing = !this.snowing
    }
  }

};
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
}

button {
  position: absolute;
}


.snowflake {
  color: #fff;
  font-size: 1em;
  font-family: Arial, sans-serif;
  text-shadow: 0 0 5px #000;
  top: 5%;
}


@-webkit-keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes snowflakes-shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}}@keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@keyframes snowflakes-shake{0%,100%{transform:translateX(0)}50%{transform:translateX(80px)}}.snowflake{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:snowflakes-fall,snowflakes-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:snowflakes-fall,snowflakes-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.snowflake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.snowflake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.snowflake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.snowflake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.snowflake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.snowflake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.snowflake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.snowflake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.snowflake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.snowflake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}.snowflake:nth-of-type(10){left:25%;-webkit-animation-delay:2s,0s;animation-delay:2s,0s}.snowflake:nth-of-type(11){left:65%;-webkit-animation-delay:4s,2.5s;animation-delay:4s,2.5s}
.background {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-image: url("../assets/배경6.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(1.1);
}
  
/* .container {
  position: relative;
  top: 40.9vh;
  width: 100%;
  height: 45vh;
  margin: 0;
  padding: 0;
  max-width: 100%;
} */

/* img {
  display: inline-block;
>>>>>>> 6f78f530ee869f2badb894273238c2329e8a1c00
  position: absolute;
} */


#b1 {
  bottom: 14.1%;
  left: 0;
  size: cover;
  filter: brightness(1.2);
}

#b2 {
  bottom: 14.1%;
  left: 8.4%;
  filter: brightness(1.2);
}

#b3 {
  bottom: 14.1%;
  left: 17.75%;
  filter: brightness(1.3);
}

#b4 {
  bottom: 14.1%;
  left: 23.1%;
  filter: brightness(1.3);
}

#b5 {
  bottom: 14.1%;
  left: 31.5%;
  filter: brightness(1.3);
}

#b6 {
  bottom: 14.1%;
  left: 36.7%;
  filter: brightness(1.3);
}

#b7 {
  bottom: 14.1%;
  left: 44.5%;
  filter: brightness(1.3);
}

#b8 {
  bottom: 14.1%;
  left: 49.4%;
  filter: brightness(1.3);
}

#b9 {
  bottom: 14.1vh;
  left: 58.4%;
  filter: brightness(1.3);
}

#b10 {
  bottom: 14.1vh;
  left: 68%;
  filter: brightness(1.3);
}

#t1 {
  /* filter: brightness(1.4) saturate(1.7) hue-rotate(10deg) sepia(0.3); */
}

img:hover {
  opacity: 0.9;
}

</style>