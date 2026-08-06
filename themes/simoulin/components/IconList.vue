<script setup lang="ts">
defineProps<{
  items: {
    icon: string
    text: string
  }[]
  clickAnimate?: boolean
}>()

import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({ html: true })

const renderMarkdown = (text: string) => {
  return md.render(text)
}

const colors = ['bg-yellow-300', 'bg-blue-300', 'bg-pink-300', 'bg-emerald-300', 'bg-purple-300']
function getColor(idx: number) {
  return colors[idx % colors.length]
}
</script>

<template>
  <div class="flex flex-col gap-4 mt-6">
    <div
      v-if="clickAnimate"
      v-click
      v-for="(item, idx) in items"
      :key="'animated-' + idx"
      class="bg-white rounded-2xl border-2 border-black shadow-[3.5px_3.5px_0px_#000] flex flex-row items-stretch overflow-hidden"
    >
      <div :class="['w-16 sm:w-20 border-r-2 border-black flex items-center justify-center shrink-0 p-3.5 self-stretch', getColor(idx)]">
        <img :src="item.icon" class="w-8 h-8 object-contain" />
      </div>
      <div class="flex-1 p-3.5 sm:p-4 text-sm font-medium text-black leading-snug flex items-center">
        <div class="markdown-content" v-html="renderMarkdown(item.text)"></div>
      </div>
    </div>
    <div
      v-if="!clickAnimate"
      v-for="(item, idx) in items"
      :key="'static-' + idx"
      class="bg-white rounded-2xl border-2 border-black shadow-[3.5px_3.5px_0px_#000] flex flex-row items-stretch overflow-hidden"
    >
      <div :class="['w-16 sm:w-20 border-r-2 border-black flex items-center justify-center shrink-0 p-3.5 self-stretch', getColor(idx)]">
        <img :src="item.icon" class="w-8 h-8 object-contain" />
      </div>
      <div class="flex-1 p-3.5 sm:p-4 text-sm font-medium text-black leading-snug flex items-center">
        <div class="markdown-content" v-html="renderMarkdown(item.text)"></div>
      </div>
    </div>
  </div>
</template>
