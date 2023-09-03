<script>
import Course from '../components/Course.vue'

export default {
  components: {
    Course,
  },
  data() {
    return {
      'projects': [
        {
            title: 'NLP 101',
            abstract: 'Introduction to statistical methods for Natural Language Processing.',
            href: '/nlp-101',
        },
        {
            title: 'Cracking the coding interview',
            abstract: 'Resources for efficient coding.',
            href: '/coding-101',
        },
        {
            title: 'Cracking the ML interview',
            abstract: 'Introduciton to machine learning.',
            href: '/ml-101',
        }
      ]
    }
  },
}
</script>

<template>
    <section class="pb-0 py-lg-5">
    <div class="container p-3">
        <div class="col-xl-8 col-lg-8 col-md-12 col-12">
          <h1 class="fw-bold pb-4">Materials I developped to share my knowledge.</h1>
          <p class="fs-6  pb-4 lh-md fw-light">
            Here are some of teaching materials I developped.
          </p>
        </div>
        <div class="row">
          <Course :title="project.title" :abstract="project.abstract" :href="project.href" v-for="project in projects" />
        </div>
      </div>
    </section>
</template>