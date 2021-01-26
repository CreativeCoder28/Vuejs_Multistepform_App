<template>
  <div id="app">
    <webapp-header title="Wonderful world"></webapp-header>
    <router-view />
    <webapp-footer></webapp-footer>
  </div>
</template>

<script>
import header from "./components/Header";
import footer from "./components/Footer";

export default {
  name: "App",

  components: {
    "webapp-header": header,    
    "webapp-footer": footer
  }
};
</script>

<style lang="scss">

</style>
