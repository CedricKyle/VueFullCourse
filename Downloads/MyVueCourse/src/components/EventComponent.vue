<script setup>
import { ref } from 'vue';

const emit = defineEmits(['increaseBy', 'decreaseBy', 'submit-form']);

const username = ref('');
const email = ref('');
const password = ref('');

const handleSubmit = (username, email, password) => {
  emit('submit-form', username, email, password);
}
</script>

<template>
    <!--Sample One-->
    <button @click="$emit('increaseBy')" class="p-1 border m-1">+</button>
    <button @click="$emit('decreaseBy')" class="p-1 border m-1">-</button>

    <!--Sample Two-->
    <form @submit.prevent="handleSubmit(username, email, password)"> 
      <input type="text" placeholder="Username" v-model="username" class="p-1 border m-1">
      <input type="email" placeholder="Email" v-model="email" class="p-1 border m-1">
      <input type="password" placeholder="Password" v-model="password" class="p-1 border m-1">
      <button type="submit" class="p-1 border m-1">Submit</button>
    </form>
</template>


<!-- Vue.app-->
<!-- <script setup>
import EventComponent from './components/EventComponent.vue';
import { ref } from 'vue';

const count = ref(0);

const handleSubmit = (username, email, password) => {
  console.log('username: ', username);
  console.log('email: ', email);
  console.log('password: ', password);
}
</script> -->

<!-- <template>
  
  <p>Count: {{ count }}</p>
  <EventComponent @increase-by="count++" @decrease-by="count--" @submit-form="handleSubmit" />
</template>  -->