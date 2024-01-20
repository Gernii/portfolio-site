<script lang="ts">
	interface $$Props {
		label: string;
		required?: boolean;
		error?: string;
	}

	export let label: $$Props['label'];
	export let required: NonNullable<$$Props['required']> = false;
	export let error: $$Props['error'] = undefined;
</script>

<label class="form-control w-full">
	<div class="label">
		<span class="label-text">
			{label}
			{#if required}
				<span class="text-error">*</span>
			{/if}
		</span>
	</div>
	<slot />
	{#if error}
		<div class="label">
			<span class="label-text-alt text-error">{error}</span>
		</div>
	{/if}
</label>
