import Vue from "vue";
import { VuelidatePlugin } from "@vuelidate/core";
import VueSimpleAlert from "vue-simple-alert";
import "./plugins/bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import jQuery from "jquery";
global.$ = jQuery;

Vue.use(VuelidatePlugin);

Vue.use(VueSimpleAlert);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
