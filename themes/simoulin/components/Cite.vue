<script setup lang="ts">
import { computed, inject, onMounted } from 'vue'
import { useSlideContext } from '@slidev/client'
import { citationsState } from '../logic/citations'
import { getCitationText, resolveCitationParts } from '../logic/bib'

const props = defineProps<{
  id?: string
  url?: string
}>()

console.log('[Cite] Component mounting with id:', props.id, 'url:', props.url)

const { $page } = useSlideContext()

const items = computed(() => {
  if (props.id) return props.id.split(',').map(i => i.trim()).filter(Boolean)
  if (props.url) {
    return props.url.replace(/[\[\]]/g, '').split(',').map(i => i.trim()).filter(Boolean)
  }
  return []
})

onMounted(() => {
  if (!items.value.length) return
  // $page is a Ref<number>
  const slideId = $page?.value
  if (slideId) {
    items.value.forEach(item => citationsState.add(String(slideId), item))
  }
})

const citationItems = computed(() => {
  const slideId = $page?.value
  if (!slideId) return []
  return items.value.map(item => {
    const index = citationsState.entries[String(slideId)]?.indexOf(item) ?? -1
    const displayIndex = index !== -1 ? index + 1 : '*'
    let url = undefined
    if (item.startsWith('http')) {
      url = item
    } else {
      const parts = resolveCitationParts(item)
      url = parts?.url
    }
    return {
      displayIndex,
      url: url
    }
  })
})

const fullCitation = computed(() => {
  return items.value.map(item => {
    if (item.startsWith('http')) return item
    return getCitationText(item)
  }).join('\n')
})
</script>

<template>
  <span class="cite-component inline-inline align-baseline ml-0.5">
    <sup class="top-[-0.35em]">
      <a
        v-if="citationItems.length && citationItems[0].url"
        :href="citationItems[0].url"
        target="_blank"
        class="cite-link inline-flex items-center bg-yellow-300 hover:bg-yellow-400 text-black font-black text-[10px] border border-black shadow-[1px_1px_0px_#000] rounded px-1.5 py-0.2 no-underline transition-all"
        :title="fullCitation"
      >
        [<template v-for="(item, i) in citationItems" :key="i"><span v-if="i > 0">,</span>{{ item.displayIndex }}</template>]
      </a>
      <span
        v-else
        class="cite-badge inline-flex items-center bg-yellow-300 text-black font-black text-[10px] border border-black shadow-[1px_1px_0px_#000] rounded px-1.5 py-0.2 cursor-default"
        :title="fullCitation"
      >
        [<template v-for="(item, i) in citationItems" :key="i"><span v-if="i > 0">,</span>{{ item.displayIndex }}</template>]
      </span>
    </sup>
  </span>
</template>

<style scoped>
.cite-link {
  text-decoration: none !important;
}
.cite-link:hover {
  text-decoration: underline !important;
}
</style>
