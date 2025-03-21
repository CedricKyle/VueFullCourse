import { createRouter, createWebHistory } from 'vue-router';
import Register from "@/components/Authentication/Register.vue";

const router = createRouter({
  history: createWebHistory(), // Add this line
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
});

export default router;
