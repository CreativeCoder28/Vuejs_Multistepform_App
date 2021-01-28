import Vue from "vue";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { ValidationObserver } from "vee-validate";
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

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

Vue.use(VueSimpleAlert);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
