---
theme: ../themes/simoulin
title: Introduction to Natural Language Processing
author: Antoine Simoulin
info: |
  Friday November 4th, 2022
  External Speaker Series
drawings:
  persist: false
mdc: true
layout: cover
---


---

# The Foundations & The NLP Pipeline

**Objective:** Understand the core challenges of human language and the essential steps to prepare raw text for machines.

* **Theory:**
* What is NLP? (Interaction between human language and computers).
* The problem of **Ambiguity**: Lexical vs. Syntactic.
* **The Classic Pipeline:**
* Sentence Segmentation.
* Tokenization (Word vs. Sub-word).
* Stop Word Removal.
* Stemming & Lemmatization.
* Part-of-Speech (POS) Tagging.




* **Practical Lab:** Using `spaCy` or `NLTK` to clean a dataset of news articles.

---

# Vectorization – Words and Documents as Numbers

**Objective:** Learn how to transform discrete text into numerical formats suitable for Machine Learning.

* **Word-Level Representation:**
* **One-Hot Encoding:** Sparse vectors and the orthogonality problem.


* **Document-Level Representation:**
* **Bag of Words (BoW):** Counting frequencies and ignoring syntax.
* **TF-IDF (Term Frequency-Inverse Document Frequency):** Weighting importance based on document uniqueness.


* **Practical Lab:** Building a simple document retrieval system (search engine) using Cosine Similarity.

---

# Statistical Models & N-Grams

**Objective:** Introduce the concept of word order and the Markov Assumption in language modeling.

* **Theory:**
* **N-Grams:** Unigrams, Bigrams, and Trigrams.
* **Probability Distribution:** Calculating the likelihood of the "next word."
* **Smoothing:** Handling the "Zero-Probability" problem for unseen words.


* **Concepts:** The trade-off between context () and data sparsity.
* **Practical Lab:** Building a basic "Auto-complete" generator using Trigram probabilities.

---

# Topic Modeling with Latent Dirichlet Allocation (LDA)

**Objective:** Explore unsupervised learning to discover "hidden" themes within large collections of text.

* **Theory:**
* Introduction to Generative Models.
* **LDA Intuition:** Documents as mixtures of topics; Topics as mixtures of words.
* Defining "Latent" vs. "Observed" variables.


* **Evaluation:** How to interpret topic clusters and word distributions.
* **Practical Lab:** Extracting 5-10 key topics from a dataset of 1,000+ customer reviews.

---

# Word Embeddings & Dense Representations

**Objective:** Transition from counting words to learning their semantic meaning in a continuous vector space.

* **Theory:**
* **The Distributional Hypothesis:** "You shall know a word by the company it keeps."
* **Word2Vec:** Understanding Skip-gram and Continuous Bag of Words (CBOW).
* **Vector Arithmetic:** Exploring semantic relationships (e.g., King - Man + Woman = Queen).


* **Concepts:** Dimensionality reduction and dense vs. sparse vectors.
* **Practical Lab:** Using pre-trained `Gensim` models to visualize word clusters in 2D space.

---

# Recommended Tools & Libraries

* **Language:** Python 3.9+
* **Core Libraries:** `spaCy`, `NLTK`, `Scikit-Learn`, `Gensim`.
* **Environment:** Jupyter Notebooks or Google Colab.

---
layout: three-cols-header
---

# Image generation conditioned by text

Multimodal deep learning architectures can handle **multiple data modalities**, including **text, image, audio, speech, video, and tabular data**. We can distinguish **various architectures**, each combining modalities with a different setup.

::left::
<FigureCard :clickAnimate="true" align="center" label="Figure 1." src="/encoder.svg" caption="The encoder takes input from one or multiple modalities and outputs a vector representation. This is a fusion-based architecture." />

::center::
<FigureCard :clickAnimate="true" align="center" label="Figure 2." src="/decoder.svg" caption="The decoder takes a vector representation input and outputs one or multiple modalities. This is a fusion-based architecture." />

