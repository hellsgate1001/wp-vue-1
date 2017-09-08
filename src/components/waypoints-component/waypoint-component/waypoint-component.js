import Vue from 'vue';

const template = require('./waypoint-component.template.html');

require('./waypoint-component.scss');

const WaypointComponent = Vue.component('waypoint-component', {
  template,
  props: ['wp'],
});

export default WaypointComponent;
