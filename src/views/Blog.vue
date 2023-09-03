<script>
import BlogPost from "../components/BlogPost.vue"
import blogPostsString from '@/assets/blog.bib?raw';
// import Cite from "citation-js";
import { parse } from "@retorquere/bibtex-parser";

export default {
  components: {
    BlogPost
  },
  // created() {
  //   console.log(this.blogPosts);
  // },
  data() {
    return {
      blogPosts: blogPostsString,
    };
  },
  methods: {
    getBibEntries(bibFile) {
      let bib = parse(bibFile);
      return bib
    },
  },
  beforeMount () {
    this.blogPosts = this.getBibEntries(this.blogPosts);
    // console.log(this.blogPosts);
  }
};
</script>

<template>
  <section class="pb-0 py-lg-5">
    <div class="container">
      <div class="row mb-4">
        <BlogPost v-for="ref in this.blogPosts.entries"  :citation="ref"/>
      </div>
    </div>
  </section>
</template>

<style>
.card {
    --bs-card-cap-bg: rgb(255, 255, 255);
}
.article:hover {
    opacity: 0.7;
}
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
</style>