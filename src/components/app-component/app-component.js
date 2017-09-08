import Vue from 'vue';
import Vuex from 'vuex';

import TagComponent from '../tag-component/tag-component';
import WaypointsComponent from '../waypoints-component/waypoints-component';

Vue.use(Vuex);

const template = require('./app-component.template.html');

const store = new Vuex.Store({
  state: {
    waypointFilter: '',
    tags: [],
    waypoints: [],
  },
  mutations: {
    updateTags(state, newTags) {
      // eslint-disable-next-line no-param-reassign
      state.tags = newTags;
    },
    updateWaypointFilter(state, newFilter) {
      // eslint-disable-next-line no-param-reassign
      state.waypointFilter = newFilter;
    },
    updateWaypoints(state, newWaypoints) {
      // eslint-disable-next-line no-param-reassign
      state.waypoints = newWaypoints;
    },
  },
});

const AppComponent = Vue.extend({
  template,
  store,
  components: {
    'tag-component': TagComponent,
    'waypoints-component': WaypointsComponent,
  },
});

export default AppComponent;
