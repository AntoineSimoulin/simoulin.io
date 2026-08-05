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
    <div class="w-full bg-white border-2 border-black shadow-[5px_5px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] transition-all duration-200 rounded-2xl p-5 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-4 mb-4">
          <a target="_blank" :href="href" class="block shrink-0">
            <div class="w-14 h-14 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] overflow-hidden bg-yellow-100 flex items-center justify-center">
              <img
                :src="image"
                alt="Project image"
                class="w-full h-full object-cover"
              />
            </div>
          </a>
          <div>
            <a class="no-underline text-black hover:text-blue-600" target="_blank" :href="href">
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
          class="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black shadow-[2px_2px_0px_#000] hover:shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all"
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
