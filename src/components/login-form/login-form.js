import Vue from 'vue';

const template = require('./login-form.template.html');

const LoginFormComponent = Vue.extend({
  template,
  computed: {
    username: {
      get() {
        return this.$store.state.loginForm.username;
      },
      set(newUsername) {
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
});

export default LoginFormComponent;
