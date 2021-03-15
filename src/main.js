import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store  from './store';



// Скрипты JS / JQ
import './assets/script.js';
import './assets/categories.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');



