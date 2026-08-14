<script setup lang="ts">
import { computed, unref, ref } from 'vue'
import { useSlideContext } from '@slidev/client'
import { useSlideNumbering } from '../logic/titles'
import { useTitleTypewriter } from '../logic/useTitleTypewriter'

const { $page } = useSlideContext()
const { getSlideInfo } = useSlideNumbering()

const info = computed(() => getSlideInfo(unref($page) || 1))

const rootRef = ref<HTMLElement | null>(null)
useTitleTypewriter(rootRef)
</script>

<template>
  <div ref="rootRef" class="slidev-layout default flex flex-col h-full w-full" :style="{ '--chapter-no': info.chapter, '--slide-no': info.relativeSlide }">
    <slot />
  </div>
</template>
