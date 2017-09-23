import Vue from 'vue';

const template = require('./modal-component.template.html');

require('./modal-component.scss');

const ModalComponent = Vue.extend({
  template,
  computed: {
    modalContent() {
      return this.$store.state.modalContent;
    },
  },
});

export default ModalComponent;
