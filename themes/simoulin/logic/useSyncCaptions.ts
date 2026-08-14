import { onMounted, onUnmounted, watch, nextTick, unref } from 'vue'
import { useSlideContext, useNav } from '@slidev/client'

export function useSyncCaptions(rootRef: { value: HTMLElement | null }) {
  let resizeObserver: ResizeObserver | null = null

  function sync() {
    if (!rootRef.value) return
    const captions = rootRef.value.querySelectorAll<HTMLElement>('figcaption')
    if (captions.length <= 1) return

    // 1. Temporarily clear minHeight to get natural unconstrained heights
    captions.forEach(c => {
      c.style.minHeight = ''
    })

    // 2. Measure max height
    let maxH = 0
    captions.forEach(c => {
      const h = c.offsetHeight
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
      sync()
      if (rootRef.value && typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(() => {
          sync()
        })
        resizeObserver.observe(rootRef.value)
      }
    })
  })

  if (navCurrentPage) {
    watch(navCurrentPage, (newPage) => {
      const thisPage = unref(slidePage)
      if (thisPage && newPage === thisPage) {
        nextTick(() => sync())
      }
    })
  }

  onUnmounted(() => {
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
  })
}
