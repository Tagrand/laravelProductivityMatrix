<template>
  <div>
    <button @click="close()" class="bg-white">Close</button>
  </div>
</template>

<script>
  export default {
    computed: {
      activeJob() {
        this.$store.state.activeJob;
      },
    },

    methods: {
      close() {
        return this.$store.dispatch("hideEditJob");
      },
    }
  }
</script>
