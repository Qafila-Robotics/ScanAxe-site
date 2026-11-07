// Fails when styles use physical directions instead of logical ones (Batta constitution §09):
// CSS properties in .vue/.css files and Tailwind utility classes in templates.
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const CSS_PHYSICAL = [
  /\b(margin|padding|border)-(left|right)\b/,
  /(^|[\s;{])(left|right)\s*:/,
  /\btext-align\s*:\s*(left|right)\b/,
  /\bfloat\s*:\s*(left|right)\b/,
  /\bborder-(top|bottom)-(left|right)-radius\b/,
]
// Tailwind: ml-/mr-/pl-/pr-, left-/right-, text-left/right, float-, rounded-l/r/tl/tr/bl/br, border-l/r, space-x without rtl
const CLASS_PHYSICAL = /(?:^|[\s"'`:])-?(?:m[lr]|p[lr]|left|right|rounded-(?:[lr]|[tb][lr])|border-[lr]|scroll-m[lr]|scroll-p[lr])(?:-[\w./[\]]+)?(?=[\s"'`]|$)|(?:^|[\s"'`:])(?:text-(?:left|right)|float-(?:left|right))(?=[\s"'`]|$)/

const files = []
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) walk(path)
    else if (/\.(vue|css)$/.test(name) && !name.endsWith('tokens.css') && name !== 'tailwind.css') files.push(path)
  }
}
walk(new URL('../app', import.meta.url).pathname)

const hits = []
for (const file of files) {
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    const classHit = /class=|:class=/.test(line) && CLASS_PHYSICAL.test(line.replace(/class=/g, ' '))
    if (CSS_PHYSICAL.some((re) => re.test(line)) || classHit) hits.push(`${file}:${i + 1}: ${line.trim()}`)
  })
}
if (hits.length) {
  console.error('Use logical CSS (ms-/me-/ps-/pe-/start-/end-/text-start; inline-start/end):')
  console.error(hits.join('\n'))
  process.exit(1)
}
console.log(`logical CSS OK (${files.length} files)`)
