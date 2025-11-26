/** @type {import('tailwindcss').Config} */
export default {
  // **CLAVE:** Esto le dice a Tailwind qué archivos escanear para construir el CSS.
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}