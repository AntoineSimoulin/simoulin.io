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

**Objective:** Understand the core challenges of human language and the essential steps to prepare raw text for machines <Cite id="yang-etal-2025-docagent, yang-etal-2025-code"/>.

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