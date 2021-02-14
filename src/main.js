import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores/store'

import axios from 'axios'
Vue.prototype.$axios = axios;
Vue.filter('imgSize', (url,size) => {
  return url.replace(/w\.h/,size);
});
import Scroller from '@/components/scroller'
import Loader from '@/components/loader'
Vue.component('Scroller',Scroller)
Vue.component('Loader',Loader)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
