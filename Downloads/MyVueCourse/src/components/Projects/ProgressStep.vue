<script setup>
  import { ref } from 'vue';

  const steps = ref(['step 1', 'step 2', 'step 3'])
  const currentStep = ref(0);

  const nextStep = () => {
    if(currentStep.value < steps.value.length - 1){
      currentStep.value++;
    }
  }

  const previousStep = () => {
    if(currentStep.value > 0){
      currentStep.value--;
    }
  }
</script>

<template>
  <div class="progress-container flex flex-col justify-center items-center min-h-screen w-full">
    <div class="flex justify-center m-10">
      <div v-if="currentStep === 0"
    class="overflow-x-auto border border-base-300">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>1</th>
          <td>Cedric Kyle</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
        <!-- row 2 -->
        <tr class="hover:bg-base-300">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        <!-- row 3 -->
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div v-if="currentStep === 1"
    class="overflow-x-auto border border-base-300">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Cedric Kyle</td>
          <td>Blue</td>
        </tr>
        <!-- row 2 -->
        <tr class="hover:bg-base-300">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        <!-- row 3 -->
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div v-if="currentStep === 2"
    class="overflow-x-auto border border-base-300">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
        <!-- row 2 -->
        <tr class="hover:bg-base-300">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        <!-- row 3 -->
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Cedric Kyle</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>

    <div class="flex flex-col justify-end fixed bottom-2">
      <div class="progress-bar flex rounded-2xl overflow-hidden border border-base-200 w-96">
      <div 
        class="flex-1 text-center p-1"
        v-for="(step, index) in steps" :key="index"
        :class="{'bg-green-500': index === currentStep}">
        {{ step }}
      </div>
    </div>
    <div class="controls flex justify-center p-4">
      <button @click="previousStep" :disabled="currentStep === 0" class="btn"><</button>
      <button @click="nextStep" :disabled="currentStep === steps.length - 1" class="btn">></button>
    </div>
    </div>
  </div>
</template>