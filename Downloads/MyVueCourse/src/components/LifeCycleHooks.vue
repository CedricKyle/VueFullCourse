<script setup>
import { 
  ref, 
  onBeforeMount, 
  onMounted, 
  onBeforeUpdate, 
  onUpdated, 
  onBeforeUnmount, 
  onUnmounted} from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
}

onBeforeMount(() => {
  console.log('data has about to be mount');
})

onMounted(() => {
  console.log('data has been mounted');
})

onBeforeUpdate(() => {
  console.log('data has about to be updated');
})

onUpdated(() => {
  console.log('data has been updated');
})

onBeforeUnmount(() => {
  console.log('data has about to be unmounted');
})

onUnmounted(() => {
  console.log('data has been unmounted');
})
</script>

<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <button @click="increment" class="p-1 bg-blue-500 m-1 text-white">Increment</button>
  </div>
</template> 

<!--App.vue-->

<!-- <script setup>
import LifeCycleHooks from './components/LifeCycleHooks.vue';
import { ref } from 'vue';

const show = ref(true);

const remove = () => {
  show.value = false;
}
</script>

<template>
  <LifeCycleHooks v-if="show" />
  <button @click="remove" class="p-1 bg-red-500 m-1 text-white">Remove</button>
</template>  -->


