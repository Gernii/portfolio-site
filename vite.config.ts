import { paraglide } from '@inlang/paraglide-js-adapter-vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { imagetools } from 'vite-imagetools';

const supportedExtensions = ['png', 'jpg', 'jpeg'];


export default defineConfig(({ mode }) => {
	return {
		plugins: [
			imagetools({
				defaultDirectives: (url) => {
		
					const extension = url.pathname.substring(
						url.pathname.lastIndexOf('.') + 1
					);
		
					if (supportedExtensions.includes(extension)) {
						return new URLSearchParams({
							format: 'avif;webp;' + extension,
							as: 'picture'
						});
					}
					return new URLSearchParams();
				}
			}),
			sveltekit(),
			paraglide({
				project: './project.inlang',
				outdir: './src/lib/libs/i18n/messages'
			})
		],
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		},
		server: {
			port: 3000,
			host: '0.0.0.0'
		},
		esbuild: {
			drop: mode === 'production' ? ['console', 'debugger'] : []
		}
	};
});
