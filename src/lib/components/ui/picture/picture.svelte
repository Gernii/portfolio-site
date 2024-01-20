<script lang="ts">
	import { cx } from 'cva';

	export let meta: ImgMeta[];
	// if there is only one, vite-imagetools won't wrap the object in an array
	if (!(meta instanceof Array)) meta = [meta];

	const sources = meta[0].sources;

	const fallback = meta[0].img;

	export let alt = '';
	export let loading: 'lazy' | 'eager' | null | undefined = 'lazy';

	export let imageClass = '';
	export let pictureClass = '';
</script>

<picture class={cx('block h-full', pictureClass)}>
	{#each Object.entries(sources) as [type, srcMeta]}
		<source type="image/{type}" srcset={srcMeta} />
	{/each}
	<img src={fallback.src} {alt} class={cx('h-full w-full object-contain', imageClass)} {loading} />
</picture>
