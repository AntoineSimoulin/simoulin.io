<script>
import LinkIcon from "../components/icons/iconLink.vue";
import { formatMonth } from '@/utils/date.js';

export default {
  props: ['citation', 'index'],
  components: {
    LinkIcon,
  },
  computed: {
    isWide() {
      // 1 wide card out of every 4 items for dense 3-column packing
      return (this.index % 4 === 0);
    },
    badgeColorClass() {
      const colors = ['bg-yellow-300', 'bg-pink-300', 'bg-purple-300', 'bg-blue-300', 'bg-emerald-300'];
      return colors[this.index % colors.length];
    },
    btnColorClass() {
      const colors = ['bg-yellow-300 hover:bg-yellow-400', 'bg-pink-300 hover:bg-pink-400', 'bg-purple-300 hover:bg-purple-400', 'bg-blue-300 hover:bg-blue-400', 'bg-emerald-300 hover:bg-emerald-400'];
      return colors[this.index % colors.length];
    }
  },
  methods: {
    formatMonth,
    getCleanUrl(href) {
      return href.replace(/(^\w+:|^)\/\/(?:www\.)?/, "").split('/')[0];
    },
  },
}
</script>

<template>
  <div :class="['flex', isWide ? 'col-span-1 md:col-span-2 lg:col-span-2' : 'col-span-1']">
    <div class="w-full bg-white border-2 border-black hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000] transition-all duration-200 rounded-2xl p-6 flex flex-col justify-between h-full">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span :class="['text-black border-2 border-black px-3 py-1 rounded-xl text-xs font-black shadow-[1.5px_1.5px_0px_#000]', badgeColorClass]">
            {{ formatMonth(citation.fields.month) }} {{ citation.fields.year }}
          </span>
        </div>
        <a target="_blank" :href="citation.fields.url" class="no-underline text-black hover:text-blue-600">
          <h2 :class="['font-black tracking-tight leading-snug mb-3', isWide ? 'text-2xl lg:text-3xl' : 'text-xl']">
            {{ citation.fields.title }}
          </h2>
        </a>
        <p v-if="'abstract' in citation.fields" class="text-black/80 text-sm font-medium leading-relaxed my-3">
          {{ citation.fields.abstract }}
        </p>
      </div>
      <div class="pt-4 flex items-center">
        <a
          :href="citation.fields.url"
          target="_blank"
          :class="['inline-flex items-center gap-1.5 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1.5 rounded-xl font-black text-xs transition-all no-underline', btnColorClass]"
        >
          <LinkIcon class="w-3.5 h-3.5 fill-current text-black"/>
          <span>{{ getCleanUrl(citation.fields.url) }}</span>
        </a>
      </div>
    </div>
  </div>
</template>