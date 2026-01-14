<script setup>
import { ref } from 'vue';

// Tab State
const activeTab = ref('overview');
const setActiveTab = (tab) => {
  activeTab.value = tab;
};

// Accordion State
const openAccordions = ref({});
const toggleAccordion = (id) => {
  if (openAccordions.value[id]) {
    openAccordions.value[id] = false;
  } else {
    openAccordions.value = { [id]: true };
  }
};

// Transition Hooks for smooth accordion
const beforeEnter = (el) => {
  el.style.height = '0';
  el.style.opacity = '0';
};
const enter = (el) => {
  el.style.height = el.scrollHeight + 'px';
  el.style.opacity = '1';
};
const afterEnter = (el) => {
  el.style.height = 'auto';
};
const beforeLeave = (el) => {
  el.style.height = el.scrollHeight + 'px';
  el.style.opacity = '1';
};
const leave = (el) => {
  el.style.height = '0';
  el.style.opacity = '0';
};
</script>

<template>
    <div class="relative">
        <!-- Modals Overlay -->
        <div v-if="activeLecture" class="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div class="bg-white w-full h-full max-w-7xl max-h-[90vh] rounded-xl shadow-2xl flex flex-col overflow-hidden">
                <div class="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
                    <h3 class="text-lg font-bold text-gray-900 truncate pr-4">{{ lectures[activeLecture].title }}</h3>
                    <div class="flex items-center gap-2">
                        <a :href="lectures[activeLecture].download" target="_blank" class="p-2 text-gray-500 hover:text-blue-600 transition-colors" title="Download PDF">
                            <i class="fa-solid fa-download"></i>
                        </a>
                        <button @click="closeLecture" class="p-2 text-gray-500 hover:text-red-500 transition-colors">
                            <i class="fa-solid fa-xmark text-xl"></i>
                        </button>
                    </div>
                </div>
                <div class="flex-1 bg-gray-100">
                    <iframe :src="lectures[activeLecture].url" class="w-full h-full border-0"></iframe>
                </div>
            </div>
        </div>

        <section class="pb-0 lg:py-6">
            <div class="container mx-auto px-8 lg:px-32 py-4">
                <div class="w-full">
                    <div class="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
                        
                        <!-- Tabs Navigation -->
                        <div class="px-4 py-3 bg-white border-b border-gray-100 overflow-x-auto">
                            <ul class="flex whitespace-nowrap gap-4 text-sm font-medium text-gray-500">
                                <li>
                                    <button 
                                        @click="setActiveTab('overview')"
                                        :class="['px-4 py-2 rounded-lg transition-colors', activeTab === 'overview' ? 'text-blue-600 bg-blue-50 font-bold' : 'hover:text-gray-900 hover:bg-gray-50']"
                                    >
                                        Overview
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        @click="setActiveTab('curriculum')"
                                        :class="['px-4 py-2 rounded-lg transition-colors', activeTab === 'curriculum' ? 'text-blue-600 bg-blue-50 font-bold' : 'hover:text-gray-900 hover:bg-gray-50']"
                                    >
                                        Curriculum
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        @click="setActiveTab('requirements')"
                                        :class="['px-4 py-2 rounded-lg transition-colors', activeTab === 'requirements' ? 'text-blue-600 bg-blue-50 font-bold' : 'hover:text-gray-900 hover:bg-gray-50']"
                                    >
                                        Technical requirements
                                    </button>
                                </li>
                            </ul>
                        </div>
                        
                        <!-- Tab Content -->
                        <div class="p-6 bg-white min-h-[400px]">
                            
                            <!-- OVERVIEW TAB -->
                            <div v-if="activeTab === 'overview'">
                                <h5 class="mb-3 text-xl font-bold text-gray-900">Course Description</h5>
                                <p class="mb-3 text-gray-700 leading-relaxed">Welcome to the <strong> Master 2 Mathématiques et Informatique pour la Data Science (M2 MIDS) from Paris University.</strong></p>
                                <p class="mb-3 text-gray-700 leading-relaxed">The course is part of the <a class="text-blue-600 hover:text-blue-800 capitalize underline decoration-blue-300 hover:decoration-blue-800" href="https://m2mids.github.io/m2mids/">M2 MIDS</a> cursus.</p>
                                <p class="mb-6 text-gray-700 leading-relaxed">It introduces statistical methods for Natural Language Processing, including text vectorization, word embeddings, and sequence models. In addition, the course includes practical exercises that cover web scraping, regular expressions, and visualization. The labs include common use cases such as text classification or topic mining. Finally, the course gives an overview about open-source tools for nlp such as nlp libraries, intelligibility methods or deep learning frameworks.</p>

                                <h5 class="mt-8 mb-4 text-xl font-bold text-gray-900">What you’ll learn</h5>
                                <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500"></i> Text vectorization</li>
                                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500"></i> Word embeddings</li>
                                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500"></i> Sequence models</li>
                                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500"></i> Web scraping</li>
                                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500"></i> Regular expressions</li>
                                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500"></i> Data visualization for text</li>
                                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500"></i> Text classification</li>
                                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500"></i> Topic mining</li>
                                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500"></i> Open-source tools</li>
                                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500"></i> NLP libraries</li>
                                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500"></i> Intelligibility methods</li>
                                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500"></i> Deep learning frameworks</li>
                                </ul>
                            </div>

                            <!-- CURRICULUM TAB -->
                            <div v-if="activeTab === 'curriculum'">
                                <div class="space-y-4">
                                    
                                    <!-- MODULE 1 -->
                                    <div class="rounded-lg overflow-hidden">
                                        <button @click="toggleAccordion('module1')" class="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
                                            <span class="font-bold text-gray-900">Cours 1 : Modélisation statistique du langage, vectorisation de texte</span>
                                            <i class="fas fa-chevron-down text-gray-400 transition-transform duration-200" :class="{'rotate-180': openAccordions['module1']}"></i>
                                        </button>
                                        <Transition
                                            name="accordion"
                                            @before-enter="beforeEnter"
                                            @enter="enter"
                                            @after-enter="afterEnter"
                                            @before-leave="beforeLeave"
                                            @leave="leave"
                                        >
                                            <div v-show="openAccordions['module1']" class="bg-white border-t border-gray-100 overflow-hidden">
                                                <div class="p-4 space-y-4">
                                                    <div class="flex items-center justify-between group">
                                                        <div class="flex items-center gap-3">
                                                            <button @click="openLecture('lecture_1')" class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                                <i class="fa-solid fa-file-powerpoint"></i>
                                                            </button>
                                                            <span class="text-gray-700 font-medium group-hover:text-blue-600 transition-colors cursor-pointer" @click="openLecture('lecture_1')">Lecture slides</span>
                                                        </div>
                                                    </div>
                                                    <hr class="border-gray-100">
                                                    <div class="flex items-center justify-between group">
                                                        <div class="flex items-center gap-3">
                                                            <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%201%20-%20Mod%C3%A9lisation%20statistique%20du%20langage/Fr%C3%A9quences%20des%20mots.ipynb" target="_blank" class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                                <i class="fas fa-display"></i>
                                                            </a>
                                                            <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%201%20-%20Mod%C3%A9lisation%20statistique%20du%20langage/Fr%C3%A9quences%20des%20mots.ipynb" target="_blank" class="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">Lab materials</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>

                                    <!-- MODULE 2 (TP1) -->
                                    <div class="rounded-lg overflow-hidden">
                                        <button @click="toggleAccordion('tp1')" class="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
                                            <span class="font-bold text-gray-900">TP 1 : Classification de textes, modèles BoW</span>
                                            <i class="fas fa-chevron-down text-gray-400 transition-transform duration-200" :class="{'rotate-180': openAccordions['tp1']}"></i>
                                        </button>
                                        <Transition
                                            name="accordion"
                                            @before-enter="beforeEnter"
                                            @enter="enter"
                                            @after-enter="afterEnter"
                                            @before-leave="beforeLeave"
                                            @leave="leave"
                                        >
                                            <div v-show="openAccordions['tp1']" class="bg-white border-t border-gray-100 overflow-hidden">
                                                <div class="p-4 space-y-4">
                                                    <div class="flex items-center justify-between group">
                                                        <div class="flex items-center gap-3">
                                                            <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/TP1%20-%20Apprentissage%20supervis%C3%A9%20pour%20le%20NLP/Classification.ipynb" target="_blank" class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                                <i class="fas fa-display"></i>
                                                            </a>
                                                            <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/TP1%20-%20Apprentissage%20supervis%C3%A9%20pour%20le%20NLP/Classification.ipynb" target="_blank" class="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">Lab materials</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>

                                    <!-- MODULE 3 (TP2) -->
                                    <div class="rounded-lg overflow-hidden">
                                        <button @click="toggleAccordion('tp2')" class="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
                                            <span class="font-bold text-gray-900">TP 2 : Détection de thèmes, LDA</span>
                                            <i class="fas fa-chevron-down text-gray-400 transition-transform duration-200" :class="{'rotate-180': openAccordions['tp2']}"></i>
                                        </button>
                                        <Transition
                                            name="accordion"
                                            @before-enter="beforeEnter"
                                            @enter="enter"
                                            @after-enter="afterEnter"
                                            @before-leave="beforeLeave"
                                            @leave="leave"
                                        >
                                            <div v-show="openAccordions['tp2']" class="bg-white border-t border-gray-100 overflow-hidden">
                                                <div class="p-4 space-y-4">
                                                    <div class="flex items-center justify-between group">
                                                        <div class="flex items-center gap-3">
                                                            <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/TP2%20-%20Text%20Mining/TP2%20-%20Exploration%20de%20topics.ipynb" target="_blank" class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                                <i class="fas fa-display"></i>
                                                            </a>
                                                            <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/TP2%20-%20Text%20Mining/TP2%20-%20Exploration%20de%20topics.ipynb" target="_blank" class="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">Lab materials</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>

                                    <!-- MODULE 4 (Lecture 2) -->
                                    <div class="rounded-lg overflow-hidden">
                                        <button @click="toggleAccordion('module2')" class="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
                                            <span class="font-bold text-gray-900">Cours 2 : Représentations sémantiques distributionnelles : Embeddings de mots</span>
                                            <i class="fas fa-chevron-down text-gray-400 transition-transform duration-200" :class="{'rotate-180': openAccordions['module2']}"></i>
                                        </button>
                                        <Transition
                                            name="accordion"
                                            @before-enter="beforeEnter"
                                            @enter="enter"
                                            @after-enter="afterEnter"
                                            @before-leave="beforeLeave"
                                            @leave="leave"
                                        >
                                            <div v-show="openAccordions['module2']" class="bg-white border-t border-gray-100 overflow-hidden">
                                                <div class="p-4 space-y-4">
                                                    <div class="flex items-center justify-between group">
                                                        <div class="flex items-center gap-3">
                                                            <button @click="openLecture('lecture_2')" class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                                <i class="fa-solid fa-file-powerpoint"></i>
                                                            </button>
                                                            <span class="text-gray-700 font-medium group-hover:text-blue-600 transition-colors cursor-pointer" @click="openLecture('lecture_2')">Lecture slides</span>
                                                        </div>
                                                    </div>
                                                    <hr class="border-gray-100">
                                                    <div class="flex items-center justify-between group">
                                                        <div class="flex items-center gap-3">
                                                            <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%202%20-%20Embeddings/Words%20Embeddings.ipynb" target="_blank" class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                                <i class="fas fa-display"></i>
                                                            </a>
                                                            <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%202%20-%20Embeddings/Words%20Embeddings.ipynb" target="_blank" class="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">Lab materials</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>

                                    <!-- MODULE 5 (TP3) -->
                                    <div class="rounded-lg overflow-hidden">
                                        <button @click="toggleAccordion('tp3')" class="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
                                            <span class="font-bold text-gray-900">TP 3 : Embeddings de mots pour l'analyse de sentiments</span>
                                            <i class="fas fa-chevron-down text-gray-400 transition-transform duration-200" :class="{'rotate-180': openAccordions['tp3']}"></i>
                                        </button>
                                        <Transition
                                            name="accordion"
                                            @before-enter="beforeEnter"
                                            @enter="enter"
                                            @after-enter="afterEnter"
                                            @before-leave="beforeLeave"
                                            @leave="leave"
                                        >
                                            <div v-show="openAccordions['tp3']" class="bg-white border-t border-gray-100 overflow-hidden">
                                                <div class="p-4 space-y-4">
                                                    <div class="flex items-center justify-between group">
                                                        <div class="flex items-center gap-3">
                                                            <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/TP3%20-%20Word%20Embeddings/EmojiFy.ipynb" target="_blank" class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                                <i class="fas fa-display"></i>
                                                            </a>
                                                            <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/TP3%20-%20Word%20Embeddings/EmojiFy.ipynb" target="_blank" class="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">Lab materials</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>

                                    <!-- MODULE 6 (Lecture 3) -->
                                    <div class="rounded-lg overflow-hidden">
                                        <button @click="toggleAccordion('module3')" class="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
                                            <span class="font-bold text-gray-900">Cours 3 : Modélisation de séquences de mots : modèles de langue</span>
                                            <i class="fas fa-chevron-down text-gray-400 transition-transform duration-200" :class="{'rotate-180': openAccordions['module3']}"></i>
                                        </button>
                                        <Transition
                                            name="accordion"
                                            @before-enter="beforeEnter"
                                            @enter="enter"
                                            @after-enter="afterEnter"
                                            @before-leave="beforeLeave"
                                            @leave="leave"
                                        >
                                            <div v-show="openAccordions['module3']" class="bg-white border-t border-gray-100 overflow-hidden">
                                                <div class="p-4 space-y-4">
                                                    <div class="flex items-center justify-between group">
                                                        <div class="flex items-center gap-3">
                                                            <button @click="openLecture('lecture_3')" class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                                <i class="fa-solid fa-file-powerpoint"></i>
                                                            </button>
                                                            <span class="text-gray-700 font-medium group-hover:text-blue-600 transition-colors cursor-pointer" @click="openLecture('lecture_3')">Lecture slides</span>
                                                        </div>
                                                    </div>
                                                    <hr class="border-gray-100">
                                                    <div class="flex items-center justify-between group">
                                                        <div class="flex items-center gap-3">
                                                            <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%203%20-%20Language%20Models/Mod%C3%A8les%20de%20langues.ipynb" target="_blank" class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                                <i class="fas fa-display"></i>
                                                            </a>
                                                            <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%203%20-%20Language%20Models/Mod%C3%A8les%20de%20langues.ipynb" target="_blank" class="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">Lab materials</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>

                                    <!-- MODULE 7 (Lecture 4) -->
                                    <div class="rounded-lg overflow-hidden">
                                        <button @click="toggleAccordion('module4')" class="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
                                            <span class="font-bold text-gray-900">Cours 4 : Deep Learning pour le NLP (RNN, Seq2Seq, Attention, Bert)</span>
                                            <i class="fas fa-chevron-down text-gray-400 transition-transform duration-200" :class="{'rotate-180': openAccordions['module4']}"></i>
                                        </button>
                                        <Transition
                                            name="accordion"
                                            @before-enter="beforeEnter"
                                            @enter="enter"
                                            @after-enter="afterEnter"
                                            @before-leave="beforeLeave"
                                            @leave="leave"
                                        >
                                            <div v-show="openAccordions['module4']" class="bg-white border-t border-gray-100 overflow-hidden">
                                                <div class="p-4 space-y-4">
                                                    <div class="flex items-center justify-between group">
                                                        <div class="flex items-center gap-3">
                                                            <button @click="openLecture('lecture_4')" class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                                <i class="fa-solid fa-file-powerpoint"></i>
                                                            </button>
                                                            <span class="text-gray-700 font-medium group-hover:text-blue-600 transition-colors cursor-pointer" @click="openLecture('lecture_4')">Lecture slides</span>
                                                        </div>
                                                    </div>
                                                    <hr class="border-gray-100">
                                                    <div class="flex items-center justify-between group">
                                                        <div class="flex items-center gap-3">
                                                            <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%204%20-%20Introduction%20NLP%20%26%20Deep%20Learning/Bert_QA%5BCOLAB%5D.ipynb" target="_blank" class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                                <i class="fas fa-display"></i>
                                                            </a>
                                                            <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%204%20-%20Introduction%20NLP%20%26%20Deep%20Learning/Bert_QA%5BCOLAB%5D.ipynb" target="_blank" class="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">Lab materials</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>

                                </div>
                            </div>

                            <!-- TECHNICAL REQUIREMENTS TAB -->
                            <div v-if="activeTab === 'requirements'">
                                <h5 class="mb-4 text-xl font-bold text-gray-900">En local</h5>

                                <p class="mb-4 text-gray-700 leading-relaxed">Si vous souhaitez exécuter le TP sur votre ordinateur, voici une procédure rapide pour installer Python et les librairies requises. Ca évitera d’avoir des problèmes de version de librairies qui interfère avec d’autres cours ou projets. Pour installer Python, je vous conseille d’utiliser <a class="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-800" href="https://www.anaconda.com/products/individual">Anaconda</a> (~450 MB). Sélectionnez l’installation correspondent à votre système d’exploitation et “64-Bit Graphical Installer” puis suivez les instructions pour installer Anaconda.</p>

                                <p class="mb-2 text-gray-700 leading-relaxed">Pour les librairies, je vous conseille de créer un environnement virtuel python pour l’ensemble du cours. Ouvrez un terminal et tapez la commande suivante :</p>

                                <div class="bg-gray-800 text-gray-100 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
                                    conda create -n nlp-101 python=3.6<br>
                                    # Vous pouvez activer l’environnement avec la commande suivante<br>
                                    conda activate nlp-101
                                </div>

                                <p class="mb-2 text-gray-700 leading-relaxed">Si vous utilisez <a class="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-800" href="https://jupyterlab.readthedocs.io/en/stable/">jupyter-lab</a>, vous pouvez répertorier l’environement :</p>

                                <div class="bg-gray-800 text-gray-100 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
                                    conda install ipykernel<br>
                                    ipython kernel install --user --name='nlp-101'
                                </div>

                                <p class="mb-2 text-gray-700 leading-relaxed">Nous allons installer les librairies avec le gestionnaire pip. Vérifiez que la version utilisée est bien celle associée à anaconda :</p>

                                <div class="bg-gray-800 text-gray-100 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
                                    pip show pip
                                </div>

                                <p class="mb-2 text-gray-700 leading-relaxed">Puis mettez le à jour :</p>

                                <div class="bg-gray-800 text-gray-100 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
                                    pip install --upgrade pip
                                </div>

                                <p class="mb-2 text-gray-700 leading-relaxed">Installez les librairies suivantes :</p>

                                <div class="bg-gray-800 text-gray-100 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
                                    pip install scikit-learn==0.23.2 matplotlib==3.3.2 pandas==1.1.3 lime==0.2.0.1 unidecode==1.3.2 umap-learn==0.4.6 umap-learn[plot] nltk==3.5 spacy==2.3.2<br>
                                    pip install --upgrade jupyter
                                </div>

                                <p class="mb-2 text-gray-700 leading-relaxed">Vous pouvez vérifier que chaque package est bien installé avec la commande :</p>

                                <div class="bg-gray-800 text-gray-100 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
                                    python -c "import sklearn; print(sklearn.__version__)"
                                </div>

                                <p class="mb-2 text-gray-700 leading-relaxed">Finalement téléchargez le modèle Spacy français :</p>

                                <div class="bg-gray-800 text-gray-100 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
                                    python3 -m spacy download fr_core_news_md
                                </div>

                                <h5 class="mt-8 mb-4 text-xl font-bold text-gray-900">Google Colab</h5>

                                <p class="mb-4 text-gray-700 leading-relaxed">Si vous disposez d'un compte Google, vous pouvez également éxécuter l'ensemble des TPs et exercices sur l'interface <a class="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-800" href="https://colab.research.google.com/">Google Colab</a>. Pour chaque cours, il vous suffit de cliquer sur le lien "lab materials" qui vous amènera au notebook hébergé sur le github du cours. Vous pouvez ensuite l'ouvrir dans Colab en remplaçant "github.com" par "githubtocolab.com" dans l'url.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>