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
  const result: string[] = []
  if (props.id) {
    result.push(...props.id.split(',').map(i => i.trim()).filter(Boolean))
  }
  if (props.url) {
    result.push(...props.url.replace(/[\[\]]/g, '').split(',').map(i => i.trim()).filter(Boolean))
  }
  return result
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
    let text = item
    if (item.startsWith('http')) {
      url = item
      text = item
    } else {
      const parts = resolveCitationParts(item)
      url = parts?.url
      text = getCitationText(item)
    }
    return {
      displayIndex,
      url,
      text
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
  <span class="cite-component inline align-baseline ml-0.5 mr-0 text-black font-bold">
    [<template v-for="(item, i) in citationItems" :key="i"><span v-if="i > 0">, </span><a
      v-if="item.url"
      :href="item.url"
      target="_blank"
      class="cite-link text-black font-bold hover:underline no-underline"
      :title="item.text"
    >{{ item.displayIndex }}</a><span
      v-else
      class="cite-badge text-black font-bold cursor-default"
      :title="item.text"
    >{{ item.displayIndex }}</span></template>]
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
