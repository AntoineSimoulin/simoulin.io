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
    <div class="py-4">
        <div class="w-full lg:w-8/12 md:w-full mb-6">
          <h1 class="font-extrabold text-4xl pb-3 text-black tracking-tight">
            Materials I developed to <mark class="bg-emerald-100 text-black px-2.5 py-0.5 border-2 border-black rounded-xl inline-block -rotate-1">share my knowledge</mark>.
          </h1>
          <p class="text-base pb-2 leading-relaxed font-medium text-black">
            Here are some of the teaching materials and courses I developed.
          </p>
        </div>
        <div class="flex flex-wrap -mx-3">
          <Course :title="project.title" :abstract="project.abstract" :href="project.href" v-for="project in projects" />
        </div>
      </div>
    </section>
</template>