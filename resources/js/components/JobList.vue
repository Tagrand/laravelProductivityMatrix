<template>
  <div class="ml-32 self-center">
    <div v-for="job in topFiveJobs" class="mt-4 text-2xl">
      <span :class="matrixGroup(job)">{{ formatName(job.name) }}</span>
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

    topFiveJobs() {
      return this.jobs.sort(this.rankImportance).slice(0,5);
    },
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
    },

    formatName(name) {
     return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
};
</script>