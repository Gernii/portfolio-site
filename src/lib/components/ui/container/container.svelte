<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	import { containerClassNameHandler } from './styles';
	import type { ContainerStylesProps } from './types';

	interface $$Props extends HTMLAttributes<HTMLDivElement>, ContainerStylesProps {
		root?: 'div' | 'section';
	}

	let className: string | undefined | null = undefined;

	export let root: $$Props['root'] = 'div';
	export let padding: $$Props['padding'] = undefined;
	export { className as class };

	$: containerClass = containerClassNameHandler({ padding });
</script>

<svelte:element this={root} {...$$restProps} class={twMerge(containerClass, className)}>
	<slot />
</svelte:element>
