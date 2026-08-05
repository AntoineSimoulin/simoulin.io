<script>
import LinkIcon from "../components/icons/iconLink.vue";
import { formatMonth } from '@/utils/date.js';


export default {
  props: ['citation'],
  components: {
    LinkIcon,
  },
  // created() {
  //   console.log(this.citation);
  // },
  methods: {
    formatMonth,
    getCleanUrl(href) {
      return href.replace(/(^\w+:|^)\/\/(?:www\.)?/, "").split('/')[0];
    },
  },
}
</script>

<template>
  <div class="w-full md:w-1/2 lg:w-1/3 flex p-3">
    <div class="w-full bg-white border-2 border-black hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000] transition-all duration-200 rounded-2xl p-6 flex flex-col justify-between h-full">
      <div>
        <div class="mb-3">
          <span class="bg-purple-100 text-black border border-black px-2.5 py-0.5 rounded-md text-xs font-bold">
            {{ formatMonth(citation.fields.month) }} {{ citation.fields.year }}
          </span>
        </div>
        <a target="_blank" :href="citation.fields.url" class="no-underline text-black hover:text-purple-600">
          <h2 class="text-xl font-black tracking-tight mb-3 leading-tight">{{ citation.fields.title }}</h2>
        </a>
        <p v-if="'abstract' in citation.fields" class="text-black/80 text-sm font-medium line-clamp-3 mb-4 leading-relaxed">
          {{ citation.fields.abstract }}
        </p>
      </div>
      <div class="pt-2">
        <a
          :href="citation.fields.url"
          target="_blank"
          class="inline-flex items-center gap-1.5 bg-purple-100 hover:bg-purple-200 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all no-underline"
        >
          <LinkIcon class="w-3.5 h-3.5 fill-current text-black"/>
          <span>{{ getCleanUrl(citation.fields.url) }}</span>
        </a>
      </div>
    </div>
  </div>
</template>