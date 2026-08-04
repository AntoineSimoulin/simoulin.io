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
  <footer class="p-4 pb-8 bg-base-200 text-base-content sticky bottom-0 z-10 w-full container mx-auto px-8 lg:px-32 flex flex-col sm:flex-row justify-between items-center gap-4">
    <div class="flex items-center">
      <p>Simoulin &copy; 2026. All rights reserved.</p>
    </div>
    <nav class="flex flex-wrap justify-center gap-4">
      <a href="https://github.com/AntoineSimoulin" target="_blank" aria-label="GitHub" class="btn btn-ghost btn-circle">
        <GithubIcon class="w-6 h-6 fill-current hover:text-primary transition-colors" />
      </a>
      <a href="https://www.linkedin.com/in/antoine-simoulin-phd-a00960b1/" target="_blank" aria-label="LinkedIn" class="btn btn-ghost btn-circle">
        <LinkedinIcon class="w-6 h-6 fill-current hover:text-primary transition-colors" />
      </a>
      <a href="https://substack.com/@antoinesimoulin" target="_blank" aria-label="Substack" class="btn btn-ghost btn-circle">
        <SubstackIcon class="w-5 h-5" />
      </a>
      <a href="https://scholar.google.fr/citations?hl=en&user=yZ-jUHAAAAAJ" target="_blank" aria-label="Google Scholar" class="btn btn-ghost btn-circle">
        <ScholarIcon class="w-6 h-6 fill-current hover:text-primary transition-colors" />
      </a>
      <a href="https://dblp.org/pid/211/7662.html" target="_blank" aria-label="DBLP" class="btn btn-ghost btn-circle">
        <DblpIcon class="w-6 h-6 fill-current hover:text-primary transition-colors" />
      </a>
      <a href="https://aclanthology.org/people/a/antoine-simoulin/" target="_blank" aria-label="ACL Anthology" class="btn btn-ghost btn-circle">
        <AclIcon class="w-6 h-6 fill-current hover:text-primary transition-colors" />
      </a>
      <a href="https://huggingface.co/asi" target="_blank" aria-label="Hugging Face" class="btn btn-ghost btn-circle">
        <HuggingFaceIcon class="w-6 h-6 fill-current hover:text-primary transition-colors" />
      </a>
    </nav>
  </footer>
</template>

<style scoped>
/* Removed specific hover styles as we use Tailwind utility classes now */
</style>