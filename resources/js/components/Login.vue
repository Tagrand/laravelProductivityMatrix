<template>
  <div>
    <form @submit.prevent="login()">
      <input placeholder="email" v-model="email">
      <input placeholder="password" v-model="password">
      <input type="submit" value="login">
    </form>
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
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => this.$router.push("/"));
    }
  }
};
</script>
