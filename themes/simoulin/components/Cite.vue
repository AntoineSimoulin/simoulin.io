<script setup lang="ts">
import { computed, inject, onMounted } from 'vue'
import { useSlideContext } from '@slidev/client'
import { citationsState } from '../logic/citations'
import { getCitationText } from '../logic/bib'

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

const marker = computed(() => {
  const slideId = $page?.value
  if (!slideId) return '?'
  const indices = ids.value.map(id => {
    const index = citationsState.entries[String(slideId)]?.indexOf(id) ?? -1
    return index !== -1 ? index + 1 : '*'
  })
  return indices.join(', ')
})

const fullCitation = computed(() => {
  return ids.value.map(id => getCitationText(id)).join('\n')
})
</script>

<template>
  <span class="cite-component inline-block">
    <sup class="text-blue-600 font-bold ml-0.5 cursor-help underline decoration-dotted" :title="fullCitation">
      [{{ marker }}]
    </sup>
  </span>
</template>

<style scoped>
.cite-component {
  vertical-align: super;
  font-size: 0.8em;
}
</style>
