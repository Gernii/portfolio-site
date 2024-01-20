<script lang="ts">
	import { cx } from 'cva';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	import { IconEye, IconEyeSlash } from '$lib/components/icons';

	type $$Props = HTMLInputAttributes;

	let className: $$Props['class'] = undefined;

	export let disabled: $$Props['disabled'] = undefined;
	export let value: $$Props['value'] = undefined;
	export { className as class };

	let isShow = false;

	const onShowToggle = () => {
		isShow = !isShow;
	};
</script>

<div class="relative">
	<input
		{...{ type: isShow ? 'text' : 'password' }}
		{...$$restProps}
		class={twMerge('input input-bordered w-full pr-14', cx(className))}
		{disabled}
		bind:value
	/>
	<div class="absolute right-0 top-1/2 -translate-y-1/2">
		<button class="btn btn-square btn-ghost swap" type="button" on:click={onShowToggle} {disabled}>
			<IconEye
				class={cx('size-6', {
					'swap-on': isShow,
					'swap-off': !isShow
				})}
			/>
			<IconEyeSlash
				class={cx('size-6', {
					'swap-on': !isShow,
					'swap-off': isShow
				})}
			/>
		</button>
	</div>
</div>
