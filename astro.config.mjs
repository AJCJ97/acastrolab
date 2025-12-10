// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://ajcj97.github.io/',
    // 1. **CLAVE:** Mantén base con el nombre exacto de tu repo
    base: '/acanalytics', 
    outDir: './dist',
    trailingSlash: 'always',
    output: 'static',

    // 2. ELIMINA/COMENTA CUALQUIER BLOQUE 'build' anterior
    // build: {
    //    assetsPrefix: 'relative', // ¡Eliminar o comentar!
    // },

    // 3. Usa la configuración de Vite SIN un 'base' explícito aquí, 
    //    ya que puede entrar en conflicto con el 'base' de Astro.
    vite: {
        plugins: [tailwindcss()],
        // base: '/acanalytics/', // ¡Eliminar o comentar esta línea!
    },
    
    integrations: [react()],
});