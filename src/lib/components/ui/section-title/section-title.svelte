<script lang="ts">
	import { cx } from 'cva';

	interface $$Props {
		paddingBottom?: boolean;
	}

	export let paddingBottom: $$Props['paddingBottom'] = true;

	$: className = cx('text-2xl font-bold md:text-3xl lg:text-4xl', {
		'pb-8 sm:pb-12': paddingBottom
	});
</script>

<h2 class={className}>
	<slot />
</h2>
