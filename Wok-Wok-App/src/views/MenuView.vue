<template>
  <div class = "menu">

    <div class = "sideBar">
      <MenuSideBar></MenuSideBar>
    </div>
    
    <div class = "display">
      <MenuDisplay></MenuDisplay>
    </div>
    
    <div class = "orderList">
      <MenuOrderList></MenuOrderList>
    </div>

  </div>
</template>

<style scoped>
#menu{
  align-items: center;
  display: grid;
  grid-template-columns: auto;

}



</style>

<script setup lang="ts">

import MenuSideBar from '../components/MenuComponents/MenuSideBar.vue';
import MenuDisplay from '../components/MenuComponents/MenuDisplay.vue';
import MenuOrderList from '../components/MenuComponents/MenuOrderList.vue'

</script>