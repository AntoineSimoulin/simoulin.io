import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const slidesDir = path.resolve(__dirname, '../slides')
const outputDir = path.resolve(__dirname, '../public/slides')

if (!fs.existsSync(slidesDir)) {
    console.error(`Slides directory not found at ${slidesDir}`)
    process.exit(1)
}

const deckFiles = fs.readdirSync(slidesDir).filter(file => file.endsWith('.md'))

if (deckFiles.length === 0) {
    console.log('No slide decks found.')
    process.exit(0)
}

console.log(`Building ${deckFiles.length} slide decks for development...`)

// Clean output directory
if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true })
}

for (const file of deckFiles) {
    const deckName = path.basename(file, '.md')
    const inputPath = path.join(slidesDir, file)
    const deckOutputPath = path.join(outputDir, deckName)
    const base = `/slides/${deckName}/`

    console.log(`Building ${deckName}...`)
    try {
        const command = `npx slidev build "${inputPath}" --base "${base}" --out "${deckOutputPath}"`
        console.log(`Running: ${command}`)
        execSync(command, { stdio: 'inherit' })
        console.log(`✓ Successfully built ${deckName}`)
    } catch (error) {
        console.error(`✗ Failed to build ${deckName}:`, error)
        process.exit(1)
    }
}

console.log('\n✓ All slide decks built successfully to public/slides/')
console.log('Slides are now available at http://localhost:3000/slides/[deckName]/')
