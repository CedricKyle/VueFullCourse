<script setup>
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    results: Array,
    isLoading: Boolean,
    error: String,
  })

  const emit = defineEmits(['click-result'])

  const handleClick = (title) => {
    emit('click-result', title)
  }
</script>

<template>

    <div class="results-container flex flex-col items-center mt-6 w-full">
      <div v-if="props.isLoading" class="loading-page">
        <span class="loading loading-spinner loading-xs"></span>
      </div>
      <p v-if="props.error">{{ error }}</p>

      <div v-if="props.results.length" class="">
        <div v-for="result in props.results" :key="result.pageid" @click="handleClick(result.title)" 
        class="result-for-loop m-5 text-justify">
          <h2 class="title text-2xl">
            <a :href="`https://en.wikipedia.org/?curid=${result.pageid}`" target="_blank" rel="noopener">
              {{ result.title }}
            </a>
          </h2>
            <a class="text-blue-400 hover:underline" 
            :href="`https://en.wikipedia.org/?curid=${result.pageid}`" target="_blank" rel="noopener">
              {{ `https://en.wikipedia.org/?curid=${result.pageid}` }}
            </a>
            <p v-html="result.snippet"></p>
        </div>
      </div>
    </div>

</template>