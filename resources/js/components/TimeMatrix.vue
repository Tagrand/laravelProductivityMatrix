<template>
  <div class="relative">
    <div class="flex main flex-wrap mr-32">
      <div class="bg-teal-brand section"></div>
      <div class="bg-green-brand section"></div>
      <div class="bg-red-brand section"></div>
      <div class="bg-yellow-brand section"></div>
    </div>

    <div v-for="job in jobs" class="absolute bg-black-brand test" :style="positionJob(job)"></div>
  </div>
</template>

<style scoped>
.test {
  width: 10px;
  height: 10px;
}

.main {
  width: 310px;
  height: 310px;
}

.section {
  width: 155px;
  height: 155px;
}
</style>

<script>
export default {
  data() {
    return {
      activeJob: {}
    };
  },

  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },

  methods: {
    positionJob(job) {
      return {
        top: `${job.y * 0.3}px`,
        left: `${job.x * 0.3}px`
      };
    }
  }
};
</script>
