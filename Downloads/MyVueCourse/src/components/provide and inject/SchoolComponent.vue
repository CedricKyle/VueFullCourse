<script setup>
import StudentComponent from './StudentComponent.vue';
import { inject } from 'vue';

const schoolInfo = inject('schoolInfo');
const games = inject('games');
</script>

<template>
  <StudentComponent />
  <hr>

  <div>
    <h1 class="text-2xl font-bold">School Information [Array]</h1>
    <p>{{ schoolInfo }}</p>
  </div>
  <hr>

  <div>
    <h1 class="text-2xl font-bold">Games [Array of Objects]</h1>
    <ul v-for="(game, i) in games" :key="i">
    <li>{{ game }}</li>
    </ul>
  </div>
  <hr>

  <div>
    <h1 class="text-2xl font-bold">Games [Array of Objects - Destructuring]</h1>
    <ul v-for="({title, genre, platform, releaseDate}, i) in games" :key="i">
      <li>Title: {{ title }}</li>
      <li>Genre: {{ genre }}</li>
      <li>Platform: {{ platform }}</li>
      <li>Release Date: {{ releaseDate }}</li>
      <hr>
    </ul>
  </div>
</template> 

<!--App.vue-->
<!-- <script setup>
import SchoolComponent from './components/provide and inject/SchoolComponent.vue';
import { provide } from 'vue';

const studentInfo = {
  name:'Cedric Kyle D. Belisario',
  age:20,
  course:'BSIT'
}

provide('schoolInfo', ['NCST', 'CIT-U', 'STI']) 

const games = [
  {
    title: 'Space Explorer',
    genre: 'Sci-Fi',
    platform: 'PC',
    releaseDate: '2023-05-20'
  },
  {
    title: 'Fantasy Quest',
    genre: 'Fantasy',
    platform: 'PlayStation',
    releaseDate: '2023-07-10'
  },
  {
    title: 'Inception',
    director: 'Christopher Nolan',
    genre: 'Sci-Fi',
    releaseDate: '2010-07-16'
  },
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    genre: 'Drama',
    releaseDate: '1994-09-23'
  }
]

provide('studentInfo', studentInfo);
provide('games', games);
</script>

<template>
  <SchoolComponent />
</template> 
-->


