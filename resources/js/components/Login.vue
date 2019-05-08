<template>
  <div>
    <input placeholder="email" v-model="email">
    <input placeholder="password" v-model="password">
    <a @click.prevent="login()">login</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      }).then(() => this.$router.push('/'));
    }
  }
};
</script>
