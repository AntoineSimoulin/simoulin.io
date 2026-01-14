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
  <div class="w-full md:w-1/2 lg:w-1/3 flex p-2" data-aos="fade-up" data-aos-delay="400">
    <NuxtLink class="no-underline block w-full p-6 flex flex-col justify-between bg-blue-600 text-white mb-3 shadow-md rounded-lg hover:shadow-xl transition-shadow" :to="href">
      <div>
        <h2 class="text-2xl font-bold">{{ title }}</h2>
      </div>
    </NuxtLink>
  </div>
</template>