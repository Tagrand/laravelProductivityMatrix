<template>
  <form @submit.prevent="createJob()" class="flex flex-col">
    <input type="text" placeholder="name" v-model="name">
    <input type="number" v-model="importance">
    <input type="number" v-model="urgency">
    <input type="text" placeholder="description (optional)" v-model="description">
    <input type="submit" value="addJob">
    <button @click.prevent="close()" class="bg-white">Close</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        importance: 0,
        urgency: 0,
        description: '',
      }
    },

    created() {
      this.importance = this.$store.state.newJob.importance || 0;
      this.urgency = this.$store.state.newJob.urgency || 0;
    },

    watch: {
      matrixImportance() {
        this.importance = this.matrixImportance || 0;
      },

      matrixUrgency() {
        this.urgency = this.matrixUrgency || 0;
      }
    },

    computed: {
       matrixImportance() {
         return this.$store.state.newJob.importance;
       },

       matrixUrgency() {
         return this.$store.state.newJob.urgency;
       }
    },

    methods: {
      createJob() {
        this.$store.dispatch("createJob", {
          name: this.name,
          importance: this.importance,
          urgency: this.urgency,
          description: this.description,
        });
      },

      close() {
        this.$store.dispatch("hideAddJob");
      }
    }
  };
</script>

