import Vue from 'vue';
import TagListComponent from './tag-list-component/tag-list-component';

const TagComponent = Vue.extend({
  template: require('html-loader!./tag-component.template.html'),
  components: {
    'tag-list': TagListComponent
  },
  data() {
    return {
      myMessage: 'Hello tags!',
      tags: [
        {
          id: 1,
          name: 'Tag Number 1',
          size: 2
        },
        {
          id: 2,
          name: 'Tag Number 2',
          size: 2
        },
        {
          id: 3,
          name: 'Tag Number 3',
          size: 2
        },
        {
          id: 4,
          name: 'Tag Number 4',
          size: 2
        },
        {
          id: 5,
          name: 'Tag Number 5',
          size: 2
        },
        {
          id: 6,
          name: 'Tag Number 6',
          size: 2
        }
      ]
    }
  }
});

export default TagComponent;
