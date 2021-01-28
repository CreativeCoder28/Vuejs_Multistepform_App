<template>
  <header class="header">
    <nav class="navbar navbar-light" id="nav">
      <div id="logo d-flex flex-row" href="/">
        <img height="30px" alt="Vue logo" src="../assets/logo.png" />
        <h3 class="logo">{{ title }}</h3>
      </div>
      <ul>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/confirmation">
          <a class="navlink"><i class="fab fab-2x fa-envira"></i></a>
        </router-link>
        <a class="navlink" href="/"><i class="fas fas-2x fa-cog"></i></a>
        <router-link to="/submit">
          <a class="navlink"><i class="fas fas-2x fa-user-circle"></i>
          </a>
        </router-link>
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

<style></style>
