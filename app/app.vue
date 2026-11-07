<script setup lang="ts">
import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/600.css'
import '@fontsource/ibm-plex-sans-arabic/400.css'
import '@fontsource/ibm-plex-sans-arabic/600.css'

const head = useLocaleHead()
const { t } = useI18n()

useHead({
  htmlAttrs: { lang: () => head.value.htmlAttrs?.lang, dir: () => head.value.htmlAttrs?.dir },
  link: () => head.value.link ?? [],
  meta: () => head.value.meta ?? [],
})
useSeoMeta({ title: () => t('meta.title'), description: () => t('meta.description') })
</script>

<template>
  <NuxtPage />
</template>
