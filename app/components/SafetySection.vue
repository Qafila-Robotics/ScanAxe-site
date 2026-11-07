<script setup lang="ts">
const { t } = useI18n()
const items = [
  { key: 'approval', icon: 'shield' },
  { key: 'dedupe', icon: 'swap' },
  { key: 'rules', icon: 'globe' },
] as const
</script>

<template>
  <section id="safety" class="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-24">
    <SectionHeading :eyebrow="t('safety.eyebrow')" :title="t('safety.title')" :lead="t('safety.lead')" />
    <div class="mt-12 grid gap-6 md:grid-cols-3">
      <article v-for="item in items" :key="item.key" class="flex flex-col rounded-card border border-line bg-white p-6 shadow-card">
        <span class="inline-flex w-fit rounded-xl bg-navy p-3 text-white"><UiIcon :name="item.icon" /></span>
        <h3 class="mt-5 text-xl font-semibold text-navy">{{ t(`safety.items.${item.key}.title`) }}</h3>
        <p class="mt-3 flex-1 text-ink-soft">{{ t(`safety.items.${item.key}.body`) }}</p>
        <p class="mt-5 rounded-lg border border-line bg-page px-3 py-2 font-mono text-xs uppercase text-navy">{{ t(`safety.items.${item.key}.tag`) }}</p>
      </article>
    </div>
  </section>
</template>
