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
  <div class="w-full md:w-1/2 lg:w-1/3 flex pb-4 px-2">
    <div class="card w-full bg-transparent border-0 shadow-none hover:bg-base-300 transition-all duration-200">
      <div class="card-body">
        <div class="flex items-start gap-4">
          <a target="_blank" :href="href" class="avatar">
            <div class="w-16 rounded-full ring-1 ring-gray-200 ring-offset-base-100 ring-offset-2">
              <img
                :src="image"
                alt="Image"
              />
            </div>
          </a>
          <div class="flex-1">
             <a class="no-underline hover:link hover:text-blue-600" target="_blank" :href="href">
              <h2 class="card-title text-xl mb-2">{{ title }}</h2>
            </a>
            <p class="text-base-content/70 mb-4 text-sm">
              {{ abstract }}
            </p>
            <div class="card-actions">
              <a
                :href="href"
                target="_blank"
                class="btn btn-sm btn-ghost gap-2 pl-0 hover:bg-transparent hover:text-blue-600 hover:shadow-none shadow-none normal-case font-normal"
              >
                <LinkIcon />
                <span class="opacity-70">{{ getCleanUrl() }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
