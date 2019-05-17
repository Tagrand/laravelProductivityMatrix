<template>
  <div class="relative mr-48" @click="addJob" id="time-matrix">
    <div class="flex main flex-wrap">
      <div class="bg-teal-brand section"></div>
      <div class="bg-green-brand section"></div>
      <div class="bg-red-brand section"></div>
      <div class="bg-yellow-brand section"></div>
    </div>

    <div
      v-tippy
      @click.stop
      :title="job.name"
      class="absolute test"
      v-for="job in activeJobs"
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
      activeJobs() {
        return this.$store.getters["activeJobs"];
      },
      activeJob() {
        return this.$store.state.activeJob;
      }
    },

    methods: {
      positionJob(job) {
        return {
          top: `${300 - job.importance * 0.3}px`,
          left: `${job.urgency * 0.3}px`
        };
      },

      setActiveJob(job) {
        this.$store.dispatch("updateActiveJob", job);
      },

      isActiveJob(job) {
        return job.id === this.activeJob.id;
      },

      addJob(event) {
        const matrixPosition = document.getElementById('time-matrix').getBoundingClientRect();

        const urgency = Math.round((event.pageX - matrixPosition.x) / 0.3);
        const importance = Math.round((300 - (event.pageY - matrixPosition.y)) / 0.3);

        this.$store.dispatch("setNewJob", {
          importance: importance < 0 ? 0 : importance,
          urgency: urgency > 1000 ? 1000 : urgency
        });

        if (!this.$store.state.showEditJob) {
          this.$store.dispatch("showAddJob");
        }
      }
    }
  };
</script>
