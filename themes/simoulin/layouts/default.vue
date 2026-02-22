<script setup lang="ts">
import { computed, unref } from 'vue'
import { useSlideContext } from '@slidev/client'
import { useSlideNumbering } from '../logic/titles'

const { $page } = useSlideContext()
const { getSlideInfo } = useSlideNumbering()

const info = computed(() => getSlideInfo(unref($page) || 1))
</script>

<template>
  <div class="slidev-layout default flex flex-col h-full w-full" :style="{ '--chapter-no': info.chapter, '--slide-no': info.relativeSlide }">
    <slot />
  </div>
</template>
