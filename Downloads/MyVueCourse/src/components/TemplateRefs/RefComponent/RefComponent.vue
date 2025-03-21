<script setup>
  import MyComponent from './MyComponent.vue';
  import { ref, onMounted } from 'vue';

  const myComponentRef = ref(null)

  onMounted(() => {
    console.log(myComponentRef.value)
  })
</script>

<template>
  <MyComponent ref="myComponentRef" />
</template>


<!--App.vue-->
<!-- <script setup>
  import RefComponent from '../src/components/TemplateRefs/RefComponent/RefComponent.vue';
</script>

<template>
  <BasicComponent />
  <RefComponent />
</template> -->