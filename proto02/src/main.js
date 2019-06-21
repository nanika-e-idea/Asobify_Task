import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import App from './App.vue'
    
import 'normalize.css'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faSignOutAlt, faCheckSquare, faPlay, faPause, faStop, faPencilAlt, faTrash, faBars, faList, faTimes, faPlusSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSignOutAlt, faCheckSquare, faPlay, faPause, faStop, faPencilAlt, faTrash, faBars, faList, faTimes, faPlusSquare, faWindowClose, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

var config = {
            apiKey: "AIzaSyAA_j8KaQtk66cAx3VZJstXH9USEd6ojnI",
            authDomain: "asobifytask.firebaseapp.com",
            databaseURL: "https://asobifytask.firebaseio.com",
            projectId: "asobifytask",
            storageBucket: "asobifytask.appspot.com",
            messagingSenderId: "344896295705",
            appId: "1:344896295705:web:c42f42e96be5a048"
        };
        firebase.initializeApp(config);

Vue.use(Vuetify)
Vue.use(Vuex)
new Vue({
	el: '#app',
	render: h => h(App)
})
