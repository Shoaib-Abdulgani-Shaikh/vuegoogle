import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import { config } from "./helpers/firebaseConfig.js";
import VueRouter from "vue-router";
Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router,
  store,
  create() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanges((user) => {
      if (user) {
        this.$router.push("/success");
      } else {
        this.$router.push("/auth");
      }
    });
  },
  render: (h) => h(App),
}).$mount("#app");
