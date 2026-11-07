<script setup lang="ts">
// Illustrative mock of the Copilot review card. All data is fictional and labelled as such.
const { t } = useI18n()
const reasons = [
  { pts: 38, key: 'reason1' },
  { pts: 32, key: 'reason2' },
  { pts: 24, key: 'reason3' },
] as const
const evidence = [
  { tag: 'HARD-TO-FILL', key: 'reason1' },
  { tag: 'VELOCITY', key: 'reason2' },
  { tag: 'LEADERSHIP', key: 'reason3' },
] as const
</script>

<template>
  <section id="review" class="border-y border-line bg-white py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 md:px-8">
      <SectionHeading :eyebrow="t('review.eyebrow')" :title="t('review.title')" />
      <div class="mt-12 rounded-card border border-line bg-page p-4 shadow-card md:p-6" role="img" :aria-label="t('review.title')">
        <div class="mb-4 flex flex-wrap items-center justify-between gap-2 font-mono text-xs uppercase text-ink-muted">
          <span>ScanAxe · {{ t('review.queue') }}</span>
          <span class="flex gap-2">
            <span class="rounded border border-line bg-white px-2 py-1">{{ t('review.fictional') }}</span>
            <span class="rounded bg-action-light px-2 py-1 text-action">{{ t('review.awaiting') }}</span>
          </span>
        </div>
        <div class="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div class="rounded-card border border-line bg-white p-5">
            <div class="flex items-center gap-3">
              <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-navy font-bold text-white">NG</span>
              <div>
                <p class="font-semibold text-navy">{{ t('review.company') }}</p>
                <p class="text-sm text-ink-muted">{{ t('review.companyMeta') }}</p>
              </div>
            </div>
            <div class="mt-5 rounded-xl border border-line bg-page p-4">
              <p class="font-mono text-xs uppercase text-ink-muted">{{ t('review.score') }}</p>
              <p class="mt-1 text-3xl font-bold text-navy">94 <span class="text-base font-normal text-ink-muted">/ 100</span>
                <span class="ms-2 rounded bg-action-light px-2 py-0.5 align-middle text-sm font-semibold text-action">{{ t('review.high') }}</span></p>
              <p class="mt-4 text-sm font-semibold text-navy">{{ t('review.reasons') }}</p>
              <ul class="mt-2 space-y-2 text-sm text-ink-soft">
                <li v-for="r in reasons" :key="r.key" class="flex gap-3"><span class="font-mono font-semibold text-action">+{{ r.pts }}</span>{{ t(`review.${r.key}`) }}</li>
              </ul>
            </div>
            <p class="mt-5 font-mono text-xs uppercase text-ink-muted">{{ t('review.evidence') }}</p>
            <ul class="mt-2 space-y-2">
              <li v-for="e in evidence" :key="e.tag" class="flex items-start gap-3 rounded-lg border border-line p-3 text-sm">
                <span class="shrink-0 rounded bg-accent-soft px-2 py-0.5 font-mono text-xs text-action">{{ e.tag }}</span>
                <span class="text-ink-soft">{{ t(`review.${e.key}`) }}</span>
              </li>
            </ul>
          </div>
          <div class="flex flex-col rounded-card border border-line bg-white p-5">
            <p class="font-mono text-xs uppercase text-ink-muted">{{ t('review.recipient') }}</p>
            <p class="mt-1 font-semibold text-navy">{{ t('review.recipientName') }}</p>
            <p class="mt-4 border-t border-line pt-4 text-sm"><span class="font-mono text-xs uppercase text-ink-muted">{{ t('review.subjectLabel') }}:</span> <span class="font-semibold text-navy">{{ t('review.subject') }}</span></p>
            <p class="mt-4 font-mono text-xs uppercase text-ink-muted">{{ t('review.draftLabel') }}</p>
            <p class="mt-2 flex-1 rounded-xl border border-line bg-page p-4 leading-relaxed text-ink">{{ t('review.draft') }}</p>
            <div class="mt-5 flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center gap-2 rounded-md bg-action px-5 py-2.5 font-semibold text-white"><UiIcon name="check" />{{ t('review.approve') }}</span>
              <span class="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 font-semibold text-navy"><UiIcon name="edit" />{{ t('review.edit') }}</span>
              <span class="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-ink-soft"><UiIcon name="x" />{{ t('review.skip') }}</span>
              <span class="ms-auto font-mono text-xs text-ink-muted">{{ t('review.note') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
