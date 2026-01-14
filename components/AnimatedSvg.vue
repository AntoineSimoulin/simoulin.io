<script setup>
import { ref } from 'vue';

const refreshKey = ref(0);
const isReplaying = ref(false);

const replay = () => {
    isReplaying.value = true;
    refreshKey.value++;
    setTimeout(() => {
        isReplaying.value = false;
    }, 500);
};
</script>

<template>
  <div class="relative group my-6 p-4 bg-gray-50 rounded-xl border border-gray-100 flex justify-center min-h-[200px]">
    <div :key="refreshKey" class="w-full flex justify-center items-center">
        <slot></slot>
    </div>
    <button 
        @click="replay" 
        class="absolute top-2 right-2 p-2 rounded-md bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-gray-100 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 text-gray-500 hover:text-blue-600 z-10"
        title="Replay Animation"
    >
        <i class="fas fa-rotate-right" :class="{ 'fa-spin': isReplaying }"></i>
    </button>
  </div>
</template>
