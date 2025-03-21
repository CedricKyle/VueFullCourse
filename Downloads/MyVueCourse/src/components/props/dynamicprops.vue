<script setup>
const props = defineProps(['firstname', 'lastname']);
</script>

<template>
  <h1>Hello {{ props.firstname }} {{ props.lastname }}</h1>
</template>
