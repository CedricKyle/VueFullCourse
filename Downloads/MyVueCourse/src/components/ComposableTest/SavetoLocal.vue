<script setup>
import { useSavetoLocal } from '@/composables/useSavetoLocal';
import { ref } from 'vue';

const { data} = useSavetoLocal('message', 'Hello from Composable, Ako ay isang hamak na default')

const inputValue = ref('');
const showAlert = ref(false)

const updateMessage = () => {
  data.value = inputValue.value

  showAlert.value = true;

  setTimeout(() =>{
  showAlert.value = false;
}, 2000);
}

</script>

<template>
  <div class="tab flex  flex-col justify-center items-center min-h-screen">
    <div class="card bg-base-100 w-96 shadow-sm border-white border p-3">
      <p>Stored Message: {{ data }}</p>
      <div class="flex flex-row justify-center items-center">
        <input v-model="inputValue" placeholder="Enter Message..." class="input" />
        <button @click="updateMessage" class="btn m-2">Update</button>
      </div>
    </div>

    <div v-if="showAlert" role="alert" class="alert alert-success m-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Message Updated: {{ data }}</span>
    </div>
  </div>




</template>