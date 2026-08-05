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
        <section class="pb-0 lg:py-6">
            <div class="container mx-auto px-8 lg:px-32 py-4">
                <div class="w-full">
                    <div class="bg-white border-2 border-black shadow-[3px_3px_0px_#000] rounded-2xl overflow-hidden">
                        
                        <!-- Tabs Navigation -->
                        <div role="tablist" class="flex flex-wrap gap-2 bg-emerald-50/60 p-4 border-b-2 border-black overflow-x-auto">
                            <button 
                                role="tab" 
                                @click="setActiveTab('overview')"
                                :class="['px-5 py-2.5 rounded-xl font-extrabold text-sm border-2 border-black transition-all cursor-pointer whitespace-nowrap', activeTab === 'overview' ? 'bg-emerald-300 text-black shadow-[2px_2px_0px_#000] -translate-y-0.5' : 'bg-white hover:bg-white/80 text-black shadow-[1px_1px_0px_#000]']"
                            >
                                📖 Overview
                            </button>
                            <button 
                                role="tab" 
                                @click="setActiveTab('curriculum')"
                                :class="['px-5 py-2.5 rounded-xl font-extrabold text-sm border-2 border-black transition-all cursor-pointer whitespace-nowrap', activeTab === 'curriculum' ? 'bg-blue-300 text-black shadow-[2px_2px_0px_#000] -translate-y-0.5' : 'bg-white hover:bg-white/80 text-black shadow-[1px_1px_0px_#000]']"
                            >
                                📚 Curriculum
                            </button>
                            <button 
                                role="tab" 
                                @click="setActiveTab('requirements')"
                                :class="['px-5 py-2.5 rounded-xl font-extrabold text-sm border-2 border-black transition-all cursor-pointer whitespace-nowrap', activeTab === 'requirements' ? 'bg-purple-300 text-black shadow-[2px_2px_0px_#000] -translate-y-0.5' : 'bg-white hover:bg-white/80 text-black shadow-[1px_1px_0px_#000]']"
                            >
                                💻 Technical Requirements
                            </button>
                        </div>
                        
                        <!-- Tab Content -->
                        <div class="p-6 sm:p-8 bg-white min-h-[400px]">
                            
                            <!-- OVERVIEW TAB -->
                            <div v-if="activeTab === 'overview'">
                                <h2 class="mb-4 text-2xl font-extrabold text-black tracking-tight">Course Description</h2>
                                <div class="space-y-4 text-black text-base lg:text-lg font-medium leading-relaxed mb-8">
                                    <p>Welcome to the <strong>Master 2 Mathématiques et Informatique pour la Data Science (M2 MIDS) from Paris University.</strong></p>
                                    <p>The course is part of the <a class="font-bold underline text-black hover:text-emerald-700" href="https://m2mids.github.io/m2mids/" target="_blank">M2 MIDS</a> cursus.</p>
                                    <p>It introduces statistical methods for Natural Language Processing, including text vectorization, word embeddings, and sequence models. In addition, the course includes practical exercises that cover web scraping, regular expressions, and visualization. The labs include common use cases such as text classification or topic mining. Finally, the course gives an overview about open-source tools for nlp such as nlp libraries, intelligibility methods or deep learning frameworks.</p>
                                </div>

                                <h2 class="mt-8 mb-4 text-2xl font-extrabold text-black tracking-tight">What you’ll learn</h2>
                                <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-black">
                                    <li class="flex items-center gap-2.5 p-3 bg-emerald-50 border-2 border-black rounded-xl font-bold text-sm shadow-[1px_1px_0px_#000]"><i class="fas fa-check-circle text-emerald-600"></i> Text vectorization</li>
                                    <li class="flex items-center gap-2.5 p-3 bg-emerald-50 border-2 border-black rounded-xl font-bold text-sm shadow-[1px_1px_0px_#000]"><i class="fas fa-check-circle text-emerald-600"></i> Word embeddings</li>
                                    <li class="flex items-center gap-2.5 p-3 bg-emerald-50 border-2 border-black rounded-xl font-bold text-sm shadow-[1px_1px_0px_#000]"><i class="fas fa-check-circle text-emerald-600"></i> Sequence models</li>
                                    <li class="flex items-center gap-2.5 p-3 bg-emerald-50 border-2 border-black rounded-xl font-bold text-sm shadow-[1px_1px_0px_#000]"><i class="fas fa-check-circle text-emerald-600"></i> Web scraping</li>
                                    <li class="flex items-center gap-2.5 p-3 bg-emerald-50 border-2 border-black rounded-xl font-bold text-sm shadow-[1px_1px_0px_#000]"><i class="fas fa-check-circle text-emerald-600"></i> Regular expressions</li>
                                    <li class="flex items-center gap-2.5 p-3 bg-emerald-50 border-2 border-black rounded-xl font-bold text-sm shadow-[1px_1px_0px_#000]"><i class="fas fa-check-circle text-emerald-600"></i> Data visualization for text</li>
                                    <li class="flex items-center gap-2.5 p-3 bg-emerald-50 border-2 border-black rounded-xl font-bold text-sm shadow-[1px_1px_0px_#000]"><i class="fas fa-check-circle text-emerald-600"></i> Text classification</li>
                                    <li class="flex items-center gap-2.5 p-3 bg-emerald-50 border-2 border-black rounded-xl font-bold text-sm shadow-[1px_1px_0px_#000]"><i class="fas fa-check-circle text-emerald-600"></i> Topic mining</li>
                                    <li class="flex items-center gap-2.5 p-3 bg-emerald-50 border-2 border-black rounded-xl font-bold text-sm shadow-[1px_1px_0px_#000]"><i class="fas fa-check-circle text-emerald-600"></i> Open-source tools</li>
                                    <li class="flex items-center gap-2.5 p-3 bg-emerald-50 border-2 border-black rounded-xl font-bold text-sm shadow-[1px_1px_0px_#000]"><i class="fas fa-check-circle text-emerald-600"></i> NLP libraries</li>
                                    <li class="flex items-center gap-2.5 p-3 bg-emerald-50 border-2 border-black rounded-xl font-bold text-sm shadow-[1px_1px_0px_#000]"><i class="fas fa-check-circle text-emerald-600"></i> Intelligibility methods</li>
                                    <li class="flex items-center gap-2.5 p-3 bg-emerald-50 border-2 border-black rounded-xl font-bold text-sm shadow-[1px_1px_0px_#000]"><i class="fas fa-check-circle text-emerald-600"></i> Deep learning frameworks</li>
                                </ul>
                            </div>

                            <!-- CURRICULUM TAB -->
                            <div v-if="activeTab === 'curriculum'">
                                <div class="space-y-4">
                                    
                                    <!-- MODULE 1 -->
                                    <div class="border-2 border-black rounded-xl overflow-hidden shadow-[2px_2px_0px_#000] bg-white">
                                        <div @click="toggleAccordion('module1')" class="bg-emerald-100 p-4 font-black text-black border-b-2 border-black flex items-center justify-between cursor-pointer select-none">
                                            <span>Cours 1 : Modélisation statistique du langage, vectorisation de texte</span>
                                            <i :class="['fas', activeAccordionItem === 'module1' ? 'fa-chevron-up' : 'fa-chevron-down', 'transition-transform']"></i>
                                        </div>
                                        <div v-if="activeAccordionItem === 'module1'" class="p-4 space-y-3 bg-white"> 
                                            <div class="flex flex-wrap gap-3">
                                                <a href="/slides/deck1/" target="_blank" class="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-4 py-2 rounded-xl font-bold text-sm transition-all no-underline">
                                                    <i class="fa-solid fa-file-powerpoint"></i> Lecture slides
                                                </a>
                                                <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%201%20-%20Mod%C3%A9lisation%20statistique%20du%20langage/Fr%C3%A9quences%20des%20mots.ipynb" target="_blank" class="inline-flex items-center gap-2 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-4 py-2 rounded-xl font-bold text-sm transition-all no-underline">
                                                    <i class="fas fa-display"></i> Lab materials
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- MODULE 2 (TP1) -->
                                    <div class="border-2 border-black rounded-xl overflow-hidden shadow-[2px_2px_0px_#000] bg-white">
                                        <div @click="toggleAccordion('module2')" class="bg-emerald-100 p-4 font-black text-black border-b-2 border-black flex items-center justify-between cursor-pointer select-none">
                                            <span>TP 1 : Classification de textes, modèles BoW</span>
                                            <i :class="['fas', activeAccordionItem === 'module2' ? 'fa-chevron-up' : 'fa-chevron-down', 'transition-transform']"></i>
                                        </div>
                                        <div v-if="activeAccordionItem === 'module2'" class="p-4 space-y-3 bg-white"> 
                                            <div class="flex flex-wrap gap-3">
                                                <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/TP1%20-%20Apprentissage%20supervis%C3%A9%20pour%20le%20NLP/Classification.ipynb" target="_blank" class="inline-flex items-center gap-2 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-4 py-2 rounded-xl font-bold text-sm transition-all no-underline">
                                                    <i class="fas fa-display"></i> Lab materials
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- MODULE 3 (TP2) -->
                                    <div class="border-2 border-black rounded-xl overflow-hidden shadow-[2px_2px_0px_#000] bg-white">
                                        <div @click="toggleAccordion('module3')" class="bg-emerald-100 p-4 font-black text-black border-b-2 border-black flex items-center justify-between cursor-pointer select-none">
                                            <span>TP 2 : Détection de thèmes, LDA</span>
                                            <i :class="['fas', activeAccordionItem === 'module3' ? 'fa-chevron-up' : 'fa-chevron-down', 'transition-transform']"></i>
                                        </div>
                                        <div v-if="activeAccordionItem === 'module3'" class="p-4 space-y-3 bg-white"> 
                                            <div class="flex flex-wrap gap-3">
                                                <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/TP2%20-%20Text%20Mining/TP2%20-%20Exploration%20de%20topics.ipynb" target="_blank" class="inline-flex items-center gap-2 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-4 py-2 rounded-xl font-bold text-sm transition-all no-underline">
                                                    <i class="fas fa-display"></i> Lab materials
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- MODULE 4 (Lecture 2) -->
                                    <div class="border-2 border-black rounded-xl overflow-hidden shadow-[2px_2px_0px_#000] bg-white">
                                        <div @click="toggleAccordion('module4')" class="bg-emerald-100 p-4 font-black text-black border-b-2 border-black flex items-center justify-between cursor-pointer select-none">
                                            <span>Cours 2 : Représentations sémantiques distributionnelles : Embeddings de mots</span>
                                            <i :class="['fas', activeAccordionItem === 'module4' ? 'fa-chevron-up' : 'fa-chevron-down', 'transition-transform']"></i>
                                        </div>
                                        <div v-if="activeAccordionItem === 'module4'" class="p-4 space-y-3 bg-white"> 
                                            <div class="flex flex-wrap gap-3">
                                                <a href="/slides/deck2/" target="_blank" class="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-4 py-2 rounded-xl font-bold text-sm transition-all no-underline">
                                                    <i class="fa-solid fa-file-powerpoint"></i> Lecture slides
                                                </a>
                                                <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%202%20-%20Embeddings/Words%20Embeddings.ipynb" target="_blank" class="inline-flex items-center gap-2 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-4 py-2 rounded-xl font-bold text-sm transition-all no-underline">
                                                    <i class="fas fa-display"></i> Lab materials
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- MODULE 5 (TP3) -->
                                    <div class="border-2 border-black rounded-xl overflow-hidden shadow-[2px_2px_0px_#000] bg-white">
                                        <div @click="toggleAccordion('module5')" class="bg-emerald-100 p-4 font-black text-black border-b-2 border-black flex items-center justify-between cursor-pointer select-none">
                                            <span>TP 3 : Embeddings de mots pour l'analyse de sentiments</span>
                                            <i :class="['fas', activeAccordionItem === 'module5' ? 'fa-chevron-up' : 'fa-chevron-down', 'transition-transform']"></i>
                                        </div>
                                        <div v-if="activeAccordionItem === 'module5'" class="p-4 space-y-3 bg-white"> 
                                            <div class="flex flex-wrap gap-3">
                                                <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/TP3%20-%20Word%20Embeddings/EmojiFy.ipynb" target="_blank" class="inline-flex items-center gap-2 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-4 py-2 rounded-xl font-bold text-sm transition-all no-underline">
                                                    <i class="fas fa-display"></i> Lab materials
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- MODULE 6 (Lecture 3) -->
                                    <div class="border-2 border-black rounded-xl overflow-hidden shadow-[2px_2px_0px_#000] bg-white">
                                        <div @click="toggleAccordion('module6')" class="bg-emerald-100 p-4 font-black text-black border-b-2 border-black flex items-center justify-between cursor-pointer select-none">
                                            <span>Cours 3 : Modélisation de séquences de mots : modèles de langue</span>
                                            <i :class="['fas', activeAccordionItem === 'module6' ? 'fa-chevron-up' : 'fa-chevron-down', 'transition-transform']"></i>
                                        </div>
                                        <div v-if="activeAccordionItem === 'module6'" class="p-4 space-y-3 bg-white"> 
                                            <div class="flex flex-wrap gap-3">
                                                <a href="/slides/deck3/" target="_blank" class="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-4 py-2 rounded-xl font-bold text-sm transition-all no-underline">
                                                    <i class="fa-solid fa-file-powerpoint"></i> Lecture slides
                                                </a>
                                                <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%203%20-%20Language%20Models/Mod%C3%A8les%20de%20langues.ipynb" target="_blank" class="inline-flex items-center gap-2 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-4 py-2 rounded-xl font-bold text-sm transition-all no-underline">
                                                    <i class="fas fa-display"></i> Lab materials
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- MODULE 7 (Lecture 4) -->
                                    <div class="border-2 border-black rounded-xl overflow-hidden shadow-[2px_2px_0px_#000] bg-white">
                                        <div @click="toggleAccordion('module7')" class="bg-emerald-100 p-4 font-black text-black border-b-2 border-black flex items-center justify-between cursor-pointer select-none">
                                            <span>Cours 4 : Deep Learning pour le NLP (RNN, Seq2Seq, Attention, Bert)</span>
                                            <i :class="['fas', activeAccordionItem === 'module7' ? 'fa-chevron-up' : 'fa-chevron-down', 'transition-transform']"></i>
                                        </div>
                                        <div v-if="activeAccordionItem === 'module7'" class="p-4 space-y-3 bg-white"> 
                                            <div class="flex flex-wrap gap-3">
                                                <a href="/slides/deck4/" target="_blank" class="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-4 py-2 rounded-xl font-bold text-sm transition-all no-underline">
                                                    <i class="fa-solid fa-file-powerpoint"></i> Lecture slides
                                                </a>
                                                <a href="https://colab.research.google.com/github/AntoineSimoulin/m2-data-sciences/blob/master/Cours%204%20-%20Introduction%20NLP%20%26%20Deep%20Learning/Bert_QA%5BCOLAB%5D.ipynb" target="_blank" class="inline-flex items-center gap-2 bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 px-4 py-2 rounded-xl font-bold text-sm transition-all no-underline">
                                                    <i class="fas fa-display"></i> Lab materials
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <!-- TECHNICAL REQUIREMENTS TAB -->
                            <div v-if="activeTab === 'requirements'">
                                <h2 class="mb-4 text-2xl font-extrabold text-black tracking-tight">En local</h2>

                                <p class="mb-4 text-black text-base font-medium leading-relaxed">Si vous souhaitez exécuter le TP sur votre ordinateur, voici une procédure rapide pour installer Python et les librairies requises. Ça évitera d’avoir des problèmes de version de librairies qui interfère avec d’autres cours ou projets. Pour installer Python, je vous conseille d’utiliser <a class="font-bold underline text-black hover:text-emerald-700" href="https://www.anaconda.com/products/individual" target="_blank">Anaconda</a> (~450 MB). Sélectionnez l’installation correspondent à votre système d’exploitation et “64-Bit Graphical Installer” puis suivez les instructions pour installer Anaconda.</p>

                                <p class="mb-2 text-black text-base font-medium leading-relaxed">Pour les librairies, je vous conseille de créer un environnement virtuel python pour l’ensemble du cours. Ouvrez un terminal et tapez la commande suivante :</p>

                                <div class="bg-black text-emerald-300 p-4 rounded-xl border-2 border-black font-mono text-sm shadow-[2px_2px_0px_#000] mb-6 overflow-x-auto">
                                    conda create -n nlp-101 python=3.6<br>
                                    # Vous pouvez activer l’environnement avec la commande suivante<br>
                                    conda activate nlp-101
                                </div>

                                <p class="mb-2 text-black text-base font-medium leading-relaxed">Si vous utilisez <a class="font-bold underline text-black hover:text-emerald-700" href="https://jupyterlab.readthedocs.io/en/stable/" target="_blank">jupyter-lab</a>, vous pouvez répertorier l’environement :</p>

                                <div class="bg-black text-emerald-300 p-4 rounded-xl border-2 border-black font-mono text-sm shadow-[2px_2px_0px_#000] mb-6 overflow-x-auto">
                                    conda install ipykernel<br>
                                    ipython kernel install --user --name='nlp-101'
                                </div>

                                <p class="mb-2 text-black text-base font-medium leading-relaxed">Nous allons installer les librairies avec le gestionnaire pip. Vérifiez que la version utilisée est bien celle associée à anaconda :</p>

                                <div class="bg-black text-emerald-300 p-4 rounded-xl border-2 border-black font-mono text-sm shadow-[2px_2px_0px_#000] mb-6 overflow-x-auto">
                                    pip show pip
                                </div>

                                <p class="mb-2 text-black text-base font-medium leading-relaxed">Puis mettez le à jour :</p>

                                <div class="bg-black text-emerald-300 p-4 rounded-xl border-2 border-black font-mono text-sm shadow-[2px_2px_0px_#000] mb-6 overflow-x-auto">
                                    pip install --upgrade pip
                                </div>

                                <p class="mb-2 text-black text-base font-medium leading-relaxed">Installez les librairies suivantes :</p>

                                <div class="bg-black text-emerald-300 p-4 rounded-xl border-2 border-black font-mono text-sm shadow-[2px_2px_0px_#000] mb-6 overflow-x-auto">
                                    pip install scikit-learn==0.23.2 matplotlib==3.3.2 pandas==1.1.3 lime==0.2.0.1 unidecode==1.3.2 umap-learn==0.4.6 umap-learn[plot] nltk==3.5 spacy==2.3.2<br>
                                    pip install --upgrade jupyter
                                </div>

                                <p class="mb-2 text-black text-base font-medium leading-relaxed">Vous pouvez vérifier que chaque package est bien installé avec la commande :</p>

                                <div class="bg-black text-emerald-300 p-4 rounded-xl border-2 border-black font-mono text-sm shadow-[2px_2px_0px_#000] mb-6 overflow-x-auto">
                                    python -c "import sklearn; print(sklearn.__version__)"
                                </div>

                                <p class="mb-2 text-black text-base font-medium leading-relaxed">Finalement téléchargez le modèle Spacy français :</p>

                                <div class="bg-black text-emerald-300 p-4 rounded-xl border-2 border-black font-mono text-sm shadow-[2px_2px_0px_#000] mb-6 overflow-x-auto">
                                    python3 -m spacy download fr_core_news_md
                                </div>

                                <h2 class="mt-8 mb-4 text-2xl font-extrabold text-black tracking-tight">Google Colab</h2>

                                <p class="mb-4 text-black text-base font-medium leading-relaxed">Si vous disposez d'un compte Google, vous pouvez également éxécuter l'ensemble des TPs et exercices sur l'interface <a class="font-bold underline text-black hover:text-emerald-700" href="https://colab.research.google.com/" target="_blank">Google Colab</a>. Pour chaque cours, il vous suffit de cliquer sur le lien "lab materials" qui vous amènera au notebook hébergé sur le github du cours. Vous pouvez ensuite l'ouvrir dans Colab en remplaçant "github.com" par "githubtocolab.com" dans l'url.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>