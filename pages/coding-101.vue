<script setup>
import { ref } from 'vue';
import Code from '@/components/Code.vue';
import AnimatedSvg from '@/components/AnimatedSvg.vue';

// Tab State
const activeTab = ref('description');
const sidebarOpen = ref(false); // For mobile responsiveness

const setActiveTab = (tabId) => {
    activeTab.value = tabId;
    sidebarOpen.value = false; // Close sidebar on selection on mobile
};

const sections = [
    { id: 'description', label: 'Course Description', icon: 'fas fa-graduation-cap' },
    { id: 'data-structures', label: 'Data Structures', icon: 'fas fa-sitemap' },
    { id: 'sorting', label: 'Sorting and Searching', icon: 'fas fa-arrow-down-short-wide' },
    { id: 'backtracking', label: 'Backtracking', icon: 'fas fa-rotate-left' },
    { id: 'dynamic', label: 'Dynamic Programming', icon: 'fas fa-layer-group' },
    { id: 'design', label: 'Design and Python', icon: 'fas fa-cube' },
];

// Data for Data Structures tab (Sidebar items that were disabled in original)
const dataStructureTopics = [
    { title: 'Introduction', duration: '1m 7s' },
    { title: 'Data types', duration: null, locked: true },
    { title: 'Arrays', duration: null, locked: true },
    { title: 'Linked-lists', duration: null, locked: true },
    { title: 'Stacks and Queues', duration: null, locked: true },
    { title: 'Trees and Graphs', duration: null, locked: true },
    { title: 'Heaps', duration: null, locked: true },
    { title: 'Tries', duration: null, locked: true },
];

const bubbleSortCode = `def bubbleSort(array: list) -> list: 
  for i in range(len(array), -1, -1):
    swapped = False
    for j in range(i - 1):
      if array[j] > array[j + 1]:
        array[j], array[j + 1] = array[j + 1], array[j]
        swapped = True
    if not swapped: break
  return nums`;

const selectionSortCode = `def selectionSort(array: list) -> list:
  for i in range(len(array)):
    m = i
    for j in range(i + 1, len(array)):
      if array[j] < array[m]: m = j
    array[i], array[m] = array[m], array[i]
  return array`;

const insertionSortCode = `def insertionSort(array: list) -> list:
  for i in range(len(array)):
    j = i
    while j > 0 and array[j] < array[j - 1]:
      array[j], array[j - 1] = array[j - 1], array[j]
      j -= 1
  return array`;

const mergeSortCode = `def mergeSort(array: list) -> list:
  if len(array) == 1:
    return array
  
  mid = len(array) // 2
  subarray1, subarray2 = mergeSort(array[:mid]), mergeSort(array[mid:])
  i = j = 0
  while i < len(subarray1) and j < len(subarray2):
    if subarray1[i] < subarray2[j]:
      array[i + j] = subarray1[i]
      i += 1
    else:
      array[i + j] = subarray2[j]
      j += 1
  while i < len(subarray1):
    array[i + j] = subarray1[i]
    i += 1
  while j < len(subarray2):
    array[i + j] = subarray2[j]
    j += 1
  return array`;

const quickSortCode = `def partition(array: list, low: int, high: int) -> list:
  # Choose the pivot and put it at the end
  mid = low + ((high - low + 1) >> 2)
  array[mid], array[high] = array[high], array[mid]
  pivot = array[high]
  
  # pointer for greater element
  g = low - 1
  
  for i in range(low, high):
    if array[i] <= pivot: 
      g += 1
      array[i], array[g] = array[g], array[i]
  array[g + 1], array[high] = array[high], array[g + 1]
  return g + 1

def quickSort(array: list, low: int=None, high: int=None) -> list:
  if not low: low = 0
  if not high: high = len(array) - 1
  
  if low < high:
    pivot = partition(array, low, high)
  
    # recursive call on the left of pivot
    quickSort(array, low, pivot - 1)

    # recursive call on the right of pivot
    quickSort(array, pivot + 1, high)
  return array`;

</script>

