<script setup lang = 'ts'>
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import menu from './assets/Appetizer.json';
 
onMounted(()=>{
  
  console.log(menu);
});

</script>

<template>
  <div id = "App">
    <NavBar></NavBar>
    <RouterView />

  </div>
</template>

<style scoped>

</style>
