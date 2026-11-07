<script setup lang="ts">
const { t } = useI18n()
const items = ['auto', 'dedupe', 'data', 'linkedin', 'compliance', 'lists', 'language'] as const
</script>

<template>
  <section id="faq" class="border-t border-line bg-white py-20 lg:py-24">
    <div class="mx-auto max-w-3xl px-4 md:px-8">
      <SectionHeading :eyebrow="t('faq.eyebrow')" :title="t('faq.title')" center />
      <div class="mt-10 space-y-3">
        <details v-for="(item, i) in items" :key="item" class="group rounded-xl border border-line bg-page p-5" :open="i === 0">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
            {{ t(`faq.items.${item}.q`) }}
            <UiIcon name="chevron" class="shrink-0 transition group-open:rotate-180" />
          </summary>
          <p class="mt-3 text-ink-soft">{{ t(`faq.items.${item}.a`) }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
