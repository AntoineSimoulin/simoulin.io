<script>
export default {
  props: ["headlines"],
};
</script>

<template>
  <div class="col-xl-4 col-lg-4 col-md-12 col">
    <div class="card border-0 shadow-sm rounded-2 p-0" id="courseAccordion">
      <ul
        class="list-group list-group-flush flex-column nav-pills bg-white border-0 rounded-2 p-2"
        id="course-pills-tab"
        role="tablist"
      >
        <li class="list-group-item p-0 border-0" role="presentation" v-for="heading in this.headlines">
          <!-- Toggle -->
          <!-- accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block -->
          <div
            class="hover px-0 container-fluid rounded-3 my-1 active"
            id="course-pills-tab-1"
            data-bs-toggle="pill"
            data-bs-target="#course-pills-1"
            type="button"
            role="tab"
            aria-controls="course-pills-1"
            aria-selected="true"
          >
            <a
              class="h5 mb-0 d-flex align-items-center text-inherit text-decoration-none py-3 px-4"
              data-bs-toggle="collapse"
              href="#courseTwo"
              role="button"
              aria-expanded="false"
              aria-selected="true"
              aria-controls="courseTwo"
            >
              <div class="pe-3 pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-mortarboard-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"
                  />
                  <path
                    d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"
                  />
                </svg>
              </div>
              <div class="me-auto">{{ heading.text }}</div>
              <i class="bi bi-chevron-down"></i>
            </a>
          </div>
          <div
            class="collapse"
            id="courseTwo"
            data-bs-parent="#courseAccordion"
            style=""
          >
            <ul class="list-group list-group-flush ps-4 ms-2">
              <li class="list-group-item border-0" v-for="subheading in heading.subheadings">
                <a
                  href="#"
                  class="d-flex justify-content-between align-items-center text-inherit text-decoration-none"
                >
                  <div class="text-truncate">
                    <span
                      class="icon-shape bg-success text-white icon-sm rounded-circle me-2"
                      ><i class="mdi mdi-play fs-4"></i
                    ></span>
                    <span>{{ subheading.text }}</span>
                  </div>
                  <!-- <div class="text-truncate">
                    <span>1m 7s</span>
                  </div> -->
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>