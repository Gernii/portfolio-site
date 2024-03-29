import { paraglide } from '@inlang/paraglide-js-adapter-vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { imagetools } from 'vite-imagetools';
import Icons from 'unplugin-icons/vite';

const supportedExtensions = ['png', 'jpg', 'jpeg'];
const defaultImageToolsWidth = '320;640;1280';

export default defineConfig(({ mode }) => {
	return {
		plugins: [
			sveltekit(),
			imagetools({
				defaultDirectives: (url) => {
					const extension = url.pathname.substring(url.pathname.lastIndexOf('.') + 1);

					if (supportedExtensions.includes(extension)) {
						const width = url.searchParams.get('w') ?? undefined;

						return new URLSearchParams({
							format: 'avif;webp;' + extension,
							w: width ?? defaultImageToolsWidth,
							as: 'picture'
						});
					}
					return new URLSearchParams();
				}
			}),
			paraglide({
				project: './project.inlang',
				outdir: './src/lib/libs/i18n/messages'
			}),
			Icons({
				compiler: 'svelte',
				defaultClass: 'size-6'
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
