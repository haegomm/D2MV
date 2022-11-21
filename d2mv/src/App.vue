<template>
  <div id="app" class="background">
    <nav class="cl-effect-15">
      <a href="#" data-hover="Home">Home</a>
      <a href="#" data-hover="Movies">Movies</a>
      <a href="#" data-hover="Recommend">Recommend</a>
    </nav> -->
    <footer>(주) 송은희 건설</footer>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700|Raleway:400,300,700);

nav {
  position: absolute;
}

@media screen and (max-width: 5em) {
  .codrops-icon span {
    display: none;
  }
}
*,
*:after,
*::before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

a {
  font-family: "Raleway", sans-serif;
}

nav {
  float: right;
}

nav a {
  position: relative;
  display: inline-block;
  margin: 15px 15px;
  outline: none;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 50;
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
  font-size: 1em;
}

nav a:hover,
nav a:focus {
  outline: none;
  color: white;
}

.cl-effect-15 a {
  color: rgba(0, 0, 0, 0.2);
  font-weight: 700;
  text-shadow: none;
}

.cl-effect-15 a::before {
  color: rgb(100, 138, 208);
  content: attr(data-hover);
  position: absolute;
  -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
  -moz-transition: -moz-transform 0.3s, opacity 0.3s;
  transition: transform 0.3s, opacity 0.3s;
}

.cl-effect-15 a:hover::before,
.cl-effect-15 a:focus::before {
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  transform: scale(0.9);
  opacity: 0;
}

.background {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-image: url("./assets/배경6.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(1.1);
}

footer {
  width: 100%;
  position: absolute;
  bottom: 2%;
  text-align: center;
  color: white;
}
</style>
