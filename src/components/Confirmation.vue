<template>
  <div class="panel">
      <div class="panel-heading">
        <div class="panel-title">
          <h6>Entry Confirmation</h6>
        </div>
      </div>
      <div class="panel-body">        
        <p>First Name: {{ form.firstName }}</p>
        <p>Last Name: {{ form.lastName }}</p>
        <p>Email: {{ form.email }}</p>
        <p>Address: {{ form.hNumber }}</p>
        <p>Street Name: {{ form.streetName }}</p>
        <p>Postal Code: {{ form.postCode }}</p>
        <p>State Name: {{ form.stateName }}</p>
        <p>Message: {{ form.comments }}</p>
      </div>
  </div>
</template>

<script>
export default {
name: "Confirmation",
  components: {
  
  }
}
</script>

<style>

</style>