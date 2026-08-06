import { computed } from 'vue'
import { useNav } from '@slidev/client'

export function useSlideNumbering() {
    const { slides } = useNav()

    const numberingMap = computed(() => {
        const map = new Map<number, { chapter: number, relativeSlide: number }>()
        let chapter = 0
        let relativeSlide = 0

        slides.value.forEach((route, index) => {
            const layout = route.meta?.layout
            const slideMeta = route.meta?.slide as any
            const title = (slideMeta?.title || '').trim().toLowerCase()

            const isCover = layout === 'cover' || index === 0
            const isCenterLayout = layout === 'center' || layout === 'section'
            const isAboutMe = title.includes('about me')

            if (isCover || isAboutMe) {
                if (chapter === 0) chapter = 1
                relativeSlide = 0
            } else if (isCenterLayout) {
                chapter++
                relativeSlide = 0
            } else {
                if (chapter === 0) chapter = 1
                relativeSlide++
            }

            map.set(index + 1, { chapter, relativeSlide })
        })
        return map
    })

    function getSlideInfo(page: number) {
        if (!numberingMap.value.size) return { chapter: 1, relativeSlide: 1 }
        return numberingMap.value.get(page) || { chapter: 1, relativeSlide: 1 }
    }

    return { getSlideInfo }
}
