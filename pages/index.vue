<template>
    <section class="pb-0 lg:py-6">
      <div class="py-4">
        <div class="flex flex-wrap items-center justify-between gap-8 lg:gap-0">
          <div class="w-full lg:w-7/12 order-1 lg:order-0 mt-4 lg:mt-0">
            <div class="container mx-auto">
              <!-- Header Text -->
              <h1 class="font-extrabold text-4xl lg:text-5xl mb-4 text-black tracking-tight leading-tight">
                Hey! I’m <mark class="bg-yellow-300 text-black px-3 py-0.5 border-2 border-black shadow-[2.5px_2.5px_0px_#000] rounded-xl inline-block -rotate-1">Antoine</mark> 👋
              </h1>
              <h2 class="font-bold text-2xl lg:text-3xl pb-6 text-black">
                An engineer looking to develop <span class="bg-pink-300 text-black px-2 py-0.5 border-2 border-black font-black rounded-md inline-block rotate-1">AI's future</span>.
              </h2>
         
              <!-- Unboxed, natural flowing bio text -->
              <div class="space-y-5 text-black mb-8">
                <p class="text-base lg:text-lg leading-relaxed font-medium">
                  I am looking to push forward the state-of-the-art of AI by <span class="bg-blue-100 text-black px-1.5 py-0.5 border border-black font-bold rounded">bridging research and engineering innovations</span> into the foundation of safe, reliable, efficient, and scalable products!
                  I have held academic and industry roles, giving me a fresh perspective on translating technical expertise into solutions for complex problems.
                </p>
          
                <p class="text-base lg:text-lg leading-relaxed font-medium">
                  For five years, I worked as a <span class="bg-yellow-200 text-black px-1.5 py-0.5 border border-black font-bold rounded">Sr. Data Scientist at Quantmetry</span> within the NLP research and innovation team 👔. I automated and optimized processes across large companies by implementing, testing, deploying, and maintaining end-to-end solutions.
                </p>
  
                <p class="text-base lg:text-lg leading-relaxed font-medium">
                  As a researcher 🎓, I conducted cutting-edge research and <span class="bg-purple-100 text-black px-1.5 py-0.5 border border-black font-bold rounded">completed my Ph.D. within the Formal Linguistics Lab at Paris University</span>, contributing to research at the crossroad of computational linguistics and statistical learning.
                </p>
              </div>
            </div>
          </div>
        
          <div class="w-full lg:w-4/12 order-0 lg:order-1 flex flex-col items-center">
              <!-- Asymmetrical Image with Sticker Badge -->
              <div class="relative mb-8">
                <div class="absolute -top-4 -right-2 z-10 bg-emerald-300 text-black text-xs font-black border-2 border-black px-3 py-1.5 rounded-full shadow-[2px_2px_0px_#000] -rotate-3">
                  Ph.D. & Sr. AI Engineer ⚡
                </div>
                <img 
                  src="@/assets/img/moi-5.jpg" 
                  class="max-w-full h-auto w-64 lg:w-full rounded-2xl border-2 border-black shadow-[5px_5px_0px_#000] rotate-1 hover:rotate-0 transition-transform duration-300 bg-white"
                  alt="Antoine Simoulin"
                >
              </div>

              <div class="w-full flex flex-col sm:flex-row justify-center lg:justify-between gap-3 px-2">
                <a class="btn bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 font-black rounded-xl px-5 py-3 transition-all" href="/CV_SIMOULIN_V6.pdf" download rel="noopener noreferrer" target="_blank">
                  <i class="fa-solid fa-circle-arrow-down mr-2"></i>Download my CV
                </a>
                <a class="btn bg-blue-300 hover:bg-blue-400 text-black border-2 border-black shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 font-black rounded-xl px-5 py-3 transition-all" href="/Research_Statement.pdf" download rel="noopener noreferrer" target="_blank">
                  <i class="fa-solid fa-circle-arrow-down mr-2"></i>Research Statement
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
</template>