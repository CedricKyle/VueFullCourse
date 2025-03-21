<script setup>
  import { ref,watch, onMounted } from 'vue';
  import { SquareX, Plus } from 'lucide-vue-next';


  const newTask = ref('')
  const tasks = ref([])

  const addTask = () => {
    if(newTask.value.trim() !== ''){
      tasks.value.push({text: newTask.value, completed: false})
      newTask.value = ''
    }
  }
  
  const removeTask = (index) => {
    tasks.value.splice(index, 1)
  }

  const loadTasks = () => {
    const savedTasks = localStorage.getItem('tasks')
    if(savedTasks){
      tasks.value = JSON.parse(savedTasks)
    }
  }

  watch(tasks, (newTasks) =>{
      localStorage.setItem('tasks', JSON.stringify(newTasks))
    }, {deep: true})
    
  onMounted(loadTasks)
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <p class="m-2 text-3xl">Todo App</p>

    <div class="glass p-5 rounded-md">
      <div class="flex flex-row justify-center items-center">
        <input v-model="newTask" placeholder="Add task..." @keyup.enter="addTask" 
        class="border h-10 border-green-500 outline-none p-2 w-[340px] rounded-l-lg">
        <button @click="addTask" 
          class="p-2 h-10 bg-green-500 rounded-r-lg cursor-pointer">
          <Plus />
        </button>
      </div>

      <div class="flex flex-col items-center justify-center">
        <div v-for="(task, index) in tasks" :key="index"
        class="grid grid-cols-[15px_288px_30px] gap-4 p-2 border border-green-500 m-2 justify-center items-center rounded-lg">
          <input type="checkbox" v-model="task.completed" class="checkbox checkbox-xs"/>
          <div :class="{'line-through text-green-500': task.completed}">{{ task.text }}</div>
          <a @click="removeTask(index)" class=" flex items-center justify-center cursor-pointer"><SquareX /></a>
        </div>
      </div>
    </div>
    
  </div>
</template>