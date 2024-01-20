<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	interface $$Props extends HTMLAnchorAttributes {}

	let className: $$Props['class'] = undefined;

	export let href: $$Props['href'] = undefined;
	export { className as class };
</script>

<a class={twMerge('btn btn-ghost flex-nowrap justify-between', className)} {href} {...$$restProps}>
	<slot />
</a>
