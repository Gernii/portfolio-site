<script lang="ts">
	import { cx } from 'cva';
	import { twMerge } from 'tailwind-merge';

	interface $$Props {
		meta: ImgMeta[];
		alt: string;
		loading?: 'lazy' | 'eager';
		imageClass?: string;
		pictureClass?: string;
		author?: string;
	}

	export let meta: $$Props['meta'];

	export let alt: $$Props['alt'];
	export let loading: $$Props['loading'] = 'lazy';

	export let imageClass: $$Props['imageClass'] = undefined;
	export let pictureClass: $$Props['pictureClass'] = undefined;
	export let author: $$Props['author'] = undefined;

	// if there is only one, vite-imagetools won't wrap the object in an array
	if (!(meta instanceof Array)) meta = [meta];

	$: sources = meta[0].sources;

	$: fallback = meta[0].img;
</script>

<picture class={twMerge(cx('block h-full w-full', pictureClass))} data-author={author}>
	{#each Object.entries(sources) as [type, srcMeta]}
		<source type="image/{type}" srcset={srcMeta} />
	{/each}
	<img src={fallback.src} {alt} class={cx('h-full w-full object-contain', imageClass)} {loading} />
</picture>
