import Vue from 'vue';
import TagListComponent from './tag-list-component/tag-list-component';

const template = require('./tag-component.template.html');

const TagComponent = Vue.extend({
  template,
  components: {
    'tag-list': TagListComponent,
  },
  data() {
    return {
      myMessage: 'Hello tags!',
      tags: [],
    };
  },
  created() {
    this.$http.get('http://api.waypoints.briansdojo.co.uk/api/tags/tags/').then((tagResponse) => {
      // eslint-disable-next-line
      console.log('Remote tags:', tagResponse);
      this.tags = tagResponse.body;
    });
  },
});

export default TagComponent;
