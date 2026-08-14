<script setup lang="ts">
import { ref, watch, unref, onMounted, onBeforeUnmount } from 'vue'
import { marked } from 'marked'
import { useSlideContext, useNav } from '@slidev/client'

const props = defineProps({
  speed: {
    type: Number,
    default: 85 // ms per letter
  },
  delay: {
    type: Number,
    default: 850 // ms delay after slide transition settles before typing starts
  },
  chunk: {
    type: Number,
    default: 1 // letter per step
  },
  cursor: {
    type: Boolean,
    default: true
  },
  as: {
    type: String,
    default: 'span'
  }
})

let slidePage: any = null
let navCurrentPage: any = null

try {
  const slideCtx = useSlideContext()
  slidePage = slideCtx?.$page
  const nav = useNav()
  navCurrentPage = nav?.currentPage
} catch {
  // outside Slidev context fallback
}

const isSlideActive = () => {
  if (!slidePage || !navCurrentPage) return true
  const thisPage = unref(slidePage)
  const curr = unref(navCurrentPage)
  if (thisPage === undefined || curr === undefined) return true
  return curr === thisPage
}

const isHiddenElement = (el: HTMLElement | null) => {
  if (!el) return false
  return el.classList.contains('slidev-vclick-hidden') ||
         el.classList.contains('v-click-hidden') ||
         el.closest('.slidev-vclick-hidden') !== null ||
         el.closest('.v-click-hidden') !== null
}

const rootRef = ref<HTMLElement | null>(null)
let charSpans: HTMLElement[] = []
let currentCharIndex = 0
let timer: ReturnType<typeof setInterval> | null = null
let delayTimeout: ReturnType<typeof setTimeout> | null = null
let observer: MutationObserver | null = null
let cursorEl: HTMLElement | null = null

function prepareCharacters(element: Node) {
  const children = Array.from(element.childNodes)
  children.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || ''
      if (!text.trim() && text.includes('\n')) return
      
      const fragment = document.createDocumentFragment()
      const chars = Array.from(text)
      
      chars.forEach(char => {
        const span = document.createElement('span')
        span.className = 'tw-char'
        span.style.display = 'none'
        span.style.opacity = '0'
        span.style.transition = 'opacity 0.04s ease-out'
        span.textContent = char
        fragment.appendChild(span)
        charSpans.push(span)
      })
      
      element.replaceChild(fragment, node)
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      prepareCharacters(node)
    }
  })
}

function startTyping() {
  if (timer) clearInterval(timer)
  currentCharIndex = 0
  
  if (charSpans.length === 0) return

  charSpans.forEach(span => {
    span.style.display = 'none'
    span.style.opacity = '0'
  })

  if (props.cursor && rootRef.value && !cursorEl) {
    cursorEl = document.createElement('span')
    cursorEl.className = 'typewriter-caret'
    cursorEl.textContent = '_'
    if (rootRef.value.firstChild) {
      rootRef.value.insertBefore(cursorEl, rootRef.value.firstChild)
    } else {
      rootRef.value.appendChild(cursorEl)
    }
  }

  timer = setInterval(() => {
    if (currentCharIndex < charSpans.length) {
      const nextIndex = Math.min(currentCharIndex + props.chunk, charSpans.length)
      
      for (let i = currentCharIndex; i < nextIndex; i++) {
        const span = charSpans[i]
        span.style.display = 'inline'
        span.style.opacity = '1'

        if (cursorEl && span.parentNode) {
          span.parentNode.insertBefore(cursorEl, span.nextSibling)
        }
      }

      currentCharIndex = nextIndex
    } else {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
      if (cursorEl) {
        setTimeout(() => {
          if (cursorEl && cursorEl.parentNode) {
            cursorEl.parentNode.removeChild(cursorEl)
            cursorEl = null
          }
        }, 500)
      }
    }
  }, props.speed)
}

function resetTyping() {
  if (delayTimeout) {
    clearTimeout(delayTimeout)
    delayTimeout = null
  }
  if (timer) {
    clearInterval(timer)
    timer = null
  }
  currentCharIndex = 0
  charSpans.forEach(span => {
    span.style.display = 'none'
    span.style.opacity = '0'
  })
  if (cursorEl && cursorEl.parentNode) {
    cursorEl.parentNode.removeChild(cursorEl)
    cursorEl = null
  }
}

function checkVisibility() {
  if (!rootRef.value) return
  const visible = isSlideActive() && !isHiddenElement(rootRef.value)
  if (visible) {
    if (currentCharIndex === 0 && !timer && !delayTimeout) {
      if (props.cursor && rootRef.value && !cursorEl) {
        cursorEl = document.createElement('span')
        cursorEl.className = 'typewriter-caret'
        cursorEl.textContent = '_'
        if (rootRef.value.firstChild) {
          rootRef.value.insertBefore(cursorEl, rootRef.value.firstChild)
        } else {
          rootRef.value.appendChild(cursorEl)
        }
      }
      delayTimeout = setTimeout(() => {
        delayTimeout = null
        startTyping()
      }, props.delay)
    }
  } else {
    resetTyping()
  }
}

if (navCurrentPage) {
  watch(navCurrentPage, (newPage) => {
    const thisPage = unref(slidePage)
    if (thisPage && newPage === thisPage) {
      setTimeout(() => {
        checkVisibility()
      }, 50)
    } else {
      resetTyping()
    }
  })
}

onMounted(() => {
  if (!rootRef.value) return
  
  const rawText = rootRef.value.innerHTML || ''
  if (rawText.includes('**') || rawText.includes('*') || rawText.includes('`')) {
    try {
      const html = marked.parseInline(rootRef.value.textContent || '') as string
      rootRef.value.innerHTML = html
    } catch {
      // Fallback
    }
  }

  charSpans = []
  prepareCharacters(rootRef.value)

  setTimeout(() => {
    checkVisibility()
  }, 100)

  observer = new MutationObserver(() => {
    checkVisibility()
  })

  let target: HTMLElement | null = rootRef.value
  while (target && target !== document.body) {
    observer.observe(target, { attributes: true, attributeFilter: ['class'] })
    target = target.parentElement
  }
})

onBeforeUnmount(() => {
  if (delayTimeout) clearTimeout(delayTimeout)
  if (timer) clearInterval(timer)
  if (observer) observer.disconnect()
  if (cursorEl && cursorEl.parentNode) {
    cursorEl.parentNode.removeChild(cursorEl)
  }
})
</script>

<template>
  <component :is="as" ref="rootRef" class="typewriter-block inline-block">
    <slot />
  </component>
</template>

<style>
.typewriter-caret {
  display: inline-block;
  font-weight: 900;
  font-size: 1em;
  color: currentColor;
  margin-left: 1px;
  animation: typewriter-caret-blink 0.5s infinite alternate;
}

@keyframes typewriter-caret-blink {
  from { opacity: 1; }
  to { opacity: 0; }
}
</style>
