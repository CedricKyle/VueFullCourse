<script setup>
  import { ref } from 'vue';


  const passwordLength = ref(12)
  const includeUppercase = ref(true)
  const includeNumbers = ref(true)
  const includeSymbols = ref(true)
  const generatedPassword = ref('')

  const generatePassword = () => {
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = includeUppercase.value ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    const numberChars = includeNumbers.value ? '0123456789' : '';
    const symbolChars = includeSymbols.value ? '!@#$%^&*()_+[]{}|;:,.<>?/~`' : '';

    const allChars = lowerChars + upperChars + numberChars + symbolChars;

    let password = '';

    for(let i = 0; i < passwordLength.value; i++){
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    generatedPassword.value = password;
  }
</script>

<template>
  <div class="password-generator-container
    flex flex-col justify-center items-center min-h-screen">
    <div class="main-container flex min-h-[350px] w-full justify-center items-center p-10">
      <div class="border w-[450px] card p-10">
      <h1 class="text-lg font-bold pb-10 text-center ">Password Generator</h1>
        <div class="flex flex-col gap-2">
          <label for="">Password Length:</label>
          <input class="input w-full"
          type="number" v-model="passwordLength" min="4" max="32">
        </div>
        <div class="flex justify-between mt-3 mb-3 w-60">
          <label>Include Uppercase:</label>
          <input class="checkbox" 
          type="checkbox" v-model="includeUppercase">
        </div>
        <div class="flex justify-between  mb-3 w-60">
          <label for="">Include Symbols:</label>
          <input class="checkbox" 
          type="checkbox" v-model="includeSymbols">
        </div>
        <div class="flex justify-between  mb-3 w-60">
          <label for="">Include Number:</label>
          <input class="checkbox" 
          type="checkbox" v-model="includeNumbers">
        </div>
      <br>
      <button class="btn"
      @click="generatePassword">Generate Password</button>

      <div v-if="generatedPassword" class="generated-password-container p-">
        <strong>Generated Password:</strong>
        <span class="ml-3 underline">{{ generatedPassword }}</span>
      </div>
      </div>
    </div>
  </div>
</template>