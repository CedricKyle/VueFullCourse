<script setup>
  // const fbPage = 'https://www.facebook.com/'
  // const altText = 'This is a random link hahaa'
  // const profilePic = 'https://scontent.fmnl19-1.fna.fbcdn.net/v/t39.30808-6/337513100_561190939327195_1557239027998840544_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFVCZtOzY5b4wBntIQ_Qso0izQV1wQvVreLNBXXBC9Wt2roKInjp-HcrAS4XQ5taxEqISb-PcSeZu6BNlpbGuGn&_nc_ohc=dIKsQxrx8mIQ7kNvgErzlKS&_nc_oc=Adjhe9HQ6buhDqYbw4uXVsYer8KBL3ilaVPRZQbAtUmgH_uAIOOztbymmeayBIAmGyg&_nc_zt=23&_nc_ht=scontent.fmnl19-1.fna&_nc_gid=AhQyeAsISZnpvDJEJeWhUCL&oh=00_AYC_1UCMLkKNjvv5ShRZKDZH71ju3ATqeQAcllhxK5DsVQ&oe=67CC91C5'
  // const altProfileText = 'This is my profile tol'
  // const width = 400
  // const height =  400

  const attribute = {
    fbPage : 'https://www.facebook.com/',
    altText : 'This is a random link hahaa',
  }

  //src is a must
  const dynamic = {
    src : 'https://scontent.fmnl19-1.fna.fbcdn.net/v/t39.30808-6/337513100_561190939327195_1557239027998840544_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFVCZtOzY5b4wBntIQ_Qso0izQV1wQvVreLNBXXBC9Wt2roKInjp-HcrAS4XQ5taxEqISb-PcSeZu6BNlpbGuGn&_nc_ohc=dIKsQxrx8mIQ7kNvgErzlKS&_nc_oc=Adjhe9HQ6buhDqYbw4uXVsYer8KBL3ilaVPRZQbAtUmgH_uAIOOztbymmeayBIAmGyg&_nc_zt=23&_nc_ht=scontent.fmnl19-1.fna&_nc_gid=AhQyeAsISZnpvDJEJeWhUCL&oh=00_AYC_1UCMLkKNjvv5ShRZKDZH71ju3ATqeQAcllhxK5DsVQ&oe=67CC91C5',
    width : 400,
    height :  400
  }
</script>

<template>
  <!-- <a v-bind:href="fbPage" :alt="altText">This is my Fb</a>
  <img :src="profilePic" v-bind:alt="altProfileText" :width="width" :height="height"> -->

  <a v-bind:href="attribute.fbPage">Click Me</a>
  <img :="dynamic">
</template>
