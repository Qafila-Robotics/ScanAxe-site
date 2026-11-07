<script setup lang="ts">
// F-012: a plain, factual product description for people, search engines and AI assistants.
usePageSeo('llm.meta')

const { t, te, tm, rt } = useI18n()
const sections = ['what', 'who', 'how', 'signals', 'modes', 'safety', 'languages', 'status'] as const
const items = (key: string) => (tm(`llm.sections.${key}.items`) as unknown[]).map(item => rt(item as Parameters<typeof rt>[0]))
</script>

<template>
  <div>
    <SiteHeader />
    <main class="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <article class="text-start">
        <h1 class="text-3xl font-bold leading-tight text-navy md:text-4xl">{{ t('llm.title') }}</h1>
        <p class="mt-4 text-lg text-ink-soft">{{ t('llm.lead') }}</p>
        <section v-for="key in sections" :key="key" class="mt-10">
          <h2 class="text-xl font-semibold text-navy">{{ t(`llm.sections.${key}.title`) }}</h2>
          <p v-if="te(`llm.sections.${key}.body`)" class="mt-3 text-ink-soft">{{ t(`llm.sections.${key}.body`) }}</p>
          <ul v-else class="mt-3 list-disc space-y-2 ps-6 text-ink-soft">
            <li v-for="item in items(key)" :key="item">{{ item }}</li>
          </ul>
        </section>
        <p class="mt-12">
          <NuxtLinkLocale to="/" class="font-semibold text-action hover:text-action-hover">{{ t('llm.back') }}</NuxtLinkLocale>
        </p>
      </article>
    </main>
    <SiteFooter />
  </div>
</template>
