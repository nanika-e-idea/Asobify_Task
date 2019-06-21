<template>
  <div id="auth">
    <h1>{{ msg }}</h1>
	<img class="logo" src="../assets/logo.png">
      <v-btn large outline color="blue" @click="firebaseLogin"><font-awesome-icon :icon="['fab', 'twitter']" />&nbsp; ログイン</v-btn>
  </div>
</template>

<script>
export default {
  name: "auth",
  data() {
    return {
      msg: "Asobify Task!"
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