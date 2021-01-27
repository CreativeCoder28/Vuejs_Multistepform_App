<template>
  <form class="multistep-form">
    <ul class="progress-bar">
      <li class="active">Personal Information</li>
      <li>Address</li>
      <li>Contact Information</li>
      <li>Additional Information</li>
      <li>Preview</li>
    </ul>

    <fieldset>
      <h2 class="fs-title">Personal Information</h2>
      <h6 class="fs-description">Step 1</h6>
      <input type="number" class="form-input" name="userName" placeholder="User Name" required>
      <input type="text" class="form-input" name="firstName" placeholder="First Name" required>
      <input type="text" class="form-input" name="lastName" placeholder="Last Name" required>
      <input type="text" class="form-input" name="birth-date" id="applicationBirthDate" placeholder="Birth Date" required>
      <div class="col-1-of-2 form-radio">
        <span>Gender</span>
        <input type="radio" class="form-input-radio" name="gender" id="form-male" value="male">
        <label for="form-male" class="form-radio-label">Male</label>
        <input type="radio" class="form-input-radio" name="gender" id="form-female" value="female">
        <label for="form-female" class="form-radio-label">Female</label>
        
      </div>
      <input type="button" name="next" class="next action-button" value="Continue to Step 2" />
    </fieldset>

    <fieldset>
      <h2 class="fs-title">Address Information</h2>
      <h6 class="fs-description">Step 2</h6>
      <input type="text" 
      class="form-input"
       name="userName"
        placeholder="User Name"  required>
      <input type="text" class="form-input" name="firstName" placeholder="First Name" required>
      <input type="text" class="form-input" name="lastName" placeholder="Last Name" required>
      <input type="text" class="form-input" name="birth-date" id="applicationBirthDate" placeholder="Birth Date" required>
      <textarea class="form-input" name="address" placeholder="Address"></textarea>
      <input type="button" name="previous" class="previous action-button" value="Personal Info - Step 1" />
      <input type="button" name="next" class="next action-button" value="Continue to Step 2" />
    </fieldset>
  </form>

</template>

<script>
export default {
 name: "content",
  props: {
    msg: String
  }
}


</script>



<style lang="scss">

//mixins
@mixin clearfix {
    &::after {
        content: "";
        display: table;
        clear: both;
    }
};


</style>