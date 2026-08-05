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
            <div role="tablist" class="flex flex-wrap gap-2 bg-indigo-50/60 p-4 border-b-2 border-black">
                <button
                  role="tab"
                  :class="['px-5 py-2.5 rounded-xl font-extrabold text-sm border-2 border-black transition-all cursor-pointer', activeTab === 'publications' ? 'bg-indigo-100 shadow-[2px_2px_0px_#000] -translate-y-0.5' : 'bg-white hover:bg-white/80 shadow-[1px_1px_0px_#000]']"
                  @click="setActiveTab('publications')"
                >
                  📄 Publications
                </button>
                <button
                  role="tab"
                  :class="['px-5 py-2.5 rounded-xl font-extrabold text-sm border-2 border-black transition-all cursor-pointer', activeTab === 'talks' ? 'bg-purple-100 shadow-[2px_2px_0px_#000] -translate-y-0.5' : 'bg-white hover:bg-white/80 shadow-[1px_1px_0px_#000]']"
                  @click="setActiveTab('talks')"
                >
                  🎤 Talks & Presentations
                </button>
                <button
                  role="tab"
                  :class="['px-5 py-2.5 rounded-xl font-extrabold text-sm border-2 border-black transition-all cursor-pointer', activeTab === 'awards' ? 'bg-amber-100 shadow-[2px_2px_0px_#000] -translate-y-0.5' : 'bg-white hover:bg-white/80 shadow-[1px_1px_0px_#000]']"
                  @click="setActiveTab('awards')"
                >
                  🏆 Awards & Services
                </button>
            </div>

            <!-- Content -->
            <div class="p-6 bg-white min-h-[400px]">
                <!-- Publications -->
                <div v-if="activeTab === 'publications'">
                    <div class="mb-8" v-for="year in Object.keys(bib).reverse()" :key="year">
                        <div class="inline-block bg-indigo-100 text-black border-2 border-black px-4 py-1 rounded-xl font-extrabold text-base shadow-[1.5px_1.5px_0px_#000] mb-4 -rotate-1">
                          {{ year }}
                        </div>
                        <div class="text-sm text-black mb-4" v-for="ref in bib[year]" :key="ref.key">
                            <Citation :citation="ref"/>
                        </div>
                    </div>  
                </div>

                <!-- Talks -->
                <div v-if="activeTab === 'talks'">
                    <div class="mb-8" v-for="year in Object.keys(talks).reverse()" :key="year">
                        <div class="inline-block bg-purple-100 text-black border-2 border-black px-4 py-1 rounded-xl font-extrabold text-base shadow-[1.5px_1.5px_0px_#000] mb-4 rotate-1">
                          {{ year }}
                        </div>
                        <div class="text-sm text-black mb-4" v-for="ref in talks[year]" :key="ref.key">
                             <Talk :citation="ref"/> 
                        </div>
                    </div>
                </div>

                <!-- Awards -->
                <div v-if="activeTab === 'awards'">
                    <ul class="space-y-3 font-medium text-black">
                        <li class="p-3 bg-emerald-50 border-2 border-black rounded-xl shadow-[1.5px_1.5px_0px_#000] flex items-center gap-2">
                          <span class="font-black text-emerald-800">Reviewer:</span> <a class="font-bold underline hover:text-emerald-900" href="https://openreview.net/group?id=thecvf.com/ECCV/2026/Conference">ECCV 2026</a>
                        </li>
                        <li class="p-3 bg-emerald-50 border-2 border-black rounded-xl shadow-[1.5px_1.5px_0px_#000] flex items-center gap-2">
                          <span class="font-black text-emerald-800">Reviewer:</span> <a class="font-bold underline hover:text-emerald-900" href="https://openreview.net/group?id=NeurIPS.cc/2025/Conference#tab-your-consoles">Neurips 2025</a>
                        </li>
                        <li class="p-3 bg-emerald-50 border-2 border-black rounded-xl shadow-[1.5px_1.5px_0px_#000] flex items-center gap-2">
                          <span class="font-black text-emerald-800">Reviewer:</span> <a class="font-bold underline hover:text-emerald-900" href="https://openreview.net/group?id=aclweb.org/ACL/2025/SRW">ACL-SRW 2025</a>
                        </li>
                        <li class="p-3 bg-emerald-50 border-2 border-black rounded-xl shadow-[1.5px_1.5px_0px_#000] flex items-center gap-2">
                          <span class="font-black text-emerald-800">Reviewer:</span> EMNLP 2024 (<a class="font-bold underline hover:text-emerald-900" href="https://openreview.net/group?id=aclweb.org/ACL/ARR/2024/June">ACL June 2024 ARR</a>)
                        </li>
                        <li class="p-3 bg-emerald-50 border-2 border-black rounded-xl shadow-[1.5px_1.5px_0px_#000] flex items-center gap-2">
                          <span class="font-black text-emerald-800">Reviewer:</span> <a class="font-bold underline hover:text-emerald-900" href="https://openreview.net/group?id=ICML.cc/2024/Workshop/ES-FoMo-II">ES-FOMO-II 2024</a>
                        </li>
                        <li class="p-3 bg-emerald-50 border-2 border-black rounded-xl shadow-[1.5px_1.5px_0px_#000] flex items-center gap-2">
                          <span class="font-black text-emerald-800">Reviewer:</span> ACL 2024 (<a class="font-bold underline hover:text-emerald-900" href="https://openreview.net/group?id=aclweb.org/ACL/ARR/2024/February">ACL February 2024 ARR</a>)
                        </li>
                        <li class="p-3 bg-emerald-50 border-2 border-black rounded-xl shadow-[1.5px_1.5px_0px_#000] flex items-center gap-2">
                          <span class="font-black text-emerald-800">Reviewer:</span> <a class="font-bold underline hover:text-emerald-900" href="https://openreview.net/group?id=NeurIPS.cc/2023/Track/Datasets_and_Benchmarks">Neurips Datasets & Benchmarks 2023</a>
                        </li>
                        <li class="p-3 bg-emerald-50 border-2 border-black rounded-xl shadow-[1.5px_1.5px_0px_#000] flex items-center gap-2">
                          <span class="font-black text-emerald-800">Reviewer:</span> ACL 2020 & EMNLP 2020
                        </li>
                        <li class="p-4 bg-amber-50 border-2 border-black rounded-xl shadow-[2px_2px_0px_#000]">
                          <span class="font-black text-amber-900">🏆 Hackathon Winner:</span> PyTree, a PyTorch package for recursive neural networks.
                          <a class="font-bold underline hover:text-amber-950 ml-1" href="https://devpost.com/software/pytree">PyTorch Annual Hackathon 2021</a>
                        </li>
                        <li class="p-4 bg-amber-50 border-2 border-black rounded-xl shadow-[2px_2px_0px_#000]">
                          <span class="font-black text-amber-900">🏆 Hackathon Winner:</span> Train the Best Sentence Embedding Model Ever with 1B Training Pairs.
                          <a class="font-bold underline hover:text-amber-950 ml-1" href="https://discuss.huggingface.co/t/train-the-best-sentence-embedding-model-ever-with-1b-training-pairs/7354">Hugging Face Community Week (JAX/Flax) 2021</a>
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