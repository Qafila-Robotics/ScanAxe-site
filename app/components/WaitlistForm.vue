<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const COUNTRIES = ['GB', 'IE', 'DE', 'NL', 'FR', 'US', 'AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'EG', 'JO', 'IN', 'AU', 'other'] as const

type State = 'idle' | 'submitting' | 'success' | 'invalid' | 'rateLimited' | 'error'
const state = ref<State>('idle')
const form = reactive({ email: '', company: '', country: '' })
const enabled = computed(() => Boolean(config.public.waitlistUrl))

async function submit(): Promise<void> {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    state.value = 'invalid'
    return
  }
  state.value = 'submitting'
  try {
    await $fetch(config.public.waitlistUrl, {
      method: 'POST',
      body: { ...form, country: form.country === 'other' ? null : form.country || null, locale: locale.value, consent_version: '2026-11' },
    })
    state.value = 'success'
  } catch (error: unknown) {
    const status = (error as { statusCode?: number }).statusCode
    state.value = status === 429 ? 'rateLimited' : status === 422 ? 'invalid' : 'error'
  }
}
</script>

<template>
  <div class="w-full">
    <p v-if="state === 'success'" class="rounded-card bg-action-light p-4 text-center font-semibold text-navy" role="status">
      {{ t('form.success') }}
    </p>
    <p v-else-if="!enabled" class="rounded-card bg-white p-4 text-center text-ink-soft shadow-card">
      <i18n-t v-if="config.public.contactEmail" keypath="form.fallback" tag="span">
        <template #email><a :href="`mailto:${config.public.contactEmail}`">{{ config.public.contactEmail }}</a></template>
      </i18n-t>
      <span v-else>{{ t('form.soon') }}</span>
    </p>
    <form v-else class="grid gap-3 rounded-card bg-white p-3 shadow-card md:grid-cols-[1.3fr_1fr_0.9fr_auto]" novalidate @submit.prevent="submit">
      <label class="sr-only" for="wl-email">{{ t('form.email') }}</label>
      <input id="wl-email" v-model.trim="form.email" type="email" required autocomplete="email" :placeholder="t('form.emailPlaceholder')" class="rounded-md border border-line px-4 py-3 text-ink">
      <label class="sr-only" for="wl-company">{{ t('form.company') }}</label>
      <input id="wl-company" v-model.trim="form.company" type="text" maxlength="160" autocomplete="organization" :placeholder="t('form.company')" class="rounded-md border border-line px-4 py-3 text-ink">
      <label class="sr-only" for="wl-country">{{ t('form.country') }}</label>
      <select id="wl-country" v-model="form.country" class="rounded-md border border-line bg-white px-3 py-3 text-ink">
        <option value="">{{ t('form.countryPlaceholder') }}</option>
        <option v-for="code in COUNTRIES" :key="code" :value="code">{{ t(`form.countries.${code}`) }}</option>
      </select>
      <button type="submit" :disabled="state === 'submitting'" class="rounded-md bg-action px-6 py-3 font-semibold text-white hover:bg-action-hover disabled:opacity-60">
        {{ state === 'submitting' ? t('form.submitting') : t('form.submit') }}
      </button>
      <p v-if="['invalid', 'rateLimited', 'error'].includes(state)" class="text-sm text-[color:var(--sx-color-semantic-danger)] md:col-span-4" role="alert">
        {{ t(`form.${state}`) }}
      </p>
    </form>
    <p class="mt-3 text-center text-xs text-ink-muted">{{ t('form.consent') }}</p>
  </div>
</template>
