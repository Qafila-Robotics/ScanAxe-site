<script setup lang="ts">
const { t } = useI18n()
const steps = ['define', 'detect', 'score', 'approve'] as const
</script>

<template>
  <section id="how" class="border-y border-line bg-white py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 md:px-8">
      <SectionHeading :eyebrow="t('how.eyebrow')" :title="t('how.title')" />
      <ol class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(step, i) in steps" :key="step"
          :class="['rounded-card border p-6', step === 'approve' ? 'border-navy bg-navy text-white' : 'border-line bg-page']"
        >
          <div class="flex items-center justify-between">
            <span :class="['inline-flex h-9 w-9 items-center justify-center rounded-lg font-mono text-sm font-bold', step === 'approve' ? 'bg-accent text-white' : 'bg-navy text-white']">0{{ i + 1 }}</span>
            <span v-if="step === 'approve'" class="rounded-full border border-white/30 px-3 py-1 font-mono text-xs uppercase">{{ t('how.steps.approve.tag') }}</span>
          </div>
          <h3 :class="['mt-5 text-lg font-semibold', step === 'approve' ? 'text-white' : 'text-navy']">{{ t(`how.steps.${step}.title`) }}</h3>
          <p :class="['mt-2', step === 'approve' ? 'text-white/80' : 'text-ink-soft']">{{ t(`how.steps.${step}.body`) }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
