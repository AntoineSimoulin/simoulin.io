<script>
import { parse } from "@retorquere/bibtex-parser";
import Cite from "citation-js";
import Citation from "../components/Citation.vue";
import Talk from "../components/Talk.vue";
import bibString from '@/assets/simoulin.bib?raw';
import talksString from '@/assets/talks.bib?raw';

export default {
  components: {
    Citation,
    Talk
  },
  data() {
    return {
      bib: bibString,
      talks: talksString,
      activeTab: 'publications', // 'publications' | 'talks' | 'awards'
    };
  },
  methods: {
    getBibEntries(bibFile) {
      let bib = parse(bibFile);
      return bib
    },
    groupByYear(bib) {
      let groupByYear = bib.entries.reduce((group, ref) => {
        const year = ref['fields']['year'];
        group[year] = group[year] ?? [];
        group[year].push(ref);
        return group;
      }, {});
      return groupByYear
    },
    setActiveTab(tab) {
        this.activeTab = tab;
    }
  },
  created () {
    this.bib = this.getBibEntries(this.bib);
    this.bib = this.groupByYear(this.bib);

    this.talks = this.getBibEntries(this.talks);
    this.talks = this.groupByYear(this.talks);
  }
};
</script>

<template>
  <section class="pb-0 lg:py-6">
    <div>
      <div class="w-full">
        <div class="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
            <!-- Tabs -->
            <!-- Tabs -->
            <div role="tablist" class="tabs tabs-bordered w-full bg-white px-6 py-4 border-b-2 border-base-200">
                <a role="tab" :class="['tab tab-bordered text-sm px-6 h-auto py-3 hover:bg-base-200 transition-colors duration-200 rounded-lg', activeTab === 'publications' ? 'tab-active text-blue-600 bg-blue-50' : '']" @click="setActiveTab('publications')">Publications</a>
                <a role="tab" :class="['tab tab-bordered text-sm px-6 h-auto py-3 hover:bg-base-200 transition-colors duration-200 rounded-lg', activeTab === 'talks' ? 'tab-active text-blue-600 bg-blue-50' : '']" @click="setActiveTab('talks')">Talks and Presentations</a>
                <a role="tab" :class="['tab tab-bordered text-sm px-6 h-auto py-3 hover:bg-base-200 transition-colors duration-200 rounded-lg', activeTab === 'awards' ? 'tab-active text-blue-600 bg-blue-50' : '']" @click="setActiveTab('awards')">Awards and Services</a>
            </div>

            <!-- Content -->
            <div class="p-6 bg-white min-h-[400px]">
                <!-- Publications -->
                <div v-if="activeTab === 'publications'">
                    <div class="mb-6" v-for="year in Object.keys(bib).reverse()" :key="year">
                        <h5 class="mb-3 text-lg font-bold text-gray-900">{{ year }}</h5>
                        <div class="text-sm text-gray-700 capitalize mb-4" v-for="ref in bib[year]" :key="ref.key">
                            <Citation :citation="ref"/>
                        </div>
                    </div>  
                </div>

                <!-- Talks -->
                <div v-if="activeTab === 'talks'">
                    <div class="mb-6" v-for="year in Object.keys(talks).reverse()" :key="year">
                        <h5 class="mb-3 text-lg font-bold text-gray-900">{{ year }}</h5>
                        <div class="text-sm text-gray-700 capitalize mb-4" v-for="ref in talks[year]" :key="ref.key">
                             <Talk :citation="ref"/> 
                        </div>
                    </div>
                </div>

                <!-- Awards -->
                <div v-if="activeTab === 'awards'">
                    <ul class="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Reviewer <a class="no-underline capitalize text-blue-600 hover:text-blue-800" href="https://openreview.net/group?id=NeurIPS.cc/2025/Conference#tab-your-consoles">Neurips 2025</a>;</li>
                        <li>Reviewer <a class="no-underline capitalize text-blue-600 hover:text-blue-800" href="https://openreview.net/group?id=aclweb.org/ACL/2025/SRW">ACL-SRW 2025</a>;</li>
                        <li>Reviewer EMNLP 2024 (<a class="no-underline capitalize text-blue-600 hover:text-blue-800" href="https://openreview.net/group?id=aclweb.org/ACL/ARR/2024/June">ACL June 2024 ARR</a>);</li>
                        <li>Reviewer <a class="no-underline capitalize text-blue-600 hover:text-blue-800" href="https://openreview.net/group?id=ICML.cc/2024/Workshop/ES-FoMo-II">ES-FOMO-II 2024</a>;</li>
                        <li>Reviewer ACL 2024 (<a class="no-underline capitalize text-blue-600 hover:text-blue-800" href="https://openreview.net/group?id=aclweb.org/ACL/ARR/2024/February">ACL February 2024 ARR</a>);</li>
                        <li>Reviewer <a class="no-underline capitalize text-blue-600 hover:text-blue-800" href="https://openreview.net/group?id=NeurIPS.cc/2023/Track/Datasets_and_Benchmarks">Neurips Datasets and Benchmarks 2023</a>;</li>
                        <li>Reviewer ACL 2020;</li>
                        <li>Reviewer EMNLP 2020;</li>
                        <li>
                            Hackathon Winner. PyTree, a PyTorch package for recursive neural networks.
                            <a class="no-underline capitalize text-blue-600 hover:text-blue-800" href="https://devpost.com/software/pytree">PyTorch Annual Hackathon 2021</a>
                        </li>
                        <li>
                            Hackathon Winner. Train the Best Sentence Embedding Model Ever with 1B Training Pairs.
                            <a class="no-underline capitalize text-blue-600 hover:text-blue-800" href="https://discuss.huggingface.co/t/train-the-best-sentence-embedding-model-ever-with-1b-training-pairs/7354">Hugging Face Community week using JAX/Flax for NLP & CV 2021</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>