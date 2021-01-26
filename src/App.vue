<template>
  <div id="app">
  <!--  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <webapp-header title="Welcome"></webapp-header>
    <webapp-content></webapp-content>
    <webapp-footer></webapp-footer>
  </div>
</template>

<script>
import header from "./components/Header";
import content from "./components/content";
import footer from "./components/Footer";

export default {
  name: "App",

  components:{
    "webapp-header": header,
    "webapp-content": content,
    "webapp-footer": footer,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
