<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	import { containerClassNameHandler } from './styles';
	import type { ContainerStylesProps } from './types';

	type $$Props = HTMLAttributes<HTMLDivElement> & ContainerStylesProps;

	let className: string | undefined | null = undefined;

	export let padding: $$Props['padding'] = undefined;
	export { className as class };

	$: containerClass = containerClassNameHandler({ padding });
</script>

<div {...$$restProps} class={twMerge(containerClass, className)}>
	<slot />
</div>
