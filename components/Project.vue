<script>
import LinkIcon from "../components/icons/iconLink.vue";

export default {
  components: {
    LinkIcon,
  },
  props: ["title", "abstract", "href", "image", "tags"],
  methods: {
    getCleanUrl() {
      return this.href.replace(/(^\w+:|^)\/\//, "");
    },
  },
};
</script>

<template>
  <div class="w-full md:w-1/2 lg:w-1/3 flex pb-6 px-3">
    <div class="w-full bg-white border-2 border-black hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000] transition-all duration-200 rounded-2xl p-6 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-4 mb-4">
          <a target="_blank" :href="href" class="block shrink-0">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
              <img
                :src="image"
                :alt="title"
                class="max-w-full max-h-full object-contain"
              />
            </div>
          </a>
          <div>
            <a class="no-underline text-black hover:text-blue-600" target="_blank" :href="href">
              <h2 class="text-xl font-black tracking-tight leading-tight">{{ title }}</h2>
            </a>
          </div>
        </div>
        <p class="text-black/80 mb-4 text-sm leading-relaxed font-medium">
          {{ abstract }}
        </p>
        <div v-if="tags && tags.length" class="flex flex-wrap gap-1.5 mb-4">
          <span v-for="tag in tags" :key="tag" class="bg-yellow-100 text-black border border-black px-2 py-0.5 rounded-md text-xs font-bold shadow-[1px_1px_0px_#000]">
            {{ tag }}
          </span>
        </div>
      </div>
      <div class="pt-2">
        <a
          :href="href"
          target="_blank"
          class="inline-flex items-center gap-2 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all no-underline"
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
