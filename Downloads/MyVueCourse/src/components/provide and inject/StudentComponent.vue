<script setup>
import { inject } from 'vue';

const studentInfo = inject('studentInfo');
</script>

<template>
  <div class="border-2 border-gray-300 rounded-md p-2 m-2 w-50">
    <h1>Student Information</h1>
    <p>Name: {{ studentInfo.name }}</p>
    <p>Age: {{ studentInfo.age }}</p>
    <p>Course: {{ studentInfo.course }}</p>
  </div>

</template> 