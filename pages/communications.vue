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
        <div class="bg-white border-2 border-black shadow-[3px_3px_0px_#000] rounded-2xl overflow-hidden">
            <!-- Tabs -->
            <div role="tablist" class="flex flex-wrap gap-2 bg-yellow-100 p-4 border-b-2 border-black">
                <button
                  role="tab"
                  :class="['px-5 py-2.5 rounded-xl font-extrabold text-sm border-2 border-black transition-all cursor-pointer', activeTab === 'publications' ? 'bg-yellow-300 shadow-[2.5px_2.5px_0px_#000] -translate-y-0.5' : 'bg-white hover:bg-yellow-200 shadow-[1px_1px_0px_#000]']"
                  @click="setActiveTab('publications')"
                >
                  📄 Publications
                </button>
                <button
                  role="tab"
                  :class="['px-5 py-2.5 rounded-xl font-extrabold text-sm border-2 border-black transition-all cursor-pointer', activeTab === 'talks' ? 'bg-pink-300 shadow-[2.5px_2.5px_0px_#000] -translate-y-0.5' : 'bg-white hover:bg-pink-200 shadow-[1px_1px_0px_#000]']"
                  @click="setActiveTab('talks')"
                >
                  🎤 Talks & Presentations
                </button>
                <button
                  role="tab"
                  :class="['px-5 py-2.5 rounded-xl font-extrabold text-sm border-2 border-black transition-all cursor-pointer', activeTab === 'awards' ? 'bg-purple-300 shadow-[2.5px_2.5px_0px_#000] -translate-y-0.5' : 'bg-white hover:bg-purple-200 shadow-[1px_1px_0px_#000]']"
                  @click="setActiveTab('awards')"
                >
                  🏆 Awards & Services
                </button>
            </div>

            <!-- Content -->
            <div class="p-6 bg-white min-h-[400px]">
                <!-- Publications -->
                <div v-show="activeTab === 'publications'">
                    <div class="mb-8" v-for="year in Object.keys(bib).reverse()" :key="year">
                        <div class="inline-block bg-blue-300 text-black border-2 border-black px-4 py-1 rounded-xl font-extrabold text-base shadow-[2px_2px_0px_#000] mb-4 -rotate-1">
                          {{ year }}
                        </div>
                        <div class="text-sm text-black mb-4" v-for="ref in bib[year]" :key="ref.key">
                            <Citation :citation="ref"/>
                        </div>
                    </div>  
                </div>

                <!-- Talks -->
                <div v-show="activeTab === 'talks'">
                    <div class="mb-8" v-for="year in Object.keys(talks).reverse()" :key="year">
                        <div class="inline-block bg-pink-300 text-black border-2 border-black px-4 py-1 rounded-xl font-extrabold text-base shadow-[2px_2px_0px_#000] mb-4 rotate-1">
                          {{ year }}
                        </div>
                        <div class="text-sm text-black mb-4" v-for="ref in talks[year]" :key="ref.key">
                             <Talk :citation="ref"/> 
                        </div>
                    </div>
                </div>

                <!-- Awards -->
                <div v-show="activeTab === 'awards'" class="space-y-6">
                    <!-- Reviewing Services Card -->
                    <div class="p-6 bg-emerald-50 border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000]">
                        <h3 class="text-xl font-black text-black mb-4 flex items-center gap-2">
                            🎓 Academic Reviewing Services
                        </h3>
                        <div class="flex flex-wrap gap-2.5">
                            <a class="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-100 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3.5 py-2 rounded-xl text-sm font-bold no-underline transition-all" href="https://openreview.net/group?id=thecvf.com/ECCV/2026/Conference" target="_blank">
                                <span class="font-black text-emerald-700">Reviewer:</span> ECCV 2026
                            </a>
                            <a class="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-100 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3.5 py-2 rounded-xl text-sm font-bold no-underline transition-all" href="https://openreview.net/group?id=NeurIPS.cc/2025/Conference#tab-your-consoles" target="_blank">
                                <span class="font-black text-emerald-700">Reviewer:</span> NeurIPS 2025
                            </a>
                            <a class="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-100 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3.5 py-2 rounded-xl text-sm font-bold no-underline transition-all" href="https://openreview.net/group?id=aclweb.org/ACL/2025/SRW" target="_blank">
                                <span class="font-black text-emerald-700">Reviewer:</span> ACL-SRW 2025
                            </a>
                            <a class="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-100 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3.5 py-2 rounded-xl text-sm font-bold no-underline transition-all" href="https://openreview.net/group?id=aclweb.org/ACL/ARR/2024/June" target="_blank">
                                <span class="font-black text-emerald-700">Reviewer:</span> EMNLP 2024 (ACL ARR)
                            </a>
                            <a class="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-100 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3.5 py-2 rounded-xl text-sm font-bold no-underline transition-all" href="https://openreview.net/group?id=ICML.cc/2024/Workshop/ES-FoMo-II" target="_blank">
                                <span class="font-black text-emerald-700">Reviewer:</span> ES-FOMO-II 2024
                            </a>
                            <a class="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-100 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3.5 py-2 rounded-xl text-sm font-bold no-underline transition-all" href="https://openreview.net/group?id=aclweb.org/ACL/ARR/2024/February" target="_blank">
                                <span class="font-black text-emerald-700">Reviewer:</span> ACL 2024 (ACL ARR)
                            </a>
                            <a class="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-100 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3.5 py-2 rounded-xl text-sm font-bold no-underline transition-all" href="https://openreview.net/group?id=NeurIPS.cc/2023/Track/Datasets_and_Benchmarks" target="_blank">
                                <span class="font-black text-emerald-700">Reviewer:</span> NeurIPS 2023 Datasets
                            </a>
                            <span class="inline-flex items-center gap-1.5 bg-white text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] px-3.5 py-2 rounded-xl text-sm font-bold">
                                <span class="font-black text-emerald-700">Reviewer:</span> ACL 2020 & EMNLP 2020
                            </span>
                        </div>
                    </div>

                    <!-- Hackathons & Awards Card -->
                    <div class="p-6 bg-yellow-100 border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000]">
                        <h3 class="text-xl font-black text-black mb-4 flex items-center gap-2">
                            🏆 Hackathon Awards
                        </h3>
                        <div class="space-y-3">
                            <div class="p-4 bg-white border-2 border-black rounded-xl shadow-[1.5px_1.5px_0px_#000]">
                                <div class="font-black text-black text-base mb-1">
                                    PyTree: PyTorch Package for Recursive Neural Networks
                                </div>
                                <p class="text-sm font-medium text-black/80 mb-2">
                                    PyTree implements tree-structured neural networks in PyTorch with generic implementations and efficient batching methods.
                                </p>
                                <a class="inline-flex items-center gap-1.5 bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black shadow-[1px_1px_0px_#000] px-3 py-1 rounded-lg font-bold text-xs no-underline transition-all" href="https://devpost.com/software/pytree" target="_blank">
                                    🏆 Winner — PyTorch Annual Hackathon 2021
                                </a>
                            </div>
                            
                            <div class="p-4 bg-white border-2 border-black rounded-xl shadow-[1.5px_1.5px_0px_#000]">
                                <div class="font-black text-black text-base mb-1">
                                    1B Sentence Pair Embedding Model
                                </div>
                                <p class="text-sm font-medium text-black/80 mb-2">
                                    Train the Best Sentence Embedding Model Ever with 1B Training Pairs during Hugging Face Community Week (JAX/Flax).
                                </p>
                                <a class="inline-flex items-center gap-1.5 bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black shadow-[1px_1px_0px_#000] px-3 py-1 rounded-lg font-bold text-xs no-underline transition-all" href="https://discuss.huggingface.co/t/train-the-best-sentence-embedding-model-ever-with-1b-training-pairs/7354" target="_blank">
                                    🏆 Winner — Hugging Face Community Week 2021
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>