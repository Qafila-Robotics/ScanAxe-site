<script setup lang="ts">
const { t } = useI18n()
const points = ['approval', 'dedupe', 'rules'] as const
</script>

<template>
  <section id="waitlist" class="radar-bg relative overflow-hidden border-b border-line">
    <div class="mx-auto max-w-5xl px-4 pb-20 pt-16 text-center md:px-8 lg:pt-24">
      <p class="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
        <span class="h-2 w-2 rounded-full bg-accent" />{{ t('hero.badge') }}
      </p>
      <h1 class="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight text-navy md:text-6xl">{{ t('hero.title') }}</h1>
      <p class="mx-auto mt-6 max-w-2xl text-lg text-ink-soft md:text-xl">{{ t('hero.lead') }}</p>
      <div class="mx-auto mt-10 max-w-4xl"><WaitlistForm /></div>
      <ul class="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-soft">
        <li v-for="p in points" :key="p" class="inline-flex items-center gap-2"><UiIcon name="check" class="text-action" />{{ t(`hero.points.${p}`) }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.radar-bg {
  background:
    radial-gradient(circle at 50% 40%, rgba(26, 130, 247, 0.1), transparent 60%),
    repeating-radial-gradient(circle at 50% 40%, transparent 0 79px, rgba(17, 34, 69, 0.06) 80px 81px),
    var(--sx-color-surface-page);
}
</style>
