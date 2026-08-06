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
    
    <!-- Top Row: Title + Action Buttons -->
    <div class="flex flex-wrap items-center justify-between gap-3 mb-2.5">
      <!-- Talk Title -->
      <a v-if="citation.fields?.slides || citation.fields?.url" :href="citation.fields?.slides || citation.fields?.url" class="font-black text-lg sm:text-xl text-black hover:text-blue-600 no-underline leading-snug flex-1 min-w-[200px]" target="_blank">
        {{ citation.fields?.title }}
      </a>
      <span v-else class="font-black text-lg sm:text-xl text-black leading-snug flex-1 min-w-[200px]">
        {{ citation.fields?.title }}
      </span>

      <!-- Action Buttons -->
      <div class="flex flex-wrap items-center gap-2 shrink-0">
        <a v-if="citation.fields?.slides" :href="citation.fields.slides" class="inline-flex items-center gap-1.5 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1.5 rounded-xl text-xs font-extrabold no-underline transition-all" target="_blank">
          <i class="fas fa-desktop text-black" aria-hidden="true"></i> Slides
        </a>
        <a v-if="citation.fields?.pdf" :href="citation.fields.pdf" class="inline-flex items-center gap-1.5 bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1.5 rounded-xl text-xs font-extrabold no-underline transition-all" target="_blank">
          <i class="fas fa-file-pdf text-black" aria-hidden="true"></i> PDF
        </a>
        <a v-if="!citation.fields?.slides && !citation.fields?.pdf && citation.fields?.url" :href="citation.fields.url" class="inline-flex items-center gap-1.5 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1.5 rounded-xl text-xs font-extrabold no-underline transition-all" target="_blank">
          <i class="fas fa-external-link-alt text-black" aria-hidden="true"></i> Link
        </a>
      </div>
    </div>

    <!-- Date & Location below title -->
    <div class="flex flex-wrap items-center gap-2.5 my-2.5">
      <span v-if="citation.fields?.year" class="inline-flex items-center gap-1.5 bg-yellow-200 text-black border-2 border-black shadow-[1px_1px_0px_#000] px-2.5 py-1 rounded-lg text-xs font-black">
        <i class="fa-regular fa-calendar text-black"></i>
        <span>{{ formatMonth(citation.fields?.month) }} {{ citation.fields?.year }}</span>
      </span>

      <span v-if="citation.fields?.venue || citation.fields?.address" class="inline-flex items-center gap-1.5 bg-pink-200 text-black border-2 border-black shadow-[1px_1px_0px_#000] px-2.5 py-1 rounded-lg text-xs font-black">
        <i class="fa-solid fa-location-dot text-black"></i>
        <span>{{ citation.fields?.venue }}{{ citation.fields?.address ? `, ${citation.fields?.address}` : '' }}</span>
      </span>
    </div>

    <!-- Abstract -->
    <p v-if="citation.fields?.abstract" class="text-sm font-medium text-black/80 mt-2 leading-relaxed">
      {{ citation.fields?.abstract }}
    </p>
  </div>
</template>