import Vue from 'vue';

const template = require('./loading-component.template.html');
require('./loading-component.scss');

const LoadingComponent = Vue.extend({
  template,
  props: ['message'],
});

export default LoadingComponent;
