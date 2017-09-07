import Vue from 'vue';
import VueResource from 'vue-resource';
import AppComponent from './components/app-component/app-component';

require('materialize-css/sass/materialize.scss');
require('./main.scss');

Vue.use(VueResource);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {
    'app-component': AppComponent,
  },
});
