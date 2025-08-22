<template>
  <div class = "menu">
    <div class = "sideBar">
      <MenuSideBar></MenuSideBar>
    </div>
    
    <div class = "display">
      <MenuDisplay></MenuDisplay>
    </div>
    

  </div>
</template>

<style scoped>
#menu{
  align-items: center;
  display: flex;

}

#menu-item{

}


</style>

<script setup lang="ts">

import MenuSideBar from '../components/MenuComponents/MenuSideBar.vue';
import MenuDisplay from '../components/MenuComponents/MenuDisplay.vue';

</script>