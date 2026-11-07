<script setup lang="ts">
const { t } = useI18n()
const signals = [
  { key: 'velocity', icon: 'pulse' },
  { key: 'function', icon: 'spark' },
  { key: 'hard', icon: 'hourglass' },
  { key: 'expansion', icon: 'globe' },
  { key: 'leadership', icon: 'star' },
  { key: 'specialism', icon: 'target' },
] as const
</script>

<template>
  <section id="signals" class="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-24">
    <SectionHeading :eyebrow="t('signals.eyebrow')" :title="t('signals.title')" :lead="t('signals.lead')" />
    <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <article v-for="(s, i) in signals" :key="s.key" class="flex flex-col rounded-card border border-line bg-white p-6 shadow-card">
        <div class="flex items-center justify-between">
          <span class="inline-flex rounded-xl bg-accent-soft p-3 text-action"><UiIcon :name="s.icon" /></span>
          <span class="rounded border border-line px-2 py-1 font-mono text-xs text-ink-muted">SIGNAL 0{{ i + 1 }}</span>
        </div>
        <h3 class="mt-5 text-lg font-semibold text-navy">{{ t(`signals.items.${s.key}.title`) }}</h3>
        <p class="mt-2 flex-1 text-ink-soft">{{ t(`signals.items.${s.key}.body`) }}</p>
        <p class="mt-4 border-t border-line pt-4 font-mono text-sm text-navy">
          <span class="text-ink-muted">{{ t('signals.example') }}:</span> {{ t(`signals.items.${s.key}.example`) }}
        </p>
      </article>
    </div>
  </section>
</template>
