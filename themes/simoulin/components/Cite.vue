<script setup lang="ts">
import { computed, inject, onMounted } from 'vue'
import { useSlideContext } from '@slidev/client'
import { citationsState } from '../logic/citations'
import { getCitationText, resolveCitationParts } from '../logic/bib'

const props = defineProps<{
  id: string
}>()

console.log('[Cite] Component mounting with id:', props.id)

const { $page } = useSlideContext()

const ids = computed(() => props.id.split(',').map(i => i.trim()).filter(Boolean))

onMounted(() => {
  // $page is a Ref<number>
  const slideId = $page?.value
  if (slideId) {
    ids.value.forEach(id => citationsState.add(String(slideId), id))
  }
})

const citationItems = computed(() => {
  const slideId = $page?.value
  if (!slideId) return []
  return ids.value.map(id => {
    const index = citationsState.entries[String(slideId)]?.indexOf(id) ?? -1
    const displayIndex = index !== -1 ? index + 1 : '*'
    const parts = resolveCitationParts(id)
    return {
      displayIndex,
      url: parts?.url
    }
  })
})

const fullCitation = computed(() => {
  return ids.value.map(id => getCitationText(id)).join('\n')
})
</script>

<template>
  <span class="cite-component inline-block">
    <span class="ml-0.5 cursor-default" style="color: #2563eb !important; opacity: 1 !important;" :title="fullCitation">
      [<template v-for="(item, i) in citationItems" :key="i">
        <span v-if="i > 0">, </span>
        <a v-if="item.url" :href="item.url" target="_blank" class="cite-link" style="color: inherit !important;">{{ item.displayIndex }}</a>
        <span v-else>{{ item.displayIndex }}</span>
      </template>]
    </span>
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
