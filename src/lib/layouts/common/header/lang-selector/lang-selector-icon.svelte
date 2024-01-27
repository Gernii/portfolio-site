<script lang="ts">
	import type { AvailableLanguageTag } from '$i18n/runtime';

	import FlagVn4x3 from '~icons/flag/vn-4x3';
	import FlagUs4x3 from '~icons/flag/us-4x3';
	interface $$Props {
		lang: AvailableLanguageTag;
	}

	export let lang: $$Props['lang'];

	let iconClasses = 'w-7 rounded-md';
</script>

{#if lang === 'vi'}
	<FlagVn4x3 class={iconClasses} />
{:else}
	<FlagUs4x3 class={iconClasses} />
{/if}
