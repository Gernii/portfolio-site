<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	import { containerContentClassNameHandler } from './styles';
	import type { ContainerContentStylesProps } from './types';

	type $$Props = HTMLAttributes<HTMLDivElement> & ContainerContentStylesProps;

	let className: string | undefined | null = undefined;

	export let padding: $$Props['padding'] = undefined;
	export let size: $$Props['size'] = undefined;
	export { className as class };

	$: containerContentClassName = containerContentClassNameHandler({ padding, size });
</script>

<div {...$$restProps} class={twMerge(containerContentClassName, className)}>
	<slot />
</div>
