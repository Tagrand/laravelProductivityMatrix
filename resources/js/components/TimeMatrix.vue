<template>
  <div class="relative">
    <div class="flex main flex-wrap mr-32">
      <div class="bg-teal-brand section"></div>
      <div class="bg-green-brand section"></div>
      <div class="bg-red-brand section"></div>
      <div class="bg-yellow-brand section"></div>
    </div>

    <div
      v-for="job in jobs"
      class="absolute test"
      :style="positionJob(job)"
      @mouseleave="setActiveJob({})"
      @mouseenter="setActiveJob(job)"
      :class="isActiveJob(job) ? 'bg-blue-light' : 'bg-black-brand'"
    ></div>
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
    return {};
  },

  computed: {
    jobs() {
      return this.$store.state.jobs;
    },

    activeJob() {
      return this.$store.state.activeJob;
    }
  },

  methods: {
    positionJob(job) {
      return {
        top: `${job.y * 0.3}px`,
        left: `${job.x * 0.3}px`
      };
    },

    setActiveJob(job) {
      this.$store.dispatch("updateActiveJob", job);
    },

    isActiveJob(job) {
      return job.id === this.activeJob.id;
    }
  }
};
</script>
