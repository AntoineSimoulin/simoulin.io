<script setup lang="ts">
import { computed, unref } from 'vue'
import { useSlideContext } from '@slidev/client'
import { useSlideNumbering } from '../logic/titles'

const props = defineProps<{
  align?: 'top' | 'bottom' | 'center' | 'stretch'
}>()

const { $page } = useSlideContext()
const { getSlideInfo } = useSlideNumbering()
const info = computed(() => getSlideInfo(unref($page) || 1))

const alignClass = computed(() => {
  switch (props.align) {
    case 'top': return 'items-start'
    case 'bottom': return 'items-end'
    case 'center': return 'items-center'
    case 'stretch': return 'items-stretch'
    default: return 'items-stretch'
  }
})
</script>

<template>
  <div class="slidev-layout three-cols-header w-full h-full flex flex-col" :style="{ '--chapter-no': info.chapter, '--slide-no': info.relativeSlide }">
    <div class="col-span-3 mb-4">
      <slot />
    </div>
    <div class="grid grid-cols-3 gap-6 flex-1 min-h-0" :class="alignClass">
      <div class="col-left h-full flex flex-col">
        <slot name="left" />
      </div>
      <div class="col-center h-full flex flex-col">
        <slot name="center" />
      </div>
      <div class="col-right h-full flex flex-col">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
