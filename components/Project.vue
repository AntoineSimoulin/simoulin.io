<script>
import LinkIcon from "../components/icons/iconLink.vue";

export default {
  components: {
    LinkIcon,
  },
  props: ["title", "abstract", "href", "index"],
  computed: {
    badgeColorClass() {
      const colors = ['bg-yellow-300', 'bg-pink-300', 'bg-purple-300', 'bg-emerald-300', 'bg-blue-300'];
      return colors[(this.index || 0) % colors.length];
    }
  },
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
          <a target="_blank" :href="href" class="inline-block no-underline text-black">
            <mark :class="['text-black font-black text-base sm:text-lg px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000] rounded-xl inline-block -rotate-1 hover:rotate-0 transition-transform', badgeColorClass]">
              {{ title }}
            </mark>
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
