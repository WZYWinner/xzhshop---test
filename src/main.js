// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VDistpicker from 'v-distpicker'
import VueParticles from 'vue-particles'

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

Vue.component('v-distpicker', VDistpicker)
Vue.use(ElementUI)
Vue.use(VueParticles)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
