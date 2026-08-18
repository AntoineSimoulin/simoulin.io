<script setup lang="ts">
import { computed, ref, watch, unref, onMounted, onUnmounted } from 'vue'
import MarkdownIt from 'markdown-it'
import { useSlideContext, useNav } from '@slidev/client'
import Cite from './Cite.vue'

const props = defineProps<{
  src: string
  label?: string
  caption?: string
  cite?: string
  clickAnimate?: boolean
  align?: 'stretch' | 'top' | 'bottom' | 'center'
}>()

const md = new MarkdownIt({ html: true })
const renderMarkdown = (text: string) => {
  return md.renderInline(text)
}

const isStretch = computed(() => props.align === 'stretch' || props.align === undefined)

const { $page } = useSlideContext()
const { currentPage } = useNav()

const animKey = ref(Date.now())
const cardRef = ref<HTMLElement | null>(null)

let classObserver: MutationObserver | null = null
let wasHidden = true

const isHiddenElement = (el: HTMLElement | null) => {
  if (!el) return false
  return el.classList.contains('slidev-vclick-hidden') || el.classList.contains('v-click-hidden')
}

watch(currentPage, (newPage) => {
  const thisPage = unref($page)
  if (thisPage && newPage === thisPage) {
    if (!cardRef.value || !isHiddenElement(cardRef.value)) {
      animKey.value = Date.now()
    }
  }
}, { immediate: true })

onMounted(() => {
  if (cardRef.value && typeof MutationObserver !== 'undefined') {
    wasHidden = isHiddenElement(cardRef.value)

    classObserver = new MutationObserver(() => {
      if (!cardRef.value) return
      const currentlyHidden = isHiddenElement(cardRef.value)
      if (wasHidden && !currentlyHidden) {
        animKey.value = Date.now()
      }
      wasHidden = currentlyHidden
    })

    classObserver.observe(cardRef.value, {
      attributes: true,
      attributeFilter: ['class']
    })
  }
})

onUnmounted(() => {
  if (classObserver) {
    classObserver.disconnect()
  }
})

const computedSrc = computed(() => {
  if (props.src && (props.src.endsWith('.svg') || props.src.includes('.svg'))) {
    return `${props.src}?t=${animKey.value}`
  }
  return props.src
})
</script>

<template>
  <div
    v-if="clickAnimate"
    v-click
    ref="cardRef"
    class="figure-card bg-white rounded-2xl border-2 border-black shadow-[3.5px_3.5px_0px_#000] flex flex-col overflow-hidden min-h-0 w-full"
    :class="[isStretch ? 'h-full flex-1' : '']"
  >
    <figure class="flex-1 flex flex-col overflow-hidden h-full">
      <div class="px-4 pt-4 flex-1 flex items-center justify-center min-h-0 relative" :class="isStretch ? 'h-full w-full' : ''">
        <img :src="computedSrc" :key="animKey" :class="[isStretch ? 'absolute inset-0 w-full h-full object-contain p-4' : 'h-40 mb-4 object-contain']" />
      </div>
      <figcaption class="text-left text-xs font-medium text-black leading-snug bg-yellow-100/80 border-t-2 border-black px-3.5 py-2 w-full mt-auto shrink-0 flex items-start gap-2">
        <span v-if="label" class="font-black bg-yellow-300 text-black border border-black shadow-[1px_1px_0px_#000] px-1.5 py-0.5 rounded-md shrink-0 inline-flex items-center text-[10.5px] leading-none select-none self-start">{{ label }}</span>
        <div class="flex-1">
          <slot name="caption">
            <span v-if="caption" v-html="renderMarkdown(caption)"></span>
            <Cite v-if="cite" :id="cite" />
          </slot>
        </div>
      </figcaption>
    </figure>
  </div>
  <div
    v-else
    ref="cardRef"
    class="figure-card bg-white rounded-2xl border-2 border-black shadow-[3.5px_3.5px_0px_#000] flex flex-col overflow-hidden min-h-0 w-full"
    :class="[isStretch ? 'h-full flex-1' : '']"
  >
    <figure class="flex-1 flex flex-col overflow-hidden h-full">
      <div class="px-4 pt-4 flex-1 flex items-center justify-center min-h-0 relative" :class="isStretch ? 'h-full w-full' : ''">
        <img :src="computedSrc" :key="animKey" :class="[isStretch ? 'absolute inset-0 w-full h-full object-contain p-4' : 'h-40 mb-4 object-contain']" />
      </div>
      <figcaption class="text-left text-xs font-medium text-black leading-snug bg-yellow-100/80 border-t-2 border-black px-3.5 py-2 w-full mt-auto shrink-0 flex items-start gap-2">
        <span v-if="label" class="font-black bg-yellow-300 text-black border border-black shadow-[1px_1px_0px_#000] px-1.5 py-0.5 rounded-md shrink-0 inline-flex items-center text-[10.5px] leading-none select-none self-start">{{ label }}</span>
        <div class="flex-1">
          <slot name="caption">
            <span v-if="caption" v-html="renderMarkdown(caption)"></span>
            <Cite v-if="cite" :id="cite" />
          </slot>
        </div>
      </figcaption>
    </figure>
  </div>
</template>
