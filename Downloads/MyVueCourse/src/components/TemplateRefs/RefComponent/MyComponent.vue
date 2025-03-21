<script setup>
  import { ref } from 'vue';

  const count = ref(10)
  const increment = () => count.value++
  const decrement = () => count.value--

  defineExpose({
    count,
    increment,
    decrement
  })
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>