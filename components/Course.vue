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
  <div class="w-full md:w-1/2 lg:w-1/3 flex pb-6 px-3">
    <NuxtLink class="no-underline block w-full p-6 bg-emerald-100/90 hover:bg-emerald-200/90 text-black border-2 border-black hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000] transition-all duration-200 rounded-2xl flex flex-col justify-between" :to="href">
      <div>
        <h2 class="text-2xl font-black text-black tracking-tight mb-2">{{ title }}</h2>
        <p v-if="abstract" class="text-sm font-bold text-black/80 leading-relaxed">{{ abstract }}</p>
      </div>
      <div class="mt-5 inline-flex items-center gap-1.5 font-extrabold text-xs bg-white text-black border-2 border-black px-3.5 py-1.5 rounded-xl shadow-[1.5px_1.5px_0px_#000] w-max">
        Explore Material <i class="fas fa-arrow-right ml-1"></i>
      </div>
    </NuxtLink>
  </div>
</template>