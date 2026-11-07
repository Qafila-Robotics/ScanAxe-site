<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <SiteHeader />
    <main class="hero">
      <h1>{{ t('home.title') }}</h1>
      <p class="lead">{{ t('home.lead') }}</p>
      <p class="soon">{{ t('home.soon') }}</p>
    </main>
  </div>
</template>

<style scoped>
.hero {
  max-inline-size: 760px;
  margin-inline: auto;
  padding-block: var(--sx-space-16);
  padding-inline: var(--sx-space-6);
  text-align: start;
}

h1 {
  font-size: var(--sx-font-size-3xl);
  line-height: var(--sx-font-line-height-tight);
  color: var(--sx-color-brand-navy);
}

.lead {
  font-size: var(--sx-font-size-lg);
  color: var(--sx-color-text-secondary);
}

.soon {
  color: var(--sx-color-brand-action);
  font-weight: var(--sx-font-weight-semibold);
}
</style>
