/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Minimal extension - just what Tailwind needs
      colors: {
        'navy': '#0B1F3A',
        'seo-green': '#22C55E',
        'sky-blue': '#38BDF8',
        'off-white': '#F8FAFC',
        'dark-slate': '#1E293B',
        'soft-blue-grey': '#E2E8F0',
      },
    },
  },
  plugins: [],
}