<script lang="ts">
	import { cx } from 'cva';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	interface $$Props extends HTMLAnchorAttributes {
		active?: boolean;
	}

	let className: $$Props['class'] = undefined;

	export let href: $$Props['href'] = undefined;
	export let active: NonNullable<$$Props['active']> = false;
	export { className as class };
</script>

<a
	class={twMerge(
		cx('btn btn-ghost flex-nowrap justify-between', {
			'text-primary': active
		}),
		className
	)}
	{href}
	{...$$restProps}
>
	<slot />
</a>
