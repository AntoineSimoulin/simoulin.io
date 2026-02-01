<script setup lang="ts">
import { computed, unref } from 'vue'
import { useSlideContext } from '@slidev/client'
import { useSlideNumbering } from '../logic/titles'
import TitleRenderer from '#slidev/title-renderer'

const { $page, $frontmatter } = useSlideContext()
const { getSlideInfo } = useSlideNumbering()

const info = computed(() => getSlideInfo(unref($page) || 1))
</script>

<template>
  <div class="slidev-layout cover h-full flex flex-col items-center justify-center text-center" :style="{ '--chapter-no': info.chapter, '--slide-no': info.relativeSlide }">
    <div class="w-full cover-title">
      <TitleRenderer />
    </div>
    <div v-if="$frontmatter.author" class="text-black text-xl mt-8">
      {{ $frontmatter.author }}
    </div>
    <div v-if="$frontmatter.info" class="text-black font-light mt-8 whitespace-pre-wrap">
      {{ $frontmatter.info }}
    </div>
  </div>
</template>
