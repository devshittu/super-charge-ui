import Vue from 'vue'
import Master from './Master.vue'
// import store from './store/'
import router from './router/'


import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './filters/';

require('./assets/scss/main.scss');
Vue.use(Buefy);

Vue.config.productionTip = false

new Vue({
    // store,
    router,
  render: h => h(Master),
}).$mount('#superChargeApp')
