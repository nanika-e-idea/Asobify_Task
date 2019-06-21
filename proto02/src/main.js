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

Vue.use(Vuetify)
Vue.use(Vuex)
new Vue({
	el: '#app',
	render: h => h(App)
})
