<template>
  <div class="ml-48 self-center" style="width: 500px">
    <addJob v-if="showAddJob"></addJob>
    <div class="mt-4 text-2xl" v-for="job in topFiveJobs">
      <span
        :class="nameStyle(job)"
        @mouseleave="setActiveJob({})"
        @mouseenter="setActiveJob(job)"
      >{{ formatName(job.name) }}</span>
    </div>
    <div class="text-white mt-4 cursor-pointer text-2xl" @click="addJob()">+</div>
  </div>
</template>

<script>
import AddJob from './AddJob.vue';

export default {

 components: {
   AddJob,
 },

  data() {
    return {
      showAddJob: true,
    };
  },

  created() {
    this.$store.dispatch("getJobs");
  },

  computed: {
    jobs() {
      return this.$store.state.jobs;
    },

    activeJob() {
      return this.$store.state.activeJob;
    },

    topFiveJobs() {
      return this.jobs.sort(this.rankImportance).slice(0, 5);
    }
  },

  methods: {
    nameStyle(job) {
      return this.matrixGroupStyling(job) + " " + this.activeJobStyling(job);
    },

    matrixGroupStyling(job) {
      if (job.importance > 500 && job.urgency > 500) {
        return "text-green-brand";
      }

      if (job.importance > 500) {
        return "text-teal-brand";
      }

      if (job.urgency > 500) {
        return "text-yellow-brand";
      }

      return "text-red-brand";
    },

    activeJobStyling(job) {
      return this.activeJob.id === job.id ? "text-bold text-3xl" : "";
    },

    rankImportance(job1, job2) {
      if (job1.importance + job1.urgency < job2.importance + job2.urgency) {
        return 1;
      }

      if (job1.importance + job1.urgency > job2.importance + job2.urgency) {
        return -1;
      }

      return 0;
    },

    formatName(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },

    setActiveJob(job) {
      this.$store.dispatch("updateActiveJob", job);
    },

    isActiveJob(job) {
      return job.id === this.activeJob.id;
    },

    addJob() {
       return this.showAddJob = true;
    }
  }
};
</script>