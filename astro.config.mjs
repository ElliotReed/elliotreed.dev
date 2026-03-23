// @ts-check

import path from "node:path";

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	vite: {
		resolve: {
			alias: {
				"~": path.resolve("./src"),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					loadPaths: [path.resolve("./src/styles")]
				},
			}
		},
		server: {
			// allowedHosts: ["backtalk.local"],
			// These settings don't matter, the npm dev script sets these values via flags
			// host: "backtalk.local",
			// port: 5001,
		},
	},
});
