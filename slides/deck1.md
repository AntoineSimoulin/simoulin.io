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

* **I am an engineer by education and experience.**
* I have held academic and industry roles, giving me a fresh perspective on translating technical expertise into solutions for complex problems.
* For the last five years, I worked as a Sr. Data Scientist at Quantmetry within the NLP research and innovation team.
* As a researcher, I conducted cutting-edge research and completed my Ph.D. within the laboratory of formal linguistics at Paris University.

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
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="/encoder.svg" caption="The encoder takes input from one or multiple modalities and outputs a vector representation. This is a fusion-based architecture." />

::center::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="/decoder.svg" caption="The decoder takes a vector representation input and outputs one or multiple modalities. This is a fusion-based architecture." />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 3." src="/encoder-decoder.svg" caption="Encoder-decoder takes one or multiple modalities as input and outputs one or multiple different or identical modalities." />

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
  <FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://www.gartner.com/ngw/globalassets/en/articles/images/hype-cycle-for-artificial-intelligence-2022.png" caption="Position of the generative AI technology on the Gartner hype cycle for artificial intelligence 2022." />
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

At the 2021 IO conference, Google introduced **MUM**, a new model based on the T5 text-to-text architecture <Cite id="raffel2020exploring"/>. According to them, the model is 1,000 times more powerful than BERT <Cite url="https://blog.google/products/search/introducing-mum/"/>. MUM allows **encoding and generating language** and is trained in 75 languages and several tasks simultaneously. Finally, MUM is **multimodal**, for the moment, through **text, image, and, in the future, possibly video and audio** <Cite id="geigle2022retrieve"/>.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/MUM_GIF04_01_1_1.gif" caption="The features of MUM summarize well the current trends in NLP: (1) encoding and generation, (2) multilingual, (3) multi-task trained, and (4) multimodal." />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/geigle_2022_rerank.png" caption="Multimodal search engine." cite="geigle2022retrieve" />

---

# Image edition

In 2021, Google introduced the **Magic Eraser** <Cite url="https://blog.google/products-and-platforms/products/photos/magic-eraser/"/>, which can automatically **figure out what you're trying to get rid of** by analyzing what you circle, so you don't have to worry about precise brushing. Once you decide what to erase, Magic Eraser uses machine learning again to predict what pixels would look like if the distraction were not there. The tool can run **directly on the device** and enable subtle image editing without technical knowledge.

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/MagicEraser-Blog.width-2200.format-webp.webp" caption="Illustration of the google magic eraser tool." />

---

# Video Edition using text

Runway <Cite url="https://runwayml.com/"/> is a company developing software to generate content such as images and videos using natural language text input.

<Tweet id="1568220303808991232" scale="0.5" cards="visible" />

---
layout: two-cols-header
---

# General Artificial Intelligence Research

DeepMind recently released a new **multimodal AI system: "Gato"** <Cite id="reed2022generalist" />. The algorithm is trained on many tasks (several hundred): from controlling a robot arm to writing poems. DeepMind called it a "general-purpose" system.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/scalingAI.avif" caption="DeepMind researcher claims new ‘Gato’ AI could lead to AGI, says ‘the game is over!’ (thenextweb.com)" />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/gato_pretraining.webp" caption="Gato model pre-training paradigm." cite="reed2022generalist" />

---
layout: two-cols-header
---

# Document processing

LayoutLMv3 <Cite id="huang2022layoutlmv3" /> is a **general-purpose pre-trained model** for text-centric and image-centric Document AI tasks. Experimental results show that it achieves **state-of-the-art performance** in text-centric tasks, including receipt understanding, document visual question answering, and image-centric tasks, such as document image classification and document layout analysis.

::left::
<Tweet id="1536374736590057474" scale="0.4" cards="visible" />

::right::
<Tweet id="1565334436702347266" scale="0.35" cards="visible" />

---

# Document Processing Use Cases

I have led a project in identifying forged documents for an insurance company. Part of the pipeline involved automatically extracting information from the document and verifying its internal consistency. For example, I confirmed the sum of the amount matched the detailed listing.

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/document_processing_use_cases.png" caption="Identifying zone of interest with layoutLM to check the consistency of information." />

---
layout: two-cols-header
---

# Multimodal representation

