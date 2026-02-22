<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  align?: 'top' | 'bottom' | 'center' | 'stretch'
}>()

const alignClass = computed(() => {
  switch (props.align) {
    case 'top': return 'items-start'
    case 'bottom': return 'items-end'
    case 'center': return 'items-center'
    case 'stretch': return 'items-stretch'
    default: return 'items-stretch'
  }
})
</script>

<template>
  <div class="slidev-layout two-cols-header w-full h-full flex flex-col">
    <div class="col-span-2 mb-4">
      <slot />
    </div>
    <div class="grid grid-cols-2 gap-6 flex-1 min-h-0" :class="alignClass">
      <div class="col-left h-full flex flex-col">
        <slot name="left" />
      </div>
      <div class="col-right h-full flex flex-col">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
