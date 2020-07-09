<template>
  <div>
    <h1>Sign in page</h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
// import configs and initialize the firebase
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import { config } from "/projects web/vuesignin/signinwithgoogle/src/helpers/firebaseConfig";
firebase.initializeApp(config);

export default {
  name: "auth",
  mounted() {
    var uiConfig = {
      // signInSuccessUrl: "/",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    };
    // if already initiated instance exist then get that instance otherwise create new one
    var ui =firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  },
};
</script>
