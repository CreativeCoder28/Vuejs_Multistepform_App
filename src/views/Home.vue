<template>
  <div class="home">  
    <router-view/>
    <!--<router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link> 
    <Content msg="Welcome to Your Vue.js App" />-->
  </div>
</template>

<script>
// @ is an alias to /src
// import Content from "../components/content";
// import Confirmation from "../components/Confirmation";

export default {
  name: "Home",
  components: {
   // Content,
   // Confirmation
  }
};
</script>
