import { computed } from 'vue'
import { useNav } from '@slidev/client'

// Map to store calculated numbering: slideIndex -> { chapter, relativeSlide }
// We use a computed property global state pattern if possible, or just a function that re-computes.
// Since useNav provides reactive 'slides', we can compute the map.

export function useSlideNumbering() {
    const { slides } = useNav()

    const numberingMap = computed(() => {
        const map = new Map<number, { chapter: number, relativeSlide: number }>()
        let chapter = 0
        let relativeSlide = 0

        slides.value.forEach((route, index) => {
            // Check if this slide starts a new section.
            // A new section starts if the slide has a 'title' or is a 'cover' layout?
            // User said "based on the number of titles".
            // Slidev extracts title to route.meta.slide.title

            const title = (route.meta?.slide as any)?.title
            const isSectionStart = !!title

            // Special case: First slide (index 0) usually starts chapter 1 regardless?
            // Or if it has a title. 
            // If the first slide has no title, maybe it's chapter 0? 
            // Let's assume the first title encountered is Chapter 1.

            if (isSectionStart) {
                chapter++
                relativeSlide = 1
            } else {
                // If we are before any chapter, maybe keep chapter 0? 
                // Or if we just maintain current chapter.
                if (chapter === 0) chapter = 1 // Fallback if first slide has no title?
                relativeSlide++
            }

            map.set(index + 1, { chapter, relativeSlide }) // useNav indexes usually 1-based for UI
        })
        return map
    })

    function getSlideInfo(page: number) {
        if (!numberingMap.value.size) return { chapter: 1, relativeSlide: 1 } // Fallback if map not ready
        return numberingMap.value.get(page) || { chapter: 1, relativeSlide: 1 }
    }

    return { getSlideInfo }
}
