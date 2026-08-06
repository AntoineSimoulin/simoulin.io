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
  <div class="slidev-layout cover h-full w-full flex flex-col items-center justify-center text-center p-6 bg-[#FAFAFA]" :style="{ '--chapter-no': info.chapter, '--slide-no': info.relativeSlide }">
    <!-- Title Card in Neo-Brutalism -->
    <div class="w-full max-w-3xl bg-yellow-300 text-black border-3 border-black shadow-[6px_6px_0px_#000] rounded-2xl p-8 sm:p-10 mb-6 transform -rotate-1">
      <div class="cover-title font-black text-4xl sm:text-5xl text-black leading-tight tracking-tight">
        <TitleRenderer />
      </div>
    </div>

    <!-- Author Badge -->
    <div v-if="$frontmatter.author" class="inline-block bg-pink-300 text-black font-black text-xl border-2 border-black shadow-[3px_3px_0px_#000] rounded-xl px-6 py-2.5 mt-2 rotate-1">
      👤 {{ $frontmatter.author }}
    </div>

    <!-- Info / Date Badge -->
    <div v-if="$frontmatter.info" class="inline-block bg-blue-200 text-black font-bold text-base border-2 border-black shadow-[2.5px_2.5px_0px_#000] rounded-xl px-5 py-2.5 mt-4 whitespace-pre-wrap">
      🗓️ {{ $frontmatter.info }}
    </div>
  </div>
</template>
