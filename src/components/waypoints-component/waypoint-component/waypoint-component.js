import Vue from 'vue';

const template = require('./waypoint-component.template.html');

const WaypointComponent = Vue.component('waypoint-component', {
  template,
  props: ['wp'],
});

export default WaypointComponent;
