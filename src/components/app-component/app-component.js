import Vue from 'vue';
import Vuex from 'vuex';

import TagComponent from '../tag-component/tag-component';
import WaypointsComponent from '../waypoints-component/waypoints-component';
import ModalComponent from '../modal-component/modal-component';

Vue.use(Vuex);

const template = require('./app-component.template.html');

const store = new Vuex.Store({
  state: {
    waypointFilter: '',
    tags: [],
    waypoints: [],
    showModal: false,
    modalContent: {
      header: 'Modal Header',
      content: 'Default Content',
      footer: 'Modal Footer',
    },
  },
  mutations: {
    setModalHeader(state, newHeader) {
      const newState = state;
      newState.modalContent.header = newHeader;
    },
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
      state.waypoints = state.waypoints.concat(newWaypoints);
    },
  },
});

const AppComponent = Vue.extend({
  template,
  store,
  components: {
    'tag-component': TagComponent,
    'waypoints-component': WaypointsComponent,
    'modal-component': ModalComponent,
  },
  computed: {
    showModal() {
      return this.$store.state.showModal;
    },
  },
  methods: {
    displayLoginModal() {
      this.$store.commit('setModalHeader', 'Login Modal');
      this.$store.state.showModal = true;
    },
    displayModal() {
      this.$store.state.showModal = true;
    },
    hideModal() {
      this.$store.state.showModal = false;
    },
  },
});

export default AppComponent;
