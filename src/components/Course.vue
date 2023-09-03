<script>
import LinkIcon from "../components/icons/iconLink.vue";


export default {
  props: ['title', 'abstract', 'href'],
  components: {
    LinkIcon,
  },
  // created() {
  //   console.log(this.citation);
  // },
}
</script>

<template>
  <div class="col-md-6 col-lg-4 d-flex aos-init aos-animate article" data-aos="fade-up" data-aos-delay="400">
    <RouterLink class="text-decoration-none card card-body justify-content-between bg-primary text-light mb-3 shadow border-0 rounded-2" :to="href">
      <div>
        <h2>{{ this.title }}</h2>
      </div>
    </RouterLink>
  </div>
</template>