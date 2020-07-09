<template>
  <div>
    <h1>Sign in successful</h1>
    <p>{{ name }}</p>
    
    <img  :src="photo" />
    <button @click="logOut">sign out</button>
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
    this.user = firebase.auth().currentUser;
    if (this.user) {
      this.name = this.user.displayName;
      this.photo = this.user.photoURL;
    }
    else
    {
      this.$router.push('/auth').catch(()=>{})
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    },
  },
};
</script>
