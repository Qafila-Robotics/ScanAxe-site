import type { Config } from 'tailwindcss'

// Colours, fonts and radii come from the design tokens (design/design-tokens.json → assets/css/tokens.css).
// Use logical utilities only (ms-/me-/ps-/pe-/start-/end-/text-start); scripts/check-logical-css.mjs enforces it.
export default {
  content: ['./app/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: 'var(--sx-color-brand-navy)', dark: '#0B1730', light: '#1B3363' },
        action: { DEFAULT: 'var(--sx-color-brand-action)', hover: 'var(--sx-color-brand-action-hover)', light: '#EAF2FD' },
        accent: { DEFAULT: 'var(--sx-color-brand-blue)', soft: '#E3F0FF' },
        page: 'var(--sx-color-surface-page)',
        line: 'var(--sx-color-surface-border)',
        ink: { DEFAULT: 'var(--sx-color-text-primary)', soft: 'var(--sx-color-text-secondary)', muted: 'var(--sx-color-text-muted)' },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', '"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: { card: 'var(--sx-radius-lg)' },
      boxShadow: { card: 'var(--sx-shadow-card)' },
    },
  },
} satisfies Config
