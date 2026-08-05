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
    <div class="w-full bg-white border-2 border-black hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000] transition-all duration-200 rounded-2xl p-6 flex flex-col justify-between">
      <div>
        <div class="mb-4">
          <a target="_blank" :href="href" class="inline-flex items-center gap-3 bg-yellow-100 hover:bg-yellow-200 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 rounded-full p-1.5 pr-4 transition-all no-underline text-black">
            <div class="w-10 h-10 rounded-full border-2 border-black bg-white p-1 flex items-center justify-center shrink-0 overflow-hidden">
              <img
                :src="image"
                :alt="title"
                class="max-w-full max-h-full object-contain rounded-full"
              />
            </div>
            <h2 class="text-base sm:text-lg font-black tracking-tight leading-snug text-black">{{ title }}</h2>
          </a>
        </div>
        <p class="text-black/80 mb-4 text-sm leading-relaxed font-medium">
          {{ abstract }}
        </p>
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
