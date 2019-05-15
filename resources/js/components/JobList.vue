<template>
  <div class="ml-48 self-center" style="width: 500px">
    <addJob v-if="showAddJob"></addJob>
    <editJob v-else-if="showEditJob"></editJob>
    <div v-else>
      <div class="mt-4" v-for="job in topFiveJobs">
        <p
          @mouseleave="setActiveJob({})"
          @mouseenter="setActiveJob(job)"
        >
          <span class="text-2xl" :class="nameStyle(job)">{{ formatName(job.name) }}</span>
          <span @click="completeJob(job)" class="text-grey-lighter">complete</span>
          <span @click="skipJob(job)" class="text-grey-lighter">skip</span>
          <span @click="editJob" class="text-grey-lighter">edit</span>
        </p>
      </div>
      <div class="text-white mt-4 cursor-pointer text-2xl" @click="addJob()">+</div>
    </div>
  </div>
</template>

<script>
  import AddJob from './AddJob.vue';
  import EditJob from './EditJob.vue';

  export default {

    components: {
      AddJob,
      EditJob,
    },

    created() {
      this.$store.dispatch("getJobs");
    },

    computed: {
      activeJobs() {
        return this.$store.getters["activeJobs"];
      },

      activeJob() {
        return this.$store.state.activeJob;
      },

      topFiveJobs() {
        return this.activeJobs.sort(this.rankImportance).slice(0, 5);
      },

      showAddJob() {
        return this.$store.state.showAddJob;
      },

      showEditJob() {
        return this.$store.state.showEditJob;
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
        return this.$store.dispatch("showAddJob");
      },

      completeJob(job) {
        return this.$store.dispatch("completeJob", job);
      },

      skipJob(job) {
        return this.$store.dispatch("skipJob", job);
      },

      editJob(job) {
        this.setActiveJob(job);
        return this.$store.dispatch("showEditJob");
      }
    }
  };
</script>
