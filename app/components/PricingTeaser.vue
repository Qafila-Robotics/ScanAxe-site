<script setup lang="ts">
const { t, tm, rt } = useI18n()
const points = computed(() => (tm('pricing.points') as unknown[]).map((item) => rt(item as Parameters<typeof rt>[0])))
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-24">
    <div class="grid items-center gap-10 rounded-card border border-line bg-white p-6 shadow-card md:p-10 lg:grid-cols-[1.4fr_1fr]">
      <div>
        <SectionHeading :eyebrow="t('pricing.eyebrow')" :title="t('pricing.title')" :lead="t('pricing.lead')" />
        <ul class="mt-6 grid gap-3 sm:grid-cols-2">
          <li v-for="p in points" :key="p" class="flex items-start gap-2 text-ink-soft"><UiIcon name="check" class="mt-0.5 shrink-0 text-action" />{{ p }}</li>
        </ul>
      </div>
      <div class="rounded-card border border-line bg-page p-6">
        <h3 class="text-xl font-semibold text-navy">{{ t('pricing.cardTitle') }}</h3>
        <p class="mt-2 text-ink-soft">{{ t('pricing.cardBody') }}</p>
        <a href="#waitlist" class="mt-6 block rounded-md bg-action px-5 py-3 text-center font-semibold text-white hover:bg-action-hover">{{ t('pricing.cardCta') }}</a>
      </div>
    </div>
  </section>
</template>
