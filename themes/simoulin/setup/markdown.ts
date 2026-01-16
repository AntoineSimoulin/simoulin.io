export default (md: any) => {
    md.core.ruler.after('inline', 'cite_latex', (state: any) => {
        state.tokens.forEach((token: any) => {
            if (token.type === 'inline' && token.content.includes('\\cite{')) {
                token.content = token.content.replace(/\\cite\{([^}]+)\}/g, '<Cite id="$1" />')
            }
        })
    })
}
