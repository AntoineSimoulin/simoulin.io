<template>
    <section class="pb-0 lg:py-6">
      <div class="py-4">
        <div class="flex flex-wrap items-center justify-between">
          <div class="w-full lg:w-7/12 order-1 lg:order-0 mt-8 lg:mt-0">
            <div class="container mx-auto">
              <!-- Header Text -->
              <h1 class="font-bold text-4xl mb-2">Hey! I’m <span class="text-blue-600">Antoine</span> 👋</h1>
              <h1 class="font-bold text-3xl pb-4">An engineer looking to develop AI's future.</h1>
        
              <p class="text-lg leading-relaxed font-light mb-6 text-gray-700">
                I am looking to push forward the state-of-the-art of AI by <span class="font-bold">bridging research and engineering innovations</span> into the foundation of safe, reliable, efficient, and scalable products!
                I have held <span class="font-bold">academic and industry roles</span>, giving me a fresh perspective on translating technical expertise into solutions for complex problems.
              </p>
        
              <p class="text-lg leading-relaxed font-light mb-6 text-gray-700">
                For the last five years, I worked as a <span class="font-bold">Sr. Data Scientist at Quantmetry within the NLP research and innovation team</span> 👔. I automated and optimized processes across large companies by implementing, testing, deploying, and maintaining end-to-end solutions.
              </p>

              <p class="text-lg leading-relaxed font-light mb-6 text-gray-700">
                As a young researcher 🎓, I conducted cutting-edge research and <span class="font-bold">completed my Ph.D. within the laboratory of formal linguistics at Paris University</span>, contributing to innovative research at the crossroad of computational linguistics and statistical learning. I implemented research papers, developed innovative ideas, communicated during top peer-reviewed NLP conferences, and released awarded open-source contributions.
              </p>
            </div>
          </div>
        
          <div class="w-full lg:w-4/12 order-0 lg:order-1 flex flex-col items-center">
              <!-- Image with styling -->
              <img 
                src="@/assets/img/moi-5.jpg" 
                class="max-w-full h-auto w-64 lg:w-full rounded-3xl shadow-lg rotate-3 mb-8 transition-transform hover:rotate-0 duration-300"
                alt="Antoine Simoulin"
              >

              <div class="w-full flex flex-col sm:flex-row justify-center lg:justify-between gap-3 px-4">
                <a class="btn bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700" href="/CV_SIMOULIN_V6.pdf" download rel="noopener noreferrer" target="_blank">
                  <i class="fa-solid fa-circle-arrow-down mr-2"></i>Download my CV
                </a>
                <a class="btn bg-transparent border-base-300 hover:bg-base-200 text-base-content" href="/Research_Statement.pdf" download rel="noopener noreferrer" target="_blank">
                  <i class="fa-solid text-primary fa-circle-arrow-down mr-2"></i>Research Statement
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
</template>