<script>
import { formatMonth } from '@/utils/date.js';

export default {
  props: ['citation'],
  methods: {
    formatMonth
  }
}
</script>

<template>
  <a :href="citation.fields.url" class="no-underline capitalize text-blue-600 hover:text-blue-800">{{ citation.fields.title }}</a> ({{ formatMonth(citation.fields.month) }}. {{ citation.fields.year }})
  <a v-if="'slides' in citation.fields" :href="citation.fields.slides" class="no-underline" target="_blank"><i class="fas fa-file-alt text-blue-600 ms-1" aria-hidden="true"></i></a>
  <div>
    <strong>{{ citation.fields.venue }}, {{ citation.fields.address }}</strong>
  </div>
  <div>
    {{ citation.fields.abstract }}
  </div>
</template>