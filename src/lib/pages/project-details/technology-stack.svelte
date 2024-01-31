<script lang="ts">
	import * as m from '$i18n/messages';

	import { Skills, getSkillName, type SkillTypes } from '$lib/features/skill-icons';

	interface $$Props {
		techs?: SkillTypes[];
	}

	export let techs: NonNullable<$$Props['techs']> = [];
</script>

<div class="flex flex-row flex-wrap items-center gap-x-2">
	<div class="font-semibold">{m.technologyStack()}:</div>
	{#each techs as tech}
		<div
			class="tooltip rounded-full border-4 border-base-200 bg-base-100 p-1.5 transition-colors hover:border-primary"
			data-tip={getSkillName(tech)}
		>
			<Skills skill={tech} class="size-8" />
		</div>
	{/each}
</div>
