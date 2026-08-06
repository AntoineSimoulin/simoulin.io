<script>
import { formatMonth } from '@/utils/date.js';

export default {
  props: ['citation'],
  methods: {
    formatMonth
  }
}
</script>

<template>
  <div class="bg-white border-2 border-black hover:shadow-[3.5px_3.5px_0px_#000] hover:-translate-y-0.5 transition-all duration-200 rounded-2xl p-5 mb-5 text-black font-medium">
    
    <!-- Top Row: Venue Location Badge (Left) + Slides / PDF Link (Right) -->
    <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
      <!-- Venue / Location Highlight Mark -->
      <mark class="bg-pink-300 text-black font-black text-xs sm:text-sm px-3 py-1 border-2 border-black shadow-[1.5px_1.5px_0px_#000] rounded-xl inline-block -rotate-1">
        📍 {{ citation.fields.venue }}
      </mark>

      <!-- Slides / PDF Link (Top Right on desktop >= sm) -->
      <div class="hidden sm:flex flex-wrap items-center gap-2 ml-auto">
        <a v-if="'slides' in citation.fields" :href="citation.fields.slides" class="inline-flex items-center gap-1.5 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all" target="_blank">
          <i class="fas fa-file-alt text-black" aria-hidden="true"></i> Slides (PDF)
        </a>
        <a v-else-if="'pdf' in citation.fields" :href="citation.fields.pdf" class="inline-flex items-center gap-1.5 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all" target="_blank">
          <i class="fas fa-file-alt text-black" aria-hidden="true"></i> PDF
        </a>
        <a v-else-if="'url' in citation.fields" :href="citation.fields.url" class="inline-flex items-center gap-1.5 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all" target="_blank">
          <i class="fas fa-external-link-alt text-black" aria-hidden="true"></i> Link
        </a>
      </div>
    </div>

    <!-- Talk Title -->
    <div class="mb-2">
      <a v-if="'url' in citation.fields || 'slides' in citation.fields" :href="citation.fields.slides || citation.fields.url" class="font-black text-lg sm:text-xl text-black hover:text-blue-600 no-underline leading-snug" target="_blank">
        {{ citation.fields.title }}
      </a>
      <span v-else class="font-black text-lg sm:text-xl text-black leading-snug">
        {{ citation.fields.title }}
      </span>
    </div>

    <!-- Date below title -->
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="inline-block bg-yellow-300 text-black border-2 border-black px-2.5 py-0.5 rounded-lg text-xs font-black shadow-[1px_1px_0px_#000]">
        🗓️ {{ formatMonth(citation.fields.month) }} {{ citation.fields.year }}
      </span>
      <span v-if="citation.fields.address" class="text-xs font-bold text-black/70">
        • {{ citation.fields.address }}
      </span>
    </div>

    <!-- Slides / PDF Link (Mobile Only: flex sm:hidden below title & date) -->
    <div class="flex sm:hidden flex-wrap items-center gap-2 my-2.5">
      <a v-if="'slides' in citation.fields" :href="citation.fields.slides" class="inline-flex items-center gap-1.5 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all" target="_blank">
        <i class="fas fa-file-alt text-black" aria-hidden="true"></i> Slides (PDF)
      </a>
      <a v-else-if="'pdf' in citation.fields" :href="citation.fields.pdf" class="inline-flex items-center gap-1.5 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all" target="_blank">
        <i class="fas fa-file-alt text-black" aria-hidden="true"></i> PDF
      </a>
    </div>

    <!-- Abstract -->
    <p v-if="citation.fields.abstract" class="text-sm font-medium text-black/80 mt-2 leading-relaxed">
      {{ citation.fields.abstract }}
    </p>
  </div>
</template>