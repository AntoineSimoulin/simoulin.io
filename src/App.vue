<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
  <Header/>

  <main>
    <RouterView />
  </main>

  <Footer/>
</template>

<style scoped>
main {
  flex: 1;
  padding-top: 50px;
}
</style>
