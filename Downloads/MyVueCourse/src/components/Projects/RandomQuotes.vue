<script setup>
  import { ref, onMounted } from 'vue';

  const quotes = ref([
    { text: "Ang alak hindi sagot sa problema... pero put*na, masarap siyang kasama habang iniisip mo yung sagot!", author: "Tandang Tagay" },
    { text: "Wag kang iiyak sa pag-ibig, iiyak ka lang pag tumapon yung alak!", author: "Shot Puno" },
    { text: "Kapag may alak, may balak. Pero pag wala nang alak, uwian na!", author: "Isang Baso Pa" },
    { text: "Hindi ako lasing... Nilalabanan ko lang yung gravity!", author: "Paa Ngupa" },
    { text: "Ang tunay na lalaki, hindi natutumba sa inuman… nadadapa lang ng madalas.", author: "Tagay Lord" },
    { text: "Ang pag-inom ay parang math… sa umpisa madali, pero pag tumagal, nagiging komplikado.", author: "Drunk Einstein" },
    { text: "Walang matinong lalake sa malakas na shot.", author: "Pusong Wasak" },
    { text: "Ang alak parang first love… mahirap kalimutan, masarap balikan.", author: "Ex Mong Malupet" },
    { text: "Walang taong pangit sa dilim ng inuman.", author: "Mister Walwal" },
    { text: "Kung mahal mo, ipaglaban mo… Kung mahal ka rin niya, ipupulutan ka niya.", author: "Hugot Barako" },
    { text: "Pag may alak, may talak. Pero pag naubos na ang alak, tulog na lang!", author: "Lasing na Tahimik" },
    { text: "Tandaan mo tol, di mo siya mahal… Lasing ka lang.", author: "Payo ng Tropa" },
    { text: "Huwag mong sisihin ang alak kung nagkaboyfriend ka ng pangit… Kasalanan mo 'yan!", author: "Queen of Shots" },
    { text: "Ang buhay parang inuman… minsan mapait, minsan matamis, pero pag sumobra ka, susuka ka rin.", author: "Old Drunk Philosopher" },
    { text: "Hindi ako mahina uminom, sadyang malakas lang yung alak!", author: "Nahilo sa Shot" }
  ])

const currentQoutes = ref({text:'', author: ''})

const getRandomQoutes = () => {
  const randomIndex = Math.floor(Math.random() * quotes.value.length)
  currentQoutes.value = quotes.value[randomIndex]
}

// onMounted(getRandomQoutes)
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="card  bg-base-100 w-150 shadow-sm border border-green-500">
      <div class="card-body items-center text-center">
        <p class="card-title text-3xl">Random Qoutes Generator</p>
        <p class="text-2xl ">{{ currentQoutes.text }}</p>
        <cite class="text-[20px] ">-{{ currentQoutes.author }}</cite>
        <div class="card-actions">
        <button class="btn bg-green-500" @click="getRandomQoutes">Generate</button>
        </div>
      </div>
    </div>
  </div>
</template>