import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBreadSlice)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
require('./assets/css/main.css');
import ProgressBar from 'vue-simple-progress'
Vue.component('progress-bar', ProgressBar);

import HeaderCard from "./layout/HeaderCard";
import Ingredient from "./components/kitchen/Ingredient";
import BreadImage from "./components/kitchen/BreadImage";

Vue.component('header-card', HeaderCard);
Vue.component('ingredient', Ingredient);
Vue.component('bread-image', BreadImage);

new Vue({
  render: h => h(App),
}).$mount('#app')
