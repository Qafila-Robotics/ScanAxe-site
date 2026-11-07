<script setup lang="ts">
const { t } = useI18n()
const items = [
  { key: 'timing', icon: 'clock' },
  { key: 'manual', icon: 'tabs' },
  { key: 'risk', icon: 'alert' },
] as const
</script>

<template>
  <section id="problem" class="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-24">
    <SectionHeading :eyebrow="t('problem.eyebrow')" :title="t('problem.title')" :lead="t('problem.lead')" />
    <div class="mt-12 grid gap-6 md:grid-cols-3">
      <article v-for="(item, i) in items" :key="item.key" class="rounded-card border border-line bg-white p-6 shadow-card">
        <span class="inline-flex rounded-xl border border-line p-3 text-navy"><UiIcon :name="item.icon" /></span>
        <p class="mt-5 font-mono text-xs uppercase tracking-wider text-ink-muted">0{{ i + 1 }} / {{ t(`problem.items.${item.key}.label`) }}</p>
        <h3 class="mt-2 text-xl font-semibold text-navy">{{ t(`problem.items.${item.key}.title`) }}</h3>
        <p class="mt-3 text-ink-soft">{{ t(`problem.items.${item.key}.body`) }}</p>
      </article>
    </div>
  </section>
</template>
