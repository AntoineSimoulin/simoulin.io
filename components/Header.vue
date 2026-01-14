<script setup>
const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header>
    <div class="fixed top-0 left-0 right-0 z-50 bg-[#f8f9fa]/95 backdrop-blur-sm">
      <nav class="container mx-auto px-8 lg:px-32 py-3 flex flex-wrap justify-between items-center">
        <button
          class="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none ml-auto"
          type="button"
          @click="toggleMenu"
          aria-label="Toggle navigation"
        >
          <span class="block w-6 h-0.5 bg-current mb-1"></span>
          <span class="block w-6 h-0.5 bg-current mb-1"></span>
          <span class="block w-6 h-0.5 bg-current"></span>
        </button>
        <div
          :class="[
            'w-full lg:flex lg:w-auto lg:items-center lg:ml-auto',
            isMenuOpen ? 'block' : 'hidden'
          ]"
          id="navbarNav"
        >
          <ul class="flex flex-col lg:flex-row lg:space-x-1 mt-4 lg:mt-0 font-bold tracking-wider text-sm uppercase">
            <li class="nav-item">
              <NuxtLink class="block py-2 px-2 text-gray-700 hover:text-gray-900 hover:bg-[#938b8b21] rounded transition-colors" to="/">About</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="block py-2 px-2 text-gray-700 hover:text-gray-900 hover:bg-[#938b8b21] rounded transition-colors" to="/projects">Projects</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="block py-2 px-2 text-gray-700 hover:text-gray-900 hover:bg-[#938b8b21] rounded transition-colors" to="/communications">Communications</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="block py-2 px-2 text-gray-700 hover:text-gray-900 hover:bg-[#938b8b21] rounded transition-colors" to="/teaching">Teaching</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="block py-2 px-2 text-gray-700 hover:text-gray-900 hover:bg-[#938b8b21] rounded transition-colors" to="/blog">Blog</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.router-link-active {
  color: #066ac9;
  background-color: rgba(6, 106, 201, 0.1);
}
@media (min-width: 1024px) {
  .router-link-active {
    background-color: transparent;
  }
}
</style>