<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  src: string
  label?: string
  caption: string
  clickAnimate?: boolean
  align?: 'stretch' | 'top' | 'bottom' | 'center'
}>()

const isStretch = computed(() => props.align === 'stretch' || props.align === undefined)
</script>

<template>
  <div
    v-if="clickAnimate"
    v-click
    class="bg-transparent rounded-md shadow-lg flex flex-col overflow-hidden min-h-0 w-full"
    :class="[isStretch ? 'h-full flex-1' : '']"
  >
    <figure class="flex-1 flex flex-col overflow-hidden">
      <div class="px-4 pt-4 flex-1 flex items-center justify-center min-h-0 relative" :class="isStretch ? 'h-full w-full' : ''">
        <img :src="src" :class="[isStretch ? 'absolute inset-0 w-full h-full object-contain p-4' : 'h-40 mb-4 object-contain']" />
      </div>
      <figcaption class="text-left text-xs text-gray-600 leading-tight bg-gray-100 p-2 w-full mt-auto shrink-0">
        <span v-if="label" class="font-bold text-[#2563eb] mr-1">{{ label }}</span>
        {{ caption }}
      </figcaption>
    </figure>
  </div>
  <div
    v-else
    class="bg-transparent rounded-md shadow-lg flex flex-col overflow-hidden min-h-0 w-full"
    :class="[isStretch ? 'h-full flex-1' : '']"
  >
    <figure class="flex-1 flex flex-col overflow-hidden">
      <div class="px-4 pt-4 flex-1 flex items-center justify-center min-h-0 relative" :class="isStretch ? 'h-full w-full' : ''">
        <img :src="src" :class="[isStretch ? 'absolute inset-0 w-full h-full object-contain p-4' : 'h-40 mb-4 object-contain']" />
      </div>
      <figcaption class="text-left text-xs text-gray-600 leading-tight bg-gray-100 p-2 w-full mt-auto shrink-0">
        <span v-if="label" class="font-bold text-[#2563eb] mr-1">{{ label }}</span>
        {{ caption }}
      </figcaption>
    </figure>
  </div>
</template>
