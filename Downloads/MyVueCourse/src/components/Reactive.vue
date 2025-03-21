<script setup>
  import { reactive } from 'vue'; 
  // let initials = reactive({count: 0})

  let letInitials = reactive({value: {counts: 0}, users:['Ced', 'Maeyyy']})

  const changeUser = () => {
    letInitials.users[0] = 'Kyle'
  }
</script>

<template>
  <!-- <h1>Count: {{ initials.count }}</h1>
  <button @click="initials.count++">increment</button> -->

  <h1>Count: {{ letInitials.value.counts }}</h1><br>
  <h1>Users: {{ letInitials.users }}</h1>
  <button @click="letInitials.value.counts+=10" class="border p-1 m-1">Add 10</button>
  <button @click="changeUser" class="border p-1 m-1">Change User</button>
  <button @click="letInitials.users.push('Ming')" class="border p-1 m-1">Add User</button>
</template>