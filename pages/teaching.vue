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
        },
        {
            title: 'NLP 102',
            abstract: 'Introduction to statistical methods for Natural Language Processing.',
            href: '/nlp-102',
        },
      ]
    }
  },
}
</script>

<template>
    <section class="pb-0 lg:py-6">
    <div class="container mx-auto px-8 lg:px-32 py-4">
        <div class="w-full lg:w-8/12 md:w-full">
          <h1 class="font-bold text-4xl pb-4">Materials I developped to share my knowledge.</h1>
          <p class="text-base pb-4 leading-relaxed font-light text-gray-700">
            Here are some of teaching materials I developped.
          </p>
        </div>
        <div class="flex flex-wrap -mx-2">
          <Course :title="project.title" :abstract="project.abstract" :href="project.href" v-for="project in projects" />
        </div>
      </div>
    </section>
</template>