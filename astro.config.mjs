// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://ajcj97.github.io/acastrolab/', 
	outDir: './dist',
	trailingSlash: 'always',
	output: 'static',
});


