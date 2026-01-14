<script>
import TwitterIcon from "./icons/iconTwitter.vue";
import GithubIcon from "./icons/iconGithub.vue";
import LinkedinIcon from "./icons/iconLinkedin.vue";
import ScholarIcon from "./icons/iconScholar.vue";
import DblpIcon from "./icons/iconDblp.vue";
import AclIcon from "./icons/iconAcl.vue";
import HuggingFaceIcon from "./icons/iconHuggingFace.vue";

export default {
  components: {
    TwitterIcon,
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
  <footer>
    <div class="container mx-auto px-8 lg:px-32 pb-4 sticky bottom-0 z-10 w-full">
      <div class="w-full">
        <div class="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p class="py-3">Simoulin &copy; 2026. All rights reserved.</p>
          <ul class="list-none flex justify-center sm:justify-end flex-wrap">
            <li class="socials p-3">
              <a
                class="text-gray-900 hover:text-gray-700"
                href="https://twitter.com/antoinesimoulin/"
                target="_blank"
              >
                <TwitterIcon />
              </a>
            </li>
            <li class="socials p-3">
              <a
                class="text-gray-900 hover:text-gray-700"
                href="https://github.com/AntoineSimoulin"
                target="_blank"
              >
                <GithubIcon />
              </a>
            </li>
            <li class="socials p-3">
              <a
                class="text-gray-900 hover:text-gray-700"
                href="https://www.linkedin.com/in/antoine-simoulin-phd-a00960b1/"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
            </li>
            <li class="socials p-3">
              <a
                class="text-gray-900 hover:text-gray-700"
                href="https://scholar.google.fr/citations?hl=en&user=yZ-jUHAAAAAJ"
                target="_blank"
              >
                <ScholarIcon />
              </a>
            </li>
            <li class="socials p-3">
              <a
                class="text-gray-900 hover:text-gray-700"
                href="https://dblp.org/pid/211/7662.html"
                target="_blank"
              >
                <DblpIcon />
              </a>
            </li>
            <li class="socials p-3">
              <a
                class="text-gray-900 hover:text-gray-700"
                href="https://aclanthology.org/people/a/antoine-simoulin/"
                target="_blank"
              >
                <AclIcon />
              </a>
            </li>
            <li class="socials p-3">
              <a
                class="text-gray-900 hover:text-gray-700"
                href="https://huggingface.co/asi"
                target="_blank"
              >
                <HuggingFaceIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.socials:hover {
  background: #938b8b21;
  border-radius: 50%;
}
</style>