<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  headlines: {
    type: Array,
    required: true
  }
});

const openSections = ref({});

const toggleSection = (index) => {
  openSections.value[index] = !openSections.value[index];
};

onMounted(() => {
  // Open the first section by default
  if (props.headlines && props.headlines.length > 0) {
    openSections.value[0] = true;
  }
});
</script>

<template>
  <div class="w-full lg:w-1/3 px-2 mb-8 lg:mb-0">
    <div class="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
      <ul class="flex flex-col">
        <li v-for="(heading, index) in headlines" :key="index" class="border-b border-gray-100 last:border-0">
          <div 
            :class="[
              'cursor-pointer hover:bg-gray-50 transition-colors',
              openSections[index] ? 'bg-blue-50/50' : ''
            ]"
            @click="toggleSection(index)"
          >
            <div class="flex items-center justify-between py-3 px-4 w-full text-left">
              <div class="flex items-center gap-3">
                <div class="text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                  </svg>
                </div>
                <span class="font-medium text-gray-800">{{ heading.text }}</span>
              </div>
              <i 
                class="bi bi-chevron-down text-gray-400 transition-transform duration-200"
                :class="{ 'rotate-180': openSections[index] }"
              ></i>
            </div>
          </div>
          
          <div 
            v-show="openSections[index]" 
            class="bg-white"
          >
            <ul class="py-2 pl-4 pr-2 space-y-1">
              <li v-for="(subheading, subIndex) in heading.subheadings" :key="subIndex">
                <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span>{{ subheading.text }}</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles removal as Tailwind covers it */
</style>