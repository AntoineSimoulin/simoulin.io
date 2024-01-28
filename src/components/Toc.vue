<script>
import BacktrackingIcon from "./icons/iconBacktracking.vue";
import DesignAndPythonIcon from "./icons/iconDesignAndPython.vue";
import DynamicProgrammingIcon from "./icons/iconDynamicProgramming.vue";
import SortingIcon from "./icons/iconSorting.vue";
import StructuresIcon from "./icons/iconStructures.vue";
import DescriptionIcon from "./icons/iconDescription.vue";

export default {
  props: ["headlines"],
  components: {
    BacktrackingIcon,
    DesignAndPythonIcon,
    DynamicProgrammingIcon,
    SortingIcon,
    StructuresIcon,
    DescriptionIcon
  },
  beforeMount() {
    console.log("this.headlines", this.headlines)
  },
  methods:{
    collapse_id(prefix, thread_ref){
      const i = thread_ref + 1
      return prefix + i
    },
    collapse_first_id(prefix, thread_ref) {
      if (thread_ref == 0) {
        //  block of code to be executed if the condition is true
        return prefix + " active"
      } else {
        return prefix
      }
    },
    show_first_id(prefix, thread_ref) {
      if (thread_ref == 0) {
        //  block of code to be executed if the condition is true
        return prefix + " show"
      } else {
        return prefix
      }
    },
    is_first(thread_ref){
      if (thread_ref == 0) {
        //  block of code to be executed if the condition is true
        return true
      } else {
        return false
      }
    },
  }
};
</script>

<template>
  <div class="col-xl-4 col-lg-4 col-md-12 col">
    <div class="card border-0 shadow-sm rounded-2 p-0" id="courseAccordion">
      <ul class="list-group list-group-flush flex-column nav-pills bg-white border-0 rounded-2 p-2" id="course-pills-tab"
        role="tablist">
        <li class="list-group-item p-0 bg-white border-0" role="presentation" v-for="(heading, index) in this.headlines">
          <div :class="collapse_first_id('hover px-0 container-fluid rounded-3 my-1', index)" :id="collapse_id('course-pills-tab-', index)" data-bs-toggle="pill"
            :data-bs-target="collapse_id('#course-pills-', index)" type="button" role="tab" :aria-controls="collapse_id('course-pills-', index)" aria-selected="true">
            <a class="h5 mb-0 d-flex align-items-center text-inherit text-decoration-none py-3 px-4"
              data-bs-toggle="collapse" :href="collapse_id('#course', index)" role="button" :aria-expanded="is_first(index)" aria-selected="true"
              :aria-controls="collapse_id('course', index)">
              <div class="pe-3 pb-1">
                <DescriptionIcon v-if="index === 0"/>
                <StructuresIcon v-if="index === 1"/>
                <SortingIcon v-if="index === 2"/>
                <BacktrackingIcon v-if="index === 3"/>
                <DynamicProgrammingIcon v-if="index === 4"/>
                <DesignAndPythonIcon v-if="index === 5"/>
              </div>
              <div class="me-auto">{{ heading.text }}</div>
              <i class="bi bi-chevron-down"></i>
            </a>
          </div>
          <div :class="show_first_id('collapse', index)" :id="collapse_id('course', index)" data-bs-parent="#courseAccordion" style="">
            <ul class="list-group list-group-flush ps-4 ms-2">
              <li class="list-group-item bg-white border-0" v-for="subheading in heading.subheadings">
                <a href="#" class="d-flex justify-content-between align-items-center text-inherit text-decoration-none">
                  <div class="text-truncate">
                    <span class="icon-shape bg-success text-white icon-sm rounded-circle me-2"><i
                        class="mdi mdi-play fs-4"></i></span>
                    <span>{{ subheading.text }}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<style>
pre:not(:hover) .icon-expand {
  display: none;
  transition-timing-function: ease;
  transition: 0.2s;
}

.copy .icon-contract {
  display: none;
  transition-timing-function: ease;
  transition: 0.2s;
}

.copy.switch:focus .icon-expand {
  display: none;
  transition-timing-function: ease;
  transition: 0.2s;
}

.copy.switch:focus:hover .icon-contract {
  display: block;
  transition-timing-function: ease;
  transition: 0.2s;
}

.hover:hover {
  background: #938b8b21;
  border-radius: 50%;
}

.hover.active {
  color: #066ac9;
  background-color: #066ac91a;
}

.list-group-borderless .list-group-item {
  border: none !important;
  padding: 0.425rem 0;
}

h6,
.h6,
h5,
.h5,
h4,
.h4,
h3,
.h3,
h2,
.h2,
h1,
.h1 {
  color: var(--bs-heading-color);
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
</style>