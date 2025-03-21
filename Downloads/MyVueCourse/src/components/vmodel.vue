<script setup>
  import { reactive } from 'vue';

  let formData = reactive(({username: '' , email: '', password: ''}))

  const sumbitForm = () => alert("Form Submitted") 
</script>

<template>
  <form v-on:submit.prevent="sumbitForm">
    <h1>Username: <input type="text" placeholder="Enter username..." v-model="formData.username" class="border-b p-1 outline-none"></h1>
    <h1>Email: <input type="email" placeholder="Enter email..." v-model="formData.email" class="border-b p-1 outline-none"></h1>
    <h1>Password: <input type="password" placeholder="Enter password..." v-model="formData.password" class="border-b p-1 outline-none"></h1>
    <button class="border p-0.5">Submit</button>
  </form>
  <br><br>
  <p>Username: {{ formData.username }}</p>
  <p>Email: {{ formData.email }}</p>
  <p>Password: {{ formData.password }}</p>
</template>