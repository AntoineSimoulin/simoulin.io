<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  figures: {
    src: string
    label?: string
    caption: string
  }[]
  clickAnimate?: boolean
  align?: 'stretch' | 'top' | 'bottom' | 'center'
}>()

const isStretch = computed(() => props.align === 'stretch' || props.align === undefined)

const alignmentClass = computed(() => {
  switch (props.align) {
    case 'top':
      return 'items-start'
    case 'bottom':
      return 'items-end'
    case 'center':
      return 'items-center'
    case 'stretch':
    default:
      return 'items-stretch'
  }
})
</script>

<template>
  <div class="flex flex-row justify-center gap-4" :class="[alignmentClass, isStretch ? 'flex-1 h-full min-h-0 mt-4 mb-8' : 'mt-10']">
    <div
      v-if="clickAnimate"
      v-click
      v-for="(figure, idx) in figures"
      :key="'animated-' + idx"
      class="bg-transparent rounded-md shadow-lg flex-1 flex flex-col overflow-hidden min-h-0"
    >
      <figure class="flex-1 flex flex-col overflow-hidden">
        <div class="px-4 pt-4 flex-1 flex items-center justify-center min-h-0 relative" :class="isStretch ? 'h-full w-full' : ''">
          <img :src="figure.src" :class="[isStretch ? 'absolute inset-0 w-full h-full object-contain p-4' : 'h-40 mb-4 object-contain']" />
        </div>
        <figcaption class="text-left text-xs text-gray-600 leading-tight bg-gray-100 p-2 w-full mt-auto shrink-0">
          <span class="font-bold text-[#2563eb] mr-1">Figure {{ idx + 1 }}.</span>
          {{ figure.caption }}
        </figcaption>
      </figure>
    </div>
    <div
      v-if="!clickAnimate"
      v-for="(figure, idx) in figures"
      :key="'static-' + idx"
      class="bg-transparent rounded-md shadow-lg flex-1 flex flex-col overflow-hidden min-h-0"
    >
      <figure class="flex-1 flex flex-col overflow-hidden">
        <div class="px-4 pt-4 flex-1 flex items-center justify-center min-h-0 relative" :class="isStretch ? 'h-full w-full' : ''">
          <img :src="figure.src" :class="[isStretch ? 'absolute inset-0 w-full h-full object-contain p-4' : 'h-40 mb-4 object-contain']" />
        </div>
        <figcaption class="text-left text-xs text-gray-600 leading-tight bg-gray-100 p-2 w-full mt-auto shrink-0">
          <span class="font-bold text-[#2563eb] mr-1">Figure {{ idx + 1 }}.</span>
          {{ figure.caption }}
        </figcaption>
      </figure>
    </div>
  </div>
</template>
