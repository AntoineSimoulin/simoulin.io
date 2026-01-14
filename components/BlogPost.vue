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
  <div v-if="'thumbnail' in citation.fields" class="w-full md:w-1/2 lg:w-1/3 flex p-4" data-aos="fade-up" data-aos-delay="400">
    <div class="w-full flex flex-col bg-white mb-3 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
        <a target="_blank" :href="citation.fields.url" class="block group">
            <img :src="citation.fields.thumbnail" alt="Image"
                class="w-full h-48 object-cover group-hover:opacity-95 transition-opacity">
        </a>
        <div class="p-6 flex flex-col flex-grow">
            <div class="flex justify-between mb-3">
                <div class="text-sm flex">
                    <span class="text-gray-500">{{ formatMonth(citation.fields.month) }} {{ citation.fields.year }}</span>
                </div>
            </div>
            <a class="no-underline block mb-3" target="_blank" :href="citation.fields.url">
                <h4 class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">{{ citation.fields.title }}</h4>
            </a>
            <p v-if="'abstract' in citation.fields" class="flex-grow text-gray-600 mb-4 line-clamp-3 text-sm">
                {{ citation.fields.abstract }}
            </p>
            <div class="mt-auto flex items-center gap-2">
              <LinkIcon class="w-4 h-4 text-gray-400"/> <span class="text-xs text-gray-500">{{ getCleanUrl(citation.fields.url) }}</span>
            </div>

        </div>
        
    </div>
  </div>
  <div v-else class="w-full md:w-1/2 lg:w-1/3 flex p-4" data-aos="fade-up" data-aos-delay="400">
    <a target="_blank" :href="citation.fields.url"
    class="no-underline w-full p-6 flex flex-col justify-between bg-blue-600 text-white mb-3 shadow-md rounded-lg hover:shadow-xl transition-shadow">
      <div class="flex justify-between mb-3">
        <div class="text-sm flex">
            <span class="opacity-80">{{ formatMonth(citation.fields.month) }} {{ citation.fields.year }}</span>
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-bold mb-2">{{ citation.fields.title }}</h2>
        <div class="flex items-center gap-2">
            <LinkIcon fill="white" class="w-4 h-4"/> <span class="text-sm opacity-80">{{ getCleanUrl(citation.fields.url) }}</span>
        </div>
      </div>
    </a>
  </div>
</template>