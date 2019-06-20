<template>
    <div id="addtask">
        <div class="btn btn-close" v-on:click='openAddTask = !openAddTask'><font-awesome-icon icon="window-close" /></div>
        <h3>タスクを追加</h3>
        <p><label for="goal">ゴール（タスク名）</label><input type="text" placeholder="（例）プロトタイプを作る"></p>
        <p><label for="">必要工数（hh:mm）</label>
            <select class="selectTime">
                <option value="00">00</option>
                <option value="01">01</option>
                <option value="02">02</option>
            </select>：
            <select class="selectTime">
                <option value="00">00</option>
                <option value="05">05</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">50</option>
                <option value="55">55</option>
            </select></p>
        <p>※時間が02までしか選べないのは仕様です。<br>3時間以上かかるタスクは分解しよう！</p>
        <p class="iblock"><label for="">着手予定（省略可）</label>
            <datepicker class="datepicker" name="uniquename" placeholder="省略可"></datepicker>
            <select class="selectTime">
                <option>――</option>
                <option value="00">00</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
            </select>：
            <select class="selectTime">
                <option>――</option>
                <option value="00">00</option>
                <option value="05">05</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">50</option>
                <option value="55">55</option>
            </select>
        </p>
        <p><button>タスクを追加する</button></p>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    export default {
        name: "player",
        data() {
            return {
                openAddTask: true
            }
        },
        components: {
            Datepicker
        }
    };

</script>

<style>
    #addtask {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 80%;
        height: 100%;
        padding: 1rem;
        line-height: 2rem;
        background-color: #47a;
        border: solid 1px #aaa;
        border-radius: 10px;
        color: white;
        text-align: left;
    }
    #addtask p{
        line-height: 1.5rem;
        margin: auto;
    }
    #addtask input,
    .selectTime{
        box-sizing: border-box;
        margin: auto 5px auto auto;
        padding: auto;
        width: auto;
        line-height: 1rem;
        font-size: 1rem;
    }
    .selectTime option{
        line-height: 1rem;
    }

    .datepicker {
        color: #222;
        width: auto;
    }
    .iblock{
        display: inline-block;
    }
    .btn-close{
        position: absolute;
        top: 10px;
        right: 15px;
        line-height: 2rem;
        font-size: 2rem;
        color: #222;
        cursor: pointer;
    }
    .btn-close:hover{
        color: darkorange;
    }
    
    .hidden {
        visibility: hidden;
        display: none;
        z-index: 0;
    }
</style>
