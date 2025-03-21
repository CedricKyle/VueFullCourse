<script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  const jokes = ref(null)
  const loading = ref(false)

  const fetchJoke = async () => {
    loading.value = true;
    try{
      const response = await axios.get('http://localhost:3000/joke', {
        headers: {Accept: 'application/json'}
      })

      jokes.value = response.data.joke;
      loading.value = false;
    }catch(error){
      console.error(error);
      loading.value = false;
      alert('Failed to fetch joke');
    }
  }

</script>

<template>
 <div class="jokes-container flex flex-col gap-10 justify-center items-center min-h-screen bg-mint-500">
  <button @click="fetchJoke" class="btn">Get Jokes</button>
  <div v-if="loading">
    <span class="loading loading-dots loading-xs"></span>
  </div>
  <div class="">
    <p>{{ jokes }}</p>
  </div>
 </div>
</template>