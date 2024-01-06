<script>
import CopyIcon from "./icons/iconCopy.vue";
import CheckIcon from "./icons/iconCheck.vue";

export default {
  props: ["code"],
  components: {
    CopyIcon,
    CheckIcon
  },
  methods: {
    delay(milliseconds) {
      return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
      });
    },
    async copyToClipboard() {
      var span = event.srcElement;
      if (span.tagName == "svg") {
        // console.log(span.parentElement);
        var a = span.parentElement;
      } else {
        var a = event.srcElement;
      }
      // console.log(a.tagName);
      a.classList.add("switch");
      // console.log(a.parentElement.classList);
      document.getElementById(
        a.getAttribute("aria-describedby")
      ).children[1].textContent = "";
      const pre = a.parentElement.parentElement;
      let code = pre.querySelector("code");
      let text = code.innerText;
      await navigator.clipboard.writeText(text);
      await delay(1000);
      a.classList.remove("switch");
      document.getElementById(
        a.getAttribute("aria-describedby")
      ).children[1].textContent = "copy";
    },
  },
};
</script>

<template>
  <div class="line-numbers pb-4">
    <pre class="rounded-2 position-relative">
      <code class="language-python">
        {{ this.code }}
        </code>
        <a href="#" onclick="copyToClipboard()" class="copy bg-transparent text-wrap text-black d-inline-block position-absolute end-0 top-0 pe-3 py-3" data-bs-placement="left" data-bs-toggle="tooltip" data-bs-title="copy" data-bs-trigger="hover">
        <CopyIcon />
        <CheckIcon />
        </a>
    </pre>
  </div>
</template>