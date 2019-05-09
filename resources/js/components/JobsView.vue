<template>
  <div class="flex justify-between w-full">
    <job-list></job-list>
    <time-matrix></time-matrix>
  </div>
</template>
<script>
import JobList from "./JobList.vue";
import TimeMatrix from "./TimeMatrix.vue";

export default {
  components: {
    JobList,
    TimeMatrix
  }
};
</script>
