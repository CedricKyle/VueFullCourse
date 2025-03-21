<script setup>
import { ref } from 'vue';
  let userInfo = ref({name: 'ced', location:['Abra', 'Manabo'], isMarried: false})
</script>

<template>
  <h1>name: {{ userInfo.name }}</h1>
  <h1>location: {{ userInfo.location }}</h1>
  <h1>isMarried: {{ userInfo.isMarried }}</h1>

  <div class="flex  gap-2">
    <button @click="userInfo.name='kyle'" class="border p-2">Change name</button><br>
    <button @click="userInfo.location = ['San Juan', 'Dalimuno']" class="border p-2">Change location</button><br>
    <button @click="userInfo.isMarried = true" class="border p-2">Change status</button><br>
  </div>

</template>


<!-- sample 2-->
<!-- <script setup>
import { reactive, ref } from 'vue'
let friends = reactive([ref('Jordan'), ref('Alex'), ref('HuXn')])
</script>

<template>
  <h1>1. {{ friends[0] }}</h1>
  <h1>2. {{ friends[1] }}</h1>
  <h1>3. {{ friends[2] }}</h1>

  <button @click="friends[0] = '🤝'">Hand Shake</button>
  <button @click="friends[1] = '🤝'">Hand Shake</button>
  <button @click="friends[2] = '🤝'">Hand Shake</button>
</template> -->