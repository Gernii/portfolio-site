<script lang="ts">
	import { cx } from 'cva';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	interface $$Props {
		active?: boolean;
	}

	const triggerEvent = () => {
		dispatch('click');
	};

	export let active: NonNullable<$$Props['active']> = false;
</script>

<li>
	<button
		class={cx('btn btn-ghost btn-block flex-nowrap justify-start', {
			'btn-active pointer-events-none cursor-default': active
		})}
		on:click={triggerEvent}
	>
		<slot />
	</button>
</li>
