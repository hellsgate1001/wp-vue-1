import Vue from 'vue';
import TagComponent from '../tag-component/tag-component';
import WaypointsComponent from '../waypoints-component/waypoints-component';

const template = require('./app-component.template.html');

const AppComponent = Vue.extend({
  template,
  components: {
    'tag-component': TagComponent,
    'waypoints-component': WaypointsComponent,
  },
});

export default AppComponent;
