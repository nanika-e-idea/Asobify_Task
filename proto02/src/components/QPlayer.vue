<template>
    <div id="Player">
        <div class="appHeader">
            <span class="appTitle">
                <img class="logoH" src="../assets/logo.png">
                Asobify Task!
            </span>
            <span class="userName">
                {{ user.displayName }}
                <button class="menu btnFlat" @click="logout">ログアウト</button>
            </span>
        </div>
        <div class="main">
            <div class="inProcess">
                <div class="inProcess-check">
                    <font-awesome-icon icon="check-square" />
                </div>
                <div class="inProcess-task">
                    <div class="inProcess-task-icon">
                        <font-awesome-icon icon="play" />
                    </div>
                    <div class="inProcess-task-name">Asobify Task プロトタイプ作成</div>
                    <div class="inProcess-task-progress">
                        <span class="progress-count">00:00</span> / <span class="">00:00</span>
                    </div>
                </div>
                <ul class="inProcess-btns">
                    <li class="btn hidden">
                        <font-awesome-icon icon="play" />
                    </li>
                    <li class="btn">
                        <font-awesome-icon icon="pause" />
                    </li>
                    <li class="btn">
                        <font-awesome-icon icon="stop" />
                    </li>
                    <li class="btn">
                        <font-awesome-icon icon="pencil-alt" />
                    </li>
                    <li class="btn">
                        <font-awesome-icon icon="trash" />
                    </li>
                </ul>
            </div><!-- /inProcess -->
            <div class="taskList">
                <h3 class="sectionHead">タスクリスト</h3>
                <ul class="list">
                    <li class="list-line">
                        <ul class="line-items">
                            <li class="name">タスク_1</li>
                            <li class="progress">00:00 / 01:00</li>
                            <li class="control">
                                <ul class="list-btns">
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="play" />
                                    </li>
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="pencil-alt" />
                                    </li>
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="trash" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="list-line striped">
                        <ul class="line-items">
                            <li class="name">タスク_2</li>
                            <li class="progress">00:20 / 01:30</li>
                            <li class="control">
                                <ul class="list-btns">
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="play" />
                                    </li>
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="pencil-alt" />
                                    </li>
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="trash" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="list-line">
                        <ul class="line-items">
                            <li class="name">タスク_3</li>
                            <li class="progress">00:00 / 01:00</li>
                            <li class="control">
                                <ul class="list-btns">
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="play" />
                                    </li>
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="pencil-alt" />
                                    </li>
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="trash" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div><!-- taskList -->
            <div class="schdList">
                <h3 class="sectionHead">予約タスク</h3>
                <ul class="list">
                    <li class="list-line">
                        <ul class="line-items">
                            <li class="schedule">06 / 03 - 09:30</li>
                            <li class="name">タスク_1</li>
                            <li class="control">
                                <ul class="list-btns">
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="play" />
                                    </li>
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="pencil-alt" />
                                    </li>
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="trash" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="list-line striped">
                        <ul class="line-items">
                            <li class="schedule">06 / 06 - 13:00</li>
                            <li class="name">タスク_2</li>
                            <li class="control">
                                <ul class="list-btns">
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="play" />
                                    </li>
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="pencil-alt" />
                                    </li>
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="trash" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="list-line">
                        <ul class="line-items">
                            <li class="schedule">06 / 10 - 10:00</li>
                            <li class="name">タスク_3</li>
                            <li class="control">
                                <ul class="list-btns">
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="play" />
                                    </li>
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="pencil-alt" />
                                    </li>
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="trash" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="list-line striped">
                        <ul class="line-items">
                            <li class="schedule">06 / 14 - 16:00</li>
                            <li class="name">タスク_4</li>
                            <li class="control">
                                <ul class="list-btns">
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="play" />
                                    </li>
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="pencil-alt" />
                                    </li>
                                    <li class="btn list-btn">
                                        <font-awesome-icon icon="trash" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div><!-- schdList -->
        </div><!-- main -->
        <div class="overlay" v-bind:class='{overlayActive:openAddTask}'>
            <template v-if="openAddTask">
                <v-dialog v-model="dialog">
                    <v-card>
                        
                        <h3>タスクを追加</h3>
                    </v-card>

                </v-dialog>
            </template>
            <div class="btn btn-add" v-on:click='openAddTask = !openAddTask'>
                <font-awesome-icon icon="plus-square" v-if="openAddTask" />
                <font-awesome-icon icon="window-close" v-else />
                
            </div>
        </div><!-- overlay -->
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    export default {
        name: "player",
        props: ["user"],
        data() {
            return {
                openAddTask: false
            }
        },
        methods: {
            logout: function() {
                firebase.auth().signOut();
            }
        },
        components: {
            Datepicker
        }

    };

</script>

