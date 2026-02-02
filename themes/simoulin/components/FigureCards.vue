<script setup lang="ts">
defineProps<{
  figures: {
    src: string
    label?: string
    caption: string
  }[]
  clickAnimate?: boolean
}>()
</script>

<template>
  <div class="flex flex-row items-stretch justify-center gap-4 mt-10">
    <div
      v-if="clickAnimate"
      v-click
      v-for="(figure, idx) in figures"
      :key="'animated-' + idx"
      class="bg-[#F8F9FA] rounded-sm shadow-lg flex-1 flex flex-col overflow-hidden"
    >
      <figure class="flex flex-col h-full">
        <div class="px-4 pt-2 flex-grow flex items-center justify-center">
          <img :src="figure.src" class="h-40 mb-4 object-contain" />
        </div>
        <figcaption class="text-left text-xs text-gray-600 leading-tight bg-gray-100 p-2 w-full">
          <span class="font-bold text-[#2563eb] mr-1">Figure {{ idx + 1 }}.</span>
          {{ figure.caption }}
        </figcaption>
      </figure>
    </div>
    <div
      v-if="!clickAnimate"
      v-for="(figure, idx) in figures"
      :key="'static-' + idx"
      class="bg-[#F8F9FA] rounded-sm shadow-lg flex-1 flex flex-col overflow-hidden"
    >
      <figure class="flex flex-col h-full">
        <div class="px-4 pt-2 flex-grow flex items-center justify-center">
          <img :src="figure.src" class="h-40 mb-4 object-contain" />
        </div>
        <figcaption class="text-left text-xs text-gray-600 leading-tight bg-gray-100 p-2 w-full">
          <span class="font-bold text-[#2563eb] mr-1">Figure {{ idx + 1 }}.</span>
          {{ figure.caption }}
        </figcaption>
      </figure>
    </div>
  </div>
</template>
