<script lang="ts">
	interface $$Props {
		title: string;
	}

	export let title: $$Props['title'];
</script>

<tr class="w-full">
	<td class="w-full border-b-2 border-base-content/20 p-2 font-semibold">{title}</td>
	<td class="w-full border-b-2 border-base-content/20 p-2">
		<slot />
	</td>
</tr>
