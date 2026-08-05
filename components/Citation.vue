<script >
export default {
  props: ['citation'],
  // created() {
  //   console.log(this.citation);
  // },
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
      // console.log(authorsList);
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
        // authorslistStr += authorsList[authorsList.length - 1]
      }
      return authorslistStr
    }
  },
}
</script>

<template>
  <div class="bg-white border-2 border-black hover:shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 transition-all duration-200 rounded-2xl p-5 mb-4 text-black font-medium">
    <div class="mb-2">
      <a :href="citation.fields.url" class="font-extrabold text-lg text-black hover:text-indigo-600 no-underline leading-snug" target="_blank">{{ citation.fields.title }}</a>
    </div>

    <div class="flex flex-wrap items-center gap-2 my-3">
      <a v-if="'pdf' in citation.fields" :href="citation.fields.pdf" class="inline-flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 text-black border-2 border-black shadow-[1px_1px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-bold no-underline transition-all" target="_blank">
        <i class="fas fa-file-alt text-black" aria-hidden="true"></i> PDF
      </a>
      <a v-if="'youtube' in citation.fields" :href="citation.fields.youtube" class="inline-flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 text-black border-2 border-black shadow-[1px_1px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-bold no-underline transition-all" target="_blank">
        <i class="fa-brands fa-youtube text-black" aria-hidden="true"></i> Video
      </a>
      <a v-if="'github' in citation.fields" :href="citation.fields.github" class="inline-flex items-center gap-1.5 bg-purple-50 hover:bg-purple-100 text-black border-2 border-black shadow-[1px_1px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-3 py-1 rounded-xl text-xs font-bold no-underline transition-all" target="_blank">
        <i class="fa-brands fa-github text-black" aria-hidden="true"></i> Code
      </a>
      <span v-if="'award' in citation.fields" class="inline-flex items-center gap-1.5 bg-amber-100 text-black border-2 border-black shadow-[1px_1px_0px_#000] px-3 py-1 rounded-xl text-xs font-black">
        <i class="fa-solid fa-star text-black" aria-hidden="true"></i> Best Paper Award
      </span>
    </div>

    <div class="text-sm text-black/90 mb-1.5" v-html="getAuthorsList(citation.fields.author)"></div>
    <div class="text-xs font-bold text-black/70 uppercase tracking-wide">
      {{
        "booktitle" in citation.fields
          ? citation.fields.booktitle.split(",").length >= 4
            ? `${citation.fields.booktitle.split(",")[1]}${
                `${citation.fields.booktitle.toLowerCase().includes("student") ? " (Student)" : ""}`
              }`
            : `${citation.fields.booktitle}, ${citation.fields.year}`
          : "journal" in citation.fields
          ? `${citation.fields.journal}, ${citation.fields.year}`
          : citation.type == "phdthesis"
          ? `PhD Thesis, ${citation.fields.school}, ${citation.fields.year}`
          : `Undefined, ${citation.fields.year}`
      }}
    </div>
  </div>
</template>

<style>
.text-capitalize {
    text-transform: capitalize !important;
}
</style>