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
  sound: {
    type: Boolean,
    default: true
  },
  as: {
    type: String,
    default: 'span'
  }
})

// Web Audio API Typewriter Sound Synthesizer
let audioCtx: AudioContext | null = null

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {})
  }
  return audioCtx
}

function playTypewriterClick(isSpace = false) {
  try {
    const ctx = getAudioContext()
    if (!ctx) return

    const now = ctx.currentTime

    // 1. High-frequency mechanical snap transient (6-8ms)
    const snapLen = Math.floor(ctx.sampleRate * 0.008)
    const snapBuffer = ctx.createBuffer(1, snapLen, ctx.sampleRate)
    const snapData = snapBuffer.getChannelData(0)
    for (let i = 0; i < snapLen; i++) {
      snapData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (snapLen * 0.25))
    }
    const snapSource = ctx.createBufferSource()
    snapSource.buffer = snapBuffer

    const snapFilter = ctx.createBiquadFilter()
    snapFilter.type = 'highpass'
    snapFilter.frequency.setValueAtTime(isSpace ? 1800 : 2600 + (Math.random() * 600 - 300), now)

    const snapGain = ctx.createGain()
    snapGain.gain.setValueAtTime(isSpace ? 0.07 : 0.14 + Math.random() * 0.04, now)
    snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.008)

    snapSource.connect(snapFilter)
    snapFilter.connect(snapGain)
    snapGain.connect(ctx.destination)
    snapSource.start(now)

    // 2. Resonant mechanical body thud (30-40ms)
    const thudLen = Math.floor(ctx.sampleRate * 0.035)
    const thudBuffer = ctx.createBuffer(1, thudLen, ctx.sampleRate)
    const thudData = thudBuffer.getChannelData(0)
    for (let i = 0; i < thudLen; i++) {
      thudData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (thudLen * 0.3))
    }
    const thudSource = ctx.createBufferSource()
    thudSource.buffer = thudBuffer

    const thudFilter = ctx.createBiquadFilter()
    thudFilter.type = 'bandpass'
    const baseFreq = isSpace ? 340 : 540 + (Math.random() * 120 - 60)
    thudFilter.frequency.setValueAtTime(baseFreq, now)
    thudFilter.Q.setValueAtTime(4.0, now)

    const thudGain = ctx.createGain()
    thudGain.gain.setValueAtTime(isSpace ? 0.10 : 0.16, now)
    thudGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035)

    thudSource.connect(thudFilter)
    thudFilter.connect(thudGain)
    thudGain.connect(ctx.destination)
    thudSource.start(now)

    // 3. Subtle metallic ping
    const osc = ctx.createOscillator()
    const oscGain = ctx.createGain()
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(isSpace ? 650 : 1250 + (Math.random() * 200 - 100), now)
    oscGain.gain.setValueAtTime(0.015, now)
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025)

    osc.connect(oscGain)
    oscGain.connect(ctx.destination)
    osc.start(now)
    osc.stop(now + 0.025)
  } catch {
    // Graceful fallback if Web Audio is blocked
  }
}

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

        if (props.sound) {
          const char = span.textContent || ''
          playTypewriterClick(char === ' ')
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
