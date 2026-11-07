<script setup lang="ts">
const { t, tm, rt } = useI18n()
const items = computed(() => (tm('audience.items') as unknown[]).map((item) => rt(item as Parameters<typeof rt>[0])))
</script>

<template>
  <section class="border-y border-line bg-white py-16">
    <div class="mx-auto max-w-5xl px-4 md:px-8">
      <SectionHeading :eyebrow="t('audience.eyebrow')" :title="t('audience.title')" :lead="t('audience.lead')" center />
      <ul class="mt-10 flex flex-wrap justify-center gap-3">
        <li v-for="item in items" :key="item" class="inline-flex items-center gap-2 rounded-full border border-line bg-page px-4 py-2 text-sm font-semibold text-navy">
          <span class="h-2 w-2 rounded-full bg-accent" />{{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>
