<script setup>
  //basic validation
  // const props = defineProps({
  //   fullname: String,
  //   age: Number,
  // })

  //complex validation
  const props = defineProps({
    fullname:{
      type: String,
      required: true,
      default: 'Mang Kepweng',
    },
    age:{
      type: Number,
      default: 0,
    },
  })
</script>

<template>
    <h1>Hello {{ props.fullname }}</h1>
    <h1>Age: {{ props.age }}</h1>
</template>

