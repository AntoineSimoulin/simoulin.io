<script>
import { parse } from "@retorquere/bibtex-parser";
import Cite from "citation-js";
import Citation from "../components/Citation.vue";
import Talk from "../components/Talk.vue";
import bibString from '../../assets/simoulin.bib?raw';
import talksString from '../../assets/talks.bib?raw';

export default {
  components: {
    Citation,
    Talk
  },
  // created() {
  //   console.log(bibString);
  // },
  data() {
    return {
      bib: bibString,
      talks: talksString,
    };
  },
  methods: {
    getBibEntries(bibFile) {
      // this.bib = new Cite(bibFile, { forceType: "@bibtex/text" })
      // console.log(example.getIds());
      // console.log(example);
      let bib = parse(bibFile);
      // console.log(this.bib);
      return bib
    },
    groupByYear(bib) {
      // console.log(bib);
      let groupByYear = bib.entries.reduce((group, ref) => {
        const year = ref['fields']['year'][0];
        group[year] = group[year] ?? [];
        group[year].push(ref);
        return group;
      }, {});
      // this.bib = groupByYear
      return groupByYear
    },
    // this is working with Cite
    //   citeBibEntry (bibEntry) {
    //     console.log(bibEntry);
    //     let citation = this.bib.format('bibliography', {
    //       format: 'html',
    //       template: 'apa',
    //       lang: 'en-US',
    //       entry: bibEntry 
    //     })
    //     console.log(citation);
    //     return citation
    //   }
    citeBibEntry () {

    }
  },
  beforeMount () {
    this.bib = this.getBibEntries(this.bib);
    this.bib = this.groupByYear(this.bib);

    this.talks = this.getBibEntries(this.talks);
    this.talks = this.groupByYear(this.talks);
    // console.log(this.bib);
    // this.citeBibEntry('DBLP:phd/hal/Simoulin22');
  }
};
</script>

<template>
  <section class="pb-0 py-lg-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="card shadow-sm border-0 rounded-2 p-0">
            <div class="card-header px-4 py-3">
              <ul
                class="nav nav-pills nav-tabs-line py-0"
                id="course-pills-tab"
                role="tablist">
                <!-- Tab item -->
                <li class="nav-item me-2 me-sm-4" role="presentation">
                  <button
                    class="nav-link mb-2 mb-md-0 active"
                    id="course-pills-tab-1"
                    data-bs-toggle="pill"
                    data-bs-target="#course-pills-1"
                    type="button"
                    role="tab"
                    aria-controls="course-pills-1"
                    aria-selected="true">
                    Publications
                  </button>
                </li>
                <!-- Tab item -->
                <li class="nav-item me-2 me-sm-4" role="presentation">
                  <button
                    class="nav-link mb-2 mb-md-0"
                    id="course-pills-tab-2"
                    data-bs-toggle="pill"
                    data-bs-target="#course-pills-2"
                    type="button"
                    role="tab"
                    aria-controls="course-pills-2"
                    aria-selected="false">
                    Talks and Presentations
                  </button>
                </li>
                <!-- Tab item -->
                <li class="nav-item me-2 me-sm-4" role="presentation">
                  <button
                    class="nav-link mb-2 mb-md-0"
                    id="course-pills-tab-3"
                    data-bs-toggle="pill"
                    data-bs-target="#course-pills-3"
                    type="button"
                    role="tab"
                    aria-controls="course-pills-3"
                    aria-selected="false">
                    Awards and Services
                  </button>
                </li>
              </ul>
            </div>
            <div class="card-body p-4">
              <div class="tab-content pt-2" id="course-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="course-pills-1"
                  role="tabpanel"
                  aria-labelledby="course-pills-tab-1">
                  <div class="mb-3" v-for="year in Object.keys(this.bib).reverse()">
                    <h5 class="mb-3">{{ year }}</h5>
                    <div class="text-sm font-weight-bold text-capitalize mb-4" v-for="ref in this.bib[year]">
                      <Citation :citation="ref"/>
                    </div>
                  </div>  
                </div>
                <div
                  class="tab-pane fade"
                  id="course-pills-2"
                  role="tabpanel"
                  aria-labelledby="course-pills-tab-2">
                  <div class="mb-3" v-for="year in Object.keys(this.talks).reverse()">
                    <h5 class="mb-3">{{ year }}</h5>
                    <div class="text-sm font-weight-bold text-capitalize mb-4" v-for="ref in this.talks[year]">
                      <Talk :citation="ref"/> 
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="course-pills-3"
                  role="tabpanel"
                  aria-labelledby="course-pills-tab-3">
                  <ul>
                    <li>Reviewer ACL’20, EMNLP’20</li>
                    <li>
                      Hackathon Winner. PyTree, a PyTorch package for recursive
                      neural networks.
                      <a class="text-decoration-none text-capitalize"
                        href="https://devpost.com/software/pytree"
                        >PyTorch Annual Hackathon 2021</a>
                    </li>
                    <li>
                      Hackathon Winner. Train the Best Sentence Embedding Model
                      Ever with 1B Training Pairs.
                      <a class="text-decoration-none text-capitalize"
                        href="https://discuss.huggingface.co/t/train-the-best-sentence-embedding-model-ever-with-1b-training-pairs/7354"
                        >Hugging Face Community week using JAX/Flax for NLP & CV
                        2021</a>
                    </li>
                  </ul>
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
.card {
  --bs-card-cap-bg: rgb(255, 255, 255);
}
.nav-item:hover {
  background: #938b8b21;
}

.nav-pills.nav-tabs-line .nav-link.active {
    color: #066ac9;
    background-color: rgba(6, 106, 201, 0.1);
}
</style>