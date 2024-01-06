<script>
import LinkIcon from "../components/icons/iconLink.vue";


export default {
  props: ['citation'],
  components: {
    LinkIcon,
  },
  // created() {
  //   console.log(this.citation);
  // },
  methods: {
    getCleanUrl(href) {
      return href.replace(/(^\w+:|^)\/\/(?:www\.)?/, "").split('/')[0];
    },
  },
}
</script>

<template>
  <div v-if="'thumbnail' in this.citation.fields" class="col-md-6 col-lg-4 d-flex aos-init aos-animate article" data-aos="fade-up" data-aos-delay="400">
    <div class="card mb-3 shadow border-0 rounded-2">
        <a target="_blank" :href="this.citation.fields.url">
            <img :src="this.citation.fields.thumbnail[0]" alt="Image"
                class="card-img-top">
        </a>
        <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between mb-3">
                <div class="text-small d-flex">
                    <span class="text-muted">{{ this.citation.fields.month[0] }} {{ this.citation.fields.year[0] }}</span>
                </div>
            </div>
            <a class="text-decoration-none" target="_blank" :href="this.citation.fields.url[0]">
                <h4 class="text-dark">{{ this.citation.fields.title[0] }}</h4>
            </a>
            <p v-if="'abstract' in this.citation.fields" class="flex-grow-1">
                {{ this.citation.fields.abstract[0] }}
            </p>
            <div>
              <LinkIcon/> <span class="text-small opacity-70">{{ this.getCleanUrl(this.citation.fields.url[0]) }}</span>
            </div>

        </div>
        
    </div>
  </div>
  <div v-else class="col-md-6 col-lg-4 d-flex aos-init aos-animate article" data-aos="fade-up" data-aos-delay="400">
    <a target="_blank" :href="this.citation.fields.url"
    class="text-decoration-none card card-body justify-content-between bg-primary text-light mb-3 shadow border-0 rounded-2">
      <div class="d-flex justify-content-between mb-3">
        <div class="text-small d-flex">
            <span class="opacity-70">{{ this.citation.fields.month[0] }} {{ this.citation.fields.year[0] }}</span>
        </div>
      </div>
      <div>
        <h2>{{ this.citation.fields.title[0] }}</h2>
        <LinkIcon fill="white"/> <span class="text-small opacity-70">{{ this.getCleanUrl(this.citation.fields.url[0]) }}</span>
      </div>
    </a>
  </div>


  

</template>