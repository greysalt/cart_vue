import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  ...App,
});