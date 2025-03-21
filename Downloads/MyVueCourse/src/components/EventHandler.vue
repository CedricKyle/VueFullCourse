<!--Basic Event Handler-->
<!-- <script setup>
import { ref } from 'vue';
  const count = ref(0)

  const increment = () => count.value++
  const decrement = () => count.value--
</script>

<template>
  <h1>Count: {{ count }}</h1>
  <button v-on:click="count++" class="border p-2 m-1">increment</button>
  <button v-on:click="decrement()" class="border p-2 m-1">decrement</button>
</template> -->

<script setup>
import { ref } from 'vue';
  const title = 'Shopping List'

  const items = ref([
    {
      id: 1,
      label: 'Mcdo'
    }
  ])
  const newItem = ref('');
  
  function addItem(){
    items.value.push({id: items.value + 1, label: newItem.value})
    newItem.value = ''
  }

  // const param = (message) => alert(message)
  const param = function(message){
    alert(message)
  }
</script>

<template>
  <div class="border w-75 text-center">
    <h1>{{ title }}</h1>
    <form v-on:submit.prevent="addItem">
      <input type="text" placeholder="Enter list..." v-model="newItem" >
      <button>Add</button>
    </form>

    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.label }}
      </li>
    </ul>
  </div>

  <div class="">
    <button class="border p-2" @click="param('Helooooo')">Proceed</button>
  </div>
</template>

