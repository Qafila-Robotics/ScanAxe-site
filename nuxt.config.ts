// Static marketing site (DEC-P004): `nuxt generate` → GitHub Pages.
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxtjs/i18n', '@nuxt/eslint', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tokens.css', '~/assets/css/base.css'],
  tailwindcss: { cssPath: '~/assets/css/tailwind.css' },
  runtimeConfig: {
    // Waitlist endpoint (F-011) and contact email (after OPS-01). Empty until set: the form then says the
    // waitlist opens soon, and the contact link is hidden.
    public: { waitlistUrl: process.env.NUXT_PUBLIC_WAITLIST_URL || '', contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL || '' },
  },
  app: {
    // GitHub Pages serves a project site under /<repo>/ until a custom domain is set (OPS-01).
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: `${process.env.NUXT_APP_BASE_URL || '/'}favicon.svg` }],
    },
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
    locales: [
      { code: 'en', language: 'en', dir: 'ltr', name: 'English', file: 'en.json' },
      { code: 'ar', language: 'ar', dir: 'rtl', name: 'العربية', file: 'ar.json' },
    ],
    detectBrowserLanguage: false,
  },
  nitro: {
    prerender: { crawlLinks: true, routes: ['/', '/ar'] },
  },
})
