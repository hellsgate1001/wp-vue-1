import Vue from 'vue';

const template = require('./tag-list-component.template.html');

const TagListComponent = Vue.component('tag-list', {
  template,
  props: ['tag'],
  data() {
    return {
      waypointFilter: '',
    };
  },
  methods: {
    updateWaypointFilter(event) {
      this.$store.commit('updateWaypointFilter', event.target.text);
    },
  },
});

export default TagListComponent;
