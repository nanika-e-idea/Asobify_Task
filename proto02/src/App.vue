<template>
    <div id="app">
        <v-container>
            <div v-if="!loaded">
                Now Loading...
                <div class="asoprogress">
                    <v-progress-circular :size="100" :width="5" indeterminate color="grey"></v-progress-circular>
                    <img class="logo" src="logo.png">
                </div>
            </div>
            <Auth v-if="!isLogin && loaded"></Auth>
            <template v-if="isLogin && loaded">
                <AppHeader :user="userData"></AppHeader>

                <v-layout wrap>
                    <v-flex sm12 md6>
                        <v-container>
                            <TaskEdit></TaskEdit>
                        </v-container>
                    </v-flex>
                    <v-flex sm12 md6>
                        <v-container>
                            <PlayList></PlayList>
                        </v-container>
                    </v-flex>
                </v-layout>
            </template>
        </v-container>
    </div>
</template>

<script>
    import Auth from "./components/Auth.vue";
    import AppHeader from "./components/AppHeader.vue";
    import TaskEdit from "./components/TaskEdit.vue";
    import PlayList from "./components/PlayList.vue";

    export default {
        name: 'app',
        data() {
            return {
                isLogin: false,
                userData: null,
                loaded: false,
            };
        },
        beforeCreate: function() {
            console.log("beforecreate");
            console.log(this.loaded);
            firebase.auth().onAuthStateChanged(user => {
                console.log(user);
                if (user) {
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
            Auth: Auth,
            AppHeader: AppHeader,
            TaskEdit: TaskEdit,
            PlayList: PlayList,
        }
    };

</script>
<style>
    html body {
        display: block;
        box-sizing: border-box;
        width: 100vw;
        font-family: sans-serif;
        text-align: center;
        font-size: 10pt;
        background-color: #f9f9ff;
    }

    

    .logo {
        display: block;
        width: 150px;
        height: auto;
        margin: auto;
    }
    .asoprogress{
        position: relative;
        top: 3rem;
        width: 100px;
        height: auto;
        margin: auto;
    }
    .asoprogress .logo{
        position: absolute;
        left: 10px;
        top: 10px;
        width: 80px;
    }
    .asoprogress 

    .btnFlat {
        box-sizing: content-box;
        background-color: inherit;
        border: solid 1px #aaa;
        border-radius: 6px;
        margin: auto;
        padding: 0.5rem 1rem;
    }

    .btnFlat:hover {
        background-color: darkcyan;
        color: white;
    }

    hr.spacer {
        border: none;
        height: 0;
        margin: 0.5rem;
    }

</style>
