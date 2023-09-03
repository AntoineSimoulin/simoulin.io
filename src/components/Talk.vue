<script>
export default {
  props: ['citation'],
}
</script>

<template>
  <a :href="this.citation.fields.url[0]" class="text-decoration-none text-capitalize">{{ this.citation.fields.title[0] }}</a> ({{ this.citation.fields.month[0] }}. {{ this.citation.fields.year[0] }})
  <a v-if="'slides' in this.citation.fields" :href="this.citation.fields.slides" class="text-decoration-none" target="_blank"><i class="fas fa-file-alt text-primary ms-1" aria-hidden="true"></i></a>
  <div>
    <strong>{{ this.citation.fields.venue[0] }}, {{ this.citation.fields.address[0] }}</strong>
  </div>
  <div>
    {{ this.citation.fields.abstract[0] }}
  </div>
</template>