<script setup lang="ts">
import logoUrl from '~/assets/logo-dark.svg'

const { t } = useI18n()
const config = useRuntimeConfig()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-navy-dark py-12 text-sm text-white/70">
    <div class="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between md:px-8">
      <div>
        <img :src="logoUrl" alt="ScanAxe" class="h-8 w-auto">
        <p class="mt-3 max-w-sm">{{ t('footer.tagline') }}</p>
      </div>
      <nav v-if="config.public.contactEmail" class="flex flex-wrap gap-6">
        <a :href="`mailto:${config.public.contactEmail}`" class="hover:text-white">{{ t('footer.contact') }}</a>
      </nav>
    </div>
    <p class="mx-auto mt-8 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs md:px-8">{{ t('footer.rights', { year }) }}</p>
  </footer>
</template>
