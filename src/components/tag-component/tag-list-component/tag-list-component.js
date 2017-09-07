import Vue from 'vue';

const template = require('./tag-list-component.template.html');

const TagListComponent = Vue.component('tag-list', {
  template,
  props: ['tag'],
});

export default TagListComponent;
