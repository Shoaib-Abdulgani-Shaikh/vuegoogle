import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../components/Auth.vue";
import Authsuccess from "../components/Authsuccess.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/auth",
    name: "Auth2",
    component: Auth,
  },
  {
    path: "/success",
    name: "success",
    component: Authsuccess,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
