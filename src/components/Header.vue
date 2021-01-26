<template>
  <header class="header">
    <nav class="navbar navbar-light" id="nav">  
      <img height="50px" alt="Vue logo" src="../assets/logo.png" /> 
      <h3 class="logo" href="/">{{ title }}</h3>
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
  name: "HelloWorld",
  props: {
    title: String
  }
};
</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
