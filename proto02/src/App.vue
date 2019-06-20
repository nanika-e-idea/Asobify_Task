<template>
  <div id="app">
    <div v-if="!loaded">
		<img class="logo" src="logo.png">
		Now Loading...
	</div>
    <Home v-if="!isLogin && loaded"></Home>
    <Player v-if="isLogin && loaded" :user="userData"></Player>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Player from "./components/Player.vue";  

export default {
  name: 'app',
  data () {
    return {
      isLogin: false,
      userData: null,
      loaded: false,
    };
  },
  beforeCreate: function(){
    console.log("beforecreate");
    console.log(this.loaded);
    firebase.auth().onAuthStateChanged(user =>{
      console.log(user);
      if(user){
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      }
      this.loaded = true;
      console.log("end onAuth");
      console.log(this.loaded);
    });
  },
  created: function() {
    console.log("mounted");
    console.log(this.loaded)
  },
  components: {
    Home: Home,
    Player: Player,
  }
};
</script>
<style>
html body{
  font-family: sans-serif;
  text-align: center;
  font-size: 10pt;
}
	.logo{
		display: block;
		width:150px;
		height:auto;
		margin: auto;
	}
    .btnFlat{
        box-sizing: content-box;
        background-color: inherit;
        border: solid 1px #aaa;
        border-radius: 6px;
        margin: auto;
        padding: 0.5rem 1rem;
    }
    .btnFlat:hover{
        background-color: darkcyan;
        color: white;
    }
</style>
