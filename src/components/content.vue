<template>
  <form class="multistep-form" @submit="formSubmit">
    <h1>Registration Page</h1>
    <hr />
    <ul class="progressbar">
      <li class="active">Personal</li>
      <li>Address</li>
      <li>Other</li>
      <li>Message</li>
    </ul>
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
          v-model="firstName"
          class="form-input"
          name="firstName"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          v-model="lastName"
          class="form-input"
          name="lastName"
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          v-model="email"
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
          v-model="hNumber"
          class="form-input"
          name="hNumber"
          placeholder="House Number"
          required
        /> 
          <input
          type="text"
          v-model="streetName"
          class="form-input"
          name="addressLine2"
          placeholder="Address Line"
          required
        />      
        <input
          type="number"
          v-model="postcode"
          class="form-input"
          name="postalCode"
          placeholder="Postal Code"
          required
        />

        <select
          id="State"
          name="stateName"
          v-model="stateName"
          @change="handleChange"
        >
          <optgroup title="state">
            <option value="States" selected>States</option>
            <option value="Hesse">Hesse</option>
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
          <h3>Other Information</h3>
          <h6>Step 3</h6>
        </div>
      </div>
      <div class="panel-body">
        <textarea
          v-model="comments"
          class="form-input"
          name="comments"
          placeholder="Enter other relevant Information"
        ></textarea>
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
          <h3>Write Message</h3>
          <h6>Step 4</h6>
        </div>
      </div>
      <div class="panel-body">
        <vue-editor v-model="comments"></vue-editor>

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
  computed: {
    firstName: {
      get() {
        return this.$store.state.firstName;
      },
      set(value) {
        this.$store.commit("setFirstName", { firstName: value });
      }
    },

    lastName: {
      get() {
        return this.$store.state.lastName;
      },
      set(value) {
        this.$store.commit("setLastName", { lastName: value });
      }
    },

    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit("setEmail", { email: value });
      }
    },

    hNumber: {
      get() {
        return this.$store.state.hNumber;
      },
      set(value) {
        this.$store.commit("setHNumber", { hNumber: value });
      }
    },

    streetName: {
      get() {
        return this.$store.state.streetName;
      },
      set(value) {
        this.$store.commit("setStreetName", { streetName: value });
      }
    },

    postcode: {
      get() {
        return this.$store.state.postcode;
      },
      set(value) {
        this.$store.commit("setPostCode", { postcode: value });
      }
    },

    stateName: {
      get() {
        return this.$store.state.stateName;
      },
      set(value) {
        this.$store.commit("setStateName", { stateName: value });
      }
    },

    comments: {
      get() {
        return this.$store.state.comments;
      },
      set(value) {
        this.$store.commit("setComments", { comments: value });
      }
    }
  },
  methods: {
    previous_Step: function() {
      this.step--;
    },

    next_Step: function() {
      this.step++;
    },

    submit: function() {
      // confirm("Entry have been saved");
      this.step = 1;
      this.$router.push({ path: "submit" });
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

.form-input,
select,
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
  border-radius: 5px;
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
  display: --webkit-flex;
  display: --moz-flex;
  display: -ms-flex;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  margin-bottom: 30px;

  /*CSS counters to number the steps*/
  counter-reset: step;
}

.progressbar li {
  list-style-type: none;
  color: #333;
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
  color: white;
  background: rgb(90, 89, 89);
  border-radius: 25px;
  margin: 0 auto 10px auto;
}

/*progressbar connectors*/
.progressbar li:after {
  content: "";
  width: 100%;
  height: 2px;
  background: #e2c209;
  position: absolute;
  left: -50%;
  top: 9px;
  z-index: -1;
}

.progressbar li:first-child:after {
  content: none;
}

/*The number of the step and the connector before it = highlighted*/
.progressbar li.active:before,
.progressbar li.active:after {
  background: #e2c209;
  color: #333;
}
</style>
