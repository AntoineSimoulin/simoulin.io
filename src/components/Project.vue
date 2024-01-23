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
  <div class="col-md-6 col-lg-4 d-flex pb-4">
    <div class="rounded-3 cursor-pointer-hover gray p-2">
      <a target="_blank" :href="href">
        <img
          :src="image"
          alt="Image"
          class="img-thumbnail img-fluid rounded-circle img-thumbnail bg-white"
          width="72"
        />
      </a>
      <div class="d-flex flex-column text-left">
        <div class="d-flex justify-content-between mb-3"></div>
        <a class="text-decoration-none" target="_blank" :href="href">
          <h4 class="text-dark">{{ title }}</h4>
        </a>
        <p>
          {{ abstract }}
        </p>
        <div class="d-flex py-2">
          <a
            :href="href"
            target="_blank"
            class="text-decoration-none text-dark"
          >
            <LinkIcon />
            <span class="text-secondary">{{ this.getCleanUrl() }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gray:hover {
  background: #938b8b21;
}
</style>>
