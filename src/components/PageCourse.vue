<script>
export default {
  props: ["content"],
};
</script>

<template>
  <div class="col-xl-8 col-lg-8 col-md-12 col-12 mb-4 mb-xl-0">
                    <div class="card shadow-sm border-0 rounded-2 p-0">
                        <div class="card-body p-4">
                            <div class="tab-content pt-2" id="course-pills-tabContent">
                                <div class="tab-pane fade show active" id="course-pills-1" role="tabpanel"
                                    aria-labelledby="course-pills-tab-1">
                                    <div v-html="this.content" />
                                    
                                    
                                </div>
                                <div class="tab-pane fade show" id="course-pills-2" role="tabpanel"
                                    aria-labelledby="course-pills-tab-2">
                                    <h5 class="mb-3">Data Structures</h5>
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
                                </div>
                                <div class="tab-pane fade show" id="course-pills-3" role="tabpanel"
                                    aria-labelledby="course-pills-tab-3">

                                    <h3 class="mb-3">Sorting and Searchings</h3>

                                    <h4 class="mb-3">Bubble Sort</h4>

                                    <p>This a comparison based algorithm. We divide the array into two sections, unsorted and sorted.
                                      After each loop, we garranted, the largest element of the unsorted
                                      portion is pushed at the most right position. We scan through the unsorted
                                      portion of the array and if the element is bigger than the next, we swap them.
                                      We repeat the process <code>n - 1</code> time until all elements are in the sorted portion.
                                      If not swap was perform, list already sorted, no need to go through other iterations.
                                      This reduce best time complexity to <code>O(n)</code> if the list is already sorted.</p>

                                    <!-- <img src="../../assets/img/bubble-sort.svg"> -->
                                    <object type="image/svg+xml" data="@/assets/img/bubble-sort.svg"></object>
                                    
                                   

                                    <h4 class="mb-3">Selection Sort</h4>

                                    <p>We divide the array into two sections, sorted and unsorted. At each loop, we iterate through the unsorted portion to
                                      find the minimum and place it at the leftmost position. We repeat that until all elements are in the sorted section.
                                    </p>

                                    <!-- <img src="../../assets/img/selection-sort.svg"> -->
                                    <object type="image/svg+xml" data="@/assets/img/selection-sort.svg"></object>

                                    
                                    <h4 class="mb-3">Insertion Sort</h4>

                                    <p>We divide the array into two sections, sorted and unsorted. At each step
                                      we consider the rightmost element from the unsorted portion of the array and
                                      while its greater that the current element to its right, we swap the two.</p>

                                    <object type="image/svg+xml" data="@/assets/img/insertion-sort.svg"></object>

                                    <!-- <img src="../../assets/img/insertion-sort.svg"> -->

                                   

                                    <h4 class="mb-3">Merge Sort</h4>

                                    <p>
                                      Merge Sort is based on the principle of Divide and Conquer Algorithm. During the <b>divide</b> step, we divide the current array in two parts.
                                      During the <b>conquer</b> part, we sort each subarray by recursively calling the merge sort function. 
                                      Finally during the <b>combine</b> part, we merge the two sorted sub-arrays into a single sorted array.
                                      The best, average and worst time complexity is <code>O(n*log n)</code> and space complexity is  <code>O(n)</code>.
                                    </p>

                                    <img src="@/assets/img/merge-sort.svg">

                                    

                                    <h4 class="mb-3">Quick Sort</h4>

                                    <p>
                                      Recursive sort. At each step the array is organize with small elments to 
                                      the right and big elements to the left. The elements are split given a pivot
                                      value.
                                    </p>

                                   

                                    <h4 class="mb-3">Count Sort</h4>
                                    <h4 class="mb-3">Radix Sort</h4>
                                    <h4 class="mb-3">Heap Sort</h4>
                                    <h4 class="mb-3">Bucket Sort</h4>
                                    <h4 class="mb-3">Quick Select</h4>

                                </div>
                                <div class="tab-pane fade show" id="course-pills-4" role="tabpanel"
                                    aria-labelledby="course-pills-tab-4">
                                    <h5 class="mb-3">Backtracking</h5>
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
                                </div>
                                <div class="tab-pane fade show" id="course-pills-5" role="tabpanel"
                                    aria-labelledby="course-pills-tab-5">
                                    <h5 class="mb-3">Dynamic Programming</h5>
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
                                </div>
                                <div class="tab-pane fade show" id="course-pills-6" role="tabpanel"
                                    aria-labelledby="course-pills-tab-6">
                                    <h5 class="mb-3">Design and Python</h5>
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
                                </div>
                            </div>
                            <!-- <div class="row">
                                <div class="col-xl-8 col-lg-12 col-md-12 col-12 mb-4 mb-xl-0">
                                    
                                </div>
                                
                            </div> -->
                            
                            
                        </div>
                    </div>
                </div>
</template>