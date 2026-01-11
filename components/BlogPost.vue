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
  <div v-if="'thumbnail' in citation.fields" class="col-md-6 col-lg-4 d-flex aos-init aos-animate article" data-aos="fade-up" data-aos-delay="400">
    <div class="card mb-3 shadow border-0 rounded-2">
        <a target="_blank" :href="citation.fields.url">
            <img :src="citation.fields.thumbnail" alt="Image"
                class="card-img-top">
        </a>
        <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between mb-3">
                <div class="text-small d-flex">
                    <span class="text-muted">{{ formatMonth(citation.fields.month) }} {{ citation.fields.year }}</span>
                </div>
            </div>
            <a class="text-decoration-none" target="_blank" :href="citation.fields.url">
                <h4 class="text-dark">{{ citation.fields.title }}</h4>
            </a>
            <p v-if="'abstract' in citation.fields" class="flex-grow-1">
                {{ citation.fields.abstract }}
            </p>
            <div>
              <LinkIcon/> <span class="text-small opacity-70">{{ getCleanUrl(citation.fields.url) }}</span>
            </div>

        </div>
        
    </div>
  </div>
  <div v-else class="col-md-6 col-lg-4 d-flex aos-init aos-animate article" data-aos="fade-up" data-aos-delay="400">
    <a target="_blank" :href="citation.fields.url"
    class="text-decoration-none card card-body justify-content-between bg-primary text-light mb-3 shadow border-0 rounded-2">
      <div class="d-flex justify-content-between mb-3">
        <div class="text-small d-flex">
            <span class="opacity-70">{{ formatMonth(citation.fields.month) }} {{ citation.fields.year }}</span>
        </div>
      </div>
      <div>
        <h2>{{ citation.fields.title }}</h2>
        <LinkIcon fill="white"/> <span class="text-small opacity-70">{{ getCleanUrl(citation.fields.url) }}</span>
      </div>
    </a>
  </div>


  

</template>