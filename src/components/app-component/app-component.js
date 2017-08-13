import Vue from 'vue';
import TagComponent from '../tag-component/tag-component';

const AppComponent = Vue.extend({
  template: require('html-loader!./app-component.template.html'),
  components: {
    'tag-component': TagComponent
  }
});

export default AppComponent;
