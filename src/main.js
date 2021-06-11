import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import jq from 'jquery'

import "../public/css/init.css"
Vue.prototype.axios = Axios;
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
Vue.prototype.jq = jq;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
