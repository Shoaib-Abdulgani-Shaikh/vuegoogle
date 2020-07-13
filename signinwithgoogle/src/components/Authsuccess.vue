<template>
  <div>
    <h4>Component name : Auth success Component</h4>
    <p>Hello : {{ name }}</p>

    <img :src="photo" height="200px" width="200px" />
    <br />
    <button @click="logOut">sign out</button>
    <br />
    <br />
    <h3>Lets Do Ajax Request</h3>
    <br />Enter data :
    <input type="text" v-model="mydata" />
    <p>Preview</p>
    <li>my data : {{ mydata }}</li>
    <br />
    <br />
    <button @click="sendReq({ mydata })">send request</button>
  </div>
</template>

<script>
const axios = require("axios").default;
import firebase from "firebase";
export default {
  name: "success",
  data() {
    return {
      name: "",
      photo: "",
      user: {},
      mydata: ""
    };
  },
  created() {
    // var googletoken = result.credential.accessToken;
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function(userIdToken) {
        // Send token to your backend via HTTPS
        document.userIdToken = userIdToken;
        console.log("this is token : ", userIdToken);
        // window.location.href = "/feed";
      })
      .catch(function(error) {
        console.log(error);
      });
    this.user = firebase.auth().currentUser;
    console.log("user data : ", this.user);

    if (this.user) {
      console.log("this is userdata : ", this.user);
      this.name = this.user.displayName;
      this.photo = this.user.photoURL;
      this.mydata = "";
    } else {
      this.$router.push("/auth").catch(() => {});
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    },
    sendReq(btnid) {
      console.log(btnid);
      axios({
        method: "post",
        url: "https://api.coindesk.com/v1/bpi/currentprice.json",
        data: {
          firstName: btnid.mydata
        }
      }).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
        console.log("This is response :", response.data.chartName);
        this.mydata = response.data.chartName;
      });
  }
};
</script>
