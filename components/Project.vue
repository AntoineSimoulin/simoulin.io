<script>
import LinkIcon from "../components/icons/iconLink.vue";

export default {
  components: {
    LinkIcon,
  },
  props: ["title", "abstract", "href", "image"],
  methods: {
    getCleanUrl() {
      return this.href.replace(/(^\w+:|^)\/\//, "");
    },
  },
};
</script>

<template>
  <div class="w-full md:w-1/2 lg:w-1/3 flex pb-6 px-3">
    <div class="w-full bg-white border-2 border-black hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000] transition-all duration-200 rounded-2xl p-5 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-4 mb-4">
          <a target="_blank" :href="href" class="block shrink-0">
            <div class="w-14 h-14 rounded-xl border-2 border-black overflow-hidden bg-indigo-50 flex items-center justify-center">
              <img
                :src="image"
                alt="Project image"
                class="w-full h-full object-cover"
              />
            </div>
          </a>
          <div>
            <a class="no-underline text-black hover:text-indigo-600" target="_blank" :href="href">
              <h2 class="text-xl font-extrabold tracking-tight leading-tight">{{ title }}</h2>
            </a>
          </div>
        </div>
        <p class="text-black/80 mb-4 text-sm leading-relaxed font-medium">
          {{ abstract }}
        </p>
      </div>
      <div class="pt-2">
        <a
          :href="href"
          target="_blank"
          class="inline-flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all"
        >
          <LinkIcon class="w-4 h-4 fill-current text-black" />
          <span>{{ getCleanUrl() }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
