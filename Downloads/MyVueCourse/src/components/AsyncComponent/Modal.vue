<script setup>
import {onMounted} from 'vue'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['update:isOpen'])

onMounted(()=> {
  const dialog = document.getElementById('my_modal_1')
  if(props.isOpen){
    dialog.showModal()
  }

  dialog.addEventListener('close', () => {
  emit('update:isOpen', false)
  })
})
</script>

<template>
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Hello!</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
</template>













