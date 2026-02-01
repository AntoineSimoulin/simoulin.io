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