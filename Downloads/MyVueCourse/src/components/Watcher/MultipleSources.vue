<script setup>
import { ref, watch } from 'vue';

const count = ref(0)
const message = ref('Hello World')

watch([count, message], (newValues, oldValues) => {
  console.log('New Values:', newValues)
  console.log('Old Values:', oldValues)
})

</script>

<template>
  <p>Count: {{ count }}</p>
  <p>Message: {{ message }}</p>
  
  <button @click="count++" class="bg-blue-500 text-white p-2 rounded-md">Increment</button>
  <button @click="message = 'Hello Vue'" class="bg-red-500 text-white p-2 rounded-md">Change Message</button>
</template>

<!-- App.vue -->
<!-- <script setup>
import MultipleSources from './components/Watcher/MultipleSources.vue';
</script>

<template>
  <MultipleSources />
</template> -->