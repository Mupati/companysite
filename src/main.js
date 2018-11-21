import Vue from 'vue';
import VueSwal from 'vue-swal';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.use(VueSwal);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
