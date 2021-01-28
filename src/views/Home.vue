<template>
  <div class="home">      
    <Content msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Content from "../components/content";
// import Confirmation from "../components/Confirmation";

export default {
  name: "Home",
  components: {
    Content,
   // Confirmation
  }
};
</script>