<template>
    <section class="py-6 lg:py-12 min-h-screen">
        <div class="container mx-auto px-4 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                
                <!-- Sidebar -->
                <div class="lg:col-span-4 xl:col-span-3">
                    <div class="bg-white rounded-2xl shadow-[3px_3px_0px_#000] border-2 border-black overflow-hidden sticky top-6">
                        <div class="p-4 border-b-2 border-black bg-emerald-100">
                            <h2 class="text-lg font-black text-black tracking-tight">Cracking the coding interview</h2>
                        </div>
                        <ul class="menu w-full p-0">
                            <li v-for="section in sections" :key="section.id">
                                <a 
                                    @click="setActiveTab(section.id)"
                                    class="rounded-none border-l-4 px-5 py-4 transition-colors font-bold text-sm gap-3 cursor-pointer"
                                    :class="activeTab === section.id 
                                        ? 'bg-emerald-300 text-black border-black font-extrabold' 
                                        : 'text-black/80 hover:bg-emerald-50 border-transparent hover:text-black'"
                                >
                                    <i :class="[section.icon, 'text-lg', activeTab === section.id ? 'text-black' : 'text-black/60']"></i>
                                    <span>{{ section.label }}</span>
                                    <i v-if="activeTab === section.id" class="fas fa-chevron-right ml-auto text-xs"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="lg:col-span-8 xl:col-span-9">
                    <div class="bg-white rounded-2xl shadow-[3px_3px_0px_#000] border-2 border-black p-6 lg:p-10 min-h-[500px]">
                        
                        <!-- TAB: Course Description -->
                        <div v-if="activeTab === 'description'" class="space-y-6 animate-fade-in">
                            <h2 class="text-2xl lg:text-3xl font-extrabold text-black border-b-2 border-black pb-4 mb-6 tracking-tight">Course Description</h2>
                            <div class="prose max-w-none text-black font-medium leading-relaxed">
                                <p class="mb-4">
                                    Welcome to the 
                                    <strong class="text-black font-bold">Master 2 Mathématiques et Informatique pour la Data Science (M2 MIDS) from Paris University.</strong>
                                </p>
                                <p class="mb-4">
                                    The course is part of the <a href="https://m2mids.github.io/m2mids/" target="_blank" class="font-bold underline text-black hover:text-emerald-700">M2 MIDS</a> cursus.
                                </p>
                                <p class="mb-8">
                                    It introduces statistical methods for Natural Language Processing, including text vectorization, word embeddings, and sequence models. In addition, the course includes practical exercises that cover web scraping, regular expressions, and visualization. The labs include common use cases such as text classification or topic mining. Finally, the course gives an overview about open-source tools for nlp such as nlp libraries, intelligibility methods or deep learning frameworks.
                                </p>

                                <h3 class="text-xl font-extrabold text-black mb-4">What you’ll learn</h3>
                                <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
                                    <li class="flex items-center gap-3 text-black p-3 bg-emerald-50 rounded-xl border-2 border-black font-bold shadow-[1px_1px_0px_#000]">
                                        <i class="fas fa-check-circle text-emerald-600 text-lg"></i>
                                        <span class="capitalize">Text vectorization</span>
                                    </li>
                                    <li class="flex items-center gap-3 text-black p-3 bg-emerald-50 rounded-xl border-2 border-black font-bold shadow-[1px_1px_0px_#000]">
                                        <i class="fas fa-check-circle text-emerald-600 text-lg"></i>
                                        <span class="capitalize">Word embeddings</span>
                                    </li>
                                    <li class="flex items-center gap-3 text-black p-3 bg-emerald-50 rounded-xl border-2 border-black font-bold shadow-[1px_1px_0px_#000]">
                                        <i class="fas fa-check-circle text-emerald-600 text-lg"></i>
                                        <span class="capitalize">Sequence models</span>
                                    </li>
                                    <li class="flex items-center gap-3 text-black p-3 bg-emerald-50 rounded-xl border-2 border-black font-bold shadow-[1px_1px_0px_#000]">
                                        <i class="fas fa-check-circle text-emerald-600 text-lg"></i>
                                        <span class="capitalize">Web scraping</span>
                                    </li>
                                    <li class="flex items-center gap-3 text-gray-700 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <i class="fas fa-check-circle text-green-500 text-lg"></i>
                                        <span class="capitalize">Regular expressions</span>
                                    </li>
                                    <li class="flex items-center gap-3 text-gray-700 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <i class="fas fa-check-circle text-green-500 text-lg"></i>
                                        <span class="capitalize">Data visualization</span>
                                    </li>
                                    <li class="flex items-center gap-3 text-gray-700 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <i class="fas fa-check-circle text-green-500 text-lg"></i>
                                        <span class="capitalize">Text classification</span>
                                    </li>
                                    <li class="flex items-center gap-3 text-gray-700 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <i class="fas fa-check-circle text-green-500 text-lg"></i>
                                        <span class="capitalize">Topic mining</span>
                                    </li>
                                    <li class="flex items-center gap-3 text-gray-700 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <i class="fas fa-check-circle text-green-500 text-lg"></i>
                                        <span class="capitalize">Open-source tools</span>
                                    </li>
                                    <li class="flex items-center gap-3 text-gray-700 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <i class="fas fa-check-circle text-green-500 text-lg"></i>
                                        <span class="capitalize">NLP libraries</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- TAB: Data Structures -->
                        <div v-if="activeTab === 'data-structures'" class="space-y-6 animate-fade-in">
                            <h2 class="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6">Data Structures</h2>
                            
                            <!-- Same text as other tabs? The original had the same Welcome text duplicated. I'll keep duplicate if it was there, but it seems odd. 
                                 Wait, lines 1285-1310 in original are mostly identical to Overview. 
                                 I will just use a specific list for this section instead.
                            -->
                            <div class="mb-8">
                                <p class="text-gray-600">The following modules cover fundamental data structures in computer science.</p>
                            </div>

                            <div class="space-y-3">
                                <div v-for="(topic, index) in dataStructureTopics" :key="index" 
                                     class="flex items-center justify-between p-4 rounded-lg border transition-colors"
                                     :class="topic.locked ? 'bg-gray-50 border-gray-100 text-gray-400' : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm'"
                                >
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 rounded-full flex items-center justify-center"
                                             :class="topic.locked ? 'bg-gray-100 text-gray-400' : 'bg-green-100 text-green-600'">
                                            <i class="fas" :class="topic.locked ? 'fa-lock' : 'fa-play'"></i>
                                        </div>
                                        <span class="font-medium" :class="topic.locked ? 'text-gray-500' : 'text-gray-900'">{{ topic.title }}</span>
                                    </div>
                                    <span v-if="topic.duration" class="text-sm text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">{{ topic.duration }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- TAB: Sorting -->
                        <div v-if="activeTab === 'sorting'" class="space-y-12 animate-fade-in">
                            <h2 class="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4">Sorting and Searching</h2>

                            <!-- Bubble Sort -->
                            <section class="space-y-4">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">
                                    Bubble Sort
                                </h3>
                                <p class="text-gray-600 leading-relaxed">
                                    This a comparison based algorithm. We divide the array into two sections, unsorted and sorted. After each loop, we garranted, the largest element of the unsorted portion is pushed at the most right position. We scan through the unsorted portion of the array and if the element is bigger than the next, we swap them. We repeat the process <code>n - 1</code> time until all elements are in the sorted portion. If not swap was perform, list already sorted, no need to go through other iterations. This reduce best time complexity to <code>O(n)</code> if the list is already sorted.
                                </p>
                                <AnimatedSvg>
                                    <img src="@/assets/img/bubble-sort.svg" alt="Bubble Sort" class="max-w-full h-auto" />
                                </AnimatedSvg>
                                <Code :code="bubbleSortCode" />
                            </section>
                             
                            <hr class="border-gray-100" />

                            <!-- Selection Sort -->
                            <section class="space-y-4">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">
                                    Selection Sort
                                </h3>
                                <p class="text-gray-600 leading-relaxed">
                                    We divide the array into two sections, sorted and unsorted. At each loop, we iterate through the unsorted portion to find the minimum and place it at the leftmost position. We repeat that until all elements are in the sorted section.
                                </p>
                                <AnimatedSvg>
                                    <img src="@/assets/img/selection-sort.svg" alt="Selection Sort" class="max-w-full h-auto" />
                                </AnimatedSvg>
                                <Code :code="selectionSortCode" />
                            </section>

                            <hr class="border-gray-100" />

                            <!-- Insertion Sort -->
                            <section class="space-y-4">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">
                                    Insertion Sort
                                </h3>
                                <p class="text-gray-600 leading-relaxed">
                                    We divide the array into two sections, sorted and unsorted. At each step we consider the rightmost element from the unsorted portion of the array and while its greater that the current element to its right, we swap the two.
                                </p>
                                <AnimatedSvg>
                                    <img src="@/assets/img/insertion-sort.svg" alt="Insertion Sort" class="max-w-full h-auto" />
                                </AnimatedSvg>
                                <Code :code="insertionSortCode" />
                            </section>

                            <hr class="border-gray-100" />

                            <!-- Merge Sort -->
                            <section class="space-y-4">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">
                                    Merge Sort
                                </h3>
                                <p class="text-gray-600 leading-relaxed">
                                    Merge Sort is based on the principle of Divide and Conquer Algorithm. During the <b>divide</b> step, we divide the current array in two parts. During the <b>conquer</b> part, we sort each subarray by recursively calling the merge sort function. Finally during the <b>combine</b> part, we merge the two sorted sub-arrays into a single sorted array. The best, average and worst time complexity is <code>O(n*log n)</code> and space complexity is <code>O(n)</code>.
                                </p>
                                <AnimatedSvg>
                                    <img src="@/assets/img/merge-sort.svg" alt="Merge Sort" class="max-w-full h-auto" />
                                </AnimatedSvg>
                                <Code :code="mergeSortCode" />
                            </section>

                            <hr class="border-gray-100" />

                            <!-- Quick Sort -->
                            <section class="space-y-4">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">
                                    Quick Sort
                                </h3>
                                <p class="text-gray-600 leading-relaxed">
                                    Recursive sort. At each step the array is organize with small elments to the right and big elements to the left. The elements are split given a pivot value.
                                </p>
                                <Code :code="quickSortCode" />
                            </section>
                            
                            <!-- Other Sorts Placeholders -->
                             <div class="flex flex-col gap-3 mt-8">
                                <div v-for="sort in ['Count Sort', 'Radix Sort', 'Heap Sort', 'Bucket Sort', 'Quick Select']" :key="sort" class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg text-gray-500 border border-transparent hover:border-gray-200 hover:shadow-sm transition-all cursor-not-allowed">
                                    <i class="fas fa-lock text-gray-300"></i>
                                    <span class="font-medium">{{ sort }}</span>
                                </div>
                             </div>

                        </div>

                        <!-- TAB: Backtracking -->
                        <div v-if="activeTab === 'backtracking'" class="space-y-6 animate-fade-in">
                            <h2 class="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6">Backtracking</h2>
                            
                             <div class="prose prose-blue max-w-none text-gray-600">
                                <div class="p-4 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-100 flex items-start gap-3">
                                    <i class="fas fa-info-circle mt-1"></i>
                                    <p>The content for this module is currently being updated. Please check back later.</p>
                                </div>
                            </div>
                        </div>

                        <!-- TAB: Dynamic Programming -->
                        <div v-if="activeTab === 'dynamic'" class="space-y-6 animate-fade-in">
                            <h2 class="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6">Dynamic Programming</h2>
                             <div class="prose prose-blue max-w-none text-gray-600">
                                <div class="p-4 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-100 flex items-start gap-3">
                                    <i class="fas fa-info-circle mt-1"></i>
                                    <p>The content for this module is currently being updated. Please check back later.</p>
                                </div>
                            </div>
                        </div>

                        <!-- TAB: Design -->
                        <div v-if="activeTab === 'design'" class="space-y-6 animate-fade-in">
                            <h2 class="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6">Design and Python</h2>
                             <div class="prose prose-blue max-w-none text-gray-600">
                                <div class="p-4 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-100 flex items-start gap-3">
                                    <i class="fas fa-info-circle mt-1"></i>
                                    <p>The content for this module is currently being updated. Please check back later.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>