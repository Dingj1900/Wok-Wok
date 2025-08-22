<template>
<nav class = 'nav-bar'>
  <ul class = 'nav-list'>
    <li class ='nav-item'>Home</li>
    
    <li class = 'nav-item'>Menu</li>

  </ul>

  <div class = 'login'>
    Login
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

</script>