import Vue from 'vue';

const TagListComponent = Vue.component('tag-list', {
  template: require('html-loader!./tag-list-component.template.html')
});

export default TagListComponent;
