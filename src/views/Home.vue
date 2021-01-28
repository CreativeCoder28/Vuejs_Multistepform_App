<template>
  <div class="home">
    <h1>Registration Page</h1>
    <hr />
    <Content msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Content from "../components/content";

export default {
  name: "Home",
  components: {
    Content
  }
};
</script>
