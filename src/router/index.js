import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Submit from "../views/SubmitConfirm.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },

  { path: "/submit", name: "Submission", component: Submit }
];

const router = new VueRouter({
  routes
});

export default router;
