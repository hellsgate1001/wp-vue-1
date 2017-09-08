import Vue from 'vue';
import WaypointComponent from './waypoint-component/waypoint-component';

const template = require('./waypoints-component.template.html');

const WaypointsComponent = Vue.extend({
  template,
  components: {
    'waypoint-component': WaypointComponent,
  },
  data() {
    return {
      waypoints: [],
    };
  },
  created() {
    this.$http.get('http://api.waypoints.briansdojo.co.uk/api/bookmarks/bookmarks/?limit=30&offset=0').then((wpResponse) => {
      this.waypoints = wpResponse.body.results;
    });
  },
});

export default WaypointsComponent;
