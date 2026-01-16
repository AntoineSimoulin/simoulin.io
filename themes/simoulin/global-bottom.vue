<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import { citationsState } from './logic/citations'
import { resolveCitationParts } from './logic/bib'

const { currentPage } = useNav()

const citations = computed(() => {
  const slideNo = currentPage.value
  return citationsState.entries[String(slideNo)] || []
})

function getParts(id: string) {
  return resolveCitationParts(id)
}
</script>

<template>
  <footer v-if="citations.length" class="abs-bl m-6 text-[10px] opacity-80 border-t border-gray-300 pt-1 pointer-events-none max-w-2/3 z-50 bg-white/50 backdrop-blur-sm rounded-sm px-1">
    <div v-for="(id, i) in citations" :key="id" class="line-clamp-1">
      <span v-if="getParts(id)">
        <span class="text-blue-600 font-bold mr-1">[{{ i + 1 }}]</span>
        <span>{{ getParts(id)!.authors }} ({{ getParts(id)!.year }}). </span>
        <a v-if="getParts(id)!.url" :href="getParts(id)!.url" target="_blank" class="text-blue-600 italic hover:underline pointer-events-auto">{{ getParts(id)!.title }}.</a>
        <span v-else class="text-blue-600 italic">{{ getParts(id)!.title }}.</span>
      </span>
      <span v-else>
        [{{ i + 1 }}] {{ id }}
      </span>
    </div>
  </footer>
</template>
