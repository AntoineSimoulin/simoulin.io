<script setup>
// Header and Footer are auto-imported from components/
useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo.png' }
  ]
})
</script>

<template>
  <div id="app-layout" class="flex flex-col min-h-screen">
    <Header/>
    <main class="flex-1 pt-16">
      <NuxtPage />
    </main>
    <Footer/>
  </div>
</template>

<style scoped>
</style>
