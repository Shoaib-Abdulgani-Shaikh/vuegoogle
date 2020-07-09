<template>
  <div>
    <h1>My Auth Component</h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from "firebase";
import * as firebaseui from 'firebaseui';

export default {
  name: "auth",
  mounted() {
    var uiConfig = {
      signInsuccessUrl: "/success",
      signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  },
};
</script>
