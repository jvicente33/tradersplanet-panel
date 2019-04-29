/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';
import VueCookie from 'vue-cookie'

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import App from './App.vue';
import router from './router';

// Layouts
import Default from '@/layouts/Default.vue';
import Login from '@/layouts/Login.vue';

//Buefy
import Buefy from 'buefy'

//CSS Buefy
import 'buefy/dist/buefy.css'


Vue.use(VueCookie)
Vue.use(Buefy, {
  defaultDayNames: ['D', 'L', 'M', 'Mi', 'J', 'V', 'S'],
  defaultMonthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  defaultFirstDayOfWeek: 1,
  defaultDateFormatter: date => date.toLocaleDateString('es-ES')
})

ShardsVue.install(Vue);

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
