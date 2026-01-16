import { reactive } from 'vue'

export const citationsState = reactive({
    entries: {} as Record<string, string[]>, // slideId -> citationKeys
    add(slideId: string, key: string) {
        if (!this.entries[slideId]) {
            this.entries[slideId] = []
        }
        if (!this.entries[slideId].includes(key)) {
            this.entries[slideId].push(key)
        }
    }
})
