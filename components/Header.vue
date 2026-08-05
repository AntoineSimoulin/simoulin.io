<template>
  <header class="fixed z-50 left-1/2 -translate-x-1/2 bottom-4 lg:bottom-auto lg:top-4 w-[calc(100%-2rem)] max-w-lg lg:max-w-max px-2">
    <nav class="flex items-center justify-between lg:justify-center gap-1 sm:gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md border-2 border-black shadow-[3px_3px_0px_#000] text-xs sm:text-sm font-extrabold tracking-wide">
      <NuxtLink
        to="/"
        class="px-3.5 py-1.5 rounded-full transition-all duration-150 hover:bg-yellow-100 text-black"
        exact-active-class="bg-yellow-300 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000]"
      >
        About
      </NuxtLink>
      <NuxtLink
        to="/projects"
        class="px-3.5 py-1.5 rounded-full transition-all duration-150 hover:bg-blue-100 text-black"
        active-class="bg-blue-300 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000]"
      >
        Projects
      </NuxtLink>
      <NuxtLink
        to="/communications"
        class="px-3.5 py-1.5 rounded-full transition-all duration-150 hover:bg-pink-100 text-black"
        active-class="bg-pink-300 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000]"
      >
        <span class="inline sm:hidden">Comms</span>
        <span class="hidden sm:inline">Communications</span>
      </NuxtLink>
      <NuxtLink
        to="/teaching"
        class="px-3.5 py-1.5 rounded-full transition-all duration-150 hover:bg-emerald-100 text-black"
        active-class="bg-emerald-300 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000]"
      >
        Teaching
      </NuxtLink>
      <NuxtLink
        to="/blog"
        class="px-3.5 py-1.5 rounded-full transition-all duration-150 hover:bg-purple-100 text-black"
        active-class="bg-purple-300 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000]"
      >
        Blog
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
/* Scoped styles if needed */
</style>