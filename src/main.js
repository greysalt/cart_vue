import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
