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
            image: '../assets/img/gpt-fr.png',
        },
        {
            title: 'Pytree',
            abstract: 'PyTree implements tree-structured neural networks in PyTorch. The package provides highly generic implementations as well as efficient batching methods.',
            href: 'https://github.com/AntoineSimoulin/pytree',
            image: '../assets/img/pytree.png',
        },
        {
            title: 'Sentence embedding model',
            abstract: 'Sentence embedding pre-trained model trained on 1B sentence pairs during the Community week using JAX/Flax for NLP & CV, organized by Hugging Face.',
            href: 'https://huggingface.co/flax-sentence-embeddings',
            image: '../assets/img/sbert.png',
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
<section class="pb-0 py-lg-5">
    <div class="container p-3">
        <div class="col-xl-8 col-lg-8 col-md-12 col-12">
          <h1 class="fw-bold pb-4">Stuff I’ve created to leave my mark on the world.</h1>
          <p class="fs-6  pb-4 lh-md fw-light">
            Here are some of the projects I'm proudest of. Many are open-source, so if you see something that catches your eye, feel free to investigate and contribute!
          </p>
        </div>
        <div class="row">
          <Project :title="project.title" :abstract="project.abstract" :href="project.href" :image="project.image" v-for="project in projects" />
        </div>
      </div>
    </section>
</template>