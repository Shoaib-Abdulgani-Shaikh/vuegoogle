import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../components/Auth.vue";
import Authsuccess from "../components/Authsuccess.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Auth,
  },
  {
    path: "/auth",
    component: Auth,
  },
  {
    path: "/success",
    component: Authsuccess,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
