<template>
  <div>
    <form @submit.prevent="saveJob()">
      <input v-model="job.name" type="text"/>
      <input v-model="job.importance" type="number"/>
      <input v-model="job.urgency" type="number"/>
      <input v-model="job.description" type="number"/>
      <input type="submit" value="save"/>
    </form>
    <button @click="close()" class="bg-white">Close</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        job: {}
      };
    },

    computed: {
      activeJob() {
        return this.$store.state.activeJob;
      },
    },

    created() {
      this.job = JSON.parse(JSON.stringify(this.activeJob));
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
