<script>
import "prismjs";
import "prismjs/components/prism-python.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

async function copyToClipboard() {
  var span = event.srcElement;
  if (span.tagName == "svg") {
    // console.log(span.parentElement);
    var a = span.parentElement;
  } else {
    var a = event.srcElement;
  }
  // console.log(a.tagName);
  a.classList.add("switch");
  // console.log(a.parentElement.classList);
  document.getElementById(
    a.getAttribute("aria-describedby")
  ).children[1].textContent = "";
  const pre = a.parentElement.parentElement;
  let code = pre.querySelector("code");
  let text = code.innerText;
  await navigator.clipboard.writeText(text);
  await delay(1000);
  a.classList.remove("switch");
  document.getElementById(
    a.getAttribute("aria-describedby")
  ).children[1].textContent = "copy";
}
</script>

<template>
  <section class="pb-0 py-lg-5">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-12 col-md-12 col-12">
          <div
            class="card border-0 shadow-sm rounded-2 p-0"
            id="courseAccordion"
          >
            <div>
              <!-- List group -->
              <ul
                class="
                  list-group list-group-flush
                  flex-column
                  nav-pills
                  bg-white
                  border-0
                  rounded-2
                  p-2
                "
                id="course-pills-tab"
                role="tablist"
              >
                <li class="list-group-item p-0 border-0" role="presentation">
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
                      class="
                        h5
                        mb-0
                        d-flex
                        align-items-center
                        text-inherit text-decoration-none
                        py-3
                        px-4
                      "
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
                      <div class="me-auto">Course Description</div>
                      <i class="bi bi-chevron-down"></i>
                    </a>
                  </div>
                  <!-- </span> -->
                  <!-- Row -->
                  <!-- Collapse -->
                  <div
                    class="collapse"
                    id="courseTwo"
                    data-bs-parent="#courseAccordion"
                    style=""
                  >
                    <!-- List group item -->
                    <ul class="list-group list-group-flush ps-4 ms-2">
                      <!-- List group item -->
                      <li class="list-group-item border-0">
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-success
                                text-white
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="mdi mdi-play fs-4"></i
                            ></span>
                            <span>Introduction</span>
                          </div>
                          <div class="text-truncate">
                            <span>1m 7s</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li class="list-group-item border-0">
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-success
                                text-white
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="mdi mdi-play fs-4"></i
                            ></span>
                            <span>Introduction</span>
                          </div>
                          <div class="text-truncate">
                            <span>1m 7s</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li class="list-group-item border-0">
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-primary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="mdi mdi-play fs-4"></i
                            ></span>
                            <span>Hello World Project from GitHub</span>
                          </div>
                          <div class="text-truncate">
                            <span>2m 33s</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li class="list-group-item border-0" aria-disabled="true">
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-muted
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Our Sample Website</span>
                          </div>
                          <div class="text-truncate">
                            <span>2m 15s</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="list-group-item p-0 border-0" role="presentation">
                  <!-- Toggle -->
                  <div
                    class="hover px-0 container-fluid rounded-3 my-1"
                    id="course-pills-tab-2"
                    data-bs-toggle="pill"
                    data-bs-target="#course-pills-2"
                    type="button"
                    role="tab"
                    aria-controls="course-pills-2"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    <a
                      class="
                        h5
                        mb-0
                        d-flex
                        align-items-center
                        text-inherit text-decoration-none
                        py-3
                        px-4
                        collapsed
                      "
                      data-bs-toggle="collapse"
                      href="#courseThree"
                      role="button"
                      aria-expanded="false"
                      aria-controls="courseThree"
                    >
                      <div class="pe-3 pb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-diagram-3"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                          />
                        </svg>
                      </div>
                      <div class="me-auto">Data Structures</div>
                      <i class="bi bi-chevron-down"></i>
                    </a>
                  </div>
                  <!-- Row -->
                  <!-- Collapse -->
                  <div
                    class="collapse"
                    id="courseThree"
                    data-bs-parent="#courseAccordion"
                    style=""
                  >
                    <!-- List group item -->
                    <ul class="list-group list-group-flush ps-4 ms-2">
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Data types</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Arrays</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Linked-lists</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Stacks and Queues</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Trees and Graphs</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Heaps</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Tries</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="list-group-item p-0 border-0">
                  <!-- Toggle -->
                  <div
                    class="hover px-0 container-fluid rounded-3 my-1"
                    id="course-pills-tab-3"
                    data-bs-toggle="pill"
                    data-bs-target="#course-pills-3"
                    type="button"
                    role="tab"
                    aria-controls="course-pills-3"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    <a
                      class="
                        h5
                        mb-0
                        d-flex
                        align-items-center
                        text-inherit text-decoration-none
                        py-3
                        px-4
                        collapsed
                      "
                      data-bs-toggle="collapse"
                      href="#courseSix"
                      role="button"
                      aria-expanded="false"
                      aria-controls="courseSix"
                    >
                      <div class="pe-3 pb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-sort-up"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"
                          />
                        </svg>
                      </div>
                      <div class="me-auto">Sorting and Searching</div>
                      <i class="bi bi-chevron-down"></i>
                    </a>
                  </div>
                  <!-- Row -->
                  <!-- Collapse -->
                  <div
                    class="collapse"
                    id="courseSix"
                    data-bs-parent="#courseAccordion"
                    style=""
                  >
                    <!-- List group item -->
                    <ul class="list-group list-group-flush ps-4 ms-2">
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Bubble Sort</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Selection Sort</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Insertion Sort</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Merge Sort</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Quick Sort</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Count Sort</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Radix Sort</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Heap Sort</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Bucket Sort</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                      <li
                        class="list-group-item disabled border-0"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Quick Select</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="list-group-item p-0 border-0">
                  <!-- Toggle -->
                  <div
                    class="hover px-0 container-fluid rounded-3 my-1"
                    id="course-pills-tab-4"
                    data-bs-toggle="pill"
                    data-bs-target="#course-pills-4"
                    type="button"
                    role="tab"
                    aria-controls="course-pills-4"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    <a
                      class="
                        h5
                        mb-0
                        d-flex
                        align-items-center
                        text-inherit text-decoration-none
                        py-3
                        px-4
                        collapsed
                      "
                      data-bs-toggle="collapse"
                      href="#courseFour"
                      role="button"
                      aria-expanded="false"
                      aria-controls="courseFour"
                    >
                      <div class="pe-3 pb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-save"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"
                          />
                        </svg>
                      </div>
                      <div class="me-auto">Backtracking</div>
                      <i class="bi bi-chevron-down"></i>
                    </a>
                  </div>
                  <!-- Row -->
                  <!-- Collapse -->
                  <div
                    class="collapse"
                    id="courseFour"
                    data-bs-parent="#courseAccordion"
                    style=""
                  >
                    <!-- List group item -->
                    <ul class="list-group list-group-flush ps-4 ms-2">
                      <!-- List group item -->
                      <li
                        class="list-group-item border-0 disabled"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Introduction</span>
                          </div>
                          <div class="text-truncate">
                            <span>1m 19s</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <!-- List group item -->
                <li class="list-group-item p-0 border-0">
                  <!-- Toggle -->
                  <div
                    class="hover px-0 container-fluid rounded-3 my-1"
                    id="course-pills-tab-5"
                    data-bs-toggle="pill"
                    data-bs-target="#course-pills-5"
                    type="button"
                    role="tab"
                    aria-controls="course-pills-5"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    <a
                      class="
                        h5
                        mb-0
                        d-flex
                        align-items-center
                        text-inherit text-decoration-none
                        py-3
                        px-4
                        collapsed
                      "
                      data-bs-toggle="collapse"
                      href="#courseSeven"
                      role="button"
                      aria-expanded="false"
                      aria-controls="courseSeven"
                    >
                      <div class="pe-3 pb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-ladder"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M4.5 1a.5.5 0 0 1 .5.5V2h6v-.5a.5.5 0 0 1 1 0v14a.5.5 0 0 1-1 0V15H5v.5a.5.5 0 0 1-1 0v-14a.5.5 0 0 1 .5-.5zM5 14h6v-2H5v2zm0-3h6V9H5v2zm0-3h6V6H5v2zm0-3h6V3H5v2z"
                          />
                        </svg>
                      </div>
                      <div class="me-auto">
                        <!-- Title -->
                        Dynamic Programming
                      </div>
                      <i class="bi bi-chevron-down"></i>
                    </a>
                  </div>
                  <!-- Row -->
                  <!-- Collapse -->
                  <div
                    class="collapse"
                    id="courseSeven"
                    data-bs-parent="#courseAccordion"
                  >
                    <!-- List group item -->
                    <ul class="list-group list-group-flush ps-4 ms-2">
                      <!-- List group item -->
                      <li
                        class="list-group-item border-0 disabled"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Introduction</span>
                          </div>
                          <div class="text-truncate">
                            <span>1m 52s</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                    </ul>
                  </div>
                </li>
                <li class="list-group-item p-0 border-0">
                  <!-- Toggle -->
                  <div
                    class="hover px-0 container-fluid rounded-3 my-1"
                    id="course-pills-tab-6"
                    data-bs-toggle="pill"
                    data-bs-target="#course-pills-6"
                    type="button"
                    role="tab"
                    aria-controls="course-pills-6"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    <a
                      class="
                        h5
                        mb-0
                        d-flex
                        align-items-center
                        text-inherit text-decoration-none
                        py-3
                        px-4
                        collapsed
                      "
                      data-bs-toggle="collapse"
                      href="#courseEight"
                      role="button"
                      aria-expanded="false"
                      aria-controls="courseEight"
                    >
                      <div class="pe-3 pb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-box"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
                          />
                        </svg>
                      </div>
                      <div class="me-auto">
                        <!-- Title -->
                        Design and Python
                      </div>
                      <i class="bi bi-chevron-down"></i>
                    </a>
                  </div>
                  <!-- Row -->
                  <!-- Collapse -->
                  <div
                    class="collapse"
                    id="courseEight"
                    data-bs-parent="#courseAccordion"
                  >
                    <!-- List group item -->
                    <ul class="list-group list-group-flush ps-4 ms-2">
                      <!-- List group item -->
                      <li
                        class="list-group-item border-0 disabled"
                        aria-disabled="true"
                      >
                        <a
                          href="#"
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            text-inherit text-decoration-none
                          "
                        >
                          <div class="text-truncate">
                            <span
                              class="
                                icon-shape
                                bg-light
                                text-secondary
                                icon-sm
                                rounded-circle
                                me-2
                              "
                              ><i class="fe fe-lock fs-4"></i
                            ></span>
                            <span>Introduction</span>
                          </div>
                          <div class="text-truncate">
                            <span>1m 48s</span>
                          </div>
                        </a>
                      </li>
                      <!-- List group item -->
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-lg-12 col-md-12 col-12 mb-4 mb-xl-0">
          <div class="card shadow-sm border-0 rounded-2 p-0">
            <div class="card-body p-4">
              <div class="tab-content pt-2" id="course-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="course-pills-1"
                  role="tabpanel"
                  aria-labelledby="course-pills-tab-1"
                >
                  <h5 class="mb-3">Course Description</h5>
                  <p class="mb-3">
                    Welcome to the
                    <strong>
                      Master 2 Mathématiques et Informatique pour la Data
                      Science (M2 MIDS) from Paris University.</strong
                    >
                  </p>
                  <p>
                    The course is part of the
                    <a
                      class="text-decoration-none text-capitalize"
                      href="https://m2mids.github.io/m2mids/"
                      >M2 MIDS</a
                    >
                    cursus.
                  </p>
                  <p>
                    It introduces statistical methods for Natural Language
                    Processing, including text vectorization, word embeddings,
                    and sequence models. In addition, the course includes
                    practical exercises that cover web scraping, regular
                    expressions, and visualization. The labs include common use
                    cases such as text classification or topic mining. Finally,
                    the course gives an overview about open-source tools for nlp
                    such as nlp libraries, intelligibility methods or deep
                    learning frameworks.
                  </p>

                  <h5 class="mt-4">What you’ll learn</h5>
                  <ul
                    class="
                      list-group
                      text-capitalize
                      list-group-borderless
                      mb-3
                    "
                  >
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="fas fa-check-circle text-success me-2"></i>Text
                      vectorization
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="fas fa-check-circle text-success me-2"></i>word
                      embeddings
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="fas fa-check-circle text-success me-2"></i
                      >sequence models
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="fas fa-check-circle text-success me-2"></i>web
                      scraping
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="fas fa-check-circle text-success me-2"></i
                      >regular expressions
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="fas fa-check-circle text-success me-2"></i>data
                      vizualization for text
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="fas fa-check-circle text-success me-2"></i>text
                      classification
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="fas fa-check-circle text-success me-2"></i>topic
                      mining
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="fas fa-check-circle text-success me-2"></i
                      >open-source tools
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="fas fa-check-circle text-success me-2"></i>NLP
                      libraries
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="fas fa-check-circle text-success me-2"></i
                      >intelligibility methods
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="fas fa-check-circle text-success me-2"></i>deep
                      learning frameworks
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane fade show"
                  id="course-pills-2"
                  role="tabpanel"
                  aria-labelledby="course-pills-tab-2"
                >
                  <h5 class="mb-3">Data Structures</h5>
                  <p class="mb-3">
                    Welcome to the
                    <strong>
                      Master 2 Mathématiques et Informatique pour la Data
                      Science (M2 MIDS) from Paris University.</strong
                    >
                  </p>
                  <p>
                    The course is part of the
                    <a
                      class="text-decoration-none text-capitalize"
                      href="https://m2mids.github.io/m2mids/"
                      >M2 MIDS</a
                    >
                    cursus.
                  </p>
                  <p>
                    It introduces statistical methods for Natural Language
                    Processing, including text vectorization, word embeddings,
                    and sequence models. In addition, the course includes
                    practical exercises that cover web scraping, regular
                    expressions, and visualization. The labs include common use
                    cases such as text classification or topic mining. Finally,
                    the course gives an overview about open-source tools for nlp
                    such as nlp libraries, intelligibility methods or deep
                    learning frameworks.
                  </p>
                </div>
                <div
                  class="tab-pane fade show"
                  id="course-pills-3"
                  role="tabpanel"
                  aria-labelledby="course-pills-tab-3"
                >
                  <h3 class="mb-3">Sorting and Searchings</h3>

                  <h4 class="mb-3">Bubble Sort</h4>

                  <p>
                    This a comparison based algorithm. We divide the array into
                    two sections, unsorted and sorted. After each loop, we
                    garranted, the largest element of the unsorted portion is
                    pushed at the most right position. We scan through the
                    unsorted portion of the array and if the element is bigger
                    than the next, we swap them. We repeat the process
                    <code>n - 1</code> time until all elements are in the sorted
                    portion. If not swap was perform, list already sorted, no
                    need to go through other iterations. This reduce best time
                    complexity to <code>O(n)</code> if the list is already
                    sorted.
                  </p>

                  <!-- <img src="../assets/img/bubble-sort.svg"> -->
                  <object
                    type="image/svg+xml"
                    data="@/assets/img/bubble-sort.svg"
                  ></object>

                  <div class="line-numbers pb-4">
                    <pre class="rounded-2 position-relative">
                                        <code class="language-python">
                                          def bubbleSort(array: list) -> list: 
                                            for i in range(len(array), -1, -1):
                                              swapped = False
                                              for j in range(i - 1):
                                                if array[j] > array[j + 1]:
                                                  array[j], array[j + 1] = array[j + 1], array[j]
                                                  swapped = True
                                              if not swapped: break
                                            return nums
                                          </code>
                                          <a href="#" onclick="copyToClipboard()" class="copy bg-transparent text-wrap text-black d-inline-block position-absolute end-0 top-0 pe-3 py-3" data-bs-placement="left" data-bs-toggle="tooltip" data-bs-title="copy" data-bs-trigger="hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999" class="bi bi-clipboard icon-expand" viewBox="0 0 16 16">
                                              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999" class="bi bi-check-lg icon-contract mt-1" viewBox="0 0 16 16">
                                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                            </svg>
                                          </a>               
                                      </pre>
                  </div>

                  <h4 class="mb-3">Selection Sort</h4>

                  <p>
                    We divide the array into two sections, sorted and unsorted.
                    At each loop, we iterate through the unsorted portion to
                    find the minimum and place it at the leftmost position. We
                    repeat that until all elements are in the sorted section.
                  </p>

                  <!-- <img src="../../assets/img/selection-sort.svg"> -->
                  <object
                    type="image/svg+xml"
                    data="@/assets/img/selection-sort.svg"
                  ></object>

                  <div class="line-numbers pb-4">
                    <pre class="rounded-2 position-relative">
                                        <code class="language-python">
                                          def selectionSort(array: list) -> list:
                                            for i in range(len(array)):
                                              m = i
                                              for j in range(i + 1, len(array)):
                                                if array[j] &lt; array[m]: m = j
                                              array[i], array[m] = array[m], array[i]
                                            return array
                                          </code>
                                          <a href="#" onclick="copyToClipboard()" class="copy bg-transparent text-wrap text-black d-inline-block position-absolute end-0 top-0 pe-3 py-3" data-bs-placement="left" data-bs-toggle="tooltip" data-bs-title="copy" data-bs-trigger="hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999" class="bi bi-clipboard icon-expand" viewBox="0 0 16 16">
                                              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999" class="bi bi-check-lg icon-contract mt-1" viewBox="0 0 16 16">
                                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                            </svg>
                                          </a>               
                                      </pre>
                  </div>

                  <h4 class="mb-3">Insertion Sort</h4>

                  <p>
                    We divide the array into two sections, sorted and unsorted.
                    At each step we consider the rightmost element from the
                    unsorted portion of the array and while its greater that the
                    current element to its right, we swap the two.
                  </p>

                  <object
                    type="image/svg+xml"
                    data="@/assets/img/insertion-sort.svg"
                  ></object>

                  <!-- <img src="../../assets/img/insertion-sort.svg"> -->

                  <div class="line-numbers pb-4">
                    <pre class="rounded-2 position-relative">
                                        <code class="language-python">
                                          def insertionSort(array: list) -> list:
                                            for i in range(len(array)):
                                              j = i
                                              while j > 0 and array[j] &lt; array[j - 1]:
                                                array[j], array[j - 1] = array[j - 1], array[j]
                                                j -= 1
                                            return array
                                          </code>
                                          <a href="#" onclick="copyToClipboard()" class="copy bg-transparent text-wrap text-black d-inline-block position-absolute end-0 top-0 pe-3 py-3" data-bs-placement="left" data-bs-toggle="tooltip" data-bs-title="copy" data-bs-trigger="hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999" class="bi bi-clipboard icon-expand" viewBox="0 0 16 16">
                                              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999" class="bi bi-check-lg icon-contract mt-1" viewBox="0 0 16 16">
                                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                            </svg>
                                          </a>               
                                      </pre>
                  </div>

                  <h4 class="mb-3">Merge Sort</h4>

                  <p>
                    Merge Sort is based on the principle of Divide and Conquer
                    Algorithm. During the <b>divide</b> step, we divide the
                    current array in two parts. During the <b>conquer</b> part,
                    we sort each subarray by recursively calling the merge sort
                    function. Finally during the <b>combine</b> part, we merge
                    the two sorted sub-arrays into a single sorted array. The
                    best, average and worst time complexity is
                    <code>O(n*log n)</code> and space complexity is
                    <code>O(n)</code>.
                  </p>

                  <img src="@/assets/img/merge-sort.svg" />

                  <div class="line-numbers pb-4">
                    <pre class="rounded-2 position-relative">
                                        <code class="language-python">
                                          def mergeSort(array: list) -> list:
                                            if len(array) == 1:
                                              return array
                                            
                                            mid = len(array) // 2
                                            subarray1, subarray2 = mergeSort(array[:mid]), mergeSort(array[mid:])
                                            i = j = 0
                                            while i &lt; len(subarray1) and j &lt; len(subarray2):
                                              if subarray1[i] &lt; subarray2[j]:
                                                array[i + j] = subarray1[i]
                                                i += 1
                                              else:
                                                array[i + j] = subarray2[j]
                                                j += 1
                                            while i &lt; len(subarray1):
                                              array[i + j] = subarray1[i]
                                              i += 1
                                            while j &lt; len(subarray2):
                                              array[i + j] = subarray2[j]
                                              j += 1
                                            return array
                                          </code>
                                          <a href="#" onclick="copyToClipboard()" class="copy bg-transparent text-wrap text-black d-inline-block position-absolute end-0 top-0 pe-3 py-3" data-bs-placement="left" data-bs-toggle="tooltip" data-bs-title="copy" data-bs-trigger="hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999" class="bi bi-clipboard icon-expand" viewBox="0 0 16 16">
                                              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999" class="bi bi-check-lg icon-contract mt-1" viewBox="0 0 16 16">
                                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                            </svg>
                                          </a>               
                                      </pre>
                  </div>

                  <h4 class="mb-3">Quick Sort</h4>

                  <p>
                    Recursive sort. At each step the array is organize with
                    small elments to the right and big elements to the left. The
                    elements are split given a pivot value.
                  </p>

                  <div class="line-numbers pb-4">
                    <pre class="rounded-2 position-relative">
                                        <code class="language-python">
                                          def partition(array: list, low: int, high: int) -> list:
                                            # Choose the pivot and put it at the end
                                            mid = low + ((high - low + 1) >> 2)
                                            array[mid], array[high] = array[high], array[mid]
                                            pivot = array[high]
                                            
                                            # pointer for greater element
                                            g = low - 1
                                            
                                            for i in range(low, high):
                                              if array[i] &lt;= pivot: 
                                                g += 1
                                                array[i], array[g] = array[g], array[i]
                                            array[g + 1], array[high] = array[high], array[g + 1]
                                            return g + 1

                                          def quickSort(array: list, low: int=None, high: int=None) -> list:
                                            if not low: low = 0
                                            if not high: high = len(array) - 1
                                            
                                            if low &lt; high:
                                              pivot = partition(array, low, high)
                                            
                                              # recursive call on the left of pivot
                                              quickSort(array, low, pivot - 1)

                                              # recursive call on the right of pivot
                                              quickSort(array, pivot + 1, high)
                                            return array
                                          </code>
                                          <a href="#" onclick="copyToClipboard()" class="copy bg-transparent text-wrap text-black d-inline-block position-absolute end-0 top-0 pe-3 py-3" data-bs-placement="left" data-bs-toggle="tooltip" data-bs-title="copy" data-bs-trigger="hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999" class="bi bi-clipboard icon-expand" viewBox="0 0 16 16">
                                              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999" class="bi bi-check-lg icon-contract mt-1" viewBox="0 0 16 16">
                                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                            </svg>
                                          </a>               
                                      </pre>
                  </div>

                  <h4 class="mb-3">Count Sort</h4>
                  <h4 class="mb-3">Radix Sort</h4>
                  <h4 class="mb-3">Heap Sort</h4>
                  <h4 class="mb-3">Bucket Sort</h4>
                  <h4 class="mb-3">Quick Select</h4>
                </div>
                <div
                  class="tab-pane fade show"
                  id="course-pills-4"
                  role="tabpanel"
                  aria-labelledby="course-pills-tab-4"
                >
                  <h5 class="mb-3">Backtracking</h5>
                  <p class="mb-3">
                    Welcome to the
                    <strong>
                      Master 2 Mathématiques et Informatique pour la Data
                      Science (M2 MIDS) from Paris University.</strong
                    >
                  </p>
                  <p>
                    The course is part of the
                    <a
                      class="text-decoration-none text-capitalize"
                      href="https://m2mids.github.io/m2mids/"
                      >M2 MIDS</a
                    >
                    cursus.
                  </p>
                  <p>
                    It introduces statistical methods for Natural Language
                    Processing, including text vectorization, word embeddings,
                    and sequence models. In addition, the course includes
                    practical exercises that cover web scraping, regular
                    expressions, and visualization. The labs include common use
                    cases such as text classification or topic mining. Finally,
                    the course gives an overview about open-source tools for nlp
                    such as nlp libraries, intelligibility methods or deep
                    learning frameworks.
                  </p>
                </div>
                <div
                  class="tab-pane fade show"
                  id="course-pills-5"
                  role="tabpanel"
                  aria-labelledby="course-pills-tab-5"
                >
                  <h5 class="mb-3">Dynamic Programming</h5>
                  <p class="mb-3">
                    Welcome to the
                    <strong>
                      Master 2 Mathématiques et Informatique pour la Data
                      Science (M2 MIDS) from Paris University.</strong
                    >
                  </p>
                  <p>
                    The course is part of the
                    <a
                      class="text-decoration-none text-capitalize"
                      href="https://m2mids.github.io/m2mids/"
                      >M2 MIDS</a
                    >
                    cursus.
                  </p>
                  <p>
                    It introduces statistical methods for Natural Language
                    Processing, including text vectorization, word embeddings,
                    and sequence models. In addition, the course includes
                    practical exercises that cover web scraping, regular
                    expressions, and visualization. The labs include common use
                    cases such as text classification or topic mining. Finally,
                    the course gives an overview about open-source tools for nlp
                    such as nlp libraries, intelligibility methods or deep
                    learning frameworks.
                  </p>
                </div>
                <div
                  class="tab-pane fade show"
                  id="course-pills-6"
                  role="tabpanel"
                  aria-labelledby="course-pills-tab-6"
                >
                  <h5 class="mb-3">Design and Python</h5>
                  <p class="mb-3">
                    Welcome to the
                    <strong>
                      Master 2 Mathématiques et Informatique pour la Data
                      Science (M2 MIDS) from Paris University.</strong
                    >
                  </p>
                  <p>
                    The course is part of the
                    <a
                      class="text-decoration-none text-capitalize"
                      href="https://m2mids.github.io/m2mids/"
                      >M2 MIDS</a
                    >
                    cursus.
                  </p>
                  <p>
                    It introduces statistical methods for Natural Language
                    Processing, including text vectorization, word embeddings,
                    and sequence models. In addition, the course includes
                    practical exercises that cover web scraping, regular
                    expressions, and visualization. The labs include common use
                    cases such as text classification or topic mining. Finally,
                    the course gives an overview about open-source tools for nlp
                    such as nlp libraries, intelligibility methods or deep
                    learning frameworks.
                  </p>
                </div>
              </div>
              <!-- <div class="row">
                                <div class="col-xl-8 col-lg-12 col-md-12 col-12 mb-4 mb-xl-0">
                                    
                                </div>
                                
                            </div> -->
            </div>
          </div>
        </div>
        <div class="col-lg-12"></div>
      </div>
    </div>
  </section>
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