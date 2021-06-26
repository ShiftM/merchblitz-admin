// The Vue build version to load with the `import` command 
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './routes'
import Paginate from 'vuejs-paginate'
import Swal from 'vue-swal';
import vSelect from 'vue-select'
import Spinner from './components/Spinner.vue'
import AppMixin from './app.mixin';
Vue.component('paginate', Paginate)
Vue.component('v-select', vSelect)
Vue.component('spinner', Spinner)
Vue.mixin(AppMixin);
// todo
// cssVars()

Vue.use(BootstrapVue)
Vue.use(Swal)

require('./globals/app');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
