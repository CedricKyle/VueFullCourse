<script setup>
import {ref, watch} from 'vue'

const count = ref(0)
const message = ref('Hello, World!')

watch(count, (newCount, oldCount) => {
  console.log('Count changed from:', oldCount, 'to:', newCount)
})

watch(message, (newMessage, oldMessage) => {
  console.log('Message changed from:', oldMessage, 'to:', newMessage)
})

const changeMessage = () => {
  message.value = 'Hello, Vue!'
}

</script>

<template>
  <p>Count: {{ count }}</p>
  <p >Message: {{ message }}</p>
  <button @click="count++" class="bg-blue-500 text-white p-2">Increment</button>
  <button @click="changeMessage" class="bg-red-500 text-white p-2">Change Message</button>
</template>