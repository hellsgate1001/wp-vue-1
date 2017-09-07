import Vue from 'vue';
import TagComponent from '../tag-component/tag-component';

const template = require('./app-component.template.html');

const AppComponent = Vue.extend({
  template,
  components: {
    'tag-component': TagComponent,
  },
});

export default AppComponent;