<style lang="scss" scoped>
    .appHeader {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        box-sizing: border-box;
        border-bottom: solid 2px #222;
        padding: 5px auto;
        line-height: 2rem;
    }

    .appTitle {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
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
        align-content: center;
        justify-content: center;
        font-size: 10px;
        width: auto;
        height: 30px;
        line-height: 30px;
        float: right;
    }

    .menu {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    .main {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        position: relative;
        top: 0;
        width: 100%;
        background-color: #999;
        z-index: 1;
    }

    .inProcess {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        height: auto;
        padding: 2rem;
        background-color: #222;
        color: white;
        overflow: hidden;
    }

    .inProcess-check {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 4rem;
        text-align: right;
        font-size: 3rem;
        color: #444;
        cursor: pointer;
    }

    .inProcess-task {
        position: relative;
        margin-top: 20px;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
        height: auto;
        line-height: 3rem;
        font-size: 1rem;
    }

    .inProcess-check:hover {
        color: darkorange;
    }

    .inProcess-task-icon {
        font-size: 3rem;
        margin-right: 10px;
    }

    .inProcess-btns {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        list-style-type: none;
        box-sizing: border-box;
        height: auto;
        width: 80%;
        max-width: 20rem;
        margin: auto;
        padding: 0;
        border-radius: 10px;
        text-align: center;
        line-height: 60px;
        background-color: #ccc;
    }

    .btn {
        position: relative;
        width: 2rem;
        margin: auto 10px;
        font-size: 1.5rem;
        color: #222;
        cursor: pointer;
    }

    .btn:hover {
        color: darkorange;
    }

    .taskList {
        padding-bottom: 20px;
        background-color: #ddd;
    }

    .schdList {
        padding-bottom: 20px;
        background-color: #ccc;
    }

    @media screen and (max-width: 800px) {

        .taskList,
        .schdList {
            width: 800px;
        }
    }

    @media screen and (min-width: 801px) {

        .taskList,
        .schdList {
            width: 50%;
            min-width: 400px;
        }

    }

    .sectionHead {
        text-align: center;
        color: #999;
    }

    .list {
        box-sizing: border-box;
        width: calc(100% - 20px);
        list-style-type: none;
        padding: 0;
        margin: auto 10px;
    }

    .list .striped {
        background-color: #cdd;
    }

    .list-line {
        box-sizing: border-box;
        padding: 0.5rem;
    }

    .line-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        list-style-type: none;
        padding: 0;
        line-height: 1.5rem;
        font-size: 1rem;
    }

    .line-items .name {
        width: 200px;
    }

    .line-items .progress {
        width: 160px;
    }

    .line-items .control {
        width: 180px;
    }

    .list-btns {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        list-style-type: none;
        padding: 0;
        line-height: 2rem;

    }

    .list-btn {
        font-size: 1rem;
    }

    .list-btn:hover {
        color: darkorange;
    }

    .sub {
        position: fixed;
        bottom: -200px;
        width: 100%;
        text-align: center;
        z-index: 2;
    }

    .sub-tab {
        box-sizing: border-box;
        height: 50px;
        width: 200px;
        margin: auto;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        font-size: 30px;
        line-height: 50px;
        background-color: #aaa;
    }

    .sub-body {
        box-sizing: border-box;
        height: 200px;
        background-color: #aaa;
    }

    .sub_active {
        bottom: 0;
    }

    .overlay {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 4rem;
        height: 4rem;
        z-index: 20;
    }

    .overlayActive {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .btn-add {
        position: absolute;
        right: 20px;
        bottom: 10px;
        font-size: 3rem;
    }

    #addtask {
        //display: flex;
        //justify-content: space-around;
        //align-content: center;
        //flex-wrap: wrap;
        //box-sizing: border-box;
        //position: absolute;
        //top: 0;
        //left: 0;
        //width: 100%;
        //height: 100%;
        //padding: 1rem;
        //line-height: 2rem;
        //background-color: rgba(255, 255, 255, 0.6);
        //color: white;
    }

    #addtask p {
        //line-height: 1.5rem;
        //margin: 1rem auto;
        //width: 90%;
    }

    #addtask input,
    .selectTime {
        //box-sizing: border-box;
        //margin: auto 5px auto auto;
        //padding: auto;
        //width: auto;
        //line-height: 1rem;
        //font-size: 1rem;
    }

    .selectTime option {
        line-height: 1rem;
    }

    .datepicker {
        color: #222;
        width: auto;
    }

    .iblock {
        display: inline-block;
    }

    .btn-close {
        position: absolute;
        top: 10px;
        right: 15px;
        line-height: 2rem;
        font-size: 2rem;
        color: #222;
        cursor: pointer;
    }

    .btn-close:hover {
        color: darkorange;
    }

    hr.spacer {
        width: 100%;
        border: none;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .hidden {
        visibility: hidden;
        display: none;
        width: 0;
        height: 0;
        z-index: -1;
    }

</style>
