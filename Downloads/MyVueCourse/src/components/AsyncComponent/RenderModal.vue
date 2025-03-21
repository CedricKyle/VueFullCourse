<script setup>
import { defineAsyncComponent, ref } from 'vue'
const Modal = defineAsyncComponent(() => import('./Modal.vue'))

const showModal = ref(false)
const toggleModal = () => showModal.value = !showModal.value
</script>

<template>
      <div class="tab flex justify-center items-center h-screen">
        <button class="btn" @click="toggleModal">open modal</button>
        <Modal v-if="showModal" v-model:isOpen="showModal" />
      </div>
</template>