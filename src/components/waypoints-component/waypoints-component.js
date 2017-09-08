import Vue from 'vue';
import WaypointComponent from './waypoint-component/waypoint-component';

const template = require('./waypoints-component.template.html');

const WaypointsComponent = Vue.extend({
  template,
  components: {
    'waypoint-component': WaypointComponent,
  },
  created() {
    this.$http.get('http://api.waypoints.briansdojo.co.uk/api/bookmarks/bookmarks/?limit=30&offset=0').then((wpResponse) => {
      this.$store.commit('updateWaypoints', wpResponse.body.results);
    });
  },
  computed: {
    filteredWps() {
      return this.waypoints.filter((wp) => {
        let found = false;

        wp.tags.forEach((tag) => {
          if (tag.name.toLowerCase().indexOf(this.waypointFilter.toLowerCase()) > -1) {
            found = true;
          }
        });

        return found;
      });
    },
    waypointFilter() {
      return this.$store.state.waypointFilter;
    },
    waypoints() {
      return this.$store.state.waypoints;
    },
  },
});

export default WaypointsComponent;
