<script setup>
import { ref } from 'vue';

  const accordions = ref([
  {
    title: "Ano ang Vue.js?",
    content: "Vue.js ay isang progressive framework para sa paggawa ng UI.",
    open: false
  },
  {
    title: "Ano ang Composition API?",
    content: "Ang Composition API ay isang paraan sa Vue na gumagamit ng functions imbes na Options API.",
    open: false
  },
  {
    title: "Ano ang Tailwind CSS?",
    content: "Ang Tailwind CSS ay isang utility-first CSS framework para sa mabilis na pag-design.",
    open: false
  }
])

  const toggleAccordions = (index) => {
    accordions.value = accordions.value.map((item, i) => ({
      ...item,
      open: i === index ? !item.open: false,
    }))
  }
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="flex flex-col justify-center items-center w-[50%]">
    <div v-for="(item, index) in accordions" :key="index" 
      class="collapse collapse-arrow border rounded-md my-2"
      :class="{'collapse-open': item.open}">
      
      <div class="collapse-title font-semibold" @click="toggleAccordions(index)">
        {{ item.title }}
      </div>
      
      <div v-show="item.open" class="collapse-content">
        {{ item.content }}
      </div>
    </div>
  </div>
  </div>

</template>

