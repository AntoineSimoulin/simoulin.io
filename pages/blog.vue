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
  created () {
    this.blogPosts = this.getBibEntries(this.blogPosts);
    // console.log(this.blogPosts);
  }
};
</script>

<template>
  <section class="pb-0 lg:py-6 w-full min-w-0">
    <div class="w-full min-w-0">
      <div class="w-full mb-6">
        <h1 class="font-extrabold text-3xl sm:text-4xl pb-3 text-black tracking-tight leading-tight">
          Articles & thoughts on <mark class="bg-purple-100 text-black px-2.5 py-0.5 border-2 border-black rounded-xl inline-block rotate-1">AI, NLP & Tech</mark>.
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-dense mb-8 w-full min-w-0">
        <BlogPost v-for="(ref, index) in blogPosts.entries" :key="ref.id" :citation="ref" :index="index" />
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