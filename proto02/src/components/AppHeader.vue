<template>
    <div class="appheader">
        <span class="appTitle">
            <img class="logoH" src="../assets/logo.png">
            Asobify Task!
        </span>
        <span class="userName">
            {{ user.displayName }}
        <v-btn small outline icon color="light-green" @click="logout"><font-awesome-icon icon="sign-out-alt" /></v-btn>
        </span>
    </div>
</template>

<script>
   export default {
        name: "appheader",
        props: ["user"],
        methods: {
            logout: function() {
                firebase.auth().signOut();
            }
        }
    };

</script>

<style>
   .appheader {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        justify-content: space-between;
        box-sizing: border-box;
        border-bottom: solid 1px #222;
        padding: 5px;
        line-height: 2.5rem;
        overflow: hidden;
    }

    .appTitle {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 600;
        width: auto;
        float: left;
    }

    .logoH {
        height: 16px;
        width: auto;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    .userName {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 10px;
        width: 250px;
        height: 30px;
        margin-bottom: 0;
        text-align: right;
    }

    .menu {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
</style>