Facebook released a new multimodal model, **CommerceMM** <Cite id="yu2022commercemm" />, which creates rich representations of commerce data. With state-of-the-art performance in product recognition & retrieval, CommerceMM helps tailor suggestions & search results to connect shoppers with the items they want.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/commercemm_posts.png" caption="Use Microsoft CommerceMM to “understand” multimodal data by integrating its characterizations of a post’s text and image." />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="https://www.marktechpost.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-29-at-7.36.12-AM.png" caption="CommerceMM model architecture." />

---
layout: two-cols-header
---

# Inspirational content generation

Using latent text-to-image diffusion, **This House Does Not Exist** generates realistic images of modern architecture homes. <Cite url="https://thishousedoesnotexist.org/" />

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://resizeapi.com/resize-cgi/image/format=auto,fit=contain,width=900,quality=80/https://r2.thishousedoesnotexist.org/houses/11493414.png" caption="House design generated using the query “A modernist home in Thailand that is eco-friendly and made from sustainable materials”" />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="https://amazingarchitecture.com/storage/2825/responsive-images/ai_generated_future_cities_manas_bhatia___media_library_original_1344_756.jpg" caption="AI-generated Future Cities by Manas Bhatia using Midjourney AI, Adobe Photoshop." cite="https://amazingarchitecture.com/futuristic/ai-generated-future-cities-by-manas-bhatia" />

---
layout: two-cols-header
---

# Open sources release

In May 2022, Hugging Face released the open-source library **🤗 Diffusers**, which provides pre-trained diffusion models across multiple modalities, such as vision and audio, and serves as a modular toolbox for inference and training diffusion models. <Cite url="https://github.com/huggingface/diffusers/" />

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/hfdiffusion.png" caption="Image generation for the prompt « a high tech solarpunk utopia in the Amazon rainforest » using the Hugging Face stable diffusion demo." />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/hfdiffusion2.png" caption="Image generation for the prompt « A mecha robot in a favela in expressionist style » using the Hugging Face stable diffusion demo." />

---
layout: section
class: text-center
---

# Technical background

---

# Generative Adversarial Networks (GAN)

GANs <Cite id="goodfellow2014generative" /> consist of two parts trained in an end-to-end fashion. The generator generates images out of random noise, while the discriminator aims to distinguish generated images from authentic images from a training set. Consequently, the generators need to improve the quality of their generated images as the discriminator improves at discriminating images.

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/gan_adversarial_training.png" caption="Illustration of the GAN training process." />

---

# GAN Applications: Photorealistic Synthesis

Websites like *This Person Does Not Exist* <Cite url="https://thispersondoesnotexist.com/" /> leverage StyleGAN2 to synthesize hyper-realistic human faces from random latent vectors.

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/thispersondoesnotexist.png" caption="Human portrait synthesized using StyleGAN2 architecture." />

---

# Neural Style Transfer

Neural Style Transfer <Cite id="gatys2016image" /> transfers the style from one image to another while keeping the content unchanged. The architecture requires two networks, a neural transfer network and a feature extractor. The transfer model is trained to generate images given the input image. Next, the feature extractor compares the internal representations of the input, generated, and style images and attempts to reduce the distance between internal layer representations encoding styles or content.

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/neural_style_transfer.png" caption="Illustration of the architecture used to train neural style transfer models." />

---

# Style Transfer in Action

Platforms like *Deep Dream Generator* <Cite url="https://deepdreamgenerator.com/" /> allow users to blend arbitrary style images with content photos.

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/style_transfer_in_action.png" caption="Application using Deep Dream Generator." />

---

# Diffusion Process: General Principle

Diffusion models <Cite id="sohl2015deep" /> process iteratively by progressively adding noise to the input image over $T$ steps until it is entirely random noise. Instead of generating the image from random noise in a single step, we decompose the problem by training the model to generate a slightly less noisy image at each step.

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/diffusion_process.png" caption="Illustration of the forward and backward diffusion process." />

---

# Diffusion Model Training

In practice, we generate images with various degrees of additional noise and train the encoder-decoder model to predict the noise from the image such that we can reconstruct the original image by removing the noise.

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/diffusion_training.png" caption="Diffusion model training." />

---

# Diffusion Model Inference

At inference, we feed the network with noise and generate a slightly noisy image, which we feed back to the network. We repeat the $T$ steps process until we generate a fully detailed image.

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/diffusion_inference.png" caption="Diffusion model inference." />

---

# Text Conditioning in Diffusion

To guide the process, we can feed the network with a text prompt embedded together with the image from the previous step. We can also select the images to choose the extent to which we want to fit the text description.

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/text_conditioning_diffusion.png" caption="Diffusion model inference." />

