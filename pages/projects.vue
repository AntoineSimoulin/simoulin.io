<script>
import Project from '../components/Project.vue'

export default {
  components: {
    Project,
  },
  data() {
    return {
      'projects': [
        {
            title: 'GPT-fr',
            abstract: 'Large pre-trained language model for French. The base version, equivalent to OpenAI GPT in English, includes above one billion parameters.',
            href: 'https://huggingface.co/asi/gpt-fr-cased-small',
            image: '/gpt-fr.png',
        },
        {
            title: 'Pytree',
            abstract: 'PyTree implements tree-structured neural networks in PyTorch. The package provides highly generic implementations as well as efficient batching methods.',
            href: 'https://github.com/AntoineSimoulin/pytree',
            image: '/pytree.png',
        },
        {
            title: 'Sentence embedding model',
            abstract: 'Sentence embedding pre-trained model trained on 1B sentence pairs during the Community week using JAX/Flax for NLP & CV, organized by Hugging Face.',
            href: 'https://huggingface.co/flax-sentence-embeddings',
            image: '/sbert.png',
        },
        {
            title: 'Melusine',
            abstract: 'Melusine is a high-level Python library for email classification and feature extraction developed by Quantmetry and MAIF.',
            href: 'https://github.com/MAIF/melusine',
            image: 'https://github.com/MAIF/melusine/raw/master/docs/_static/melusine.png',
        }
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
            Stuff I’ve created to leave my <mark class="bg-indigo-100 text-black px-2.5 py-0.5 border-2 border-black rounded-xl inline-block rotate-1">mark on the world</mark>.
          </h1>
          <p class="text-base pb-2 leading-relaxed font-medium text-black">
            Here are some of the projects I'm proudest of. Many are open-source, so if you see something that catches your eye, feel free to investigate and contribute!
          </p>
        </div>
        <div class="flex flex-wrap -mx-3">
          <Project :title="project.title" :abstract="project.abstract" :href="project.href" :image="project.image" v-for="project in projects" />
        </div>
      </div>
    </section>
</template>