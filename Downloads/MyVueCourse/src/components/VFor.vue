<script setup>
  import { ref } from 'vue';

//   const games = ref({
//   id: 1,
//   title: 'Epic Adventure Game',
//   genre: ['Action', 'Adventure', 'RPG'],
//   platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
//   releaseDate: '2022-03-15',
//   developer: {
//     name: 'Awesome Game Studios',
//     location: 'San Francisco, CA',
//     teamSize: 50
//   },
//   ratings: {
//     metacritic: 90,
//     user: 4.8
//   },
//   features: {
//     singlePlayer: true,
//     multiplayer: true,
//     onlineCoop: true,
//     splitScreen: false
//   },
//   systemRequirements: {
//     minimum: {
//       os: 'Windows 10',
//       processor: 'Intel Core i5',
//       memory: '8 GB RAM',
//       graphics: 'NVIDIA GTX 970',
//       storage: '50 GB available space'
//     },
//     recommended: {
//       os: 'Windows 11',
//       processor: 'Intel Core i7',
//       memory: '16 GB RAM',
//       graphics: 'NVIDIA RTX 3080',
//       storage: '100 GB available space'
//     }
//   },
//   storyline: 'Embark on a thrilling adventure to save the world from impending doom!',
//   characters: ['Hero', 'Sidekick', 'Villain', 'NPCs'],
//   achievements: [
//     { id: 1, name: 'Master Explorer', description: 'Explore every corner of the game world' },
//     { id: 2, name: 'Legendary Warrior', description: 'Complete the game on the hardest difficulty' }
//   ]
// })

const complexGames = ref({
  game1: {
    title: 'Space Explorer',
    genre: 'Sci-Fi',
    platform: 'PC',
    releaseDate: '2023-05-20'
  },
  game2: {
    title: 'Fantasy Quest',
    genre: 'Fantasy',
    platform: 'PlayStation',
    releaseDate: '2023-07-10'
  },
  movie1: {
    title: 'Inception',
    director: 'Christopher Nolan',
    genre: 'Sci-Fi',
    releaseDate: '2010-07-16'
  },
  movie2: {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    genre: 'Drama',
    releaseDate: '1994-09-23'
  },
  book1: {
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    publicationYear: 1965
  },
  book2: {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    publicationYear: 1960
  }
})

</script>

<template>
  <!-- <ul v-for="(content, keys, index) in games" :key="index" in games >
    <li>{{ index }} - {{ keys }} - {{ content }}</li>
  </ul> -->
  <ul v-for="(value, index) in complexGames" v-bind:key="index">
    <!--Getting Value of from the Objects-->
    <li>{{ value }}</li>

    <!--Getting single value from the objects-->
    <li v-for="(s_value, i) in value" :key="i">{{ s_value }}</li>
  </ul>
  <br><br>
  <h1>Bonus baby!!!</h1>
  <u v-for="number in 5" :key="number">
    <li>{{ number }}</li>
  </u>
</template>
