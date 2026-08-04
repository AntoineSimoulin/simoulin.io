<script setup>
// No script needed for basic interaction if relying on CSS focus/hover for dropdowns in pure CSS,
// but for better mobile experience, we might want to keep some state or use the details/summary pattern for mobile menu.
// However, DaisyUI dropdown works well with :focus-within or details/summary.
// Let's use the details/summary pattern for mobile menu which is cleaner or just the standard dropdown.
// The existing code used a button toggle. DaisyUI dropdown is easier.
</script>

<template>
  <header>
    <div class="navbar bg-base-100/95 sticky top-0 z-50 backdrop-blur-sm container mx-auto px-8 lg:px-32">
      <div class="navbar-start">
        <!-- Mobile Dropdown -->
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NuxtLink to="/">About</NuxtLink></li>
            <li><NuxtLink to="/projects">Projects</NuxtLink></li>
            <li><NuxtLink to="/communications">Communications</NuxtLink></li>
            <li><NuxtLink to="/teaching">Teaching</NuxtLink></li>
            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          </ul>
        </div>
        <!-- Brand could go here if added later -->
      </div>
      
      <div class="navbar-center hidden lg:flex">
        <!-- Centered items if any -->
      </div>
      
      <div class="navbar-end hidden lg:flex">
         <ul class="menu menu-horizontal px-1 font-bold uppercase tracking-wider text-sm">
          <li><NuxtLink to="/">About</NuxtLink></li>
          <li><NuxtLink to="/projects">Projects</NuxtLink></li>
          <li><NuxtLink to="/communications">Communications</NuxtLink></li>
          <li><NuxtLink to="/teaching">Teaching</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* DaisyUI handles most styles. */
</style>