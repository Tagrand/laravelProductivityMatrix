<template>
  <div>
    <form @submit.prevent="saveJob()">
      <input v-model="job.name" type="text"/>
      <input v-model="job.importance" type="number"/>
      <input v-model="job.urgency" type="number"/>
      <input v-model="job.description" type="text" placeholder="description"/>
      <input type="submit" value="save"/>
    </form>
    <button @click="close()" class="bg-white">Close</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        job: {},
      };
    },

    created() {
      this.job = JSON.parse(JSON.stringify(this.activeJob));

      this.job.importance = this.$store.state.newJob.importance || this.job.importance;
      this.job.urgency = this.$store.state.newJob.urgency || this.job.urgency;
    },

    computed: {
      activeJob() {
        return this.$store.state.activeJob;
      },

      matrixImportance() {
        return this.$store.state.newJob.importance;
      },

      matrixUrgency() {
        return this.$store.state.newJob.urgency;
      }
    },

    watch: {
      matrixImportance() {
        this.job.importance = this.matrixImportance;
      },

      matrixUrgency() {
        this.job.urgency = this.matrixUrgency;
      }
    },

    methods: {
      close() {
        return this.$store.dispatch("hideEditJob");
      },

      saveJob() {
        return this.$store.dispatch("updateJob", {
          name: this.job.name,
          importance: this.job.importance,
          urgency: this.job.urgency,
          description: this.job.description,
        });
      },
    }
  }
</script>
