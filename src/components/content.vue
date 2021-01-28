<template>
  <form class="multistep-form" @submit="formSubmit">
    <!--  <ul class="progress-bar">
      <li class="active">Personal</li>
      <li>Address</li>
      <li>Other</li>
      <li>Message</li>
    </ul>-->
    <fieldset v-if="step == 1" class="panel">
      <div class="panel-heading">
        <div class="panel-title">
          <h3>Personal Information</h3>
          <h6>Step 1</h6>
        </div>
      </div>
      <div class="panel-body">
        <input
          type="text"
          v-model="form.firstName"
          class="form-input"
          name="firstName"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          v-model="form.lastName"
          class="form-input"
          name="lastName"
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          v-model="form.email"
          class="form-input"
          name="email"
          placeholder="Email Address"
          required
        />
        <input
          type="button"
          name="next"
          class="next action-button"
          value="Next"
          v-if="step != totalSteps"
          @click.prevent="next_Step"
        />
      </div>
    </fieldset>

    <fieldset v-if="step == 2" class="panel">
      <div class="panel-heading">
        <div class="panel-title">
          <h3>Address Information</h3>
          <h6>Step 2</h6>
        </div>
      </div>
      <div class="panel-body">
        <input
          type="text"
          v-model="form.hNumber"
          class="form-input"
          name="hNumber"
          placeholder="House Number"
          required
        />
        <textarea
          v-model="form.streetName"
          class="form-input"
          name="streetName"
          placeholder="Enter other relevant Information"
        ></textarea>        
        <input
          type="number"
          v-model="form.postCode"
          class="form-input"
          name="postalCode"
          placeholder="Postal Code"
          required
        />
        <select  id="State" name="stateName" v-model="form.stateName">
          <optgroup title="state">
            <option value="States" selected>States</option>
            <option value="Hesse" >Hesse</option>
            <option value="Essen">Essen</option>
            <option value="Saxony">Saxony</option>
            <option value="United Kingdom">United Kingdom</option>
          </optgroup>
        </select>                
        <input
          type="button"
          name="previous"
          class="previous action-button"
          value="Previous"
          v-if="step != 1"
          @click.prevent="previous_Step"
        />
        <input
          type="button"
          name="next"
          class="next action-button"
          value="Next"
          v-if="step != totalSteps"
          @click.prevent="next_Step"
        />
      </div>
    </fieldset>

    <fieldset v-if="step == 3" class="panel">
      <div class="panel-heading">
        <div class="panel-title">
          <h3>Order Information</h3>
          <h6>Step 3</h6>
        </div>
      </div>
      <div class="panel-body">
        <vue-editor v-model="form.comments"></vue-editor>
        <input
          type="button"
          name="previous"
          class="previous action-button"
          value="Previous"
          v-if="step != 1"
          @click.prevent="previous_Step"
        />
        <input
          type="button"
          name="next"
          class="next action-button"
          value="Next"
          v-if="step != totalSteps"
          @click.prevent="next_Step"
        />
      </div>
    </fieldset>

    <fieldset v-if="step == 4" class="panel">
      <div class="panel-heading">
        <div class="panel-title">
          <h3>Preview</h3>
          <h6>Step 4</h6>
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

        <input
          type="button"
          name="previous"
          class="previous action-button"
          value="Previous"
          v-if="step != 1"
          @click.prevent="previous_Step"
        />

        <input
          type="button"
          name="submit"
          class="previous action-button"
          value="Submit"
          @click="submit"
        />
      </div>
    </fieldset>
  </form>
</template>

<script>
import { required, email } from "@vuelidate/validators";
import { VueEditor } from "vue2-editor";

export default {
  name: "content",
  props: {
    msg: String
  },
  components: {
    VueEditor
  },
  data: () => {
    return {
      error: [],
      step: 1,
      totalSteps: 4,
      form: {
        firstName: null,
        lastName: null,
        email: null,
        streetName: null,
        hNumber: null,
        postcode: null,
        stateName: null,
        comments: null
      },
      validation: {
        firstName: {
          required
        },
        lastName: {
          required
        },
        email: {
          required,
          email
        },
        streetName: {
          required
        }
      }
    };
  },
  methods: {
    previous_Step: function() {
      this.step--;
    },

    next_Step: function() {
      this.step++;
    },

    submit: function() {
      confirm("Entry have been saved");
      this.step = 0;
    },

    formSubmit: function() {
      if (this.$v.$invalid) return;

      alert("Thank you!");
    },

    status(validation) {
      return {
        dirty: validation.$dirty,
        error: validation.$error
      };
    }
  },
  mounted() {
    // alert("Saved");
  }
};
</script>

<style lang="scss">
//mixins
@mixin flexbox() {
  display: flex;
  justify-content: center;
}

.multistep-form {
  padding: 10px 20px;
  text-align: center;
  position: relative;
  margin-top: 30px;
  border-radius: 15px !important;
}

.multistep-form fieldset {
  /*stacking fieldsets above each other*/
  position: relative;
}

.multistep-form fieldset:not(:first-of-type) {
  display: none;
}

.form-input, select,
textarea {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  font-size: 15px;
  margin: 0;
  outline: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #e8eeef;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  box-shadow: 0 1px 0 rgba(187, 184, 184, 0.03) inset;
  margin-bottom: 20px;
}

.form-input:focus {
  background: #d2d9dd;
}

.form-input select {
  -webkit-appearance: menulist-button;
  height: 35px;
  width: 100px;
}

.action-button {
  width: 100px;
  background: #e2c209;
  font-weight: bold;
  color: white;
  border: 1px solid transparent;
  border-radius: 15px;
  cursor: pointer;
  padding: 10px 5px;
  margin: 10px;
}

.action-button:hover,
.action-button:focus {
  box-shadow: 0 0 0 2px white, 0 0 0 3px #e2c209;
}

/*progressbar*/
.progressbar {
  margin-bottom: 30px;
  overflow: hidden;
  /*CSS counters to number the steps*/
  counter-reset: step;
}

.progressbar li {
  list-style-type: none;
  color: white;
  text-transform: uppercase;
  font-size: 9px;
  width: 33.33%;
  float: left;
  position: relative;
  letter-spacing: 1px;
}

.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 24px;
  height: 24px;
  line-height: 26px;
  display: block;
  font-size: 12px;
  color: #333;
  background: white;
  border-radius: 25px;
  margin: 0 auto 10px auto;
}

/*progressbar connectors*/
.progressbar li:after {
  content: "";
  width: 100%;
  height: 2px;
  background: white;
  position: absolute;
  left: -50%;
  top: 9px;
  z-index: -1; /*put it behind the numbers*/
}

.progressbar li:first-child:after {
  /*connector not needed before the first step*/
  content: none;
}

/*marking active/completed steps green*/
/*The number of the step and the connector before it = green*/
.progressbar li.active:before,
#progressbar li.active:after {
  background: #09e24a;
  color: #09e24a;
}
</style>
