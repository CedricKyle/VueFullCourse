<script setup>
  import { ref } from 'vue'; 
  const isAwsome = ref(true)

  const password = ref('')

  const vShow = ref(true)

  const toggleShow = () => {
    vShow.value = !vShow.value
  }

</script>

<template>
  
  <button @click="isAwsome = !isAwsome" class="border p-1">Toggle</button>
  <h1 v-if="isAwsome">Vue is Awsome!!!</h1>
  <h1 v-else>Nagututom ako!!!</h1>
  <br><br>


  <div class="">
    <h1>Create Password</h1>
      <input type="text" v-model="password" placeholder="input password..." class="input-password border p-2">
      <p v-if="password.length >= 8">Strong password</p>
      <p v-else-if="password.length < 8 && password.length > 0">Weak password</p>
      <p v-else>Enter your password</p>
  </div>

  <br><br><br>

  <button @click="toggleShow">Show</button>
  <h1>Blog</h1>
  <p v-show="vShow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi necessitatibus, vero esse quo aperiam odit reiciendis sunt eaque recusandae!</p>

</template>