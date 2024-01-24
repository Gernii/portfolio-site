<script lang="ts">
	import { cx } from 'cva';

	interface $$Props {
		active?: boolean;
		href: string;
	}

	export let active: NonNullable<$$Props['active']> = false;
	export let href: $$Props['href'];

	$: aClassName = cx('link-hover link', {
		'font-semibold': active
	});
</script>

<li>
	<a {href} class={aClassName}>
		{#if active}/{/if}{' '}<slot />
	</a>
</li>
