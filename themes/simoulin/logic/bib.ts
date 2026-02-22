import { parse } from '@retorquere/bibtex-parser'
import bibString from '../../../assets/references.bib?raw'

let parsedData: any = null

export function getBibData() {
    if (!parsedData) {
        parsedData = parse(bibString)
    }
    return parsedData
}

export function resolveCitationParts(id: string) {
    const data = getBibData()
    const entry = data.entries.find((e: any) => e.key === id)
    if (!entry) return null

    const f = entry.fields

    // Handle author list
    let authors = 'Unknown'
    if (f.author) {
        if (Array.isArray(f.author)) {
            authors = f.author.map((a: any) => a.lastName).join(', ')
        } else {
            authors = f.author
        }
    }

    const year = f.year || 'n.d.'
    const title = f.title ? f.title.replace(/{|}/g, '') : 'Untitled' // Clean LaTeX braces
    const url = f.url || ''

    return { authors, year, title, url }
}

export function getCitationText(id: string) {
    const parts = resolveCitationParts(id)
    if (!parts) return id
    return `${parts.authors} (${parts.year}). ${parts.title}.`
}
