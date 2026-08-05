<script setup>
// Header and Footer are auto-imported from components/
useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo.png' }
  ]
})
</script>

<template>
  <div id="app-layout" class="flex flex-col min-h-screen overflow-x-hidden w-full">
    <Header/>
    <main class="flex-1 pt-6 pb-6 lg:pt-24 lg:pb-12 container mx-auto px-4 sm:px-8 lg:px-32 w-full max-w-full">
      <NuxtPage />
    </main>
    <Footer/>
  </div>
</template>

<style scoped>
</style>
