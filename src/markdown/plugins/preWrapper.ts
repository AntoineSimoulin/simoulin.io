import type MarkdownIt from 'markdown-it'
import { h } from 'vue'
import Code from "../../components/Code.vue";


export function preWrapperPlugin(md: MarkdownIt) {
  const fence = md.renderer.rules.fence!
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    // console.log(tokens, idx)
    const token = tokens[idx]

    // remove title from info
    token.info = token.info.replace(/\[.*\]/, '')

    token.info = token.info.replace(/ active$/, '').replace(/ active /, ' ')

    const rawCode = fence(...args)
    // console.log(tokens[idx].content);
    return `<div class="line-numbers pb-4">
    <pre class="rounded-2 position-relative">
    <code class="language-python">
      ${ rawCode }
      </code>
      <a href="#" onclick="copyToClipboard()" class="copy bg-transparent text-wrap text-black d-inline-block position-absolute end-0 top-0 pe-3 py-3" data-bs-placement="left" data-bs-toggle="tooltip" data-bs-title="copy" data-bs-trigger="hover">
      <CopyIcon />
      <CheckIcon />
      </a>
  </pre></div>`
    // console.log(h('div', 'hello'))
    // return h('div', 'hello')

    // return h(Code, { code: "def test" })
  }
}