<script>
import SubstackIcon from "./icons/iconSubstack.vue";
import GithubIcon from "./icons/iconGithub.vue";
import LinkedinIcon from "./icons/iconLinkedin.vue";
import ScholarIcon from "./icons/iconScholar.vue";
import DblpIcon from "./icons/iconDblp.vue";
import AclIcon from "./icons/iconAcl.vue";
import HuggingFaceIcon from "./icons/iconHuggingFace.vue";

export default {
  components: {
    SubstackIcon,
    GithubIcon,
    LinkedinIcon,
    ScholarIcon,
    DblpIcon,
    AclIcon,
    HuggingFaceIcon
  },
}
</script>

<template>
  <div class="container mx-auto px-8 lg:px-32 my-8">
    <footer class="flex flex-col sm:flex-row justify-between items-center gap-3 text-black">
      <div class="flex items-center">
        <p class="font-bold text-xs text-black/80">Simoulin &copy; 2026. All rights reserved.</p>
      </div>
      <nav class="flex flex-wrap justify-center gap-1.5 sm:gap-2">
        <a href="https://github.com/AntoineSimoulin" target="_blank" aria-label="GitHub" class="p-1.5 bg-yellow-300 hover:bg-yellow-400 border-2 border-black shadow-[1.5px_1.5px_0px_#000] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 rounded-full transition-all">
          <GithubIcon class="w-4 h-4 fill-current text-black" />
        </a>
        <a href="https://www.linkedin.com/in/antoine-simoulin-phd-a00960b1/" target="_blank" aria-label="LinkedIn" class="p-1.5 bg-blue-300 hover:bg-blue-400 border-2 border-black shadow-[1.5px_1.5px_0px_#000] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 rounded-full transition-all">
          <LinkedinIcon class="w-4 h-4 fill-current text-black" />
        </a>
        <a href="https://substack.com/@antoinesimoulin" target="_blank" aria-label="Substack" class="p-1.5 bg-orange-300 hover:bg-orange-400 border-2 border-black shadow-[1.5px_1.5px_0px_#000] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 rounded-full transition-all">
          <SubstackIcon class="w-4 h-4" />
        </a>
        <a href="https://scholar.google.fr/citations?hl=en&user=yZ-jUHAAAAAJ" target="_blank" aria-label="Google Scholar" class="p-1.5 bg-pink-300 hover:bg-pink-400 border-2 border-black shadow-[1.5px_1.5px_0px_#000] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 rounded-full transition-all">
          <ScholarIcon class="w-4 h-4 fill-current text-black" />
        </a>
        <a href="https://dblp.org/pid/211/7662.html" target="_blank" aria-label="DBLP" class="p-1.5 bg-emerald-300 hover:bg-emerald-400 border-2 border-black shadow-[1.5px_1.5px_0px_#000] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 rounded-full transition-all">
          <DblpIcon class="w-4 h-4 fill-current text-black" />
        </a>
        <a href="https://aclanthology.org/people/a/antoine-simoulin/" target="_blank" aria-label="ACL Anthology" class="p-1.5 bg-purple-300 hover:bg-purple-400 border-2 border-black shadow-[1.5px_1.5px_0px_#000] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 rounded-full transition-all">
          <AclIcon class="w-4 h-4 fill-current text-black" />
        </a>
        <a href="https://huggingface.co/asi" target="_blank" aria-label="Hugging Face" class="p-1.5 bg-yellow-400 hover:bg-yellow-500 border-2 border-black shadow-[1.5px_1.5px_0px_#000] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 rounded-full transition-all">
          <HuggingFaceIcon class="w-4 h-4 fill-current text-black" />
        </a>
      </nav>
    </footer>
  </div>
</template>

<style scoped>
/* Removed specific hover styles as we use Tailwind utility classes now */
</style>