<template>
    <div id="taskedit">
        <v-card>
            <v-container>
                <h2>
                    <font-awesome-icon icon="pencil-alt" /> タスクを作成</h2>
                <v-form>
                    <v-layout wrap>
                        <v-flex xs8>
                            <v-text-field v-model="taskname" 
                                          :counter="25" label="ゴール（タスク名）*" prepend-icon="flag" required ></v-text-field>
                        </v-flex>
                        <v-flex xs4>
                            <v-dialog ref="menu" 
                                      v-model="menu1" 
                                      :rules="nameRules"
                                      :close-on-content-click="false" 
                                      :nudge-right="40" 
                                      :return-value.sync="time1" 
                                      lazy 
                                      transition="scale-transition" 
                                      offset-y 
                                      full-width 
                                      max-width="290px" 
                                      min-width="290px"
                                      >
                                <template v-slot:activator="{ on }">
                                    <v-text-field v-model="time1" 
                                                  label="所要時間" 
                                                  prepend-icon="access_time" 
                                                  readonly 
                                                  v-on="on"></v-text-field>
                                </template>
                                <v-time-picker v-if="menu1" 
                                               v-model="time1" 
                                               full-width @click:minute="$refs.menu.save(time1)" 
                                               dark></v-time-picker>
                            </v-dialog>
                        </v-flex>
                        <hr class="spacer">
                        <v-flex xs12>
                            <v-textarea outline name="note" :counter="140" label="タスクの詳細などご自由に…"></v-textarea>
                        </v-flex>
                        <v-flex xs12>
                            <v-checkbox v-model="setSchedule" label="スケジュールを設定する"></v-checkbox>
                        </v-flex>
                        <template v-if="setSchedule">
                            <v-flex xs8>
                                <v-dialog v-model="menu2" 
                                          :close-on-content-click="false" 
                                          :nudge-right="40" 
                                          lazy 
                                          transition="scale-transition" 
                                          offset-y 
                                          full-width 
                                          max-width="290px" 
                                          min-width="290px">
                                    <template v-slot:activator="{ on }">
                                        <v-text-field v-model="date" label="タスク開始日" prepend-icon="event" readonly v-on="on"></v-text-field>
                                    </template>
                                    <v-date-picker v-model="date" @input="menu2 = false" dark></v-date-picker>
                                </v-dialog>
                            </v-flex>
                            <v-flex xs4>
                                <v-dialog ref="menu" 
                                          v-model="menu3" 
                                          :close-on-content-click="false" 
                                          :nudge-right="40" 
                                          :return-value.sync="time2" 
                                          lazy 
                                          transition="scale-transition" 
                                          offset-y 
                                          full-width 
                                          max-width="290px" 
                                          min-width="290px">
                                    <template v-slot:activator="{ on }">
                                        <v-text-field v-model="time2" label="開始時刻" prepend-icon="access_time" readonly v-on="on"></v-text-field>
                                    </template>
                                    <v-time-picker v-if="menu3" v-model="time2" full-width @click:minute="$refs.menu.save(time2)" dark></v-time-picker>
                                </v-dialog>
                            </v-flex>
                        </template>
                    </v-layout>
                    <v-btn :disabled="!valid" @click="submit" large color="primary green">タスクを登録する</v-btn>
                </v-form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "taskedit",
        data: () => ({
            taskname: null,
            time1: null,
            time2: null,
            date: null,
            menu1: false,
            menu2: false,
            menu3: false,
            setSchedule: false,
            valid: false,
            nameRules: [
               v => !!v || 'この項目は必須項目です',
               v => v.length <= 25 || '最大文字数25文字を超えています'
            ],
        }),
        methods: {
            submit: function() {
                
            }
        }
    };

</script>

<style>
    .error--text,
    .error--text *{
        color: red;
    }
</style>
