<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; lead?: string; center?: boolean }>()
</script>

<template>
  <div :class="['max-w-2xl', center ? 'mx-auto text-center' : 'text-start']">
    <p class="font-mono text-xs font-semibold uppercase tracking-widest text-action">{{ eyebrow }}</p>
    <h2 class="mt-3 text-3xl font-bold leading-tight text-navy md:text-4xl">{{ title }}</h2>
    <p v-if="lead" class="mt-4 text-lg text-ink-soft">{{ lead }}</p>
  </div>
</template>
