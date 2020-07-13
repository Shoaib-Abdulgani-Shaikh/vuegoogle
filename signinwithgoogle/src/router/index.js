import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../components/Auth.vue";
import Authsuccess from "../components/Authsuccess.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Authsuccess,
  },
  {
    path: "/auth",
    component: Auth,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
