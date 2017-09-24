import Vue from 'vue';
import VueResource from 'vue-resource';
import VueLocalStorage from 'vue-localstorage';
import AppComponent from './components/app-component/app-component';

require('materialize-css/sass/materialize.scss');
require('./main.scss');

Vue.use(VueResource);
Vue.use(VueLocalStorage);

Vue.http.interceptors.push((request, next) => {
  console.log('INTERCEPTING!!!!!!!!');
  request.headers.set('Authorization', `Bearer ${Vue.localStorage.get('token')}`);
  console.log(request);

  next();
});

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {
    'app-component': AppComponent,
  },
});
