<script setup lang="ts">
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'

const props = defineProps<{
  src: string
  label?: string
  caption: string
  clickAnimate?: boolean
  align?: 'stretch' | 'top' | 'bottom' | 'center'
}>()

const md = new MarkdownIt({ html: true })
const renderMarkdown = (text: string) => {
  return md.renderInline(text)
}

const isStretch = computed(() => props.align === 'stretch' || props.align === undefined)
</script>

<template>
  <div
    v-if="clickAnimate"
    v-click
    class="bg-white rounded-2xl border-2 border-black shadow-[3.5px_3.5px_0px_#000] flex flex-col overflow-hidden min-h-0 w-full"
    :class="[isStretch ? 'h-full flex-1' : '']"
  >
    <figure class="flex-1 flex flex-col overflow-hidden">
      <div class="px-4 pt-4 flex-1 flex items-center justify-center min-h-0 relative" :class="isStretch ? 'h-full w-full' : ''">
        <img :src="src" :class="[isStretch ? 'absolute inset-0 w-full h-full object-contain p-4' : 'h-40 mb-4 object-contain']" />
      </div>
      <figcaption class="text-left text-xs font-medium text-black leading-snug bg-yellow-100/80 border-t-2 border-black p-3 w-full mt-auto shrink-0 flex items-start gap-2 min-h-[4.5rem]">
        <span v-if="label" class="font-black bg-yellow-300 text-black border border-black shadow-[1px_1px_0px_#000] px-2 py-0.5 rounded-md shrink-0">{{ label }}</span>
        <span class="flex-1" v-html="renderMarkdown(caption)"></span>
      </figcaption>
    </figure>
  </div>
  <div
    v-else
    class="bg-white rounded-2xl border-2 border-black shadow-[3.5px_3.5px_0px_#000] flex flex-col overflow-hidden min-h-0 w-full"
    :class="[isStretch ? 'h-full flex-1' : '']"
  >
    <figure class="flex-1 flex flex-col overflow-hidden">
      <div class="px-4 pt-4 flex-1 flex items-center justify-center min-h-0 relative" :class="isStretch ? 'h-full w-full' : ''">
        <img :src="src" :class="[isStretch ? 'absolute inset-0 w-full h-full object-contain p-4' : 'h-40 mb-4 object-contain']" />
      </div>
      <figcaption class="text-left text-xs font-medium text-black leading-snug bg-yellow-100/80 border-t-2 border-black p-3 w-full mt-auto shrink-0 flex items-start gap-2 min-h-[4.5rem]">
        <span v-if="label" class="font-black bg-yellow-300 text-black border border-black shadow-[1px_1px_0px_#000] px-2 py-0.5 rounded-md shrink-0">{{ label }}</span>
        <span class="flex-1" v-html="renderMarkdown(caption)"></span>
      </figcaption>
    </figure>
  </div>
</template>
