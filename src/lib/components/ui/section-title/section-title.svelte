<script lang="ts">
	import { cx } from 'cva';

	interface $$Props {
		paddingBottom?: boolean;
	}

	export let paddingBottom: $$Props['paddingBottom'] = true;

	$: className = cx('text-2xl font-bold md:text-3xl lg:text-4xl', {
		'pb-4 sm:pb-8': paddingBottom
	});
</script>

<h1 class={className}>
	<slot />
</h1>
