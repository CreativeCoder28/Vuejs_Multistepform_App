import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstName: null,
    lastName: null,
    email: null,
    streetName: null,
    hNumber: null,
    postcode: null,
    stateName: null,
    comments: null
  },
  mutations: {
    setFirstName(state, formdata) {
      state.firstName = formdata.firstName;
    },
    setLastName(state, formdata) {
      state.lastName = formdata.lastName;
    },
    setEmail(state, formdata) {
      state.email = formdata.email;
    },
    setHNumber(state, formdata) {
      state.hNumber = formdata.hNumber;
    },
    setStreetName(state, formdata) {
      state.streetName = formdata.streetName;
    },
    setPostCode(state, formdata) {
      state.postcode = formdata.postcode;
    },
    setStateName(state, formdata) {
      state.stateName = formdata.stateName;
    },
    setComments(state, formdata) {
      state.comments = formdata.comments;
    }
  },
  actions: {},
  modules: {}
});
