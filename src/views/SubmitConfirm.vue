<template>
  <div class="confirm">
    <h1>Confirmation Page</h1>
    <hr />
    <div class=" panel">
      <div class="panel-heading">
        <div class="panel-title">
          <h6>Entered Data</h6>
        </div>
      </div>
      <div class="panel-body">
        <p>First Name: {{ firstName }}</p>
        <p>Last Name: {{ lastName }}</p>
        <p>Email: {{ email }}</p>
        <p>Address: {{ hNumber }}</p>
        <p>Street Name: {{ streetName }}</p>
        <p>Postal Code: {{ postcode }}</p>
        <p>State Name: {{ stateName }}</p>
        <p>Message: {{ comments }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Submit",
  data() {
    console.log(this.$store.state);
    return this.$store.state;
  }
};
</script>
