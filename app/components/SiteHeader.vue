<script setup lang="ts">
import logoUrl from '~/assets/logo.svg'

const { t, locale } = useI18n()
const switchPath = useSwitchLocalePath()
const otherLocale = computed(() => (locale.value === 'ar' ? 'en' : 'ar'))
</script>

<template>
  <header class="site-header">
    <NuxtLinkLocale to="/" class="site-logo">
      <img :src="logoUrl" alt="ScanAxe" >
    </NuxtLinkLocale>
    <NuxtLink :to="switchPath(otherLocale)" class="locale-switch" :hreflang="otherLocale">
      {{ t('nav.switch') }}
    </NuxtLink>
  </header>
</template>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: var(--sx-space-4);
  padding-inline: var(--sx-space-6);
}

.site-logo img {
  block-size: 36px;
}

.locale-switch {
  padding-block: var(--sx-space-2);
  padding-inline: var(--sx-space-4);
  border: 1px solid var(--sx-color-surface-border);
  border-radius: var(--sx-radius-full);
  text-decoration: none;
  color: var(--sx-color-text-primary);
}
</style>
