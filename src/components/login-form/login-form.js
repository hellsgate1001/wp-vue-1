import Vue from 'vue';
import LoadingComponent from '../loading-component/loading-component';

const template = require('./login-form.template.html');

const LoginFormComponent = Vue.extend({
  template,
  components: {
    'loading-component': LoadingComponent,
  },
  data() {
    return {
      loggingIn: false,
    };
  },
  computed: {
    username: {
      get() {
        return this.$store.state.loginForm.username;
      },
      set(newUsername) {
        console.log('SetU:', newUsername);
        this.$store.commit('updateLoginUsername', newUsername);
      },
    },
    password: {
      get() {
        return this.$store.state.loginForm.password;
      },
      set(newPassword) {
        this.$store.commit('updateLoginPassword', newPassword);
      },
    },
  },
  methods: {
    hideModal() {
      this.$store.state.showModal = false;
    },
    submitLogin() {
      const loginDetails = {
        username: this.$store.state.loginForm.username,
        password: this.$store.state.loginForm.password,
      };

      this.loggingIn = true;
      this.$http.post(
        'http://api.waypoints.briansdojo.co.uk/api-token-auth/',
        loginDetails,
      ).then((response) => {
        console.log('R:', response);
      });
    },
  },
});

export default LoginFormComponent;
