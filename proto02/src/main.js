import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Vuetify from 'vuetify';
    
import "normalize.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faPlay, faPause, faStop, faPencilAlt, faTrash, faBars, faTimes, faPlusSquare, faWindowClose} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCheckSquare, faPlay, faPause, faStop, faPencilAlt, faTrash, faBars, faTimes, faPlusSquare, faWindowClose)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuetify);
//Vue.use(Vuex)
new Vue({
	el: '#app',
	render: h => h(App)
})
