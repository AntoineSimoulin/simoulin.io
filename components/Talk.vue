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
  <div class="bg-white border-2 border-black hover:shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 transition-all duration-200 rounded-2xl p-5 mb-4 text-black">
    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
      <a :href="citation.fields.url" class="font-extrabold text-lg text-black hover:text-indigo-600 no-underline leading-snug" target="_blank">{{ citation.fields.title }}</a>
      <span class="bg-indigo-50 text-black border-2 border-black px-2.5 py-0.5 rounded-lg text-xs font-extrabold shadow-[1px_1px_0px_#000]">
        {{ formatMonth(citation.fields.month) }} {{ citation.fields.year }}
      </span>
    </div>

    <div v-if="'slides' in citation.fields" class="my-2">
      <a :href="citation.fields.slides" class="inline-flex items-center gap-1.5 bg-purple-50 hover:bg-purple-100 text-black border-2 border-black shadow-[1px_1px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-bold no-underline transition-all" target="_blank">
        <i class="fas fa-file-alt text-black" aria-hidden="true"></i> Slides
      </a>
    </div>

    <div class="font-bold text-sm text-black/90 my-1">
      📍 {{ citation.fields.venue }}, {{ citation.fields.address }}
    </div>

    <p v-if="citation.fields.abstract" class="text-sm font-medium text-black/80 mt-2 leading-relaxed">
      {{ citation.fields.abstract }}
    </p>
  </div>
</template>