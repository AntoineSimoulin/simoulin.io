<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import { citationsState } from './logic/citations'
import { resolveCitationParts } from './logic/bib'

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
  <div v-if="!isCover" class="abs-bl m-8 z-50 flex flex-col items-start pointer-events-none">
    <footer v-if="citations.length" class="text-[8px] border-l-2 border-[#2563eb] pl-1 bg-white/50 backdrop-blur-sm rounded-r-sm pr-1 mb-1 max-w-[850px] relative mt-2">
      <img src="/essay.svg" class="absolute top-0 -left-4 w-3 h-3 object-contain" />
      <div v-for="(id, i) in citations" :key="id" class="line-clamp-1 pointer-events-auto">
        <span v-if="getParts(id)">
          <span class="text-[#2563eb] font-bold mr-1">[{{ i + 1 }}]</span>
          <span>{{ getParts(id)!.authors }} ({{ getParts(id)!.year }}). </span>
          <a v-if="getParts(id)!.url" :href="getParts(id)!.url" target="_blank" class="italic hover:underline" style="color: #2563eb !important">{{ getParts(id)!.title }}.</a>
          <span v-else class="italic" style="color: #2563eb !important">{{ getParts(id)!.title }}.</span>
        </span>
        <span v-else>
          <span class="text-[#2563eb] font-bold mr-1">[{{ i + 1 }}]</span>
          <a v-if="id.startsWith('http')" :href="id" target="_blank" class="italic hover:underline" style="color: #2563eb !important">{{ id }}</a>
          <span v-else>{{ id }}</span>
        </span>
      </div>
    </footer>
    <div class="text-gray-400 text-[10px]">simoulin.io, {{ currentYear }}, distribution prohibited without agreement</div>
  </div>
  <div v-if="!isCover" class="abs-br m-8 z-50 flex flex-col items-end pointer-events-none">
    <div class="text-black text-[10px]">{{ currentPage }}</div>
  </div>
</template>
