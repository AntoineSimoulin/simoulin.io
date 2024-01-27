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
  <div class="modal fade" id="lecture_1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Cours 1 : Modélisation statistique du langage,
            vectorisation de texte</h5>
          <div>
            <a href="https://github.com/AntoineSimoulin/m2-data-sciences/raw/master/Cours%201%20-%20Mod%C3%A9lisation%20statistique%20du%20langage/Cours_1.pdf"
              type="button" class="btn-download border-0 opacity-50 bg-transparent p-2 m-n2" aria-label="Download">
              <i class="fa-solid fa-download"></i>
            </a>
            <!-- <button type="button" class="btn-close" style="background: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z'/%3e%3cpath d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z'/%3e%3c/svg%3e&quot;) center / 1em no-repeat;"></button> -->
            <!-- <button type="button" class="btn-close" style="background: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z'/%3e%3cpath d='M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z'/%3e%3c/svg%3e&quot;) center / 1em no-repeat;"></button> -->
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
        <div class="modal-body">
          <iframe width="100%" height="100%" marginheight="0" marginwidth="0"
            src="https://simoulin.io/slides/lecture_1/">
            <!-- Fallback text here for unsupporting browsers, of which there are scant few. -->
          </iframe>
        </div>
        <!-- <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
      </div>
    </div>
  </div>
  <div class="modal fade" id="lecture_2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Cours 2 : Représentations sémantiques distributionnelles :
            Embeddings de mots</h5>
          <div>
            <a href="https://github.com/AntoineSimoulin/m2-data-sciences/raw/master/Cours%202%20-%20Embeddings/Cours_2.pdf"
              type="button" class="btn-download border-0 opacity-50 bg-transparent p-2 m-n2" aria-label="Download">
              <i class="fa-solid fa-download"></i>
            </a>
            <!-- <button type="button" class="btn-close" style="background: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z'/%3e%3cpath d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z'/%3e%3c/svg%3e&quot;) center / 1em no-repeat;"></button> -->
            <!-- <button type="button" class="btn-close" style="background: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z'/%3e%3cpath d='M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z'/%3e%3c/svg%3e&quot;) center / 1em no-repeat;"></button> -->
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
        <div class="modal-body">
          <iframe width="100%" height="100%" marginheight="0" marginwidth="0"
            src="https://simoulin.io/slides/lecture_2/">
            <!-- Fallback text here for unsupporting browsers, of which there are scant few. -->
          </iframe>
        </div>
        <!-- <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
      </div>
    </div>
  </div>
  <div class="modal fade" id="lecture_3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Cours 3 : Modélisation de séquences de mots : modèles de
            langue.
            Application à la génération de
            texte</h5>
          <div>
            <a href="https://github.com/AntoineSimoulin/m2-data-sciences/raw/master/Cours%203%20-%20Language%20Models/Cours_3.pdf"
              type="button" class="btn-download border-0 opacity-50 bg-transparent p-2 m-n2" aria-label="Download">
              <i class="fa-solid fa-download"></i>
            </a>
            <!-- <button type="button" class="btn-close" style="background: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z'/%3e%3cpath d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z'/%3e%3c/svg%3e&quot;) center / 1em no-repeat;"></button> -->
            <!-- <button type="button" class="btn-close" style="background: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z'/%3e%3cpath d='M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z'/%3e%3c/svg%3e&quot;) center / 1em no-repeat;"></button> -->
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
        <div class="modal-body">
          <iframe width="100%" height="100%" marginheight="0" marginwidth="0"
            src="https://simoulin.io/slides/lecture_3/">
            <!-- Fallback text here for unsupporting browsers, of which there are scant few. -->
          </iframe>
        </div>
        <!-- <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
      </div>
    </div>
  </div>
  <div class="modal fade" id="lecture_4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Cours 4 : Ouverture sur les méthodes de Deep Learning pour
            le
            NLP (RNN, Seq2Seq, Attention, Bert) Application au systèmes de Q&A</h5>
          <div>
            <a href="https://github.com/AntoineSimoulin/m2-data-sciences/raw/master/Cours%204%20-%20Introduction%20NLP%20%26%20Deep%20Learning/Cours_4.pdf"
              type="button" class="btn-download border-0 opacity-50 bg-transparent p-2 m-n2" aria-label="Download">
              <i class="fa-solid fa-download"></i>
            </a>
            <!-- <button type="button" class="btn-close" style="background: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z'/%3e%3cpath d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z'/%3e%3c/svg%3e&quot;) center / 1em no-repeat;"></button> -->
            <!-- <button type="button" class="btn-close" style="background: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z'/%3e%3cpath d='M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z'/%3e%3c/svg%3e&quot;) center / 1em no-repeat;"></button> -->
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
        <div class="modal-body">
          <iframe width="100%" height="100%" marginheight="0" marginwidth="0"
            src="https://simoulin.io/slides/lecture_4/">
            <!-- Fallback text here for unsupporting browsers, of which there are scant few. -->
          </iframe>
        </div>
        <!-- <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
      </div>
    </div>
  </div>
  <section class="pb-0 py-lg-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="card shadow border-0 rounded-2 p-0">
              <div class="card-header px-4 py-3">
                <ul class="nav nav-pills nav-tabs-line py-0" id="course-pills-tab" role="tablist">
                  <!-- Tab item -->
                  <li class="nav-item me-2 me-sm-4" role="presentation">
                    <button class="nav-link mb-2 mb-md-0 active" id="course-pills-tab-1" data-bs-toggle="pill"
                      data-bs-target="#course-pills-1" type="button" role="tab" aria-controls="course-pills-1"
                      aria-selected="true">Overview</button>
                  </li>
                  <!-- Tab item -->
                  <li class="nav-item me-2 me-sm-4" role="presentation">
                    <button class="nav-link mb-2 mb-md-0" id="course-pills-tab-2" data-bs-toggle="pill"
                      data-bs-target="#course-pills-2" type="button" role="tab" aria-controls="course-pills-2"
                      aria-selected="false">Curriculum</button>
                  </li>
                  <!-- Tab item -->
                  <li class="nav-item me-2 me-sm-4" role="presentation">
                    <button class="nav-link mb-2 mb-md-0" id="course-pills-tab-3" data-bs-toggle="pill"
                      data-bs-target="#course-pills-3" type="button" role="tab" aria-controls="course-pills-3"
                      aria-selected="false">Technical
                      requirements</button>
                  </li>
                </ul>
              </div>
              <div class="card-body bg-white p-4">
                <div class="tab-content pt-2" id="course-pills-tabContent">
                  <div class="tab-pane fade show active" id="course-pills-1" role="tabpanel"
                    aria-labelledby="course-pills-tab-1">
                    <h5 class="mb-3">Course Description</h5>
                    <p class="mb-3">Welcome to the <strong> Master 2 Mathématiques et Informatique
                        pour la Data Science (M2 MIDS) from Paris University.</strong></p>
                    <p>The course is part of the <a class="text-decoration-none text-capitalize"
                        href="https://m2mids.github.io/m2mids/">M2 MIDS</a> cursus.</p>
                    <p>It introduces statistical methods for Natural Language Processing, including
                      text vectorization, word embeddings, and sequence models.
                      In addition, the course includes practical exercises that cover web
                      scraping, regular expressions, and
                      visualization.
                      The labs include common use cases such as text classification or topic
                      mining.
                      Finally, the course gives an overview about open-source tools for nlp such
                      as nlp libraries,
                      intelligibility methods or deep learning frameworks.</p>

                    <h5 class="mt-4">What you’ll learn</h5>
                    <ul class="list-group text-capitalize bg-white list-group-borderless mb-3">
                      <li class="list-group-item h6 fw-light d-flex bg-white mb-0"><i
                          class="fas fa-check-circle text-success me-2"></i>Text vectorization
                      </li>
                      <li class="list-group-item h6 fw-light d-flex bg-white mb-0"><i
                          class="fas fa-check-circle text-success me-2"></i>word embeddings
                      </li>
                      <li class="list-group-item h6 fw-light d-flex bg-white mb-0"><i
                          class="fas fa-check-circle text-success me-2"></i>sequence models
                      </li>
                      <li class="list-group-item h6 fw-light d-flex bg-white mb-0"><i
                          class="fas fa-check-circle text-success me-2"></i>web scraping</li>
                      <li class="list-group-item h6 fw-light d-flex bg-white mb-0"><i
                          class="fas fa-check-circle text-success me-2"></i>regular
                        expressions</li>
                      <li class="list-group-item h6 fw-light d-flex bg-white mb-0"><i
                          class="fas fa-check-circle text-success me-2"></i>data vizualization
                        for text</li>
                      <li class="list-group-item h6 fw-light d-flex bg-white mb-0"><i
                          class="fas fa-check-circle text-success me-2"></i>text
                        classification</li>
                      <li class="list-group-item h6 fw-light d-flex bg-white mb-0"><i
                          class="fas fa-check-circle text-success me-2"></i>topic mining</li>
                      <li class="list-group-item h6 fw-light d-flex bg-white mb-0"><i
                          class="fas fa-check-circle text-success me-2"></i>open-source tools
                      </li>
                      <li class="list-group-item h6 fw-light d-flex bg-white mb-0"><i
                          class="fas fa-check-circle text-success me-2"></i>NLP libraries</li>
                      <li class="list-group-item h6 fw-light d-flex bg-white mb-0"><i
                          class="fas fa-check-circle text-success me-2"></i>intelligibility
                        methods</li>
                      <li class="list-group-item h6 fw-light d-flex bg-white  mb-0"><i
                          class="fas fa-check-circle text-success me-2"></i>deep learning
                        frameworks</li>
                    </ul>
                  </div>
                  <div class="tab-pane fade" id="course-pills-2" role="tabpanel" aria-labelledby="course-pills-tab-2">
                    <div class="accordion accordion-icon accordion-bg-light" id="accordionExample2">
                      <!-- Item -->
                      <div class="accordion-item mb-3">
                        <h6 class="accordion-header font-base" id="heading-1">
                          <button class="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block"
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false"
                            aria-controls="collapse-1">
                            Cours 1 : Modélisation statistique du langage, vectorisation de
                            texte
                            <!-- <span class="small ms-0 ms-sm-2">(3 Lectures)</span>  -->
                          </button>
                        </h6>
                        <div id="collapse-1" class="accordion-collapse collapse" aria-labelledby="heading-1"
                          data-bs-parent="#accordionExample2">
                          <div class="accordion-body mt-3">
                            <!-- Course lecture -->
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="position-relative d-flex align-items-center">
                                <button class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                  data-bs-toggle="modal" data-bs-target="#lecture_1">
                                  <i class="fa-solid fa-file-powerpoint me-0"></i>
                                </button>
                                <span
                                  class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lecture
                                  slides</span>
                              </div>
                              <!-- <p class="mb-0">2m 10s</p> -->
                            </div>

                            <hr> <!-- Divider -->

                            <!-- Course lecture -->
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="position-relative d-flex align-items-center">
                                <a href="#"
                                  class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i class="fas fa-play me-0"></i>
                                </a>
                                <span
                                  class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lecture
                                  replay</span>
                              </div>
                              <!-- <p class="mb-0">2m 10s</p> -->
                            </div>

                            <hr> <!-- Divider -->

                            <!-- Course lecture -->
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="position-relative d-flex align-items-center">
                                <a target="_blank"
                                  href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%201%20-%20Mod%C3%A9lisation%20statistique%20du%20langage/Fr%C3%A9quences%20des%20mots.ipynb"
                                  class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i class="fas fa-display me-0"></i>
                                  <!-- <i class="fa-solid fa-display"></i> -->
                                </a>
                                <span
                                  class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lab
                                  materials</span>
                              </div>
                              <!-- <i class="fas fa-download me-0"></i>  -->
                              <!-- <p class="mb-0 text-truncate">15m 10s</p> -->
                            </div>

                            <!-- <hr> -->

                            <!-- Course lecture -->
                            <!-- <div class="d-flex justify-content-between align-items-center">
                                <div class="position-relative d-flex align-items-center">
                                  <a href="#"
                                    class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i class="fas fa-download me-0"></i>
                                  </a>
                                  <span
                                    class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lab materials (download)</span>
                                </div>
                                <p class="mb-0">18m 10s</p>
                              </div> -->
                          </div>
                        </div>
                      </div>

                      <!-- Item -->
                      <div class="accordion-item mb-3">
                        <h6 class="accordion-header font-base" id="heading-2">
                          <button class="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block"
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false"
                            aria-controls="collapse-2">
                            TP 1 : Classification de textes, modèles BoW
                            <!-- <span class="small ms-0 ms-sm-2">(4 Lectures)</span>  -->
                          </button>
                        </h6>
                        <div id="collapse-2" class="accordion-collapse collapse" aria-labelledby="heading-2"
                          data-bs-parent="#accordionExample2">
                          <!-- Accordion body START -->
                          <div class="accordion-body mt-3">
                            <!-- Course lecture -->
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="position-relative d-flex align-items-center">
                                <a target="_blank"
                                  href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/TP1%20-%20Apprentissage%20supervis%C3%A9%20pour%20le%20NLP/Classification.ipynb"
                                  class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i class="fas fa-display me-0"></i>
                                </a>
                                <span
                                  class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lab
                                  materials</span>
                              </div>
                              <!-- <p class="mb-0">11m 20s</p> -->
                            </div>

                            <!-- <hr> Divider -->

                            <!-- Course lecture -->
                            <!-- <div class="d-flex justify-content-between align-items-center">
                                <div class="position-relative d-flex align-items-center">
                                  <a href="#"
                                    class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i class="fas fa-play me-0"></i>
                                  </a>
                                  <span
                                    class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lab
                                    materials (colab)</span>
                                </div>
                                <p class="mb-0 text-truncate">25m 20s</p>
                              </div> -->
                          </div>
                          <!-- Accordion body END -->
                        </div>
                      </div>

                      <!-- Item -->
                      <div class="accordion-item mb-3">
                        <h6 class="accordion-header font-base" id="heading-5">
                          <button class="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block"
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false"
                            aria-controls="collapse-5">
                            TP 2 : Détection de thèmes, LDA
                            <!-- <span class="small ms-0 ms-sm-2">(10 Lectures)</span>  -->
                          </button>
                        </h6>
                        <div id="collapse-5" class="accordion-collapse collapse" aria-labelledby="heading-5"
                          data-bs-parent="#accordionExample2">
                          <!-- Accordion body START -->
                          <div class="accordion-body mt-3">

                            <!-- Course lecture -->
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="position-relative d-flex align-items-center">
                                <a target="_blank"
                                  href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/TP2%20-%20Text%20Mining/TP2%20-%20Exploration%20de%20topics.ipynb"
                                  class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i class="fas fa-display me-0"></i>
                                </a>
                                <span
                                  class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lab
                                  materials</span>
                              </div>
                              <!-- <p class="mb-0">1m 10s</p> -->
                            </div>

                            <!-- <hr> Divider
      
                              Course lecture
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="position-relative d-flex align-items-center">
                                  <a href="#"
                                    class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i class="fas fa-play me-0"></i>
                                  </a>
                                  <span
                                    class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lab
                                    materials (download)</span>
                                </div>
                                <p class="mb-0 text-truncate">11m 03s</p>
                              </div> -->
                          </div>
                          <!-- Accordion body END -->
                        </div>
                      </div>

                      <!-- Item -->
                      <div class="accordion-item mb-3">
                        <h6 class="accordion-header font-base" id="heading-6">
                          <button class="accordion-button fw-bold collapsed rounded d-block d-sm-flex d-inline-block"
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false"
                            aria-controls="collapse-6">
                            Cours 2 : Représentations sémantiques distributionnelles :
                            Embeddings de mots
                            <!-- <span class="small ms-0 ms-sm-2">(3 Lectures)</span>  -->
                          </button>
                        </h6>
                        <div id="collapse-6" class="accordion-collapse collapse" aria-labelledby="heading-6"
                          data-bs-parent="#accordionExample2">
                          <!-- Accordion body START -->
                          <div class="accordion-body mt-3">
                            <!-- Course lecture -->
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="position-relative d-flex align-items-center">
                                <!-- <a href="#"
                                                                    class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                    <i class="fa-solid fa-file-powerpoint me-0"></i>
                                                                </a> -->
                                <button class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                  data-bs-toggle="modal" data-bs-target="#lecture_2">
                                  <i class="fa-solid fa-file-powerpoint me-0"></i>
                                </button>
                                <span
                                  class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lecture
                                  slides</span>
                              </div>
                              <!-- <p class="mb-0">1m 20s</p> -->
                            </div>

                            <hr> <!-- Divider -->

                            <!-- Course lecture -->
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="position-relative d-flex align-items-center">
                                <a href="#"
                                  class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i class="fas fa-play me-0"></i>
                                </a>
                                <span
                                  class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lecture
                                  replay</span>
                              </div>
                              <!-- <p class="mb-0 text-truncate">25m 20s</p> -->
                            </div>

                            <hr> <!-- Divider -->

                            <!-- Course lecture -->
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="position-relative d-flex align-items-center">
                                <a target="_blank"
                                  href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%202%20-%20Embeddings/Words%20Embeddings.ipynb"
                                  class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i class="fas fa-display me-0"></i>
                                </a>
                                <span
                                  class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lab
                                  materials</span>
                              </div>
                              <!-- <p class="mb-0">11m 30s</p> -->
                            </div>

                            <!-- <hr>
      
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="position-relative d-flex align-items-center">
                                  <a href="#"
                                    class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i class="fas fa-play me-0"></i>
                                  </a>
                                  <span
                                    class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lab
                                    materials (colab)</span>
                                </div>
                              </div> -->
                            <!-- Accordion body END -->
                          </div>
                        </div>
                      </div>

                      <!-- Item -->
                      <div class="accordion-item mb-3">
                        <h6 class="accordion-header font-base" id="heading-7">
                          <button class="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block"
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false"
                            aria-controls="collapse-7">
                            TP 3 : Embeddings de mots pour l'analyse de sentiments
                            <!-- <span class="small ms-0 ms-sm-2">(5 Lectures)</span>  -->
                          </button>
                        </h6>
                        <div id="collapse-7" class="accordion-collapse collapse" aria-labelledby="heading-7"
                          data-bs-parent="#accordionExample2">
                          <!-- Accordion body START -->
                          <div class="accordion-body mt-3">
                            <!-- Course lecture -->
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="position-relative d-flex align-items-center">
                                <a target="_blank"
                                  href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/TP3%20-%20Word%20Embeddings/EmojiFy.ipynb"
                                  class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i class="fas fa-display me-0"></i>
                                </a>
                                <span
                                  class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lab
                                  materials</span>
                              </div>
                              <!-- <p class="mb-0">25m 20s</p> -->
                            </div>

                            <!-- <hr> 
      
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="position-relative d-flex align-items-center">
                                  <a href="#"
                                    class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i class="fas fa-play me-0"></i>
                                  </a>
                                  <span
                                    class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lab
                                    materials (download)</span>
                                </div>
                              </div> -->
                          </div>
                          <!-- Accordion body END -->
                        </div>
                      </div>

                      <!-- Item -->
                      <div class="accordion-item mb-3">
                        <h6 class="accordion-header font-base" id="heading-8">
                          <button class="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block"
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="false"
                            aria-controls="collapse-8">
                            Cours 3 : Modélisation de séquences de mots : modèles de langue.
                            Application à la génération de
                            texte
                            <!-- <span class="small ms-0 ms-sm-2">(8 Lectures)</span>  -->
                          </button>
                        </h6>
                        <div id="collapse-8" class="accordion-collapse collapse" aria-labelledby="heading-8"
                          data-bs-parent="#accordionExample2">
                          <!-- Accordion body START -->
                          <div class="accordion-body mt-3">
                            <!-- Course lecture -->
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="position-relative d-flex align-items-center">
                                <!-- <a href="#"
                                                                    class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                    <i class="fa-solid fa-file-powerpoint me-0"></i>
                                                                </a> -->
                                <button class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                  data-bs-toggle="modal" data-bs-target="#lecture_3">
                                  <i class="fa-solid fa-file-powerpoint me-0"></i>
                                </button>
                                <span
                                  class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lecture
                                  slides</span>
                              </div>
                              <!-- <p class="mb-0">20m 20s</p> -->
                            </div>

                            <hr> <!-- Divider -->

                            <!-- Course lecture -->
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="position-relative d-flex align-items-center">
                                <a href="#"
                                  class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i class="fas fa-play me-0"></i>
                                </a>
                                <span
                                  class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lecture
                                  replay</span>
                              </div>
                              <!-- <p class="mb-0 text-truncate">15m 20s</p> -->
                            </div>

                            <hr> <!-- Divider -->

                            <!-- Course lecture -->
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="position-relative d-flex align-items-center">
                                <a target="_blank"
                                  href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%203%20-%20Language%20Models/Mod%C3%A8les%20de%20langues.ipynb"
                                  class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i class="fas fa-display me-0"></i>
                                </a>
                                <span
                                  class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lab
                                  materials</span>
                              </div>
                              <!-- <p class="mb-0">16m 20s</p> -->
                            </div>

                            <!-- <hr>
      
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="position-relative d-flex align-items-center">
                                  <a href="#"
                                    class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i class="fas fa-play me-0"></i>
                                  </a>
                                  <span
                                    class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lab
                                    materials (download)</span>
                                </div>
                              </div> -->
                          </div>
                          <!-- Accordion body END -->
                        </div>
                      </div>

                      <!-- Item -->
                      <div class="accordion-item mb-3">
                        <h6 class="accordion-header font-base" id="heading-9">
                          <button class="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block"
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="false"
                            aria-controls="collapse-9">
                            Cours 4 : Ouverture sur les méthodes de Deep Learning pour le
                            NLP (RNN, Seq2Seq, Attention,
                            Bert) Application au systèmes de Q&A
                            <!-- <span class="small ms-0 ms-sm-2">(4 Lectures)</span>  -->
                          </button>
                        </h6>
                        <div id="collapse-9" class="accordion-collapse collapse" aria-labelledby="heading-9"
                          data-bs-parent="#accordionExample2">
                          <!-- Accordion body START -->
                          <div class="accordion-body mt-3">
                            <!-- Course lecture -->
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="position-relative d-flex align-items-center">
                                <!-- <a href="#"
                                                                    class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                    <i class="fa-solid fa-file-powerpoint me-0"></i>
                                                                </a> -->
                                <button class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                  data-bs-toggle="modal" data-bs-target="#lecture_4">
                                  <i class="fa-solid fa-file-powerpoint me-0"></i>
                                </button>
                                <span
                                  class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lecture
                                  slides</span>
                              </div>
                              <!-- <p class="mb-0">13m 20s</p> -->
                            </div>

                            <hr> <!-- Divider -->

                            <!-- Course lecture -->
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="position-relative d-flex align-items-center">
                                <a href="#"
                                  class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i class="fas fa-play me-0"></i>
                                </a>
                                <span
                                  class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lecture
                                  replay</span>
                              </div>
                              <!-- <p class="mb-0 text-truncate">7m 20s</p> -->
                            </div>

                            <hr> <!-- Divider -->

                            <!-- Course lecture -->
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="position-relative d-flex align-items-center">
                                <a target="_blank"
                                  href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%204%20-%20Introduction%20NLP%20%26%20Deep%20Learning/Bert_QA%5BCOLAB%5D.ipynb"
                                  class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i class="fas fa-display me-0"></i>
                                </a>
                                <span
                                  class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lab
                                  materials</span>
                              </div>
                              <!-- <p class="mb-0">12m 20s</p> -->
                            </div>

                            <!-- <hr>
      
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="position-relative d-flex align-items-center">
                                  <a href="#"
                                    class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i class="fas fa-play me-0"></i>
                                  </a>
                                  <span
                                    class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Lab
                                    materials (download)</span>
                                </div>
                              </div> -->
                          </div>
                          <!-- Accordion body END -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="course-pills-3" role="tabpanel" aria-labelledby="course-pills-tab-3">

                    <h5 class="mb-3">En local</h5>

                    <p>Si vous souhaitez exécuter le TP sur votre ordinateur, voici une procédure
                      rapide pour installer Python et les librairies requises.
                      Ca évitera d’avoir des problèmes de version de librairies qui interfère avec
                      d’autres cours ou projets.
                      Pour installer Python, je vous conseille d’utiliser <a
                        class="text-decoration-none text-capitalize"
                        href="https://www.anaconda.com/products/individual">Anaconda</a> (~450
                      MB).
                      Sélectionnez l’installation correspondent à votre système d’exploitation et
                      “64-Bit Graphical Installer” puis suivez les instructions pour installer
                      Anaconda.</p>

                    <p>Pour les librairies, je vous conseille de créer un environnement virtuel
                      python pour l’ensemble du cours. Ouvrez un terminal et tapez la commande
                      suivante :
                    </p>

                    <code>
                            conda create -n nlp-101 python=3.6<br>
                            # Vous pouvez activer l’environnement avec la commande suivante<br>
                            conda activate nlp-101<br>
                        </code><br>

                    <p>Si vous utilisez <a class="text-decoration-none text-capitalize"
                        href="https://jupyterlab.readthedocs.io/en/stable/">jupyter-lab</a>,
                      vous pouvez répertorier l’environement :</p>

                    <code>
                            conda install ipykernel<br>
                            ipython kernel install --user --name='nlp-101'<br>
                        </code><br>

                    <p>Nous allons installer les librairies avec le gestionnaire pip. Vérifiez que
                      la version utilisée est bien celle associée à anaconda :</p>

                    <code>
                            pip show pip<br>
                        </code><br>

                    <p>Puis mettez le à jour :</p>

                    <code>
                            pip install --upgrade pip<br>
                        </code><br>

                    <p>Installez les librairies suivantes :</p>

                    <code>
                            pip install scikit-learn==0.23.2 matplotlib==3.3.2 pandas==1.1.3 lime==0.2.0.1 unidecode==1.3.2 umap-learn==0.4.6 umap-learn[plot] nltk==3.5 spacy==2.3.2<br>
                            pip install --upgrade jupyter<br>
                        </code><br>

                    <p>Vous pouvez vérifier que chaque package est bien installé avec la commande :
                    </p>

                    <code>
                            python -c "import sklearn; print(sklearn.__version__)"<br>
                        </code><br>

                    <p>Finalement téléchargez le modèle Spacy français :</p>

                    <code>
                            python3 -m spacy download fr_core_news_md<br>
                        </code><br>

                    <h5 class="mb-3">Google Colab</h5>

                    <p>Si vous disposez d'un compte Google, vous pouvez également éxécuter
                      l'ensemble des TPs et exercices sur l'interface <a class="text-decoration-none text-capitalize"
                        href="https://colab.research.google.com/">Google Colab</a>.</p>

                    <h5 class="mb-3">Docker</h5>

                    <p>Il est également possible de faire tourner un serveur jupyter dans un Docker.
                      L'avantage est que ce dernier tournera dans un environnement virtuel en
                      grande partie indépendant des contraintes de votre machine. Par exemple de
                      votre installation python ou de votre système d'exploitation.</p>

                    <p>Pour cela, installez <a class="text-decoration-none text-capitalize"
                        href="https://www.docker.com/products/docker-desktop">Docker Desktop</a>
                      (c'est gratuit pour les utilisation non professionnelles). Vous pouvez
                      ensuite cloner le répertoire et construire l'image Docker. Pour cela ouvrez
                      un terminal et exécuter les commandeds suivantes :</p>

                    <code>
                            git clone git@github.com:AntoineSimoulin/m2-data-sciences.git<br>
                            cd m2-data-sciences<br>
                            git pull<br>
                            docker build -t m2-data-sciences .<br>
                            docker run -p 8888:8888 m2-data-sciences<br>
                        </code><br>

                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.btn-download {
      color: black !important;
    }

    .btn-download:hover {
      opacity: .75 !important;
    }

    body {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
    .card-img-top {
        width: 100%;
        height: 15vw;
        object-fit: cover;
    }

    .accordion {
        --bs-accordion-btn-icon: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color}'><path fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'/></svg>"))};
        --bs-accordion-btn-active-icon: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color}'><path fill-rule='evenodd' d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z'/></svg>"))};
        --bs-accordion-btn-icon-transition: transform 0.4s linear;
        --bs-accordion-btn-icon-transform: rotate(180deg);
        --bs-accordion-active-bg: rgb(239, 238, 238);
        --bs-accordion-bg: rgb(239, 238, 238);
        --bs-accordion-btn-color: #212529;
        --bs-accordion-active-color: #212529;
    }

    .nav-pills.nav-tabs-line .nav-link.active {
        color: #066ac9;
        background-color: rgba(6, 106, 201, 0.1);
    }

    .navbar {
      font-size: .9rem;
      font-weight: bold;
      letter-spacing: 0.05em;
    }

    .socials:hover {
        background: #938b8b21;
        border-radius: 50%;
    }

    .btn-danger-soft {
        color: #d6293e;
        background-color: rgba(214, 41, 62, 0.1);
    }

    .btn-danger-soft:hover {
        color: #fff;
        background-color: #d6293e;
    }

    .btn-round {
        height: 32px;
        width: 32px;
        line-height: 32px;
        border-radius: 50%;
        padding: 0;
        text-align: center;
        font-size: 0.8rem;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s linear;
    }

    .btn-round .fa-play {
        padding-left: 2px;
    }
    .fa, .fas {
        font-weight: 900;
    }

    .accordion.accordion-bg-light .accordion-item {
        border: none;
        background-color: transparent;
    }

    .list-group-borderless .list-group-item {
        border: none !important;
        padding: 0.425rem 0;
    }

    
    .nav-item:hover {
      background: #938b8b21;
    }
</style>