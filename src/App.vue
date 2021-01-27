<template>
  <div id="app">
    <webapp-header title="Wonderful world"></webapp-header>
    <div class="container">
        <main>
            <router-view/>
        </main>
    </div>
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

.container {
    display: flex;
}


main {
    flex: 3;
    order: 2;
    margin-top: 100px;
}
</style>
