<script setup>
const props = defineProps({
  cardItems: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="grid grid-cols-1 justify-center items-center h-screen">
    <div v-for="(item, index) in cardItems" :key="index" 
    class="border-2 border-gray-300 rounded-md p-2 m-2 w-50">
      <p>Name: <span class="font-bold">{{ item.name }}</span></p>
      <p>Department: <span class="font-bold">{{ item.department }}</span></p>
      <p>Age: <span class="font-bold">{{ item.age }}</span></p>
      <p>Position: <span class="font-bold">{{ item.position }}</span></p>
      <button class="bg-red-500 text-white p-1 rounded-md cursor-pointer" @click="$emit('deleteItem', index)">Delete</button>
    </div>
  </div>
</template> 


<!--App.vue-->
<!-- <script setup>
import ListItems from './components/props&emit/ListItems.vue';
import { ref } from 'vue';

const cardItems = ref([
  {
    name:'Cedric',
    department:'IT',
    age:20,
    position:0
  },
  {
    name:'Kyle',
    department:'HR',
    age:25,
    position:1
  },
  {
    name:'John',
    department:'IT',
    age:20,
    position:2
  }
])

const deleteItem = (index) => {
  cardItems.value.splice(index, 1);
  
  //reset the position of the remaining items
  cardItems.value.forEach((ListItems, i) =>{
    ListItems.position = i;
  }) 

}
</script>

<template>
  <ListItems :cardItems="cardItems" @deleteItem="deleteItem" />
</template>  -->

