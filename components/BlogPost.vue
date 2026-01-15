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
    <div class="card w-full bg-base-100 shadow-sm hover:shadow-xl transition-shadow duration-200 h-full border border-base-200">
      <a target="_blank" :href="citation.fields.url" class="block group">
        <figure class="px-4 pt-4">
          <img :src="citation.fields.thumbnail" alt="Image"
            class="rounded-xl h-48 w-full object-cover group-hover:opacity-90 transition-opacity" />
        </figure>
      </a>
      <div class="card-body">
        <div class="text-xs text-base-content/60 flex mb-2">
            <span>{{ formatMonth(citation.fields.month) }} {{ citation.fields.year }}</span>
        </div>
        <a class="no-underline hover:link hover:link-primary" target="_blank" :href="citation.fields.url">
            <h2 class="card-title text-lg font-bold">{{ citation.fields.title }}</h2>
        </a>
        <p v-if="'abstract' in citation.fields" class="text-base-content/70 text-sm line-clamp-3 mb-4">
            {{ citation.fields.abstract }}
        </p>
        <div class="card-actions justify-end mt-auto">
             <a
            :href="citation.fields.url"
            target="_blank"
            class="btn btn-xs btn-ghost gap-2 pl-0 hover:bg-transparent hover:text-primary normal-case font-normal"
          >
            <LinkIcon class="w-3 h-3"/>
            <span class="opacity-70 text-xs">{{ getCleanUrl(citation.fields.url) }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="w-full md:w-1/2 lg:w-1/3 flex p-4" data-aos="fade-up" data-aos-delay="400">
     <div class="card w-full bg-primary text-primary-content shadow-sm hover:shadow-xl transition-shadow duration-200 h-full">
      <div class="card-body justify-between">
        <div>
           <div class="text-xs text-primary-content/80 flex mb-2">
              <span>{{ formatMonth(citation.fields.month) }} {{ citation.fields.year }}</span>
            </div>
            <a target="_blank" :href="citation.fields.url" class="no-underline hover:text-white/90 transition-colors">
              <h2 class="card-title text-xl font-bold mb-2">{{ citation.fields.title }}</h2>
            </a>
        </div>
         <div class="card-actions justify-start">
             <div class="flex items-center gap-2 text-sm opacity-90">
                <LinkIcon class="w-4 h-4 fill-current"/> {{ getCleanUrl(citation.fields.url) }}
            </div>
        </div>
      </div>
    </div>
  </div>
</template>