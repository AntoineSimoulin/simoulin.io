<script>
export default {
  computed: {
    isTeachingActive() {
      const teachingPaths = ['/teaching', '/nlp-101', '/nlp-102', '/ml-101', '/coding-101'];
      return teachingPaths.includes(this.$route.path);
    }
  }
}
</script>

<template>
  <header class="fixed z-50 left-1/2 -translate-x-1/2 bottom-3 sm:bottom-4 lg:bottom-auto lg:top-4 w-max max-w-[calc(100vw-1rem)] px-1 sm:px-2">
    <nav class="flex items-center justify-center gap-1 sm:gap-2 lg:gap-3 p-1.5 px-5 sm:px-7 lg:px-8 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border-2 border-black shadow-[3.5px_3.5px_0px_#000] text-xs lg:text-sm font-extrabold tracking-wide">
      <NuxtLink
        to="/"
        class="px-2.5 sm:px-3 lg:px-4 py-1.5 rounded-full border-2 border-transparent transition-all duration-150 hover:bg-yellow-100 text-black text-center whitespace-nowrap"
        exact-active-class="!bg-yellow-300 text-black !border-black shadow-[1.5px_1.5px_0px_#000]"
      >
        About
      </NuxtLink>
      <NuxtLink
        to="/projects"
        class="px-2.5 sm:px-3 lg:px-4 py-1.5 rounded-full border-2 border-transparent transition-all duration-150 hover:bg-blue-100 text-black text-center whitespace-nowrap"
        active-class="!bg-blue-300 text-black !border-black shadow-[1.5px_1.5px_0px_#000]"
      >
        Projects
      </NuxtLink>
      <NuxtLink
        to="/communications"
        class="px-2.5 sm:px-3 lg:px-4 py-1.5 rounded-full border-2 border-transparent transition-all duration-150 hover:bg-pink-100 text-black text-center whitespace-nowrap"
        active-class="!bg-pink-300 text-black !border-black shadow-[1.5px_1.5px_0px_#000]"
      >
        <span class="inline lg:hidden">Comms</span>
        <span class="hidden lg:inline">Communications</span>
      </NuxtLink>
      <NuxtLink
        to="/teaching"
        :class="['px-2.5 sm:px-3 lg:px-4 py-1.5 rounded-full border-2 border-transparent transition-all duration-150 hover:bg-emerald-100 text-black text-center whitespace-nowrap', isTeachingActive ? '!bg-emerald-300 text-black !border-black shadow-[1.5px_1.5px_0px_#000]' : '']"
      >
        Teaching
      </NuxtLink>
      <NuxtLink
        to="/blog"
        class="px-2.5 sm:px-3 lg:px-4 py-1.5 rounded-full border-2 border-transparent transition-all duration-150 hover:bg-purple-100 text-black text-center whitespace-nowrap"
        active-class="!bg-purple-300 text-black !border-black shadow-[1.5px_1.5px_0px_#000]"
      >
        Blog
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
/* Scoped styles if needed */
</style>