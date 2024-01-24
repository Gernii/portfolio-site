<script lang="ts">
	interface $$Props {
		root?: 'address' | 'ul';
		title: string;
	}

	export let root: $$Props['root'] = 'ul';
	export let title: $$Props['title'];
</script>

<div class="space-y-4">
	<p class="text-lg font-semibold">{title}</p>
	<svelte:element this={root} class="space-y-2 not-italic">
		<slot />
	</svelte:element>
</div>
