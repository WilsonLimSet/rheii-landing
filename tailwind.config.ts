/**
 * Tailwind CSS Configuration
 *
 * Extends Tailwind with custom design system from Figma
 *
 * Custom Colors:
 * - primary-bg: #F6F6F6 (Light grey background)
 * - secondary-bg: #FFFFFF (White for cards)
 * - text-primary: #121212 (Near-black text)
 * - text-secondary: #666666 (Grey text)
 * - tag-bg: #F0F0F0 (Tag background)
 * - border: #E0E0E0 (Borders and dividers)
 *
 * Custom Fonts:
 * - heading: Roboto Serif for headings
 * - body: DM Sans for body text
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Legacy colors
        'primary-bg': '#F6F6F6',
        'secondary-bg': '#FFFFFF',
        'text-primary': '#121212',
        'text-secondary': '#666666',
        'tag-bg': '#F0F0F0',
        'border': '#E0E0E0',

        // Rheii Design System - Primary
        'rheti-primary': {
          300: '#B24E58',
          500: '#73383E',
          600: '#49111C',
        },
        // Rheii Design System - Secondary
        'rheti-secondary': {
          50: '#F2EEEA',
          100: '#F0E9E1',
          500: '#DFB086',
          700: '#AD7441',
        },
        // Rheii Design System - Tertiary
        'rheti-tertiary': {
          500: '#6D867C',
        },
        // Rheii Design System - Neutral
        'rheti-neutral': {
          50: '#F6F6F6',
          400: '#322D29',
          500: '#242424',
          600: '#111116',
        },
      },
      fontFamily: {
        heading: ['var(--font-cormorant-garamond)', 'serif'],
        body: ['var(--font-cormorant-garamond)', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'rheti-sm': '0 4px 24px 4px rgba(38, 37, 89, 0.05)',
        'rheti-md': '0 4px 36px 1px rgba(97, 95, 185, 0.10)',
      },
    },
  },
  plugins: [],
}
export default config
