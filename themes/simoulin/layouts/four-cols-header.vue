<script setup lang="ts">
import { computed, unref, ref } from 'vue'
import { useSlideContext } from '@slidev/client'
import { useSlideNumbering } from '../logic/titles'
import { useTitleTypewriter } from '../logic/useTitleTypewriter'
import { useSyncCaptions } from '../logic/useSyncCaptions'

const props = defineProps<{
  align?: 'top' | 'bottom' | 'center' | 'stretch'
}>()

const { $page } = useSlideContext()
const { getSlideInfo } = useSlideNumbering()
const info = computed(() => getSlideInfo(unref($page) || 1))

const rootRef = ref<HTMLElement | null>(null)
useTitleTypewriter(rootRef)
useSyncCaptions(rootRef)

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
  <div ref="rootRef" class="slidev-layout four-cols-header w-full h-full flex flex-col" :style="{ '--chapter-no': info.chapter, '--slide-no': info.relativeSlide }">
    <div class="col-span-4 mb-4">
      <slot />
    </div>
    <div class="grid grid-cols-4 gap-4 flex-1 min-h-0" :class="alignClass">
      <div class="col-1 h-full flex flex-col min-w-0">
        <slot name="col1"><slot name="first"><slot name="one" /></slot></slot>
      </div>
      <div class="col-2 h-full flex flex-col min-w-0">
        <slot name="col2"><slot name="second"><slot name="two" /></slot></slot>
      </div>
      <div class="col-3 h-full flex flex-col min-w-0">
        <slot name="col3"><slot name="third"><slot name="three" /></slot></slot>
      </div>
      <div class="col-4 h-full flex flex-col min-w-0">
        <slot name="col4"><slot name="fourth"><slot name="four" /></slot></slot>
      </div>
    </div>
  </div>
</template>
