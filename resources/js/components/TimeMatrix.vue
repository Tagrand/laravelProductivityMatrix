<template>
  <div class="h-64 w-64 flex flex-wrap">
    <div class="bg-teal-brand h-32 w-32"></div>
    <div class="bg-green-brand h-32 w-32"></div>
    <div class="bg-red-brand h-32 w-32"></div>
    <div class="bg-yellow-brand h-32 w-32"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },

    created() {
      console.log(this.$store.state.change);
    },
  };
</script>
