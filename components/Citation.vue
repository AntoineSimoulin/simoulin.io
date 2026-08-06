<script >
export default {
  props: ['citation'],
  computed: {
    venueColorClass() {
      const venue = this.getVenueName(this.citation);
      const colors = ['bg-yellow-300', 'bg-pink-300', 'bg-emerald-300', 'bg-purple-300', 'bg-blue-300'];
      let hash = 0;
      for (let i = 0; i < venue.length; i++) {
        hash = venue.charCodeAt(i) + ((hash << 5) - hash);
      }
      return colors[Math.abs(hash) % colors.length];
    }
  },
  methods: {
    concatFirstAndLastName (authorsList) {
      let authorsListConcat = [];
      for (let author of authorsList) {
        authorsListConcat.push(author.firstName + " " + author.lastName)
      }
      return authorsListConcat
    },
    getAuthorsList (authorsList) {
      authorsList = this.concatFirstAndLastName(authorsList)
      let authorslistStr = "";
      if (authorsList[0] == "Antoine Simoulin") {
          authorslistStr += '<strong>'
          authorslistStr += authorsList[0]
          authorslistStr += '</strong>'
        } else {
          authorslistStr += authorsList[0]
        }
      for (let i = 1; i < authorsList.length - 1; i++) {
        authorslistStr += ", "
        if (authorsList[i] == "Antoine Simoulin") {
          authorslistStr += '<strong>'
          authorslistStr += authorsList[i]
          authorslistStr += '</strong>'
        } else {
          authorslistStr += authorsList[i]
        }
      }
      if (authorsList.length > 1) {
        authorslistStr += "<span class=\"text-lowercase\"> and </span>"
        if (authorsList[authorsList.length - 1] == "Antoine Simoulin") {
          authorslistStr += '<strong>'
          authorslistStr += authorsList[authorsList.length - 1]
          authorslistStr += '</strong>'
        } else {
          authorslistStr += authorsList[authorsList.length - 1]
        }
      }
      return authorslistStr
    },
    getVenueName (citation) {
      if (citation.fields.venue) {
        return citation.fields.venue;
      }
      const booktitle = citation.fields.booktitle || "";
      const journal = citation.fields.journal || "";
      const year = citation.fields.year || "";

      if (citation.type === "phdthesis") {
        return `PhD Thesis (${year})`;
      }

      if (booktitle) {
        const match = booktitle.match(/\{(RecSys|ACL|EMNLP|NAACL|EACL|ICLR|NeurIPS|CVPR|ECCV|ICML|KDD|TALN|ES-FoMo)\}/i) || 
                      booktitle.match(/\b(RecSys|ACL|EMNLP|NAACL|EACL|ICLR|NeurIPS|CVPR|ECCV|ICML|KDD|TALN|ES-FoMo)\b/i);
        
        if (match) {
          let acronym = match[1];
          const upper = acronym.toUpperCase();
          if (upper.includes("RECSYS")) acronym = "RecSys";
          else if (upper.includes("NEURIPS")) acronym = "NeurIPS";
          else if (upper.includes("ES-FOMO")) acronym = "ES-FoMo @ ICML";
          else if (upper.includes("NAACL")) acronym = "NAACL";
          else if (upper.includes("EACL")) acronym = "EACL";
          else if (upper.includes("EMNLP")) acronym = "EMNLP";
          else if (upper.includes("ACL")) acronym = "ACL";
          else if (upper.includes("ICLR")) acronym = "ICLR";
          else if (upper.includes("TALN")) acronym = "TALN";

          const isDemo = booktitle.toLowerCase().includes("demonstration") || booktitle.toLowerCase().includes("demo");
          const isStudent = booktitle.toLowerCase().includes("student") || booktitle.toLowerCase().includes("srw");
          if (isDemo) acronym += " (Demo)";
          else if (isStudent) acronym += " (SRW)";

          return `${acronym} ${year}`;
        }

        const cleanBooktitle = booktitle.replace(/[\{\}]/g, '');
        const parts = cleanBooktitle.split(',');
        if (parts.length >= 2 && parts[1].trim().length < 35) {
          return `${parts[1].trim()} ${year}`;
        }
        return `${parts[0].trim()} ${year}`;
      }

      if (journal) {
        const cleanJournal = journal.replace(/[\{\}]/g, '');
        if (cleanJournal.toLowerCase().includes("arxiv")) return `arXiv ${year}`;
        return `${cleanJournal} ${year}`;
      }

      return year ? `${year}` : "";
    }
  },
}
</script>

