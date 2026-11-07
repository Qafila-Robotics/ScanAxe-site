<script setup lang="ts">
import logoUrl from '~/assets/logo.svg'

const { t, locale } = useI18n()
const switchPath = useSwitchLocalePath()
const otherLocale = computed(() => (locale.value === 'ar' ? 'en' : 'ar'))
const open = ref(false)
const links = ['problem', 'how', 'signals', 'review', 'safety', 'faq'] as const
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 md:px-8">
      <NuxtLinkLocale to="/" class="shrink-0"><img :src="logoUrl" alt="ScanAxe" class="h-9 w-auto"></NuxtLinkLocale>
      <nav class="hidden items-center gap-7 text-sm font-medium text-ink-soft lg:flex" :aria-label="t('nav.menu')">
        <a v-for="link in links" :key="link" :href="`#${link}`" class="hover:text-action">{{ t(`nav.${link}`) }}</a>
      </nav>
      <div class="flex items-center gap-3">
        <NuxtLink :to="switchPath(otherLocale)" :hreflang="otherLocale" class="rounded-full border border-line px-4 py-2 text-sm text-navy hover:border-action">
          {{ t('nav.switch') }}
        </NuxtLink>
        <a href="#waitlist" class="hidden items-center gap-2 rounded-full bg-action px-5 py-2 text-sm font-semibold text-white hover:bg-action-hover sm:inline-flex">
          {{ t('nav.cta') }} <UiIcon name="arrow" flip />
        </a>
        <button type="button" class="rounded-md p-2 text-navy lg:hidden" :aria-expanded="open" :aria-label="t('nav.menu')" @click="open = !open">
          <UiIcon name="menu" />
        </button>
      </div>
    </div>
    <nav v-if="open" class="border-t border-line bg-white px-4 py-3 lg:hidden" :aria-label="t('nav.menu')">
      <a v-for="link in links" :key="link" :href="`#${link}`" class="block py-2 text-navy" @click="open = false">{{ t(`nav.${link}`) }}</a>
    </nav>
  </header>
</template>
