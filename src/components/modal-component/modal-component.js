import Vue from 'vue';

const template = require('./modal-component.template.html');

require('./modal-component.scss');

const ModalComponent = Vue.extend({
  template,
  methods: {
    getMainClass() {
      let modalClass = 'modal-container';
      if (this.$store.state.modal.mainClass !== '') {
        modalClass = `${modalClass} ${this.$store.state.modal.mainClass}`;
      }
      return modalClass;
    },
  },
  computed: {
    modal() {
      return this.$store.state.modal;
    },
  },
});

export default ModalComponent;
