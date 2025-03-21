<script setup>
import { ref } from 'vue';
//Custom directives kapag may DOM manipulations, animations, o behavior na reusable
 const textColor = ref('text-green-500')

 const updateTextColor = () =>{
  textColor.value = textColor.value === 'text-green-500' ? 'text-red-500' : 'text-green-500'
 }

 //This is Local Custom Directives
 const vDivEdit = {
  mounted: (element) => {
    element.style.backgroundColor = 'gray'
    element.style.padding = '10px'
    element.style.borderRadius = '5px'
    element.style.margin = '20px'
  }
 }
                       
</script>

<template>
  <div class="tab flex flex-col justify-center items-center min-h-screen">
    <div class="m-3">
      <h1>This is Global Custom Directives</h1>
    </div>
    <div class="">
      <h1 v-bounce class="m-2" :class="textColor">Bounce Ako tol!</h1>
      <button v-bounce @click="updateTextColor"
      class="btn btn-primary">Bounce din ako tol!</button>
    </div>

    <div v-div-edit>
      <h1>This is Local Custom Directives</h1>
    </div>
  </div>


</template>