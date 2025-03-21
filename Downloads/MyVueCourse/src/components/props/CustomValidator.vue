<script setup>
  defineProps({
    firstName:{
      type: String,
      required: true,
      validator: (value) => value.length > 3
    },
    age:{
      type:Number,
      required: true,
      validator: (value) => value >= 20 && value <= 30 ? true : false
    },
    password:{
      type: String,
      required: true,
      validator: (value) => value.length >= 8 ? true : false
    }
  })
</script>

<template>
  <h1 class="text-red-500 font-bold">Custom Validator</h1>
  <p>name: {{ firstName }}</p>
  <p>age: {{ age }}</p>
  <p>password: {{ password }}</p>
</template>
