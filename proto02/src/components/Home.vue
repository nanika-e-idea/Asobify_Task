<template>
  <div id="home">
    <h1>{{ msg }}</h1>
	<img class="logo" src="../assets/logo.png">
    <button class="btnFlat" @click="firebaseLogin">twitterアカウントでログイン</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "welcome to Asobify Task!"
    };
  },
  methods: {
    firebaseLogin: function() {
      firebase
      .auth()
      .signInWithRedirect(new firebase.auth.TwitterAuthProvider());
    }
  }
};
</script>
<style>
	#home{
		width: 100%;
		text-align: center;
	}
</style>