---
layout: three-cols-header
---

# Diffusion Applications: Generation & Inpainting

The diffusion process has started to surpass other computer vision generative approaches on many tasks, including image generation <Cite id="dhariwal2021diffusion" /> and conditional setting, including converting text descriptions to images <Cite id="nichol2022glide" />, inpainting <Cite id="saharia2022palette" />, and image modification <Cite id="ramesh2022hierarchical" />.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/diffusion_task_inpainting.png" caption="Image Inpainting" cite="saharia2022palette" />

::center::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/diffusion_task_text2image.png" caption="Text description to image" cite="nichol2022glide" />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 3." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/diffusion_task_generation.png" caption="Image generation" cite="dhariwal2021diffusion" />

---
layout: four-cols-header
---

# DALL-E 2 Architecture

DALL-E 2 <Cite id="ramesh2022hierarchical" /> is a new AI system capable of creating realistic images and artworks from a natural language description. OpenAI develops the model, and it is an iteration of the first version of the model. More recently, Google has also proposed an algorithm for generating realistic images <Cite id="saharia2022photorealistic" />.

::first::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/dalle2_car.png" caption="One of my favorite @OpenAI #dalle images today: 'car dragon, digital art'" />

::second::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/dalle2_astronaut.png" caption="An astronaut riding a horse in a photorealistic style." />

::third::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 3." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/dalle2_chicken.png" caption="A photo of a chicken on a skateboard in Times Square. #dalle2" />

::fourth::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 4." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/dalle2_fox.png" caption="A painting of a fox sitting in a field at sunrise in the style of Claude Monet." />

---

# Classifier-Free Guidance & CLIP Ranking

We can adjust the impact of the text input by generating multiple images at each time. We then rank the images using the model **CLIP** <Cite id="radford2021learning" /> from OpenAI and select the one that matches the text input best (or not) to guide the generation process.

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/cfg_clip_ranking.png" caption="Diffusion model inference by guiding the process." />

---

# Latent Diffusion Models (LDM)

Finally, generating full-resolution images can be computationally expensive. It is possible to embed the images within a latent space <Cite id="rombach2022high" /> and perform the process here to reduce the hardware requirement.

<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/latent_diffusion_ldm.png" caption="Illustration of the forward and backward diffusion process in latent space." />

---
layout: section
class: text-center
---

# Available resources and tools

---
layout: two-cols-header
---

# Open-Source Libraries & Implementations

Multiple libraries implement diffusion models in open-source settings, including **Stability AI** <Cite url="https://stability.ai/" /> and **Hugging Face** <Cite url="https://github.com/huggingface/diffusers" />.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/stability_ai_models.png" caption="stability.ai" />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="https://eu2.contabostorage.com/50a79b48f5614eafbf203076456b1b28:simoulin.io/assets/huggingface_diffusers_lib.png" caption="Hugging Face" />

---

# Tutorials & Key Documentation

* **AI Generated Art Overview:** [V7 Labs Guide](https://www.v7labs.com/blog/ai-generated-art)
* **Diffusion Models Introduction:** [AssemblyAI Blog](https://www.assemblyai.com/blog/diffusion-models-for-machine-learning-introduction/)
* **What are Diffusion Models?:** [Lilian Weng's Blog Post](https://lilianweng.github.io/posts/2021-07-11-diffusion-models/)

---
layout: two-cols-header
---

# Adaptation of GPT-fr for Image Generation

My model generates images out of text input in French. Research on adapting **GPT-fr** for French text-to-image generation using VQ-GAN discrete image tokens <Cite id="esser2021taming, https://huggingface.co/asi/igpt-fr-cased-base" />.

::left::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 1." src="/gpt-fr-image-training.svg" caption="Training configuration" />

::right::
<FigureCard :clickAnimate="true" align="stretch" label="Figure 2." src="/gpt-fr-image-inference.svg" caption="Inference configuration" />

---

# Conclusion and future work

<v-clicks>

* **Rapid Evolution:** Generative multimodal AI has rapidly advanced, merging vision and natural language processing into unified architectures.
* **Practical Applications:** Real-world applications span search engines, automated document intelligence, graphic design, and artistic generation.
* **Ethical & Copyright Considerations:** Content generation technologies raise important copyright, attribution, and governance questions.

</v-clicks>

---

# Contact & Links

* **LinkedIn:** [Antoine Simoulin](https://www.linkedin.com/in/antoine-simoulin/)
* **Website:** [simoulin.io](https://simoulin.io)
