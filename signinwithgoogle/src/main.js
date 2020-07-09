import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push("/success").catch(()=>{});
      } else {
        this.$router.push("/auth").catch(()=>{});
      }
    });
  },
  render: (h) => h(App),
}).$mount("#app");