<template>
  <div class="bg-white border-2 border-black hover:shadow-[3.5px_3.5px_0px_#000] hover:-translate-y-0.5 transition-all duration-200 rounded-2xl p-5 mb-5 text-black font-medium">
    
    <!-- Top Row: Venue Mark (Left) + Links & Awards (Top Right on desktop >= sm) -->
    <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
      <!-- Venue Highlight Mark -->
      <mark v-if="getVenueName(citation)" :class="['text-black font-black text-sm sm:text-base px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000] rounded-xl inline-block -rotate-1', venueColorClass]">
        {{ getVenueName(citation) }}
      </mark>

      <!-- Action Links & Award Badges (Desktop Only: sm:flex) -->
      <div class="hidden sm:flex flex-wrap items-center gap-2 ml-auto">
        <span v-if="'award' in citation.fields" class="inline-flex items-center gap-1.5 bg-yellow-300 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] px-3 py-1 rounded-xl text-xs font-black">
          <i class="fa-solid fa-star text-black" aria-hidden="true"></i> Best Paper Award
        </span>
        <a v-if="'pdf' in citation.fields" :href="citation.fields.pdf" class="inline-flex items-center gap-1.5 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all" target="_blank">
          <i class="fas fa-file-alt text-black" aria-hidden="true"></i> PDF
        </a>
        <a v-if="'youtube' in citation.fields" :href="citation.fields.youtube" class="inline-flex items-center gap-1.5 bg-pink-300 hover:bg-pink-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all" target="_blank">
          <i class="fa-brands fa-youtube text-black" aria-hidden="true"></i> Video
        </a>
        <a v-if="'github' in citation.fields" :href="citation.fields.github" class="inline-flex items-center gap-1.5 bg-purple-300 hover:bg-purple-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all" target="_blank">
          <i class="fa-brands fa-github text-black" aria-hidden="true"></i> Code
        </a>
      </div>
    </div>

    <!-- Paper Title -->
    <div class="mb-2">
      <a :href="citation.fields.url" class="font-black text-lg sm:text-xl text-black hover:text-blue-600 no-underline leading-snug" target="_blank">
        {{ citation.fields.title }}
      </a>
    </div>

    <!-- Action Links & Award Badges (Mobile Only: flex sm:hidden below title) -->
    <div class="flex sm:hidden flex-wrap items-center gap-2 my-2.5">
      <span v-if="'award' in citation.fields" class="inline-flex items-center gap-1.5 bg-yellow-300 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] px-3 py-1 rounded-xl text-xs font-black">
        <i class="fa-solid fa-star text-black" aria-hidden="true"></i> Best Paper Award
      </span>
      <a v-if="'pdf' in citation.fields" :href="citation.fields.pdf" class="inline-flex items-center gap-1.5 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all" target="_blank">
        <i class="fas fa-file-alt text-black" aria-hidden="true"></i> PDF
      </a>
      <a v-if="'youtube' in citation.fields" :href="citation.fields.youtube" class="inline-flex items-center gap-1.5 bg-pink-300 hover:bg-pink-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all" target="_blank">
        <i class="fa-brands fa-youtube text-black" aria-hidden="true"></i> Video
      </a>
      <a v-if="'github' in citation.fields" :href="citation.fields.github" class="inline-flex items-center gap-1.5 bg-purple-300 hover:bg-purple-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-extrabold no-underline transition-all" target="_blank">
        <i class="fa-brands fa-github text-black" aria-hidden="true"></i> Code
      </a>
    </div>

    <!-- Authors -->
    <div class="text-sm text-black/90 mb-1 font-medium" v-html="getAuthorsList(citation.fields.author)"></div>
  </div>
</template>

<style>
.text-capitalize {
    text-transform: capitalize !important;
}
</style>