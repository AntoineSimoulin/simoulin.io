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
</script>

<template>
  <div class="flex flex-col gap-4 mt-8">
    <div
      v-if="clickAnimate"
      v-click
      v-for="(item, idx) in items"
      :key="'animated-' + idx"
      class="bg-white rounded-md shadow-lg flex flex-row overflow-hidden items-stretch"
    >
      <div class="bg-gray-100 w-16 flex items-center justify-center flex-shrink-0 relative">
        <img :src="item.icon" class="w-8 h-8 object-contain relative z-10" />
        <div class="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-100 rotate-45"></div>
      </div>
      <div class="p-4 flex items-center text-sm text-gray-700">
        <div class="markdown-content" v-html="renderMarkdown(item.text)"></div>
      </div>
    </div>
    <div
      v-if="!clickAnimate"
      v-for="(item, idx) in items"
      :key="'static-' + idx"
      class="bg-white rounded-md shadow-lg flex flex-row overflow-hidden items-stretch"
    >
      <div class="bg-gray-100 w-16 flex items-center justify-center flex-shrink-0 relative">
        <img :src="item.icon" class="w-8 h-8 object-contain relative z-10" />
        <div class="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-100 rotate-45"></div>
      </div>
      <div class="p-4 flex items-center text-sm text-gray-700">
        <div class="markdown-content" v-html="renderMarkdown(item.text)"></div>
      </div>
    </div>
  </div>
</template>
