<script setup>
  import { ref } from 'vue';

  const username = ref('')
  const userProfile = ref(null)
  const error = ref(null)

  const getUserProfile = async () => {
    try{
      const response = await fetch(`https://api.github.com/users/${username.value}`)
      const data = await response.json()

      if(!response.ok){
        userProfile.value = null;
        error.value = `HTTP error! status: ${response.status}`;
      }else{
        userProfile.value = data;
        error.value = null;
      }
    }catch(err){
      console.error('Error fetching data:', err);
      error.value = 'An error occurred while fetching data.'
    }
  }

</script>

<template>
  <div class="get-user-container flex justify-center items-center min-h-screen">
    <div class="profile-container border w-96 rounded-lg shadow-lg p-4">
        <h1 class="text-xl font-bold text-center mb-4">GitHub User Profile</h1>
          <div class=" flex gap-2">
            <input v-model="username"
            placeholder="Enter GitHub Username" class="input focus:outline-hidden w-full" @keyup.enter="getUserProfile">
            <button @click="getUserProfile" class="btn">search</button>
          </div>

      <div v-if="userProfile" class="body-container flex flex-col justify-center items-center">
        <div class="avatar avatar-online m-5">
          <div class="w-24 rounded-full flex justify-center ite">
            <img :src="userProfile.avatar_url"  alt="userProfile.login"/>
          </div>
        </div>
        <div class="user-details w-full gap-3 flex flex-col">
          <p><strong class="mr-2">Name:</strong>{{ userProfile.login }}</p>
          <p><strong class="mr-2">Location:</strong>{{ userProfile.location || 'N/A' }}</p>
          <p><strong class="mr-2">Followers:</strong>{{ userProfile.followers }}</p>
          <p><strong class="mr-2">Following:</strong>{{ userProfile.following }}</p>
          <p><strong class="mr-2">Public Repos:</strong>{{ userProfile.public_repos }}</p>
        </div>
      </div>

      <div v-if="error" class="error-message text-red-500 text-center m-3">{{ error }}</div>
    </div>
  </div>
</template>