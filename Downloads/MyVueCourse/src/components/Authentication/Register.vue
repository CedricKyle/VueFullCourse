<script setup>
import Authentication from '@/services/Authentication';
import { ref } from 'vue';

const email = ref('')
const password = ref('')

const submit = async () => {
  const response = await Authentication.register({
    email: email.value,
    password: password.value,
  })
  console.log(response.data)
}
</script>

<template>
    <div class="card justify-center items-center h-screen">
      <fieldset class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
          <legend class="fieldset-legend">Register</legend>
          
          <label class="fieldset-label">Email</label>
          <input v-model="email" 
          type="email" class="input" placeholder="Email" />
          
          <label class="fieldset-label">Password</label>
          <input v-model="password"
          type="password" class="input" placeholder="Password" />
          
          <button @click="submit" 
          class="btn btn-neutral mt-4">Register</button>
        </fieldset>
    </div>
</template>