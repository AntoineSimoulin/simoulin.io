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
  <a :href="citation.fields.url" class="no-underline text-blue-600 hover:text-blue-800" target="_blank">{{ citation.fields.title }}</a>
  <a v-if="'pdf' in citation.fields" :href="citation.fields.pdf" class="no-underline" target="_blank"><i class="fas fa-file-alt text-blue-600 ms-2" aria-hidden="true"></i></a>
  <a v-if="'youtube' in citation.fields" :href="citation.fields.youtube" class="no-underline" target="_blank"><i class="fa-brands fa-youtube text-red-600 ms-2" aria-hidden="true"></i></a>
  <a v-if="'github' in citation.fields" :href="citation.fields.github" class="no-underline" target="_blank"><i class="fa-brands fa-github text-gray-900 ms-2" aria-hidden="true"></i></a>
  <i v-if="'award' in citation.fields" class="fa-solid fa-star text-yellow-500 mx-1" aria-hidden="true" title="Best Paper Award"></i>
  <!-- <a v-if="'slides' in citation.fields" :href="citation.fields.slides" class="no-underline" target="_blank"><i class="fa-solid fa-file-powerpoint text-red-600 ms-2" aria-hidden="true"></i></a> -->

  <!-- <div>{{ this.getAuthorsList(citation.fields.author) }}</div> -->
  <div v-html="getAuthorsList(citation.fields.author)"></div>
  <!-- <div>{{ citation.fields.author.join(", ") }}</div> -->
  <div>
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
  
</template>

<style>
.text-capitalize {
    text-transform: capitalize !important;
}
</style>