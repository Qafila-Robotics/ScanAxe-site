<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="bg-navy py-20 text-white lg:py-24">
    <div class="mx-auto max-w-3xl px-4 text-center md:px-8">
      <p class="inline-flex rounded-full border border-white/20 px-4 py-1 font-mono text-xs uppercase tracking-wider text-white/80">{{ t('cta.badge') }}</p>
      <h2 class="mt-5 text-3xl font-bold leading-tight md:text-5xl">{{ t('cta.title') }}</h2>
      <p class="mt-5 text-lg text-white/80">{{ t('cta.lead') }}</p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <a href="#waitlist" class="inline-flex items-center gap-2 rounded-md bg-action px-6 py-3 font-semibold hover:bg-action-hover">{{ t('nav.cta') }} <UiIcon name="arrow" flip /></a>
        <a href="#review" class="rounded-md border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">{{ t('cta.secondary') }}</a>
      </div>
    </div>
  </section>
</template>
