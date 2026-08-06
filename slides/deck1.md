---
theme: ../themes/simoulin
title: From text to image, multimodality in deep learning
author: Antoine Simoulin
info: |
  Friday November 4th, 2022
  QuantumBlack Data Science Coffee External Speaker Series
drawings:
  persist: false
transition: slide-left
mdc: true
layout: cover
---

---

# About Me

### Antoine SIMOULIN

* **Education & Experience:** Engineer by education and experience, blending academic and industry perspectives to translate technical expertise into real-world solutions.
* **Industry Leadership:** Worked 5+ years as a Sr. Data Scientist at Quantmetry within the NLP Research & Innovation team.
* **Academic Research:** Conducted cutting-edge research and completed a Ph.D. within the Laboratory of Formal Linguistics at Paris University.

---
layout: section
class: text-center
---

# Introduction

---
layout: three-cols-header
---

# Image generation conditioned by text

Multimodal deep learning architectures can handle **multiple data modalities**, including **text, image, audio, speech, video, and tabular data**. We can distinguish **various architectures**, each combining modalities with a different setup.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_04.png" caption="The encoder takes input from one or multiple modalities and outputs a vector representation. This is a fusion-based architecture." />

::center::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_04.png" caption="The decoder takes a vector representation input and outputs one or multiple modalities. This is a fusion-based architecture." />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 3." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_04.png" caption="Encoder-decoder takes one or multiple modalities as input and outputs one or multiple different or identical modalities." />

---
layout: two-cols-header
---

# Technology maturity

::left::
<IconList :clickAnimate="true" :items="[
  { icon: '/arrow.svg', text: '**Multiple applications**, use-cases, startups, open-source contributions, and resources exist.' },
  { icon: '/equalizer.svg', text: 'There has been **steady progress in technology**.' },
  { icon: '/magnifier.svg', text: 'Unstructured data represent a **large portion of available company data**.' }
]" />

::right::
<div class="flex flex-row justify-center items-stretch gap-4 mt-4 mb-8 flex-1 h-full min-h-0">
  <FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://www.gartner.com/ngw/globalassets/en/articles/images/hype-cycle-for-artificial-intelligence-2022.png" caption="Gartner Hype Cycle for Artificial Intelligence, 2022. Source: [Gartner](https://www.gartner.com/en/articles/what-is-artificial-intelligence)" />
</div>

---

# Presentation goal

* **Applications & Use Cases:** Give an overview of already existing applications and real-world use cases.
* **Available Resources:** Enumerate the open-source libraries, pretrained models, and developer tools.
* **Technical Background:** Provide a clear overview of the current underlying technology, architectures, and theoretical limits.
* **Future Directions:** Discuss potential emerging use cases and future work directions.

---

# Presentation schedule

1. **Applications of multimodal text/image neural networks** *(15 mins)*
2. **Technical background** *(15 mins)*
3. **Available resources and tools** *(5 mins)*
4. **Conclusion and future work** *(5 mins)*

---
layout: section
class: text-center
---

# Applications of multimodal text/image neural networks

---
layout: two-cols-header
---

# Multimodal search engines

At the 2021 IO conference, Google introduced **MUM**, a new model based on the T5 text-to-text architecture <Cite id="raffel2020exploring"/>. According to them, the model is 1,000 times more powerful than BERT <Cite url="https://blog.google/products/search/introducing-mum/"/>. MUM allows **encoding and generating language** and is trained in 75 languages and several tasks simultaneously. Finally, MUM is **multimodal**, through **text, image, and, in the future, possibly video and audio** <Cite id="geigle2022retrieve"/>.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/MUM_GIF04_01_1_1.gif" caption="The features of MUM summarize well current trends: (1) encoding & generation, (2) multilingual, (3) multi-task, and (4) multimodal." />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_09.png" caption="Multimodal search engine powered by MUM." />

---

# Image edition

In 2021, Google introduced the **Magic Eraser** <Cite url="https://blog.google/products-and-platforms/products/photos/magic-eraser/"/>, which can automatically **figure out what you're trying to get rid of** by analyzing what you circle. Magic Eraser uses machine learning to predict what pixels would look like if the distraction were not there, running **directly on device**.

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/MagicEraser-Blog.width-2200.format-webp.webp" caption="Illustration of the Google Magic Eraser tool." />

---

# Video Edition using text

Runway <Cite url="https://runwayml.com/"/> is a company developing software to generate and edit video content using natural language text prompts.

<Tweet id="1568220303808991232" scale="0.5" cards="visible" />

---
layout: two-cols-header
---

# General Artificial Intelligence Research

