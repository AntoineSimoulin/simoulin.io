<script setup lang="ts">
import { computed, unref } from 'vue'
import { useSlideContext } from '@slidev/client'
import { useSlideNumbering } from '../logic/titles'

const { $page } = useSlideContext()
const { getSlideInfo } = useSlideNumbering()
const info = computed(() => getSlideInfo(unref($page) || 1))
</script>

<template>
  <div class="slidev-layout center section w-full h-full flex flex-col justify-center items-center p-8 bg-white" :style="{ '--chapter-no': info.chapter, '--slide-no': info.relativeSlide }">
    <!-- Slightly Tilted Pop Colored Box for Section Title -->
    <div class="inline-block bg-yellow-300 border-3 sm:border-4 border-black shadow-[6px_6px_0px_#000] rounded-2xl px-8 py-6 sm:px-12 sm:py-8 -rotate-1.5 transition-transform duration-300 max-w-3xl text-center">
      <div class="font-black text-2xl sm:text-4xl md:text-5xl leading-tight text-black tracking-tight">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.slidev-layout.center h1,
.slidev-layout.center h2,
.slidev-layout.center h3,
.slidev-layout.section h1,
.slidev-layout.section h2,
.slidev-layout.section h3 {
  font-family: 'Urbanist', sans-serif !important;
  font-weight: 900 !important;
  color: #000000 !important;
  margin: 0 !important;
  padding: 0 !important;
  font-size: inherit !important;
  line-height: inherit !important;
}

.slidev-layout.center h1::before,
.slidev-layout.center h2::before,
.slidev-layout.section h1::before,
.slidev-layout.section h2::before {
  content: none !important;
}
</style>
