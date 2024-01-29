<script lang="ts">
	import type { SkillTypes } from './types';

	import LogosHtml5 from '~icons/logos/html-5';
	import LogosJavascript from '~icons/logos/javascript';
	import LogosAws from '~icons/logos/aws';
	import LogosCss3 from '~icons/logos/css-3';
	import LogosTypescriptIcon from '~icons/logos/typescript-icon';
	import LogosQwikIcon from '~icons/logos/qwik-icon';
	import LogosReact from '~icons/logos/react';
	import LogosSvelteIcon from '~icons/logos/svelte-icon';

	interface $$Props {
		skill: SkillTypes;
		class?: string;
	}

	let className: $$Props['class'] = undefined;
	export let skill: $$Props['skill'];
	export { className as class };
</script>

{#if skill === 'aws'}
	<LogosAws class={className} />
{:else if skill === 'css'}
	<LogosCss3 class={className} />
{:else if skill === 'html'}
	<LogosHtml5 class={className} />
{:else if skill === 'javascript'}
	<LogosJavascript class={className} />
{:else if skill === 'qwik'}
	<LogosQwikIcon class={className} />
{:else if skill === 'react'}
	<LogosReact class={className} />
{:else if skill === 'svelte' || skill === 'sveltekit'}
	<LogosSvelteIcon class={className} />
{:else if skill === 'typescript'}
	<LogosTypescriptIcon class={className} />
{/if}