DeepMind recently released a new **multimodal AI system: "Gato"** <Cite id="reed2022generalist" />. The algorithm is trained on hundreds of tasks: from controlling a robot arm to writing poems, operating as a general-purpose system.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F05%2FscalingAI.jpg&signature=521ede8490ac3f1d46bf5240c0ca1f37" caption="DeepMind researcher claims new 'Gato' AI could lead to AGI." />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_12.png" caption="Gato model multi-task pre-training paradigm." />

---
layout: two-cols-header
---

# Document processing

LayoutLMv3 <Cite id="huang2022layoutlmv3" /> is a **general-purpose pre-trained model** for text-centric and image-centric Document AI tasks, achieving state-of-the-art performance in receipt understanding, visual question answering, document classification, and layout analysis.

::left::
<Tweet id="1536374736590057474" scale="0.4" cards="visible" />

::right::
<Tweet id="1565334436702347266" scale="0.35" cards="visible" />

---

# Document Processing Use Cases

* **Forged Document Detection:** Led projects identifying forged documents for insurance companies by extracting information and verifying internal document consistency.
* **Layout Analysis:** Parsing unstructured PDF receipts, invoices, and contracts into structured JSON representations.

---
layout: two-cols-header
---

# Multimodal representation

Facebook released **CommerceMM** <Cite id="yu2022commercemm" />, creating rich representations of commerce data across text and image modalities for product recognition and retrieval.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_15.png" caption="Integrating text & image characterizations of posts using CommerceMM." />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="https://www.marktechpost.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-29-at-7.36.12-AM.png" caption="CommerceMM model architecture." />

---
layout: two-cols-header
---

# Inspirational content generation

Using latent text-to-image diffusion, tools like *This House Does Not Exist* and *Midjourney* generate realistic architecture and artwork. <Cite url="https://thishouseddoesnotexist.com/" />

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://thishousedoesnotexist.org/assets/houses/11493414.png?_1663637674" caption="House design generated from text query: 'A modernist eco-friendly home in Thailand'" />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="https://amazingarchitecture.com/storage/2825/responsive-images/ai_generated_future_cities_manas_bhatia___media_library_original_1344_756.jpg" caption="AI-generated Future Cities by Manas Bhatia using Midjourney." />

---

# Stable Diffusion & Open Source Release

In May 2022, Hugging Face released `diffusers`, an open-source library providing pre-trained diffusion models across vision and audio modalities as a modular toolbox. <Cite url="https://github.com/huggingface/diffusers/" />

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_17.png" caption="Hugging Face Diffusers ecosystem for open-source diffusion models." />

---
layout: section
class: text-center
---

# Technical background

---
layout: two-cols-header
---

# Generative Adversarial Networks (GAN)

GANs <Cite id="goodfellow2014generative" /> consist of two neural networks trained end-to-end: a **Generator** creating images from random noise, and a **Discriminator** distinguishing generated images from real ones.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_19.png" caption="Illustration of the GAN adversarial training process." />

::right::
* **Generator:** Learns to capture real data distribution.
* **Discriminator:** Estimates probability that a sample came from training data rather than Generator.

---

# GAN Applications: Photorealistic Synthesis

Websites like *This Person Does Not Exist* <Cite url="https://thispersondoesnotexist.com/" /> leverage StyleGAN2 to synthesize hyper-realistic human faces from random latent vectors.

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_20.png" caption="Human portrait synthesized using StyleGAN2 architecture." />

---
layout: two-cols-header
---

# Neural Style Transfer

Neural Style Transfer <Cite id="mordvintsev2015inceptionism" /> transfers artistic style from one image onto the content of another using pre-trained convolutional feature maps.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_21.png" caption="Neural Style Transfer optimization loop using Content and Style loss." />

::right::
* **Content Loss:** Preserves spatial structure from content image.
* **Style Loss:** Minimizes Gram matrix differences between feature activations.

---

# Style Transfer in Action

Platforms like *Deep Dream Generator* <Cite url="https://deepdreamgenerator.com/" /> allow users to blend arbitrary style images with content photos.

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_22.png" caption="Example of Neural Style Transfer generated with Deep Dream Generator." />

---
layout: two-cols-header
---

# Diffusion Process: General Principle

Diffusion models <Cite id="sohl2015deep" /> iteratively process images by adding Gaussian noise over $T$ steps (Forward) and learning to reverse the noise to synthesize detailed images (Reverse).

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_23.png" caption="Illustration of forward (noising) and backward (denoising) diffusion process." />

::right::
* **Forward Process:** $q(x_t | x_{t-1})$ gradually adds noise.
* **Reverse Process:** $p_	heta(x_{t-1} | x_t)$ learns to remove noise at each step.

---
layout: two-cols-header
---

# Diffusion Model Training

