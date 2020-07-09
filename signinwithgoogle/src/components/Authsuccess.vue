<template>
  <div>
    <h1>Success Component</h1>
    <p>Hello {{ name }} ..!!</p>
    <p><img : src="photo" /></p>
    <button @click="logOut">Sign out</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "success",
  data() {
    return {
      name: "",
      photo: "",
      user: {},
    };
  },
  created() {
    this.user = firebase.auth.currentUser;
    if (this.user) {
      this.name = this.user.displayName;
      this.photo = this.user.photoURL;
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    },
  },
};
</script>
>
