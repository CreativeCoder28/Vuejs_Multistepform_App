<template>
  <header class="header">
    <nav class="navbar navbar-light" id="nav">
      <div id="logo d-flex flex-row">
        <img height="30px" alt="Vue logo" src="../assets/logo.png" /> 
        <h3 class="logo" href="/">{{ title }}</h3>
      </div>  
      <ul > 
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link>              
        <a class="navlink" href="#"><i class="fab fab-2x fa-envira"></i></a> 
        <a class="navlink" href="/"><i class="fas fas-2x fa-home"></i></a>  
        <a class="navlink" href="#"><i class="fas fas-2x fa-user-circle"></i></a>  
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  }
};
</script>

<style>

</style>
