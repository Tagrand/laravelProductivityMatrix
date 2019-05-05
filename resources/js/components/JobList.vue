<template>
  <div class="ml-32">
    <h1 class="text-white font-thin text-xl text-center">Next</h1>
    <div v-for="job in orderedJobs" class="mt-4 text-2xl">
      <span :class="matrixGroup(job)">{{ job.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    jobs() {
      return this.$store.state.jobs;
    },

    orderedJobs() {
      return this.jobs.sort(this.rankImportance);
    }
  },

  methods: {
    matrixGroup(job) {
      if (job.y > 500 && job.x > 500) {
        return "text-green-brand";
      }

      if (job.y > 500) {
        return "text-teal-brand";
      }

      if (job.x > 500) {
        return "text-yellow-brand";
      }

      return "text-red-brand";
    },

    rankImportance(job1, job2) {
      if (job1.y + job1.x > job2.y + job2.x) {
        return -1;
      }

      if (job1.y + job1.x < job2.y + job2.x) {
        return 1;
      }

      return 0;
    }
  }
};
</script>