In practice, we generate noisy images with varying noise levels $\epsilon$ and train an U-Net Encoder-Decoder model $\epsilon_	heta(x_t, t)$ to predict the noise injected at step $t$.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_24.png" caption="Diffusion model training: predicting added noise at timestep t." />

::right::
* **Objective:** Minimize $\|\epsilon - \epsilon_	heta(x_t, t)\|^2$.
* **Robustness:** Enables stable training without mode collapse.

---
layout: two-cols-header
---

# Diffusion Model Inference

At inference, we start from pure Gaussian noise $x_T \sim \mathcal{N}(0, I)$ and iteratively apply the trained model over $T$ steps to reconstruct a clean image.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_25.png" caption="Iterative denoising loop during diffusion inference." />

::right::
* Replaces single-step generation with a controllable step-by-step Markov chain.

---
layout: two-cols-header
---

# Text Conditioning in Diffusion

To guide generation with text, we feed the UNet with a text prompt embedding $c = 	au_	heta(	ext{prompt})$ computed via CLIP or T5 text encoders.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_26.png" caption="Text-conditioned diffusion architecture with cross-attention layers." />

::right::
* **Cross-Attention:** Injects text prompt embeddings directly into UNet spatial feature maps.

---

# Diffusion Applications: Generation & Inpainting

Diffusion models surpass GANs on image synthesis, conditional generation, and localized inpainting. <Cite id="dhariwal2021diffusion" />

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_27.png" caption="Tasks performed by diffusion models: text-to-image synthesis and image inpainting." />

---
layout: two-cols-header
---

# DALL-E 2 Architecture

DALL-E 2 <Cite id="ramesh2022hierarchical" /> pairs a prior network (mapping text to CLIP image embeddings) with a diffusion decoder producing high-resolution outputs.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_28.png" caption="Sample images generated from natural language prompts using DALL-E 2." />

::right::
* **High Fidelity:** Generates photorealistic textures, complex lighting, and artistic compositions.

---
layout: two-cols-header
---

# Classifier-Free Guidance & CLIP Ranking

We adjust text prompt influence via Classifier-Free Guidance scale $w$ and rank output candidates using CLIP text-image cosine similarity. <Cite id="radford2021learning" />

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_29.png" caption="Guiding diffusion generation with CLIP cross-modal scoring." />

::right::
* Higher guidance weights align images strongly with prompts at the cost of diversity.

---
layout: two-cols-header
---

# Latent Diffusion Models (LDM)

To reduce high computational cost, Latent Diffusion <Cite id="rombach2022high" /> performs the noising/denoising process inside a lower-dimensional latent space compressed by a VQ-GAN autoencoder.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_30.png" caption="Forward and backward diffusion operating inside latent space." />

::right::
* Reduces memory and compute overhead by a factor of 4x to 8x while preserving perceptual quality.

---
layout: section
class: text-center
---

# Available resources and tools

---
layout: two-cols-header
---

# Open-Source Libraries & Implementations

* **Stability AI:** Open weights for Stable Diffusion models. <Cite url="https://stability.ai/" />
* **Hugging Face `diffusers`:** Standard Python ecosystem library for inference and training. <Cite url="https://github.com/huggingface/diffusers" />

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_32.png" caption="Stability.ai open model ecosystem." />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_32.png" caption="Hugging Face Diffusers framework." />

---

# Tutorials & Key Documentation

* **AI Generated Art Overview:** [V7 Labs Guide](https://www.v7labs.com/blog/ai-generated-art)
* **Diffusion Models Introduction:** [AssemblyAI Blog](https://www.assemblyai.com/blog/diffusion-models-for-machine-learning-introduction/)
* **What are Diffusion Models?:** [Lilian Weng's Blog Post](https://lilianweng.github.io/posts/2021-07-11-diffusion-models/)

---
layout: two-cols-header
---

# Adaptation of GPT-fr for Image Generation

Research on adapting **GPT-fr** for French text-to-image generation using VQ-GAN discrete image tokens <Cite id="esser2021taming" />. <Cite url="https://huggingface.co/asi/igpt-fr-cased-base" />

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_34.png" caption="Training configuration coupling VQ-GAN discrete tokens with GPT-fr." />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/mck_pages/slide_34.png" caption="Inference configuration generating images from French text prompts." />

---

# Conclusion

* **Rapid Evolution:** Generative multimodal AI has rapidly advanced, merging vision and natural language processing into unified architectures.
* **Practical Applications:** Real-world applications span search engines, automated document intelligence, graphic design, and artistic generation.
* **Ethical & Copyright Considerations:** Content generation technologies raise important copyright, attribution, and governance questions.

---

# Contact & Links

* **LinkedIn:** [Antoine Simoulin](https://www.linkedin.com/in/antoine-simoulin/)
* **Website:** [simoulin.io](https://simoulin.io)
