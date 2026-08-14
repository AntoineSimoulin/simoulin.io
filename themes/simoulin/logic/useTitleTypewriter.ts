import { ref, watch, unref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useSlideContext, useNav } from '@slidev/client'

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
  } catch {}
}

function splitTitle(fullText: string): { staticText: string, typedText: string } | null {
  const trimmed = fullText.trim()
  if (!trimmed) return null

  const words = trimmed.split(/\s+/)
  // Short titles (<= 5 words): Keep completely static, no typewriter effect
  if (words.length <= 5) {
    return null
  }

  // Longer titles (> 5 words): type the last 3-4 words
  const numTypedWords = words.length >= 7 ? 4 : 3
  const splitIndex = words.length - numTypedWords
  const staticText = words.slice(0, splitIndex).join(' ') + ' '
  const typedText = words.slice(splitIndex).join(' ')

  return { staticText, typedText }
}

export function useTitleTypewriter(rootRef: { value: HTMLElement | null }, options?: { speed?: number, delay?: number }) {
  const speed = options?.speed ?? 85
  const delay = options?.delay ?? 450

  let slidePage: any = null
  let navCurrentPage: any = null

  try {
    const slideCtx = useSlideContext()
    slidePage = slideCtx?.$page
    const nav = useNav()
    navCurrentPage = nav?.currentPage
  } catch {}

  const isSlideActive = () => {
    if (!slidePage || !navCurrentPage) return true
    const thisPage = unref(slidePage)
    const curr = unref(navCurrentPage)
    if (thisPage === undefined || curr === undefined) return true
    return curr === thisPage
  }

  let charSpans: HTMLElement[] = []
  let currentCharIndex = 0
  let timer: ReturnType<typeof setInterval> | null = null
  let delayTimeout: ReturnType<typeof setTimeout> | null = null
  let cursorEl: HTMLElement | null = null
  let typedContainer: HTMLElement | null = null

  function setupHeading() {
    if (!rootRef.value) return
    const h1 = rootRef.value.querySelector('h1')
    if (!h1 || h1.getAttribute('data-tw-initialized')) return
    h1.setAttribute('data-tw-initialized', 'true')

    const rawText = h1.textContent || ''
    const split = splitTitle(rawText)
    if (!split) return // Short title: keep completely static!

    const { staticText, typedText } = split
    if (!typedText) return

    h1.innerHTML = ''

    if (staticText) {
      const staticSpan = document.createElement('span')
      staticSpan.className = 'typewriter-title-static'
      staticSpan.textContent = staticText
      h1.appendChild(staticSpan)
    }

    typedContainer = document.createElement('span')
    typedContainer.className = 'typewriter-title-typed'

    charSpans = []
    const chars = Array.from(typedText)
    chars.forEach(char => {
      const span = document.createElement('span')
      span.className = 'tw-char'
      span.style.display = 'none'
      span.style.opacity = '0'
      span.style.transition = 'opacity 0.04s ease-out'
      span.textContent = char
      typedContainer!.appendChild(span)
      charSpans.push(span)
    })

    cursorEl = document.createElement('span')
    cursorEl.className = 'typewriter-caret'
    cursorEl.textContent = '_'
    if (typedContainer.firstChild) {
      typedContainer.insertBefore(cursorEl, typedContainer.firstChild)
    } else {
      typedContainer.appendChild(cursorEl)
    }

    h1.appendChild(typedContainer)
  }

  function startTyping() {
    if (timer) clearInterval(timer)
    currentCharIndex = 0

    if (charSpans.length === 0) return

    charSpans.forEach(span => {
      span.style.display = 'none'
      span.style.opacity = '0'
    })

    if (cursorEl && typedContainer) {
      if (typedContainer.firstChild) {
        typedContainer.insertBefore(cursorEl, typedContainer.firstChild)
      } else {
        typedContainer.appendChild(cursorEl)
      }
    }

    timer = setInterval(() => {
      if (currentCharIndex < charSpans.length) {
        const span = charSpans[currentCharIndex]
        span.style.display = 'inline'
        span.style.opacity = '1'

        if (cursorEl && span.parentNode) {
          span.parentNode.insertBefore(cursorEl, span.nextSibling)
        }

        const char = span.textContent || ''
        playTypewriterClick(char === ' ')

        currentCharIndex++
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
    }, speed)
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
    const visible = isSlideActive()
    if (visible) {
      if (currentCharIndex === 0 && !timer && !delayTimeout) {
        if (typedContainer && !cursorEl) {
          cursorEl = document.createElement('span')
          cursorEl.className = 'typewriter-caret'
          cursorEl.textContent = '_'
          if (typedContainer.firstChild) {
            typedContainer.insertBefore(cursorEl, typedContainer.firstChild)
          } else {
            typedContainer.appendChild(cursorEl)
          }
        }
        delayTimeout = setTimeout(() => {
          delayTimeout = null
          startTyping()
        }, delay)
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
    nextTick(() => {
      setupHeading()
      setTimeout(() => {
        checkVisibility()
      }, 100)
    })
  })

  onBeforeUnmount(() => {
    if (delayTimeout) clearTimeout(delayTimeout)
    if (timer) clearInterval(timer)
    if (cursorEl && cursorEl.parentNode) {
      cursorEl.parentNode.removeChild(cursorEl)
    }
  })
}
