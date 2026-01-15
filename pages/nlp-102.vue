<script setup>
import { ref } from 'vue';

// Tab State
const activeTab = ref('overview');
const setActiveTab = (tab) => {
  activeTab.value = tab;
};

// Accordion Control
const activeAccordionItem = ref(null);
const toggleAccordion = (id) => {
    activeAccordionItem.value = activeAccordionItem.value === id ? null : id;
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
                        <div role="tablist" class="tabs tabs-bordered w-full bg-white px-6 py-4 border-b-2 border-base-200 overflow-x-auto">
                            <a role="tab" 
                                @click="setActiveTab('overview')"
                                :class="['tab tab-bordered text-sm px-6 h-auto py-3 hover:bg-base-200 transition-colors duration-200 rounded-lg whitespace-nowrap', activeTab === 'overview' ? 'tab-active text-blue-600 bg-blue-50' : '']"
                            >
                                Overview
                            </a>
                            <a role="tab" 
                                @click="setActiveTab('curriculum')"
                                :class="['tab tab-bordered text-sm px-6 h-auto py-3 hover:bg-base-200 transition-colors duration-200 rounded-lg whitespace-nowrap', activeTab === 'curriculum' ? 'tab-active text-blue-600 bg-blue-50' : '']"
                            >
                                Curriculum
                            </a>
                            <a role="tab" 
                                @click="setActiveTab('requirements')"
                                :class="['tab tab-bordered text-sm px-6 h-auto py-3 hover:bg-base-200 transition-colors duration-200 rounded-lg whitespace-nowrap', activeTab === 'requirements' ? 'tab-active text-blue-600 bg-blue-50' : '']"
                            >
                                Technical requirements
                            </a>
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
                                <div class="space-y-2">
                                    
                                    <!-- MODULE 1 -->
                                    <div class="collapse collapse-arrow rounded-box overflow-hidden">
                                        <input type="checkbox" :checked="activeAccordionItem === 'module1'" @change="toggleAccordion('module1')" /> 
                                        <div class="collapse-title text-lg font-medium bg-base-200 rounded-box">
                                            Cours 1 : Modélisation statistique du langage, vectorisation de texte
                                        </div>
                                        <div class="collapse-content bg-white !py-0"> 
                                            <ul class="menu w-full p-2 rounded-box">
                                                <li>
                                                    <a @click="openLecture('lecture_1')" class="group flex items-center gap-4 hover:bg-transparent">
                                                        <span class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                            <i class="fa-solid fa-file-powerpoint"></i>
                                                        </span>
                                                        Lecture slides
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%201%20-%20Mod%C3%A9lisation%20statistique%20du%20langage/Fr%C3%A9quences%20des%20mots.ipynb" target="_blank" class="group flex items-center gap-4 hover:bg-transparent">
                                                        <span class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                            <i class="fas fa-display"></i>
                                                        </span>
                                                        Lab materials
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!-- MODULE 2 (TP1) -->
                                    <div class="collapse collapse-arrow rounded-box overflow-hidden">
                                        <input type="checkbox" :checked="activeAccordionItem === 'module2'" @change="toggleAccordion('module2')" /> 
                                        <div class="collapse-title text-lg font-medium bg-base-200 rounded-box">
                                            TP 1 : Classification de textes, modèles BoW
                                        </div>
                                        <div class="collapse-content bg-white !py-0"> 
                                            <ul class="menu w-full p-2 rounded-box">
                                                <li>
                                                    <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/TP1%20-%20Apprentissage%20supervis%C3%A9%20pour%20le%20NLP/Classification.ipynb" target="_blank" class="group flex items-center gap-4 hover:bg-transparent">
                                                        <span class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                            <i class="fas fa-display"></i>
                                                        </span>
                                                        Lab materials
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!-- MODULE 3 (TP2) -->
                                    <div class="collapse collapse-arrow rounded-box overflow-hidden">
                                        <input type="checkbox" :checked="activeAccordionItem === 'module3'" @change="toggleAccordion('module3')" /> 
                                        <div class="collapse-title text-lg font-medium bg-base-200 rounded-box">
                                            TP 2 : Détection de thèmes, LDA
                                        </div>
                                        <div class="collapse-content bg-white !py-0"> 
                                            <ul class="menu w-full p-2 rounded-box">
                                                <li>
                                                    <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/TP2%20-%20Text%20Mining/TP2%20-%20Exploration%20de%20topics.ipynb" target="_blank" class="group flex items-center gap-4 hover:bg-transparent">
                                                        <span class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                            <i class="fas fa-display"></i>
                                                        </span>
                                                        Lab materials
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!-- MODULE 4 (Lecture 2) -->
                                    <div class="collapse collapse-arrow rounded-box overflow-hidden">
                                        <input type="checkbox" :checked="activeAccordionItem === 'module4'" @change="toggleAccordion('module4')" /> 
                                        <div class="collapse-title text-lg font-medium bg-base-200 rounded-box">
                                            Cours 2 : Représentations sémantiques distributionnelles : Embeddings de mots
                                        </div>
                                        <div class="collapse-content bg-white !py-0"> 
                                             <ul class="menu w-full p-2 rounded-box">
                                                <li>
                                                    <a @click="openLecture('lecture_2')" class="group flex items-center gap-4 hover:bg-transparent">
                                                        <span class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                            <i class="fa-solid fa-file-powerpoint"></i>
                                                        </span>
                                                        Lecture slides
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%202%20-%20Embeddings/Words%20Embeddings.ipynb" target="_blank" class="group flex items-center gap-4 hover:bg-transparent">
                                                        <span class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                            <i class="fas fa-display"></i>
                                                        </span>
                                                        Lab materials
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!-- MODULE 5 (TP3) -->
                                    <div class="collapse collapse-arrow rounded-box overflow-hidden">
                                        <input type="checkbox" :checked="activeAccordionItem === 'module5'" @change="toggleAccordion('module5')" /> 
                                        <div class="collapse-title text-lg font-medium bg-base-200 rounded-box">
                                            TP 3 : Embeddings de mots pour l'analyse de sentiments
                                        </div>
                                        <div class="collapse-content bg-white !py-0"> 
                                            <ul class="menu w-full p-2 rounded-box">
                                                <li>
                                                    <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/TP3%20-%20Word%20Embeddings/EmojiFy.ipynb" target="_blank" class="group flex items-center gap-4 hover:bg-transparent">
                                                        <span class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                            <i class="fas fa-display"></i>
                                                        </span>
                                                        Lab materials
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!-- MODULE 6 (Lecture 3) -->
                                    <div class="collapse collapse-arrow rounded-box overflow-hidden">
                                        <input type="checkbox" :checked="activeAccordionItem === 'module6'" @change="toggleAccordion('module6')" /> 
                                        <div class="collapse-title text-lg font-medium bg-base-200 rounded-box">
                                            Cours 3 : Modélisation de séquences de mots : modèles de langue
                                        </div>
                                        <div class="collapse-content bg-white !py-0"> 
                                             <ul class="menu w-full p-2 rounded-box">
                                                <li>
                                                    <a @click="openLecture('lecture_3')" class="group flex items-center gap-4 hover:bg-transparent">
                                                        <span class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                            <i class="fa-solid fa-file-powerpoint"></i>
                                                        </span>
                                                        Lecture slides
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%203%20-%20Language%20Models/Mod%C3%A8les%20de%20langues.ipynb" target="_blank" class="group flex items-center gap-4 hover:bg-transparent">
                                                        <span class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                            <i class="fas fa-display"></i>
                                                        </span>
                                                        Lab materials
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!-- MODULE 7 (Lecture 4) -->
                                    <div class="collapse collapse-arrow rounded-box overflow-hidden">
                                        <input type="checkbox" :checked="activeAccordionItem === 'module7'" @change="toggleAccordion('module7')" /> 
                                        <div class="collapse-title text-lg font-medium bg-base-200 rounded-box">
                                            Cours 4 : Deep Learning pour le NLP (RNN, Seq2Seq, Attention, Bert)
                                        </div>
                                        <div class="collapse-content bg-white !py-0"> 
                                             <ul class="menu w-full p-2 rounded-box">
                                                <li>
                                                    <a @click="openLecture('lecture_4')" class="group flex items-center gap-4 hover:bg-transparent">
                                                        <span class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                            <i class="fa-solid fa-file-powerpoint"></i>
                                                        </span>
                                                        Lecture slides
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%204%20-%20Introduction%20NLP%20%26%20Deep%20Learning/Bert_QA%5BCOLAB%5D.ipynb" target="_blank" class="group flex items-center gap-4 hover:bg-transparent">
                                                        <span class="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                            <i class="fas fa-display"></i>
                                                        </span>
                                                        Lab materials
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
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