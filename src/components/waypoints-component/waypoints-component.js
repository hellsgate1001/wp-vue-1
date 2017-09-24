import Vue from 'vue';
import WaypointComponent from './waypoint-component/waypoint-component';
import WaypointEditComponent from './waypoint-edit-component/waypoint-edit-component';
import LoadingComponent from '../loading-component/loading-component';
// import Ajax from '../../services/ajax.service';

const template = require('./waypoints-component.template.html');

const WaypointsComponent = Vue.extend({
  template,
  components: {
    'waypoint-component': WaypointComponent,
    'loading-component': LoadingComponent,
    'waypoint-edit-component': WaypointEditComponent,
  },
  created() {
    this.loadWaypoints();
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
    showModal() {
      return this.$store.state.showModal;
    },
    waypointFilter() {
      return this.$store.state.waypointFilter;
    },
    waypoints() {
      return this.$store.state.waypoints;
    },
  },
  data() {
    return {
      offset: 0,
      limit: 30,
    };
  },
  methods: {
    loadWaypoints() {
      // Ajax.get(`http://api.waypoints.briansdojo.co.uk/api/bookmarks/bookmarks/?limit=30&offset=${this.offset}`).then((wpResponse) => {
      //   this.$store.commit('updateWaypoints', wpResponse.body.results);
      //   // if (wpResponse.body.results.length > 0) {
      //   //   this.offset += this.limit;
      //   //   setTimeout(this.loadWaypoints, 500);
      //   // }
      // });
      console.log('H:', this.$http.interceptors);
      this.$http.get(`http://api.waypoints.briansdojo.co.uk/api/bookmarks/bookmarks/?limit=30&offset=${this.offset}`).then((wpResponse) => {
        this.$store.commit('updateWaypoints', wpResponse.body.results);
        // if (wpResponse.body.results.length > 0) {
        //   this.offset += this.limit;
        //   setTimeout(this.loadWaypoints, 500);
        // }
      });
    },
    displayModal() {
      this.$store.state.showModal = true;
    },
  },
});

export default WaypointsComponent;
