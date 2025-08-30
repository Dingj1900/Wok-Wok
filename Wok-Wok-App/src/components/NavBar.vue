<template>
<nav class = 'nav-bar'>
  <ul class = 'nav-list'>
    <li class ='nav-item'>Home</li>
    
    <li class = 'nav-item' v-on:click="toMenu">Menu</li>

  </ul>
  </div>
  

  <div class = 'login'>
    Login
  </div>
  </div>

</nav>
</template>

<style scoped>
  .nav-bar {
    width: 100%;
    height: 58px;
    background-color: lightsalmon;
    position: fixed;
    display: flex;
    align-items: center;
  }

  .nav-list{
    margin: 0%;
    padding: 0%;
    display: flex;
    list-style-type: none;
  }
  .nav-item{
    padding-left: 10%;
  }

  .login{
    padding-left: 10%;
  }
</style>

<script setup lang =ts>
import router from '../router';

toMenu(){
  this.$router.push('/menuPage');
}

</script>