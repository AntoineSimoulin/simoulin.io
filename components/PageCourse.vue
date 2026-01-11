<script>
export default {
  props: ["content", "id", "labelledby", "class"],
  created() {
    console.log("this.content Pagecourse", this.content);
  },
};

</script>

<template>
  <div class="tab-content pt-2" id="course-pills-tabContent">
    <div :class="this.class" :id="this.id" role="tabpanel" :aria-labelledby="this.labelledby">
      <div v-html="this.content" />
    </div>
  </div>
</template>