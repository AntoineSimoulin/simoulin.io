<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue'
import { useHead } from '@unhead/vue'
import { useNav } from '@slidev/client'
import { citationsState } from './logic/citations'
import { resolveCitationParts } from './logic/bib'
import { useSlideNumbering } from './logic/titles'

useHead({
  script: [
    { src: 'https://platform.twitter.com/widgets.js', async: true }
  ]
})
const { currentPage, currentSlideRoute } = useNav()
const currentYear = new Date().getFullYear()

const isCover = computed(() => currentSlideRoute.value.meta?.layout === 'cover')

const { getSlideInfo } = useSlideNumbering()
const currentSlideInfo = computed(() => getSlideInfo(currentPage.value))

const hasSectionNumber = computed(() => {
  if (isCover.value) return false
  const layout = currentSlideRoute.value.meta?.layout
  if (layout === 'center' || layout === 'section') return false
  return currentSlideInfo.value.relativeSlide > 0
})

const sectionNumberString = computed(() => {
  return `${currentSlideInfo.value.chapter}.${currentSlideInfo.value.relativeSlide}.`
})

const badgeRef = ref<HTMLElement | null>(null)
const footerContainerRef = ref<HTMLElement | null>(null)

watch([sectionNumberString, hasSectionNumber], async () => {
  await nextTick()
  if (typeof document !== 'undefined') {
    if (hasSectionNumber.value && badgeRef.value) {
      const width = badgeRef.value.offsetWidth
      document.documentElement.style.setProperty('--title-offset', `${width + 12}px`)
    } else {
      document.documentElement.style.setProperty('--title-offset', '0px')
    }
  }
}, { immediate: true, flush: 'post' })

const citations = computed(() => {
  const slideNo = currentPage.value
  return citationsState.entries[String(slideNo)] || []
})

watch([currentPage, citations], async () => {
  await nextTick()
  if (typeof document !== 'undefined') {
    if (footerContainerRef.value && !isCover.value) {
      const footerH = footerContainerRef.value.offsetHeight
      const bottomPadding = 20 + footerH + 18
      document.documentElement.style.setProperty('--slide-bottom-padding', `${bottomPadding}px`)
    } else {
      document.documentElement.style.setProperty('--slide-bottom-padding', '3.5rem')
    }
  }
}, { immediate: true, flush: 'post' })

function getParts(id: string) {
  return resolveCitationParts(id)
}

const resolveIcon = (iconPath: string) => {
  if (!iconPath) return ''
  if (iconPath.startsWith('http://') || iconPath.startsWith('https://')) return iconPath
  const base = import.meta.env.BASE_URL || '/'
  const cleanPath = iconPath.startsWith('/') ? iconPath.slice(1) : iconPath
  return base.endsWith('/') ? base + cleanPath : base + '/' + cleanPath
}
</script>

<template>
  <!-- Persistent Section / Chapter Number Box at top-left -->
  <div
    v-if="hasSectionNumber"
    class="abs-tl top-[1.95rem] left-[2.2rem] z-40 pointer-events-none"
  >
    <div ref="badgeRef" class="bg-yellow-300 text-black font-black text-[0.85rem] border-2 border-black shadow-[1.5px_1.5px_0px_#000] rounded-lg px-2 py-0.5 pointer-events-auto flex items-center leading-normal">
      {{ sectionNumberString }}
    </div>
  </div>

  <div ref="footerContainerRef" v-if="!isCover" class="abs-bl bottom-5 left-[2.2rem] z-50 flex flex-col items-start pointer-events-none">
    <footer v-if="citations.length" class="text-[8px] font-normal mb-1.5 max-w-[850px] relative pointer-events-auto flex flex-col gap-0.5 pl-4">
      <!-- Paper Icon matching exact 8px citation font height -->
      <img :src="resolveIcon('/essay.svg')" class="absolute top-[2px] left-0 w-[8px] h-[8px] object-contain" />

      <!-- Vertical Black Bar Separator: 8px height for 1 citation, full block height for multiple -->
      <div
        class="absolute left-[12px] w-[1.5px] bg-black rounded-full"
        :class="citations.length === 1 ? 'top-[2px] h-[8px]' : 'top-[2px] bottom-0'"
      ></div>

      <!-- Citations List -->
      <div v-for="(id, i) in citations" :key="id" class="line-clamp-1 pointer-events-auto leading-tight">
        <span v-if="getParts(id)">
          <span class="text-black font-medium mr-1">[{{ i + 1 }}]</span>
          <span class="font-normal text-black/90">{{ getParts(id)!.authors }} ({{ getParts(id)!.year }}). </span>
          <a v-if="getParts(id)!.url" :href="getParts(id)!.url" target="_blank" class="italic hover:underline font-normal text-black" style="color: #000 !important">{{ getParts(id)!.title }}.</a>
          <span v-else class="italic font-normal text-black/90">{{ getParts(id)!.title }}.</span>
        </span>
        <span v-else>
          <span class="text-black font-medium mr-1">[{{ i + 1 }}]</span>
          <a v-if="id.startsWith('http')" :href="id" target="_blank" class="italic hover:underline font-normal text-black" style="color: #000 !important">{{ id }}</a>
          <span v-else class="font-normal text-black/90">{{ id }}</span>
        </span>
      </div>
    </footer>
    <div class="text-black/80 font-medium text-[10px] tracking-normal inline-flex items-center flex-wrap pointer-events-auto">
      <a href="https://simoulin.io" target="_blank" class="hover:underline text-black font-medium" style="color: #000 !important">Simoulin.io</a>&nbsp;© {{ currentYear }}.&nbsp;Released under the license&nbsp;<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" class="hover:underline text-black font-medium" style="color: #000 !important">CC BY-NC-SA 4.0</a><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">.
    </div>
  </div>
  <div v-if="!isCover" class="abs-br bottom-5 right-[2.2rem] z-50 flex flex-col items-end pointer-events-none">
    <div class="bg-yellow-300 text-black font-black text-xs border-2 border-black shadow-[1.5px_1.5px_0px_#000] rounded-lg px-2.5 py-0.5 pointer-events-auto">
      {{ currentPage }}
    </div>
  </div>
</template>
