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
        authorslistStr += authorsList[authorsList.length - 1]
      }
      return authorslistStr
    }
  },
}
</script>

<template>
  <a :href="this.citation.fields.url" class="text-decoration-none" target="_blank">{{ this.citation.fields.title[0] }}</a>
  <a v-if="'pdf' in this.citation.fields" :href="this.citation.fields.pdf" class="text-decoration-none" target="_blank"><i class="fas fa-file-alt text-primary ms-2" aria-hidden="true"></i></a>
  <a v-if="'youtube' in this.citation.fields" :href="this.citation.fields.youtube" class="text-decoration-none" target="_blank"><i class="fa-brands fa-youtube text-danger ms-2" aria-hidden="true"></i></a>
  <a v-if="'github' in this.citation.fields" :href="this.citation.fields.github" class="text-decoration-none" target="_blank"><i class="fa-brands fa-github text-dark ms-2" aria-hidden="true"></i></a>
  <!-- <div>{{ this.getAuthorsList(this.citation.fields.author) }}</div> -->
  <div v-html="this.getAuthorsList(this.citation.creators.author)"></div>
  <!-- <div>{{ this.citation.fields.author.join(", ") }}</div> -->
  <div>
    {{
      "booktitle" in this.citation.fields
        ? this.citation.fields.booktitle[0].split(",").length >= 4
          ? `${this.citation.fields.booktitle[0].split(",")[1]}${
              `${this.citation.fields.booktitle[0].toLowerCase().includes("student") ? " (Student)" : ""}${"pages" in this.citation.fields ? ": " + this.citation.fields.pages[0] : ""}`
            }`
          : `${this.citation.fields.booktitle[0]}, ${this.citation.fields.year[0]}${
              "pages" in this.citation.fields ? ": " + this.citation.fields.pages[0] : ""
            }`
        : "journal" in this.citation.fields
        ? `${this.citation.fields.journal[0]}, ${this.citation.fields.year[0]}${
            "pages" in this.citation.fields ? ": " + this.citation.fields.pages[0] : ""
          }`
        : this.citation.type == "phdthesis"
        ? `PhD Thesis, ${this.citation.fields.school[0]}, ${this.citation.fields.year[0]}`
        : `Undefined, ${this.citation.fields.year[0]}${
            "pages" in this.citation.fields ? ":" + this.citation.fields.pages[0] : ""
          }`
    }}
  </div>
  
</template>

<style>
.text-capitalize {
    text-transform: capitalize !important;
}
</style>