::right::
<FigureCard :clickAnimate="true" align="center" label="Figure 3." src="/encoder-decoder.svg" caption="Encoder-decoder takes one or multiple modalities as input and outputs one or multiple different or identical modalities." />


---
layout: two-cols-header
align: top # top, bottom, center, stretch (default)
---

# Technology maturity


::left::
<IconList :clickAnimate="true" :items="[
  { icon: '/arrow.svg', text: '**Multiple applications**, use-cases, startups, open-source contributions, and resources exist.' },
  { icon: '/equalizer.svg', text: 'There has been **steady progress in technology**.' },
  { icon: '/magnifier.svg', text: 'Unstructured data represent a&nbsp;**large portion of available company data**.' }
]" />


::right::
<div class="flex flex-row justify-center items-stretch gap-4 mt-4 mb-8 flex-1 h-full min-h-0">
  <FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://www.gartner.com/ngw/globalassets/en/articles/images/hype-cycle-for-artificial-intelligence-2022.png" caption="Gartner Hype Cycle for Artificial Intelligence, 2022. Source: [Gartner](https://www.gartner.com/en/articles/what-is-artificial-intelligence)" />
</div>

---
layout: two-cols-header
align: top # top, bottom, center, stretch (default)
---

# Multimodal search engines

At the 2021 IO conference, Google introduced **MUM**, a new model based on the T5 text-to-text architecture <Cite id="raffel2020exploring"/>. According to them, the model is 1,000 times more powerful than BERT <Cite url="https://blog.google/products/search/introducing-mum/"/>. MUM allows **encoding and generating language** and is trained in 75 languages and several tasks simultaneously. Finally, MUM is **multimodal**, for the moment, through **text, image, and, in the future, possibly video and audio** <Cite id="geigle2022retrieve"/>.

::left::
<FigureCard :clickAnimate="true" align="center" label="Figure 1." src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/MUM_GIF04_01_1_1.gif" caption="The features of MUM summarize well the current trends in NLP: (1) encoding and generation, (2) multilingual, (3) multi-task trained, and (4) multimodal." />

::right::
<FigureCard :clickAnimate="true" align="center" label="Figure 1." src="" caption="Multimodal search engine" /> 


---

# Image edition

In 2021, Google introduced the **Magic Eraser** <Cite url="https://blog.google/products-and-platforms/products/photos/magic-eraser/"/>, which can automatically **figure out what you're trying to get rid of** by analyzing what you circle, so you don't have to worry about precise brushing. Once you decide what to erase, Magic Eraser uses machine learning again to predict what pixels would look like if the distraction were not there. The tool can **run directly on the device** and enable **subtle image editing without technical knowledge**.

<FigureCard :clickAnimate="true" align="center" label="Figure 1." src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/MagicEraser-Blog.width-2200.format-webp.webp" caption="Illustration of the google magic eraser tool." />

---

# Video Edition using text

Runway <Cite url="https://runwayml.com/"/> is a company developing software to generate content such as images and videos using natural language text input.

<Tweet id="1568220303808991232" scale="0.5" cards="visible" />


---
layout: two-cols-header
align: top # top, bottom, center, stretch (default)
---

# General Artificial Intelligence Research

DeepMind recently released a new **multimodal AI system: "Gato"** <Cite id="reed2022generalist" />. The algorithm is trained on many tasks (several hundred): from controlling a robot arm to writing poems. DeepMind called it a "general-purpose" system.

::left::
<FigureCard :clickAnimate="true" align="center" label="Figure 1." src="https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F05%2FscalingAI.jpg&signature=521ede8490ac3f1d46bf5240c0ca1f37" caption="DeepMind researcher claims new ‘Gato’ AI could lead to AGI, says
‘the game is over!’" />

::right::
<FigureCard :clickAnimate="true" align="center" label="Figure 1." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26ZaWp2hISPf2gF9oDZ-Qrq_kAI-oo_xFkA&s" caption="Gato model pre-training paradigm." />