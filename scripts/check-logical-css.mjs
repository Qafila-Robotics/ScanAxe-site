// Fails when styles use physical directions instead of logical ones (Batta constitution §09).
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const PHYSICAL = [
  /\b(margin|padding|border)-(left|right)\b/,
  /(^|[\s;{])(left|right)\s*:/,
  /\btext-align\s*:\s*(left|right)\b/,
  /\bfloat\s*:\s*(left|right)\b/,
  /\bborder-(top|bottom)-(left|right)-radius\b/,
]
const files = []
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) walk(path)
    else if (/\.(vue|css)$/.test(name) && !name.endsWith('tokens.css')) files.push(path)
  }
}
walk(new URL('../app', import.meta.url).pathname)

const hits = []
for (const file of files) {
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    if (PHYSICAL.some((re) => re.test(line))) hits.push(`${file}:${i + 1}: ${line.trim()}`)
  })
}
if (hits.length) {
  console.error('Use logical CSS (inline-start/end, inset-inline-start, text-align: start):')
  console.error(hits.join('\n'))
  process.exit(1)
}
console.log(`logical CSS OK (${files.length} files)`)
