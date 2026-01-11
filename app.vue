<script setup>
// Header and Footer are auto-imported from components/
useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo.png' }
  ]
})
</script>

<template>
  <div id="app-layout">
    <Header/>
    <main>
      <NuxtPage />
    </main>
    <Footer/>
  </div>
</template>

<style scoped>
#app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding-top: 50px;
}
</style>
