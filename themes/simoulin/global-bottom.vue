<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useNav } from '@slidev/client'
import { citationsState } from './logic/citations'
import { resolveCitationParts } from './logic/bib'

useHead({
  script: [
    { src: 'https://platform.twitter.com/widgets.js', async: true }
  ]
})
const { currentPage, currentSlideRoute } = useNav()
const currentYear = new Date().getFullYear()

const isCover = computed(() => currentSlideRoute.value.meta?.layout === 'cover')

const citations = computed(() => {
  const slideNo = currentPage.value
  return citationsState.entries[String(slideNo)] || []
})

function getParts(id: string) {
  return resolveCitationParts(id)
}
</script>

<template>
  <div v-if="!isCover" class="abs-bl bottom-5 left-[2.2rem] z-50 flex flex-col items-start pointer-events-none">
    <footer v-if="citations.length" class="text-[8px] font-normal mb-1.5 max-w-[850px] relative pointer-events-auto flex flex-col gap-0.5 pl-4">
      <!-- Paper Icon matching exact 8px citation font height -->
      <img src="/essay.svg" class="absolute top-[2px] left-0 w-[8px] h-[8px] object-contain" />

      <!-- Vertical Black Bar Separator: 8px height for 1 citation, full block height for multiple -->
      <div
        class="absolute left-[12px] w-[1.5px] bg-black rounded-full"
        :class="citations.length === 1 ? 'top-[2px] h-[8px]' : 'top-[2px] bottom-0'"
      ></div>

      <!-- Citations List -->
      <div v-for="(id, i) in citations" :key="id" class="line-clamp-1 pointer-events-auto leading-tight">
        <span v-if="getParts(id)">
          <span class="text-black font-medium mr-1">[{{ i + 1 }}]</span>
          <span class="font-normal text-black/90">{{ getParts(id)!.authors }} ({{ getParts(id)!.year }}). </span>
          <a v-if="getParts(id)!.url" :href="getParts(id)!.url" target="_blank" class="italic hover:underline font-normal text-black" style="color: #000 !important">{{ getParts(id)!.title }}.</a>
          <span v-else class="italic font-normal text-black/90">{{ getParts(id)!.title }}.</span>
        </span>
        <span v-else>
          <span class="text-black font-medium mr-1">[{{ i + 1 }}]</span>
          <a v-if="id.startsWith('http')" :href="id" target="_blank" class="italic hover:underline font-normal text-black" style="color: #000 !important">{{ id }}</a>
          <span v-else class="font-normal text-black/90">{{ id }}</span>
        </span>
      </div>
    </footer>
    <div class="text-black/80 font-medium text-[10px] tracking-normal">
      Simoulin © {{ currentYear }}. All rights reserved.
    </div>
  </div>
  <div v-if="!isCover" class="abs-br bottom-5 right-[2.2rem] z-50 flex flex-col items-end pointer-events-none">
    <div class="bg-yellow-300 text-black font-black text-xs border-2 border-black shadow-[1.5px_1.5px_0px_#000] rounded-lg px-2.5 py-0.5 pointer-events-auto">
      {{ currentPage }}
    </div>
  </div>
</template>
