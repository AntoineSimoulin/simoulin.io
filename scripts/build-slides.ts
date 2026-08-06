import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const slidesDir = path.resolve(__dirname, '../slides')
const outputDir = path.resolve(__dirname, '../.output/public/slides')

// Ensure output directory exists (parent)
if (!fs.existsSync(path.dirname(outputDir))) {
    // .output/public might be created by nuxt generate, but let's assume it might not exist yet
    // However, usually we run this after or during generate.
    // Actually, slidev build might create directories.
}

if (!fs.existsSync(slidesDir)) {
    console.error(`Slides directory not found at ${slidesDir}`)
    process.exit(1)
}

const deckFiles = fs.readdirSync(slidesDir).filter(file => file.endsWith('.md'))

if (deckFiles.length === 0) {
    console.log('No slide decks found.')
    process.exit(0)
}

console.log(`Found ${deckFiles.length} slide decks to build.`)

for (const file of deckFiles) {
    const deckName = path.basename(file, '.md')
    const inputPath = path.join(slidesDir, file)
    const deckOutputPath = path.join(outputDir, deckName)
    const base = `/slides/${deckName}/`

    console.log(`Building ${deckName}...`)
    try {
        if (fs.existsSync(deckOutputPath)) {
            fs.rmSync(deckOutputPath, { recursive: true, force: true })
        }
        // --base must end with /
        const command = `npx slidev build "${inputPath}" --base "${base}" --out "${deckOutputPath}"`
        console.log(`Running: ${command}`)
        execSync(command, { stdio: 'inherit' })
        console.log(`Successfully built ${deckName}`)
    } catch (error) {
        console.error(`Failed to build ${deckName}:`, error)
        process.exit(1)
    }
}

console.log('All slide decks built successfully.')
