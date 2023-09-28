<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
 
 
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Tienda</RouterLink>
        <RouterLink to="/car">Carrito</RouterLink>
      </nav>
      <RouterView />
    </div>
  

</template>

<style lang="scss">


</style>
