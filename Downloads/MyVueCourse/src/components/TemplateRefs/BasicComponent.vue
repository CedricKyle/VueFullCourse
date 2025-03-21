<script setup>
  import { ref, onMounted } from 'vue';

  const inputRef = ref('')


  onMounted(() => {
    inputRef.value.focus()
  })
</script>

<template>
  <div>
    <input ref="inputRef"  placeholder="Enter your name"/>
  </div>
</template>