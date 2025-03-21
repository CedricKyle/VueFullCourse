<script setup>
  import { ref, computed } from 'vue';

  const formData  = ref({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const showAlert = ref(false)
  
  const isUsernameValid = computed(() => formData.value.username.trim() !== '')
  const isEmailValid = computed(() => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.value.email))
  const isPasswordValid = computed(() => formData.value.password.length >= 8)
  const isConfirmPasswordValid = computed(() => formData.value.confirmPassword === formData.value.password)

  const isFormValid = computed(() => {
    return isUsernameValid.value && isEmailValid.value && isPasswordValid.value && isConfirmPasswordValid.value

  })

  const handleSubmit = () => {
    if(isFormValid.value){
      showAlert.value = true
      setTimeout(() => showAlert.value = false, 2000)
      console.log('Form Submitted: ', formData.value)
    }else{
      console.log('Form is invalid. Please check the form')
    }
  }

</script>

<template>
    <!--Alert Container-->
    <div
      v-if="showAlert"
      role="alert" class="alert alert-success w-50 h-auto flex items-center fixed top-4 right-4 ">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Account Created!</span>
    </div>

    <!-- Form Container-->
    <div class="flex flex-col justify-center items-center  min-h-screen">
      <form 
      class="border border-green-300 max-w-96   w-full p-6"
      @submit.prevent="handleSubmit">
        <div class="form-group mb-4 ">
          <label for="username">Userame:</label>
          <input 
          v-model="formData.username"
          type="text" id="username" placeholder="username" class="input w-full">
          <span class="text-red-500"
          v-if="!isUsernameValid">username is required</span>
        </div>

        <div class="form-group mb-4 ">
          <label for="email">Email:</label>
          <input 
          v-model="formData.email"
          type="email" id="email" placeholder="sample@gmail.com" class="input w-full">
          <span 
          class="text-red-500"
          v-if="!isEmailValid">enter invalid email</span>
        </div>

        <div class="form-group mb-4 ">
          <label for="username">Passoword:</label>
          <input 
          v-model="formData.password"
          type="password" id="password" placeholder="password" class="input w-full">
          <span 
          class="text-red-500"
          v-if="!isPasswordValid">atleast 8 characters</span>
        </div>

        <div class="form-group mb-4 ">
          <label for="confirm-password">Confirm Passoword:</label>
          <input 
          v-model="formData.confirmPassword"
          type="password" id="confirm-password" placeholder="password" class="input w-full">
          <span 
          class="text-red-500"
          v-if="!isConfirmPasswordValid">password did not match</span>
        </div>

        <button class="btn bg-green-400" type="submit" :disabled="!isFormValid">Submit</button>
      </form>
    </div>
</template>