<template>
    <div id="taskedit">
        <v-card>
            <v-container>
                <h2>
                    <font-awesome-icon icon="pencil-alt" /> タスクを作成</h2>
                <v-form>
                    <v-layout wrap>
                        <v-flex xs8>
                            <v-text-field v-model="taskname" :counter="25" label="ゴール" required></v-text-field>
                        </v-flex>
                        <v-flex xs4>
                            <v-dialog ref="menu" 
                                    v-model="menu1" 
                                    :close-on-content-click="false" 
                                    :nudge-right="40" 
                                    :return-value.sync="time" 
                                    lazy 
                                    transition="scale-transition" 
                                    offset-y 
                                    full-width 
                                    max-width="290px" 
                                    min-width="290px">
                                <template v-slot:activator="{ on }">
                                    <v-text-field v-model="time1" 
                                                  label="所要時間" 
                                                  prepend-icon="access_time" 
                                                  readonly 
                                                  v-on="on"></v-text-field>
                                </template>
                                <v-time-picker v-if="menu1" 
                                               v-model="time1" 
                                               full-width 
                                               @click:minute="$refs.menu.save(time1)" 
                                               dark></v-time-picker>
                            </v-dialog>
                        </v-flex>
                        <hr class="spacer">
                        <v-flex xs12 sm12>
                            <v-textarea outline name="note" :counter="140" label="タスクの詳細などご自由に…"></v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout wrap>
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
                                    <v-text-field v-model="date" 
                                                  label="タスク開始日" 
                                                  prepend-icon="event" 
                                                  readonly v-on="on"></v-text-field>
                                </template>
                                <v-date-picker v-model="date" 
                                               @input="menu2 = false" 
                                               dark></v-date-picker>
                            </v-dialog>
                        </v-flex>
                        <v-flex xs4>
                            <v-dialog ref="menu" 
                                    v-model="menu3" 
                                    :close-on-content-click="false" 
                                    :nudge-right="40" 
                                    :return-value.sync="time" 
                                    lazy 
                                    transition="scale-transition" 
                                    offset-y 
                                    full-width 
                                    max-width="290px" 
                                    min-width="290px">
                                <template v-slot:activator="{ on }">
                                    <v-text-field v-model="time2" 
                                                  label="開始時刻" 
                                                  prepend-icon="access_time" 
                                                  readonly 
                                                  v-on="on"></v-text-field>
                                </template>
                                <v-time-picker v-if="menu3" 
                                               v-model="time2" 
                                               full-width 
                                               @click:minute="$refs.menu.save(time2)" 
                                               dark></v-time-picker>
                            </v-dialog>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "taskedit",
        data() {
            return {
                time: null,
                menu1: false,
                menu2: false,
                menu3: false,
                modal2: false
            }
        }
    };

</script>

<style></style>
