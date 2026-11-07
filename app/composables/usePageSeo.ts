// F-012: title, description, Open Graph and Twitter tags for one page in the current locale.
// og:url, og:locale, canonical and hreflang come from useLocaleHead in app.vue.
export function usePageSeo(key: string) {
  const { t } = useI18n()
  const { siteUrl } = useRuntimeConfig().public
  const image = `${siteUrl}/og-image.png`
  const title = () => t(`${key}.title`)
  const description = () => t(`${key}.description`)

  useSeoMeta({
    title,
    description,
    ogType: 'website',
    ogSiteName: 'ScanAxe',
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: () => t('meta.imageAlt'),
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    twitterImageAlt: () => t('meta.imageAlt'),
  })
}
