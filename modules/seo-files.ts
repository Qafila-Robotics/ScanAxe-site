// F-012: writes sitemap.xml (with hreflang alternates) and robots.txt into the static output after
// prerendering. Build-time only, so the site stays static (DEC-P004). The site URL comes from
// NUXT_PUBLIC_SITE_URL, the same value the i18n hreflang links use.
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { defineNuxtModule } from '@nuxt/kit'

interface SeoFilesOptions {
  siteUrl: string
  pages: string[]
  locales: string[]
  defaultLocale: string
}

// Same URL shape as the i18n canonical and hreflang links: no trailing slash, the home page is the base.
function localePath(page: string, locale: string, defaultLocale: string): string {
  const path = page === '/' ? '' : page
  return locale === defaultLocale ? path : `/${locale}${path}`
}

export function buildSitemap(options: SeoFilesOptions): string {
  const base = options.siteUrl.replace(/\/+$/, '')
  const url = (page: string, locale: string) => `${base}${localePath(page, locale, options.defaultLocale)}`
  const entries = options.pages.flatMap(page => options.locales.map((locale) => {
    const alternates = options.locales.map(alt => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${url(page, alt)}"/>`)
    alternates.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${url(page, options.defaultLocale)}"/>`)
    return `  <url>\n    <loc>${url(page, locale)}</loc>\n${alternates.join('\n')}\n  </url>`
  }))
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n')
}

export function buildRobots(siteUrl: string): string {
  const lines = ['User-agent: *', 'Allow: /']
  if (siteUrl) lines.push(`Sitemap: ${siteUrl.replace(/\/+$/, '')}/sitemap.xml`)
  return `${lines.join('\n')}\n`
}

export default defineNuxtModule<SeoFilesOptions>({
  meta: { name: 'seo-files', configKey: 'seoFiles' },
  defaults: { siteUrl: '', pages: [], locales: [], defaultLocale: 'en' },
  setup(options, nuxt) {
    // Only `nuxt generate` produces the static output; skip dev, prepare and typecheck.
    if (!(nuxt.options as { _generate?: boolean })._generate) return
    nuxt.hook('nitro:init', (nitro) => {
      nitro.hooks.hook('close', async () => {
        const dir = nitro.options.output.publicDir
        await writeFile(join(dir, 'robots.txt'), buildRobots(options.siteUrl))
        if (!options.siteUrl) {
          console.warn('[seo-files] NUXT_PUBLIC_SITE_URL is not set: sitemap.xml skipped.')
          return
        }
        await writeFile(join(dir, 'sitemap.xml'), buildSitemap(options))
      })
    })
  },
})
