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
  <div class="w-full md:w-1/2 lg:w-1/3 flex pb-4">
    <div class="w-full rounded-xl hover:bg-gray-100 p-4 transition-colors duration-200">
      <a target="_blank" :href="href">
        <img
          :src="image"
          alt="Image"
          class="p-1 rounded-full bg-white border border-gray-200 shadow-sm max-w-full h-auto mb-4"
          width="72"
        />
      </a>
      <div class="flex flex-col text-left">
        <div class="flex justify-between mb-3"></div>
        <a class="no-underline" target="_blank" :href="href">
          <h4 class="text-gray-900 font-bold text-xl mb-2">{{ title }}</h4>
        </a>
        <p class="text-gray-600 mb-4">
          {{ abstract }}
        </p>
        <div class="flex py-2">
          <a
            :href="href"
            target="_blank"
            class="no-underline text-gray-500 flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <LinkIcon />
            <span class="text-gray-500">{{ getCleanUrl() }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>>
