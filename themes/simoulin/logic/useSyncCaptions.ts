import { onMounted, onUnmounted, watch, nextTick, unref } from 'vue'
import { useSlideContext, useNav } from '@slidev/client'

export function useSyncCaptions(rootRef: { value: HTMLElement | null }) {
  let resizeObserver: ResizeObserver | null = null
  let mutationObserver: MutationObserver | null = null
  let isSyncing = false
  let rafId: number | null = null

  function getNaturalHeight(el: HTMLElement): number {
    if (el.offsetHeight > 0) return el.offsetHeight
    try {
      const clone = el.cloneNode(true) as HTMLElement
      clone.style.position = 'absolute'
      clone.style.visibility = 'hidden'
      clone.style.display = 'flex'
      clone.style.minHeight = ''
      const parentWidth = el.parentElement?.offsetWidth || el.offsetWidth
      if (parentWidth > 0) {
        clone.style.width = `${parentWidth}px`
      }
      document.body.appendChild(clone)
      const h = clone.offsetHeight
      document.body.removeChild(clone)
      return h
    } catch {
      return el.scrollHeight || 0
    }
  }

  function sync() {
    if (!rootRef.value || isSyncing) return
    isSyncing = true

    try {
      const captions = rootRef.value.querySelectorAll<HTMLElement>('figcaption')
      if (captions.length <= 1) {
        isSyncing = false
        return
      }

      // 1. Temporarily clear minHeight to get natural unconstrained heights
      captions.forEach(c => {
        c.style.minHeight = ''
      })

      // 2. Measure max height across all captions (including unrevealed v-click ones)
      let maxH = 0
      captions.forEach(c => {
        const h = Math.max(c.offsetHeight, getNaturalHeight(c))
        if (h > maxH) {
          maxH = h
        }
      })

      // 3. Apply the max height to all captions in this slide container
      if (maxH > 0) {
        captions.forEach(c => {
          c.style.minHeight = `${maxH}px`
        })
      }
    } finally {
      isSyncing = false
    }
  }

  function scheduleSync() {
    if (rafId !== null) cancelAnimationFrame(rafId)
    rafId = requestAnimationFrame(() => {
      rafId = null
      sync()
    })
  }

  let slidePage: any = null
  let navCurrentPage: any = null

  try {
    const slideCtx = useSlideContext()
    slidePage = slideCtx?.$page
    const nav = useNav()
    navCurrentPage = nav?.currentPage
  } catch {}

  onMounted(() => {
    nextTick(() => {
      scheduleSync()
      setTimeout(scheduleSync, 100)

      if (rootRef.value) {
        if (typeof ResizeObserver !== 'undefined') {
          resizeObserver = new ResizeObserver(() => {
            scheduleSync()
          })
          resizeObserver.observe(rootRef.value)
        }

        if (typeof MutationObserver !== 'undefined') {
          mutationObserver = new MutationObserver(() => {
            scheduleSync()
          })
          mutationObserver.observe(rootRef.value, {
            attributes: true,
            subtree: true,
            attributeFilter: ['class']
          })
        }
      }
    })

    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(() => {
        scheduleSync()
      })
    }
  })

  if (navCurrentPage) {
    watch(navCurrentPage, (newPage) => {
      const thisPage = unref(slidePage)
      if (thisPage && newPage === thisPage) {
        nextTick(() => {
          scheduleSync()
        })
      }
    })
  }

  onUnmounted(() => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
    }
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
    if (mutationObserver) {
      mutationObserver.disconnect()
    }
  })
}
