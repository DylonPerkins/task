import Vue from 'vue'
import Vuex from "vuex"
import App from './App.vue'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'

Vue.config.productionTip = false

 Vue.prototype.$store = store;
Vue.use(Vuex)

sync(store,router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
