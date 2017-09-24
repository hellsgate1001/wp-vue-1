import Vue from 'vue';
import Vuex from 'vuex';

import TagComponent from '../tag-component/tag-component';
import WaypointsComponent from '../waypoints-component/waypoints-component';
import ModalComponent from '../modal-component/modal-component';
import LoginFormComponent from '../login-form/login-form';

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
      footerButtons: [],
    },
    modal: {
      mainClass: '',
    },
    loginForm: {
      username: '',
      password: '',
      buttons: [
        {
          text: 'Login',
          class: 'btn',
        },
      ],
    },
  },
  mutations: {
    // Modal
    setModalContent(state, newContent) {
      const newState = state;
      newState.modalContent.content = newContent;
    },
    setModalFooterButtons(state, newButtons) {
      const newState = state;
      newState.modalContent.footerButtons = newButtons;
    },
    setModalHeader(state, newHeader) {
      const newState = state;
      newState.modalContent.header = newHeader;
    },
    setModalMainClass(state, newMainClass) {
      const newState = state;
      newState.modal.mainClass = newMainClass;
    },

    // Login
    updateLoginUsername(state, newUsername) {
      const newState = state;
      newState.loginForm.username = newUsername;
    },
    updateLoginPassword(state, newPassword) {
      const newState = state;
      newState.loginForm.password = newPassword;
    },

    // Tags
    updateTags(state, newTags) {
      // eslint-disable-next-line no-param-reassign
      state.tags = newTags;
    },

    // Waypoints
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
    'login-form': LoginFormComponent,
  },
  computed: {
    showModal() {
      return this.$store.state.showModal;
    },
  },
  methods: {
    displayLoginModal() {
      this.$store.commit('setModalHeader', 'Login Modal');
      this.$store.commit('setModalContent', LoginFormComponent);
      this.$store.commit('setModalFooterButtons', this.$store.state.loginForm.buttons);
      this.$store.commit('setModalMainClass', 'login-modal');
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
