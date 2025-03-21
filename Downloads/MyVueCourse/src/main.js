
import { createApp } from 'vue'
import App from './App.vue'
import '../src/style.css'

const app = createApp(App);
//Custom Global Directives
app.directive('bounce', {
  mounted: (element) =>{
    element.style.transition = 'transform 0.3s ease-in-out'
    element.style.display = 'inline-block'

    setInterval(() => {
      element.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        element.style.transform = 'translateY(0)';
      }, 150)
    }, 1000)
  }
});

app.mount('#app')