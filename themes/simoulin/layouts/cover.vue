<script setup lang="ts">
import { computed, unref } from 'vue'
import { useSlideContext } from '@slidev/client'
import { useSlideNumbering } from '../logic/titles'

const { $page } = useSlideContext()
const { getSlideInfo } = useSlideNumbering()

const info = computed(() => getSlideInfo(unref($page) || 1))
</script>

<template>
  <div class="slidev-layout cover" :style="{ '--chapter-no': info.chapter, '--slide-no': info.relativeSlide }">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>
