<script setup>
  import {ref, computed, reactive} from 'vue'

  const count = ref(5)

  const author = reactive({
    name: 'Cedric',
    books: [
      'Book 1: gin',
      'Book 2: beer'
    ]
  })

  const publisBookMessage = computed(() => author.books.length > 0 ? 'Yes' : 'No')

  // const squaredCounts = computed(() => {
  //   return count.value * count.value
  // })

  const squaredCounts = computed(() => count.value * count.value)

  const incrementCounts = () => {
    count.value++
  }
</script>

<template>
  <h1>Orginal Number: {{ count }}</h1>
  <h1>squaredCounts: {{ squaredCounts }}</h1>
  <button @click="incrementCounts">Increment</button>

  <br><br>
  <p>author: {{ author.name }}</p>
  <p>Has published books:</p>
  <span>{{ publisBookMessage }}</span>
</template>