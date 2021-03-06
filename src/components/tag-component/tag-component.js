import Vue from 'vue';
import TagListComponent from './tag-list-component/tag-list-component';
import LoadingComponent from '../loading-component/loading-component';

const template = require('./tag-component.template.html');

require('./tag-component.scss');

const TagComponent = Vue.extend({
  template,
  components: {
    'tag-list': TagListComponent,
    'loading-component': LoadingComponent,
  },
  data() {
    return {
      myMessage: 'Hello tags!',
      tagFilter: '',
    };
  },
  created() {
    this.$http.get('http://api.waypoints.briansdojo.co.uk/api/tags/tags/').then((tagResponse) => {
      this.$store.commit('updateTags', tagResponse.body);
    });
  },
  computed: {
    filteredTags() {
      // eslint-disable-next-line max-len
      return this.tags.filter(tag => tag.name.toLowerCase().indexOf(this.tagFilter.toLowerCase()) > -1);
    },
    tags() {
      return this.$store.state.tags;
    },
  },
});

export default TagComponent;
