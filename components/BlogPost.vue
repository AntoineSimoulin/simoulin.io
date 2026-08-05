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
  <div v-if="'thumbnail' in citation.fields" class="w-full md:w-1/2 lg:w-1/3 flex p-3">
    <div class="w-full bg-white border-2 border-black shadow-[5px_5px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] transition-all duration-200 rounded-2xl overflow-hidden flex flex-col justify-between">
      <a target="_blank" :href="citation.fields.url" class="block group overflow-hidden border-b-2 border-black">
        <img :src="citation.fields.thumbnail" alt="Post thumbnail"
          class="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </a>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="mb-2">
            <span class="bg-purple-200 text-black border border-black px-2.5 py-0.5 rounded-md text-xs font-extrabold">
              {{ formatMonth(citation.fields.month) }} {{ citation.fields.year }}
            </span>
          </div>
          <a class="no-underline text-black hover:text-purple-600" target="_blank" :href="citation.fields.url">
            <h2 class="text-lg font-black tracking-tight mb-2 leading-tight">{{ citation.fields.title }}</h2>
          </a>
          <p v-if="'abstract' in citation.fields" class="text-black/80 text-sm font-medium line-clamp-3 mb-4">
            {{ citation.fields.abstract }}
          </p>
        </div>
        <div class="pt-2">
          <a
            :href="citation.fields.url"
            target="_blank"
            class="inline-flex items-center gap-1.5 bg-purple-300 hover:bg-purple-400 text-black border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all no-underline"
          >
            <LinkIcon class="w-3.5 h-3.5 fill-current text-black"/>
            <span>{{ getCleanUrl(citation.fields.url) }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="w-full md:w-1/2 lg:w-1/3 flex p-3">
    <div class="w-full bg-purple-300 text-black border-2 border-black shadow-[5px_5px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] transition-all duration-200 rounded-2xl p-6 flex flex-col justify-between">
      <div>
        <div class="mb-3">
          <span class="bg-white text-black border border-black px-2.5 py-0.5 rounded-md text-xs font-black shadow-[1px_1px_0px_#000]">
            {{ formatMonth(citation.fields.month) }} {{ citation.fields.year }}
          </span>
        </div>
        <a target="_blank" :href="citation.fields.url" class="no-underline text-black hover:underline">
          <h2 class="text-xl font-black tracking-tight mb-3 leading-tight">{{ citation.fields.title }}</h2>
        </a>
      </div>
      <div class="pt-4">
        <a
          :href="citation.fields.url"
          target="_blank"
          class="inline-flex items-center gap-1.5 bg-white text-black border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all no-underline"
        >
          <LinkIcon class="w-4 h-4 fill-current text-black"/>
          <span>{{ getCleanUrl(citation.fields.url) }}</span>
        </a>
      </div>
    </div>
  </div>
</template>